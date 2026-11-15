# =========================================================
#  Atualiza js/eventos.js com os ultimos anuncios do forum
#  oficial do Pirate Storm (feed RSS publico).
#  Uso:  powershell -ExecutionPolicy Bypass -File scripts/atualizar-eventos.ps1
#  Roda no Windows PowerShell 5.1 e no PowerShell 7 (GitHub Actions).
#  (Arquivo mantido somente com caracteres ASCII de proposito.)
# =========================================================
$ErrorActionPreference = "Stop"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$raiz  = Split-Path -Parent $PSScriptRoot
$saida = Join-Path $raiz "js/eventos.js"
$feeds = @(
  "https://board-en.piratestorm.com/forums/announcements.118/index.rss"
)
$reticencias = [string][char]0x2026

function Texto([string]$html) {
  $t = $html -replace '<br\s*/?>', ' ' -replace '<[^>]+>', ' '
  $t = [System.Net.WebUtility]::HtmlDecode($t)
  return ($t -replace '\s+', ' ').Trim()
}
function Cortar([string]$t, [int]$max = 260) {
  if ($t.Length -gt $max) { return $t.Substring(0, $max).TrimEnd() + $reticencias }
  return $t
}

$itens = @()
$datados = @()
foreach ($url in $feeds) {
  $resp  = Invoke-WebRequest -Uri $url -UseBasicParsing -UserAgent "Mozilla/5.0 (fan-guide-updater)" -TimeoutSec 60
  $bytes = $resp.RawContentStream.ToArray()
  [xml]$xml = [System.Text.Encoding]::UTF8.GetString($bytes)
  $ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
  $ns.AddNamespace("content", "http://purl.org/rss/1.0/modules/content/")

  foreach ($it in $xml.SelectNodes("//item")) {
    $corpo = $it.SelectSingleNode("content:encoded", $ns)
    $texto = Texto ($(if ($corpo) { $corpo.InnerText } else { [string]$it.description }))
    $titulo = [string]$it.title
    $link   = [string]$it.link

    $itens += [pscustomobject]@{
      titulo = $titulo
      link   = $link
      data   = ([datetime]::Parse([string]$it.pubDate)).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ssZ")
      resumo = Cortar $texto
    }

    # Extrai datas no formato do forum: "Event Start: 2026-11-16 (Monday) 12:00:00"
    $mIni = [regex]::Match($texto, 'Event Start:\s*(\d{4}-\d{2}-\d{2})(?:\D{0,30}?(\d{2}:\d{2}:\d{2}))?')
    if ($mIni.Success) {
      $ini = $mIni.Groups[1].Value + "T" + $(if ($mIni.Groups[2].Success) { $mIni.Groups[2].Value } else { "00:00:00" })
      $fim = $null
      $mFim = [regex]::Match($texto, 'Event End:\s*(\d{4}-\d{2}-\d{2})(?:\D{0,30}?(\d{2}:\d{2}:\d{2}))?')
      if ($mFim.Success) {
        $fim = $mFim.Groups[1].Value + "T" + $(if ($mFim.Groups[2].Success) { $mFim.Groups[2].Value } else { "23:59:59" })
      }
      $datados += [pscustomobject]@{
        nome   = $titulo
        inicio = $ini
        fim    = $fim
        desc   = "Datas no horario do servidor. Veja o anuncio oficial para regras e recompensas."
        link   = $link
      }
    }
  }
}

$itens   = @($itens | Sort-Object data -Descending | Select-Object -First 15)
$datados = @($datados | Sort-Object inicio -Descending | Select-Object -First 10)
$jsonFeed = ConvertTo-Json -InputObject $itens -Depth 3
$jsonAuto = ConvertTo-Json -InputObject $datados -Depth 3
$agora = (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ssZ")

$js = @"
/* Arquivo gerado automaticamente por scripts/atualizar-eventos.ps1 - nao edite a mao. */
window.EVENTOS_ATUALIZADO = "$agora";
window.EVENTOS_FEED = $jsonFeed;
window.EVENTOS_AUTO = $jsonAuto;
"@

[System.IO.File]::WriteAllText($saida, $js, (New-Object System.Text.UTF8Encoding($false)))
Write-Host "OK: $($itens.Count) anuncios, $($datados.Count) eventos com data -> $saida"
