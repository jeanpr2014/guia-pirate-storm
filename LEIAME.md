# Guia Pirate Storm BR

Site estático (HTML + CSS + JavaScript) com navios, armamento, kits, eventos, guia do novato, mapa e níveis do Pirate Storm. Não precisa de servidor nem de banco de dados.

## Estrutura

| Arquivo | O que é |
|---|---|
| `index.html` | Página principal com todas as abas |
| `privacidade.html` | Política de privacidade (exigida pelo AdSense) |
| `css/style.css` | Visual do site |
| `js/config.js` | **Seu ID do AdSense e blocos de anúncio** |
| `js/dados.js` | Navios, canhões, munições, deques, kits, zonas, níveis e eventos com data |
| `js/dados-extra.js` | Battlegrounds (7 casas e seus itens), mapas bônus (ondas de NPCs) e linha do tempo anual de eventos |
| `js/eventos.js` | Gerado automaticamente com os anúncios do fórum oficial |
| `js/app.js` | Lógica das abas, busca, comparador, contagem regressiva e anúncios |
| `scripts/atualizar-eventos.ps1` | Baixa o RSS do fórum e gera `js/eventos.js` |
| `.github/workflows/atualizar-eventos.yml` | Roda o script acima a cada 6 horas no GitHub |
| `ads.txt` | Arquivo de verificação do AdSense |

## Ver no computador

Dê dois cliques em `index.html`.

## Publicar grátis (GitHub Pages) com eventos automáticos

1. Crie uma conta em github.com e um repositório público (ex.: `guia-pirate-storm`).
2. Envie todos os arquivos desta pasta, incluindo a pasta `.github`.
3. No repositório, abra **Settings → Pages → Branch: main / root → Save**.
4. O site fica em `https://SEU-USUARIO.github.io/guia-pirate-storm/`.
5. Abra **Actions**, ative os workflows e rode **"Atualizar eventos"** uma vez. Depois ele roda sozinho a cada 6 horas.

> Para o AdSense é melhor usar um domínio próprio (ex.: `guiapiratestorm.com.br`). Dá para ligar o domínio no GitHub Pages em Settings → Pages → Custom domain.

## Ativar o AdSense

1. Com o site no ar, cadastre-se em https://adsense.google.com e adicione seu domínio.
2. Copie seu ID de editor (`ca-pub-1234567890123456`).
3. Em `js/config.js`, troque `ca-pub-XXXXXXXXXXXXXXXX` pelo seu ID.
4. No painel do AdSense, crie 4 blocos de anúncio de display (topo, lateral, conteúdo, rodapé) e cole cada `data-ad-slot` em `js/config.js`.
5. Em `ads.txt`, troque `pub-XXXXXXXXXXXXXXXX` pelo seu ID (sem o `ca-`).
6. Em `privacidade.html`, coloque seu e-mail de contato.
7. Aguarde a aprovação do Google, que leva de alguns dias a algumas semanas.

Enquanto o ID não for configurado, o site mostra caixas tracejadas onde os anúncios vão aparecer.

## Atualizar eventos manualmente

```powershell
powershell -ExecutionPolicy Bypass -File scripts/atualizar-eventos.ps1
```

Eventos com "Event Start / Event End" no anúncio ganham contagem regressiva automática. Para anúncios sem esse formato (ex.: "begins December 14th"), adicione o evento à mão em `EVENTOS_DATADOS`, no fim de `js/dados.js`.

## Editar dados dos navios

Tudo está em `js/dados.js`. Campos `null` aparecem como "—" (dado não confirmado). Quando descobrir um valor no jogo, é só preencher.

## Imagens dos navios

Coloque uma imagem por navio em `img/navios/` com o nome do `id` do navio (ex.: `img/navios/frostbrand.jpg`). Ela aparece no fundo do card e da ficha, com as informações por cima. A lista com o nome de cada arquivo está em `img/navios/LEIAME.md`. Navio sem imagem continua com o fundo normal.

## Idiomas (PT-BR, EN, ES)

- O visitante troca o idioma pelos botões **PT / EN / ES** no topo. A escolha fica salva e vai para a URL (`?lang=en`, `?lang=es`), então cada idioma tem um link próprio para compartilhar ou divulgar.
- Sem escolha prévia, o site usa o idioma do navegador (português é o padrão).
- `js/i18n.js`: sistema de tradução (não precisa mexer).
- `js/lang/pt.js`, `en.js` e `es.js`: os textos de cada idioma.
  - `ui`: textos gerados pelo app (botões, tabelas, linha do tempo).
  - `html`: textos fixos da página (as chaves batem com os atributos `data-i18n` do `index.html`).
  - `data`: tradução dos dados (navios, eventos, battlegrounds…). Só os textos são traduzidos; os números vêm de `dados.js` e `dados-extra.js`.
- **Ao adicionar um item novo** em `dados.js` / `dados-extra.js`, ele aparece em português nos 3 idiomas até você incluir a tradução no `data` de `en.js` e `es.js`, na mesma posição da lista. Navios usam o `id` como chave.
- A política de privacidade (`privacidade.html`) já tem as 3 versões.

## Fontes

- Wiki da comunidade: pirate-storm.fandom.com
- Fórum oficial: board-en.piratestorm.com (FAQs, Pirate Storm Bible, anúncios)
