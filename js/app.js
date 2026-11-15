(function(){
"use strict";
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const T = window.t || (k => k);                 // tradução (js/i18n.js)
const LOC = window.LOCALE || "pt-BR";
const fmt = n => (n === null || n === undefined) ? "—" : Number(n).toLocaleString(LOC);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const NUM = window.numTxt || (s => s);          // ajusta separador de milhar (EN usa 1,000)
const tipoTxt = tp => { const k = "tipo." + tp, v = T(k); return v === k ? tp : v; };
const N = window.NAVIOS, CAT = window.CATEGORIAS;

/* ================= ABAS ================= */
const ABAS = $$(".aba").map(s => s.id);
function mostrarAba(){
  let id = location.hash.replace("#","") || "inicio";
  let navio = null;
  if (id.startsWith("navio-")) { navio = id.slice(6); id = "navios"; }
  if (!ABAS.includes(id)) id = "inicio";
  $$(".aba").forEach(s => s.hidden = s.id !== id);
  $$(".abas a").forEach(a => a.classList.toggle("ativa", a.dataset.aba === id));
  $("#abas").classList.remove("aberto");
  if (navio) abrirNavio(navio); else { $("#modal").hidden = true; window.scrollTo({top:0}); }
  document.title = id === "inicio" ? T("site.titulo") : T("tab." + id) + " — " + T("site.nome");
  carregarAnuncios();
}
window.addEventListener("hashchange", mostrarAba);
$("#menu-btn").onclick = () => $("#abas").classList.toggle("aberto");

/* ================= NAVIOS ================= */
function estrelas(n){ return "★".repeat(n) + "☆".repeat(4-n); }
/* Imagem de fundo do navio: img/navios/<id>.jpg (ou o campo "img" do navio em dados.js).
   Se o arquivo não existir, o card continua com o fundo normal. */
const imgNavio = n => n.img || `img/navios/${n.id}.jpg`;
const fundoNavio = n => `data-img="${esc(imgNavio(n))}"`;
const IMG_OK = {};          // url -> true (existe) / false (não existe) / Promise (testando)
function aplicarFundos(root){
  (root || document).querySelectorAll("[data-img]").forEach(el => {
    // endereço completo: dentro de variável CSS, caminho relativo seria lido a partir de css/
    const url = new URL(el.dataset.img, location.href).href;
    const aplica = () => { if (IMG_OK[url] === true) el.style.setProperty("--img", `url("${url}")`); };
    if (IMG_OK[url] === undefined) {
      IMG_OK[url] = new Promise(res => {
        const im = new Image();
        im.onload = () => { IMG_OK[url] = true; res(); };
        im.onerror = () => { IMG_OK[url] = false; res(); };
        im.src = url;
      });
    }
    if (IMG_OK[url] instanceof Promise) IMG_OK[url].then(aplica); else aplica();
  });
}
function cardNavio(n){
  const c = CAT[n.cat];
  return `<div class="card click card-navio" data-navio="${n.id}" ${fundoNavio(n)}>
    <span class="estrelas" title="${T("poder")}">${estrelas(n.tier)}</span>
    <span class="badge" style="background:${c.cor}">${c.nome}</span>
    <h3>${esc(n.nome)}</h3>
    <div class="preco">💰 ${esc(n.preco)}</div>
    <div class="mini">
      <div><b>${fmt(n.hp)}${n.maxHp ? `<small class="max">/${fmt(n.maxHp)}</small>` : ""}</b><span>HP${n.maxHp ? ` (${T("max")})` : ""}</span></div>
      <div><b>${fmt(n.can)}${n.maxCan ? `<small class="max">/${n.maxCan}</small>` : ""}</b><span>${T("canhoes")}${n.maxCan ? ` (${T("max")})` : ""}</span></div>
      <div><b>${fmt(n.arp)}${n.maxArp ? `<small class="max">/${n.maxArp}</small>` : ""}</b><span>${T("arpoes")}${n.maxArp ? ` (${T("max")})` : ""}</span></div>
    </div>
    <p>${esc(n.obter)}</p>
  </div>`;
}
function ligarCards(root){
  root.querySelectorAll("[data-navio]").forEach(el => el.onclick = () => { location.hash = "navio-" + el.dataset.navio; });
  aplicarFundos(root);
}
let filtroAtual = "todos";
function renderFiltros(){
  const f = $("#filtros-navios");
  f.innerHTML = `<button data-f="todos" class="ativo">${T("todos")} (${N.length})</button>` +
    Object.entries(CAT).map(([k,c]) => `<button data-f="${k}">${c.nome} (${N.filter(n=>n.cat===k).length})</button>`).join("");
  f.querySelectorAll("button").forEach(b => b.onclick = () => {
    filtroAtual = b.dataset.f;
    f.querySelectorAll("button").forEach(x => x.classList.toggle("ativo", x === b));
    renderNavios();
  });
}
function renderNavios(){
  const lista = N.filter(n => filtroAtual === "todos" || n.cat === filtroAtual);
  $("#lista-navios").innerHTML = lista.map(cardNavio).join("");
  ligarCards($("#lista-navios"));
}
function kitDoNavio(n){ return window.KITS[n.tier <= 1 ? 0 : n.tier === 2 ? 1 : 2]; }
function abrirNavio(id){
  const n = N.find(x => x.id === id); if (!n) return;
  const c = CAT[n.cat], kit = kitDoNavio(n);
  const deque = n.deckProprio ? window.DEQUES.find(d => d.nome === n.deckProprio) : null;
  const nos = T("nos");
  const campos = [[T("f.hp"),fmt(n.hp)],[T("f.hpMax"),fmt(n.maxHp)],[T("f.canBase"),fmt(n.can)],[T("f.arpBase"),fmt(n.arp)],
    [T("f.canDeck"),n.deckCan!=null?"+"+n.deckCan:"—"],[T("f.arpDeck"),n.deckArp!=null?"+"+n.deckArp:"—"],
    [T("f.canMax"),fmt(n.maxCan)],[T("f.arpMax"),fmt(n.maxArp)],
    [T("f.vb"),n.vb?n.vb+" "+nos:"—"],[T("f.vm"),n.vm?n.vm+" "+nos:"—"],[T("f.alc"),fmt(n.alc)],
    [T("f.esq"),n.crit!=null?n.crit+"%":"—"],[T("f.res"),n.crit!=null?n.crit+"%":"—"],[T("f.def"),n.def!=null?"+"+n.def+"%":"—"],[T("f.decks"),n.decks]];
  $("#modal-corpo").innerHTML = `
    <div class="modal-capa" ${fundoNavio(n)}>
      <span class="badge" style="background:${c.cor}">${c.nome}</span>
      <h1 style="margin-top:8px">${esc(n.nome)}</h1>
      ${n.desc ? `<p>${esc(n.desc)}</p>` : ""}
    </div>
    <p><strong>💰 ${T("preco")}:</strong> ${esc(n.preco)}<br><strong>🔓 ${T("comoObter")}:</strong> ${esc(n.obter)}</p>
    <div class="ficha">${campos.map(([k,v]) => `<div><span>${k}</span><b>${esc(v)}</b></div>`).join("")}</div>
    ${n.deckProprio ? `<div class="dica">🛠️ <strong>${T("dequeExcl")}: ${esc(n.deckProprio)}</strong>${deque ? ` (+${deque.can} ${T("canhoesMin")}, +${deque.arp} ${T("lancadores")}). ${T("disponivelEm")}: ${esc(deque.onde)}.` : "."}</div>` : ""}
    <h2>🧰 ${T("kitRec")} (${kit.fase})</h2>
    <ul>${kit.itens.map(([a,b]) => `<li><strong>${a}:</strong> ${esc(b)}</li>`).join("")}</ul>
    <div class="ad" data-slot="conteudo" data-format="auto"></div>
    <p class="nota">${esc(T("naoConf"))}</p>`;
  $("#modal").hidden = false;
  aplicarFundos($("#modal"));
  carregarAnuncios($("#modal"));
}
function fecharModal(){
  $("#modal").hidden = true;
  if (location.hash.startsWith("#navio-")) history.replaceState(null, "", "#navios");
}
$("#modal .fechar").onclick = fecharModal;
$("#modal").onclick = e => { if (e.target.id === "modal") fecharModal(); };
document.addEventListener("keydown", e => { if (e.key === "Escape") fecharModal(); });

/* ================= COMPARADOR ================= */
const NUMS = ["hp","maxHp","can","maxCan","arp","maxArp","vm","alc","crit"];
const COLS = [["nome",T("c.navio")],["cat",T("c.tipo")],["hp","HP"],["maxHp",T("c.hpMax")],["can",T("canhoes")],["maxCan",T("c.canMax")],["arp",T("arpoes")],["maxArp",T("c.arpMax")],["vm",T("c.vm")],["alc",T("c.alc")],["crit",T("c.crit")]];
let ordem = {col:"maxCan", dir:-1};
function renderComparador(){
  const val = v => v == null ? -Infinity : v;
  const lista = N.filter(n => n.can != null).sort((a,b) => {
    const x = a[ordem.col], y = b[ordem.col];
    return (typeof x === "string" ? x.localeCompare(y) : (val(x) - val(y))) * ordem.dir;
  });
  const max = {}; NUMS.forEach(k => max[k] = Math.max(...lista.map(n => val(n[k]))));
  $("#tabela-comp").innerHTML = `<thead><tr>${COLS.map(([k,tx]) => `<th class="ord" data-k="${k}">${tx}${ordem.col===k?(ordem.dir<0?" ▼":" ▲"):""}</th>`).join("")}</tr></thead>
    <tbody>${lista.map(n => `<tr>
      <td><a href="#navio-${n.id}">${esc(n.nome)}</a></td>
      <td><span class="badge" style="background:${CAT[n.cat].cor}">${CAT[n.cat].nome}</span></td>
      ${NUMS.map(k => `<td class="num ${/^max/.test(k)?"col-max":""}">${n[k]!=null&&n[k]===max[k]?"🏆 ":""}${fmt(n[k])}</td>`).join("")}
    </tr>`).join("")}</tbody>`;
  const C = window.COMPOSICAO_MAX;
  if (C && $("#composicao")) $("#composicao").innerHTML = `<div class="cards">
    ${C.hp ? `<div class="card"><h3>❤️ ${T("comp.hp")}</h3><ul class="lista-comp">${C.hp.map(([a,b]) => `<li><span>${a}</span><b>${b}</b></li>`).join("")}<li><span><strong>${T("comp.total")}</strong></span><b>+${fmt(window.HP_EXTRA)}</b></li></ul></div>` : ""}
    <div class="card"><h3>💣 ${T("canhoes")}</h3><ul class="lista-comp">${C.canhoes.map(([a,b]) => `<li><span>${a}</span><b>${b}</b></li>`).join("")}</ul></div>
    <div class="card"><h3>🎯 ${T("lancArpao")}</h3><ul class="lista-comp">${C.arpoes.map(([a,b]) => `<li><span>${a}</span><b>${b}</b></li>`).join("")}</ul></div>
  </div><p class="nota">${C.nota}</p>`;
  $$("#tabela-comp th.ord").forEach(th => th.onclick = () => {
    const k = th.dataset.k; ordem = {col:k, dir: ordem.col===k ? -ordem.dir : (k==="nome"||k==="cat"?1:-1)}; renderComparador();
  });
}
function renderCalc(){
  const navios = N.filter(n => n.can != null);
  const porSec = {};
  window.DEQUES.forEach(d => { (porSec[d.sec] = porSec[d.sec] || []).push(d); });
  $("#calc").innerHTML = `<label>${T("c.navio")}<select id="calc-navio">${navios.map(n => `<option value="${n.id}">${esc(n.nome)} (${n.can} ${T("canhoesMin")})</option>`).join("")}</select></label>
    <div class="calc-grid">${Object.entries(porSec).map(([sec,ds]) => `<label>${T("calc.deque")} ${sec}<select data-sec="${esc(sec)}"><option value="">${T("calc.nenhum")}</option>${ds.map(d => `<option value="${esc(d.nome)}">${esc(d.nome)} (+${d.can}/+${d.arp})</option>`).join("")}</select></label>`).join("")}</div>
    <div class="calc-res"><div>${T("canhoes")}<br><b id="calc-can">0</b></div><div>${T("calc.lanc")}<br><b id="calc-arp">0</b></div></div>
    <p class="nota">${esc(T("calc.nota"))}</p>`;
  const recalc = () => {
    const n = N.find(x => x.id === $("#calc-navio").value);
    let c = n.can, a = n.arp || 0;
    $$("#calc select[data-sec]").forEach(s => { const d = window.DEQUES.find(x => x.nome === s.value); if (d){ c += d.can; a += d.arp; } });
    $("#calc-can").textContent = c; $("#calc-arp").textContent = a;
  };
  $$("#calc select").forEach(s => s.onchange = recalc); recalc();
}

/* ================= ARMAS / KITS ================= */
function tabela(sel, cab, linhas){
  $(sel).innerHTML = `<thead><tr>${cab.map(c => `<th>${c}</th>`).join("")}</tr></thead><tbody>${linhas.map(l => `<tr>${l.map(v => `<td>${v}</td>`).join("")}</tr>`).join("")}</tbody>`;
}
const perde = p => p ? `<span class="tag warn">${T("perde")}</span>` : `<span class="tag ok">${T("perm")}</span>`;
function renderArmas(){
  const armas = (sel, lista) => {
    tabela(sel, [T("a.nome"),T("a.dano"),T("a.disp"),T("a.afundar"),T("a.origem"),T("a.obs")],
      lista.map(c => [`<b>${c.nome}</b>`, c.dano, c.disp, perde(c.perde), c.origem, c.nota]));
    $$(sel + " tbody tr").forEach((tr,i) => { if (lista[i].melhor) tr.classList.add("linha-top"); });
  };
  armas("#tab-canhoes", window.CANHOES);
  const O = window.OFICINA;
  $("#oficina").innerHTML = `<ul>${O.regras.map(r => `<li>${r}</li>`).join("")}</ul>
    <h3>${O.bombastico.titulo}</h3><p class="sub">${T("of.base")}: ${O.bombastico.base}.</p>
    <div class="tabela-wrap"><table class="tabela"><thead><tr><th>${T("of.etapa")}</th><th>${T("of.ouro")}</th><th>${T("of.mat")}</th></tr></thead><tbody>
    ${O.bombastico.passos.map((p,i,a) => `<tr class="${i===a.length-1?"linha-top":""}"><td><b>${p[0]}</b></td><td>${p[1]}</td><td>${p[2]}</td></tr>`).join("")}
    </tbody></table></div><div class="dica">💡 ${O.dica}</div>`;
  $("#canhoes-evento").textContent = window.CANHOES_EVENTO.join(", ");
  tabela("#tab-balas", [T("b.municao"),T("preco"),T("a.dano"),T("b.critC"),T("b.critB"),T("b.uso")],
    window.BALAS.map(b => [`<b>${b.nome}</b>`, b.preco, b.dano, b.crit, b.bonus, b.nota]));
  armas("#tab-lanc", window.LANCADORES);
  tabela("#tab-arpoes", [T("arpao"),T("preco"),T("a.dano"),T("a.obs")],
    window.ARPOES.map(a => [`<b>${a.nome}</b>`, a.preco, a.dano, a.nota]));
}
function renderKits(){
  $("#kits-fase").innerHTML = window.KITS.map((k, idx) => `<div class="card kit" style="--c:${k.cor}">
    <h3>${k.fase}</h3><p>${esc(k.navios)}</p>
    <ul>${k.itens.map(([a,b]) => `<li><b>${a}</b>${esc(b)}</li>`).join("")}</ul>
    ${idx === 2 && window.KIT_ENDGAME_TOTAL ? `<div class="dica" style="margin:10px 0 0">🏆 ${esc(window.KIT_ENDGAME_TOTAL)}</div>` : ""}</div>`).join("");
  const TIT = window.MELHORIAS_TITULOS || {};
  $("#melhorias").innerHTML = Object.entries(window.MELHORIAS).map(([g,itens]) => `<div class="melh-grupo"><h3>${TIT[g] || g}</h3>
    <div class="tabela-wrap"><table class="tabela"><thead><tr><th>${T("k.item")}</th><th>${T("preco")}</th><th>${T("k.efeito")}</th></tr></thead>
    <tbody>${itens.map(i => `<tr><td><b>${i.nome}</b></td><td>${i.preco}</td><td>${i.efeito}</td></tr>`).join("")}</tbody></table></div></div>`).join("");
  tabela("#tab-deques", [T("d.deque"),T("canhoes"),T("calc.lanc"),T("d.secao"),T("d.serve"),T("d.onde"),T("d.tipo")],
    window.DEQUES.map(d => [`<b>${d.nome}</b>`, "+"+d.can, "+"+d.arp, d.sec, d.serve, d.onde,
      d.afundavel ? `<span class="tag warn">${T("afund")}</span>` : `<span class="tag ok">${T("inafund")}</span>`]));
}

/* ================= EVENTOS ================= */
function statusEvento(e){
  const agora = Date.now(), ini = new Date(e.inicio).getTime(), fim = e.fim ? new Date(e.fim).getTime() : null;
  if (agora < ini) return {cls:"breve", txt:T("ev.breve"), alvo:ini, rotulo:T("ev.comeca")};
  if (fim ? agora <= fim : agora <= ini + 21*864e5) return {cls:"ao-vivo", txt:T("ev.agora"), alvo:fim, rotulo:fim ? T("ev.termina") : ""};
  return {cls:"fim", txt:T("ev.fim"), alvo:null, rotulo:""};
}
function contagem(ms){
  if (ms <= 0) return T("agoraCurto");
  const d = Math.floor(ms/864e5), h = Math.floor(ms/36e5)%24, m = Math.floor(ms/6e4)%60, s = Math.floor(ms/1e3)%60;
  return `${d}d ${String(h).padStart(2,"0")}h ${String(m).padStart(2,"0")}m ${String(s).padStart(2,"0")}s`;
}
const dataBR = s => new Date(s).toLocaleDateString(LOC, {day:"2-digit", month:"short", year:"numeric"});
const mesCurto = d => d.toLocaleDateString(LOC, {month:"short"}).replace(".","");
function cardEvento(e){
  const st = statusEvento(e);
  return `<div class="card">
    <span class="status ${st.cls}">${st.txt}</span>
    <h3>${esc(e.nome)}</h3>
    <p>📆 ${dataBR(e.inicio)}${e.fim ? " → " + dataBR(e.fim) : ""}</p>
    ${st.alvo ? `<p>${st.rotulo}:</p><div class="contagem" data-alvo="${st.alvo}">${contagem(st.alvo - Date.now())}</div>` : ""}
    <p>${esc(e.desc)}</p>
    ${e.link ? `<a href="${esc(e.link)}" target="_blank" rel="noopener">${T("ev.oficial")}</a>` : ""}
  </div>`;
}
function eventosOrdenados(){
  // junta eventos manuais (dados.js) com os extraídos automaticamente do fórum (eventos.js)
  const vistos = new Set(), todos = [];
  (window.EVENTOS_DATADOS || []).concat(window.EVENTOS_AUTO || []).forEach(e => {
    if (vistos.has(e.link)) return; vistos.add(e.link); todos.push(e);
  });
  return todos
    .filter(e => statusEvento(e).cls !== "fim")
    .sort((a,b) => new Date(a.inicio) - new Date(b.inicio));
}
function renderEventos(){
  const lista = eventosOrdenados();
  const html = lista.length ? lista.map(cardEvento).join("") : `<div class="card"><p>${T("ev.nenhum")}</p></div>`;
  $("#ev-datados").innerHTML = html;
  $("#home-eventos").innerHTML = html;

  const feed = window.EVENTOS_FEED || [];
  const att = window.EVENTOS_ATUALIZADO ? new Date(window.EVENTOS_ATUALIZADO).toLocaleString(LOC) : "—";
  $("#info-att").innerHTML = T("ev.att", {d: att});
  $("#ev-feed").innerHTML = feed.length ? feed.map(f => `<a href="${esc(f.link)}" target="_blank" rel="noopener">
      <small>${dataBR(f.data)}</small> <strong>${esc(f.titulo)}</strong><p>${esc(f.resumo)}</p></a>`).join("")
    : `<p class="nota">${T("ev.semFeed")}</p>`;

  $("#ev-calendario").innerHTML = window.CALENDARIO.map(c => `<div class="card"><div class="mes">${c.mes}</div><h3>${esc(c.nome)}</h3><p>${esc(c.desc)}</p></div>`).join("");
}
setInterval(() => $$(".contagem").forEach(el => el.textContent = contagem(+el.dataset.alvo - Date.now())), 1000);

/* ================= MAPA ================= */
function renderMapa(){
  tabela("#tab-zonas", ["#",T("z.zona"),T("z.chefes")], window.ZONAS.map(([n,z,c]) => [n, `<b>${z}</b>`, c || "—"]));
  tabela("#tab-niveis", [T("n.nivel"),T("n.xp")], window.NIVEIS.map(([l,x]) => [l, fmt(x)]));
}

/* ================= INÍCIO ================= */
function renderInicio(){
  $("#stats-home").innerHTML = [[N.length,T("s.navios")],[window.DEQUES.length,T("s.deques")],[window.ZONAS.length,T("s.zonas")],[window.CALENDARIO.length,T("s.eventos")]]
    .map(([n,tx]) => `<div class="stat"><b>${n}</b><span>${tx}</span></div>`).join("");
  const dest = ["warbrig","dhuka","piranha","frostbrand","orca","dow"].map(id => N.find(n => n.id === id));
  $("#home-navios").innerHTML = dest.map(cardNavio).join("");
  ligarCards($("#home-navios"));
}

/* ================= BUSCA ================= */
function indiceBusca(){
  const idx = [];
  N.forEach(n => idx.push({t:n.nome, s:T("bs.navio")+" · "+CAT[n.cat].nome, h:"#navio-"+n.id}));
  window.CANHOES.forEach(c => idx.push({t:c.nome, s:T("bs.canhao")+" "+c.dano, h:"#armas"}));
  window.LANCADORES.forEach(c => idx.push({t:c.nome, s:T("bs.lanc")+" "+c.dano, h:"#armas"}));
  idx.push({t:T("bs.oficina"), s:T("bs.oficinaS"), h:"#armas"});
  window.BALAS.concat(window.ARPOES).forEach(c => idx.push({t:c.nome, s:T("bs.municao"), h:"#armas"}));
  window.DEQUES.forEach(d => idx.push({t:T("bs.deque")+" "+d.nome, s:T("bs.deque")+" · +"+d.can+" "+T("canhoesMin"), h:"#kits"}));
  const TIT = window.MELHORIAS_TITULOS || {};
  Object.entries(window.MELHORIAS).forEach(([g,its]) => its.forEach(i => idx.push({t:i.nome, s:TIT[g]||g, h:"#kits"})));
  window.CALENDARIO.forEach(c => idx.push({t:c.nome, s:T("bs.evento")+" · "+c.mes, h:"#eventos"}));
  window.ZONAS.forEach(([n,z]) => idx.push({t:z, s:T("bs.zona")+" "+n, h:"#mapa"}));
  (window.BATTLEGROUNDS||[]).forEach(b => {
    idx.push({t:T("bs.casa")+" "+b.casa+" — "+b.modo, s:"Battleground", h:"#battlegrounds"});
    b.itens.forEach(i => idx.push({t:i.nome, s:T("bs.itemBG")+" "+b.casa+" · "+tipoTxt(i.tipo), h:"#battlegrounds"}));
  });
  (window.MAPAS_BONUS||[]).forEach(m => {
    idx.push({t:m.nome, s:T("bs.mapaBonus")+" · "+m.ondas.length+" "+T("bs.ondas"), h:"#bonus"});
    m.ondas.forEach(([o,npcs]) => npcs.forEach(n => idx.push({t:n[0].replace("👑 ",""), s:"NPC · "+m.nome+" "+T("bs.onda")+" "+o, h:"#bonus"})));
  });
  return idx;
}
const IDX = indiceBusca();
const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
$("#busca").addEventListener("input", e => {
  const q = norm(e.target.value.trim()), box = $("#busca-res");
  if (q.length < 2) { box.hidden = true; return; }
  const r = IDX.filter(i => norm(i.t).includes(q)).slice(0, 12);
  box.innerHTML = r.length ? r.map(i => `<a href="${i.h}">${esc(i.t)}<br><small>${esc(i.s)}</small></a>`).join("") : `<a>${T("bs.nada")}</a>`;
  box.hidden = false;
});
document.addEventListener("click", e => { if (!e.target.closest(".busca")) $("#busca-res").hidden = true; });
$("#busca-res").addEventListener("click", () => { $("#busca-res").hidden = true; $("#busca").value = ""; });

/* ================= ADSENSE + COOKIES ================= */
const AD = (window.CONFIG && window.CONFIG.adsense) || {};
const adConfigurado = AD.client && !/X{6,}/.test(AD.client);
let consent = null;
try { consent = localStorage.getItem("ps_cookies"); } catch(e) {}
let scriptAds = false;
function carregarScriptAds(){
  if (scriptAds || !adConfigurado) return;
  scriptAds = true;
  if (consent === "essenciais") (window.adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1;
  const s = document.createElement("script");
  s.async = true; s.crossOrigin = "anonymous";
  s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + encodeURIComponent(AD.client);
  document.head.appendChild(s);
}
function carregarAnuncios(root){
  (root || document).querySelectorAll(".ad").forEach(el => {
    if (el.dataset.ok || el.offsetParent === null) return;   // só blocos visíveis
    el.dataset.ok = "1";
    const slot = (AD.slots || {})[el.dataset.slot];
    if (!adConfigurado) {
      el.classList.add("placeholder");
      el.textContent = T("ad.placeholder", {s: el.dataset.slot});
      return;
    }
    carregarScriptAds();
    el.innerHTML = `<ins class="adsbygoogle" style="display:block" data-ad-client="${esc(AD.client)}" data-ad-slot="${esc(slot)}" data-ad-format="${el.dataset.format === "vertical" ? "vertical" : "auto"}" data-full-width-responsive="true"></ins>`;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch(e) {}
  });
}
function decidirCookies(v){
  consent = v; try { localStorage.setItem("ps_cookies", v); } catch(e) {}
  $("#cookie").hidden = true;
}
$("#ck-aceitar").onclick = () => decidirCookies("todos");
$("#ck-recusar").onclick = () => decidirCookies("essenciais");
$("#cookies-reabrir").onclick = e => { e.preventDefault(); $("#cookie").hidden = false; };
if (!consent) $("#cookie").hidden = false;

/* ================= BATTLEGROUNDS ================= */
const BG = window.BATTLEGROUNDS || [];
const ICONE_TIPO = {"navio":"⛵","deque":"🛠️","deque / conjunto Águia":"🛠️","canhão":"💣","lançador":"🎯","munição":"⚫","foguete":"🚀","buff":"✨","equipamento":"⚙️","vela":"⛵","conjunto Águia":"🦅"};
let bgAtual = "todas";
function renderBattlegrounds(){
  const f = $("#filtros-bg");
  f.innerHTML = `<button data-c="todas" class="ativo">${T("bg.todas")}</button>` + BG.map(b => `<button data-c="${b.casa}">${b.animal.split(" ")[0]} ${b.casa}</button>`).join("");
  f.querySelectorAll("button").forEach(btn => btn.onclick = () => {
    bgAtual = btn.dataset.c; f.querySelectorAll("button").forEach(x => x.classList.toggle("ativo", x === btn)); listaBG();
  });
  listaBG();
  const s = window.SET_AGUIA;
  $("#set-aguia").innerHTML = `<div class="card"><p>${esc(s.desc)}</p>
    <div class="tabela-wrap"><table class="tabela"><thead><tr><th>${T("bg.casa")}</th><th>${T("bg.peca")}</th><th>${T("k.efeito")}</th><th>${T("preco")}</th></tr></thead><tbody>
    ${BG.flatMap(b => b.itens.filter(i => /Águia/.test(i.tipo)).map(i => `<tr><td><b style="color:${b.cor}">${b.casa}</b></td><td>${esc(i.nome)}</td><td>${esc(i.efeito)}</td><td>${esc(i.preco)}</td></tr>`)).join("")}
    </tbody></table></div>
    <h3 style="margin-top:14px">${T("bg.bonusSet")}</h3>
    <ul>${s.bonus.map(([a,b]) => `<li><b>${a}:</b> ${b}</li>`).join("")}</ul><p class="nota">${T("bg.acumula")}</p></div>`;
  tabela("#tab-bg-deques", [T("d.deque"),T("bg.casa"),T("canhoes"),T("calc.lanc"),T("bg.moedas"),T("preco")],
    BG.flatMap(b => b.itens.filter(i => /deque/.test(i.tipo)).map(i => {
      const m = i.efeito.match(/\+(\d+)\D+\+(\d+)/) || [];
      return [`<b>${esc(i.nome)}</b>`, `<span style="color:${b.cor};font-weight:700">${b.casa}</span>`, "+"+(m[1]||"?"), "+"+(m[2]||"?"), esc(String(i.moedas)), esc(i.preco)];
    })));
}
// ordena do menor para o maior número de moedas; itens sem valor numérico vão para o fim
function ordenarPorMoedas(itens){
  const n = v => { const x = parseInt(String(v), 10); return isNaN(x) ? Infinity : x; };
  return itens.slice().sort((a,b) => n(a.moedas) - n(b.moedas));
}
function listaBG(){
  $("#bg-lista").innerHTML = BG.filter(b => bgAtual === "todas" || b.casa === bgAtual).map(b => `
    <div class="bg-card" style="--c:${b.cor}">
      <div class="bg-topo">
        <div><div class="mes">${esc(b.animal)}</div><h2>${T("bg.casa")} ${esc(b.casa)}</h2></div>
        <span class="badge" style="background:${b.cor}">${T("bg.modo")}: ${esc(b.modo)}</span>
      </div>
      <p><strong>${T("bg.como")}:</strong> ${esc(b.comoJoga)}</p>
      <p><strong>${T("bg.premio")}:</strong> ${esc(b.premio)}</p>
      <div class="tabela-wrap"><table class="tabela"><thead><tr><th>${T("k.item")}</th><th>${T("c.tipo")}</th><th>${T("bg.efeitoEst")}</th><th>${T("bg.moedas")}</th><th>${T("preco")}</th></tr></thead><tbody>
      ${ordenarPorMoedas(b.itens).map(i => `<tr><td><b>${ICONE_TIPO[i.tipo]||"•"} ${esc(i.nome)}</b></td><td>${esc(tipoTxt(i.tipo))}</td><td>${esc(i.efeito)}</td><td class="num">${esc(String(i.moedas))}</td><td>${esc(i.preco)}</td></tr>`).join("")}
      </tbody></table></div>
      ${b.extra ? `<p class="nota">➕ ${esc(b.extra)}</p>` : ""}
    </div>`).join("");
}

/* ================= MAPAS BÔNUS ================= */
const MB = window.MAPAS_BONUS || [];
let mbAtual = 0;
const numero = s => parseInt(String(s).replace(/[.,\s](?=\d{3}\b)/g,""), 10) || 0;
const minN = s => numero(String(s).split("–")[0]);
const maxN = s => numero(String(s).split("–").pop());
const nomeChefe = s => s.replace("👑 ","").replace(/\s*\(.*\)\s*$/,"");
function renderBonus(){
  $("#bonus-info").innerHTML = "<ul style='margin:0;padding-left:18px'>" + window.MAPAS_BONUS_INFO.map(x => `<li>${x}</li>`).join("") + "</ul>";
  const f = $("#filtros-bonus");
  f.innerHTML = MB.map((m,i) => `<button data-i="${i}" class="${i===0?"ativo":""}">${"💀".repeat(m.dif)} ${esc(m.nome)}</button>`).join("");
  f.querySelectorAll("button").forEach(btn => btn.onclick = () => {
    mbAtual = +btn.dataset.i; f.querySelectorAll("button").forEach(x => x.classList.toggle("ativo", x === btn)); mapaBonus();
  });
  mapaBonus();
  tabela("#tab-bonus-comp", [T("mb.mapa"),T("mb.dif"),T("mb.ondas"),T("mb.inimigos"),T("mb.chefe"),T("mb.xp"),T("mb.ouro")],
    MB.map(m => {
      const todos = m.ondas.flatMap(o => o[1]);
      const qtd = todos.reduce((s,n) => s + n[1], 0);
      const chefe = todos.find(n => n[0].includes("👑"));
      const xp = fmt(todos.reduce((s,n) => s + n[1]*minN(n[4]), 0)) + "–" + fmt(todos.reduce((s,n) => s + n[1]*maxN(n[4]), 0));
      const ouro = fmt(todos.reduce((s,n) => s + n[1]*minN(n[5]), 0)) + "–" + fmt(todos.reduce((s,n) => s + n[1]*maxN(n[5]), 0));
      return [`<b>${esc(m.nome)}</b>`, "💀".repeat(m.dif), m.ondas.length, qtd, chefe ? esc(nomeChefe(chefe[0])) : "—", xp, ouro];
    }));
}
function mapaBonus(){
  const m = MB[mbAtual];
  $("#bonus-mapa").innerHTML = `<div class="bg-card" style="--c:${m.cor}">
    <div class="bg-topo"><div><div class="mes">${T("mb.dif")} ${"💀".repeat(m.dif)}</div><h2>${esc(m.nome)}</h2></div>
    <span class="badge" style="background:${m.cor}">${T("mb.ondasN", {n: m.ondas.length})}</span></div>
    <p><strong>${T("mb.recomp")}:</strong> ${esc(m.recompensas)}</p>
    <div class="ondas">${m.ondas.map(([num, npcs]) => `
      <div class="onda"><div class="onda-n">${T("mb.onda")}<br><b>${num}</b></div><div class="onda-npcs">
      ${npcs.map(n => `<div class="npc ${n[0].includes("👑")?"chefe":""}">
        <div class="npc-nome">${esc(n[0])} <span class="qtd">×${n[1]}</span></div>
        <div class="npc-st"><span>❤️ ${NUM(n[2])}</span><span>💥 ${NUM(n[3])}</span><span>⭐ ${NUM(n[4])} XP</span><span>🪙 ${NUM(n[5])}</span></div>
      </div>`).join("")}</div></div>`).join("")}
    </div>
    <p class="nota">${T("mb.nota")}</p></div>`;
}

/* ================= GUIA DOS EVENTOS ================= */
function renderGuiaEventos(){
  const G = window.EVENTOS_GUIA || [];
  $("#ev-guia").innerHTML = G.map(g => `
    <details class="ev-det" id="guia-${g.id}" style="--c:${g.cor}">
      <summary><span class="ev-tit">${esc(g.nome)}</span><span class="ev-quando">${esc(g.quando)}</span></summary>
      <div class="ev-corpo">
        <p>${esc(g.resumo)}</p>
        ${g.atividades.length ? `<h3>${T("g.ativ")}</h3><ul>${g.atividades.map(a => `<li>${esc(a)}</li>`).join("")}</ul>` : ""}
        ${g.mapas.length ? `<h3>${T("g.mapas")}</h3><div class="ev-mapas">${g.mapas.map(([n,d]) => `<div><b>${esc(n)}</b><span>${esc(d)}</span></div>`).join("")}</div>` : ""}
        ${g.itens.length ? `<h3>${T("g.itens")}</h3><div class="tabela-wrap"><table class="tabela"><thead><tr><th>${T("k.item")}</th><th>${T("c.tipo")}</th><th>${T("k.efeito")}</th><th>${T("g.precoOrig")}</th></tr></thead><tbody>
          ${g.itens.map(i => `<tr><td><b>${esc(i[0])}</b></td><td>${esc(i[1])}</td><td>${esc(i[2])}</td><td>${esc(i[3])}</td></tr>`).join("")}</tbody></table></div>` : ""}
        ${g.kits.length ? `<h3>${T("g.kits")}</h3>${g.kits.map(([n,p,b]) => `<div class="ev-kit"><b>${esc(n)}</b><p><strong>${T("g.pecas")}:</strong> ${esc(p)}</p><p class="ev-bonus">✨ ${esc(b)}</p></div>`).join("")}` : ""}
      </div>
    </details>`).join("");
}
function abrirGuia(id){
  const d = document.getElementById("guia-" + id); if (!d) return;
  d.open = true; d.scrollIntoView({behavior:"smooth", block:"start"});
}

/* ================= LINHA DO TEMPO ================= */
const TL = window.TIMELINE || [];
const TL_TIPOS = { sazonal:{nome:T("tl.sazonal"), cor:"#e2b04a"}, bg:{nome:T("tl.bg"), cor:"#4fa3d1"}, pvp:{nome:T("tl.pvp"), cor:"#d9534f"} };
const tagConf = c => c ? `<span class="tag ok">${T("tl.conf")}</span>` : `<span class="tag warn">${T("tl.est")}</span>`;
let tlFiltro = "todos";
function proximaOcorrencia(e, hoje){
  const [mi,di] = e.ini.split("-").map(Number), [mf,df] = e.fim.split("-").map(Number);
  for (let ano = hoje.getFullYear() - 1; ano <= hoje.getFullYear() + 1; ano++){
    const ini = new Date(ano, mi-1, di, 12);
    const fim = new Date(ano + ((mf < mi || (mf === mi && df < di)) ? 1 : 0), mf-1, df, 23, 59);
    if (fim >= hoje) return { ini, fim, conf: e.conf && ano === 2026 };
  }
}
function renderTimeline(){
  const hoje = new Date();
  const t0 = new Date(hoje.getFullYear(), hoje.getMonth(), 1), t1 = new Date(t0.getFullYear() + 1, t0.getMonth(), 1);
  const span = t1 - t0, pct = d => Math.max(0, Math.min(100, (d - t0) / span * 100));
  const ocs = TL.map(e => ({...e, ...proximaOcorrencia(e, hoje)})).filter(e => e.ini < t1).sort((a,b) => a.ini - b.ini);

  const f = $("#tl-filtros");
  f.innerHTML = `<button data-t="todos" class="${tlFiltro==="todos"?"ativo":""}">${T("todos")}</button>` + Object.entries(TL_TIPOS).map(([k,v]) => `<button data-t="${k}" class="${tlFiltro===k?"ativo":""}"><span class="dot" style="background:${v.cor}"></span>${v.nome}</button>`).join("");
  f.querySelectorAll("button").forEach(b => b.onclick = () => { tlFiltro = b.dataset.t; renderTimeline(); });

  let meses = "";
  for (let i = 0; i < 12; i++){
    const d = new Date(t0.getFullYear(), t0.getMonth() + i, 1);
    meses += `<div class="tl-mes" style="left:${pct(d)}%">${mesCurto(d)}${d.getMonth()===0?" "+d.getFullYear():""}</div>`;
  }
  const linhas = Object.entries(TL_TIPOS).filter(([k]) => tlFiltro === "todos" || tlFiltro === k).map(([k,v]) => {
    const evs = ocs.filter(e => e.tipo === k);
    return `<div class="tl-linha"><div class="tl-rot" style="color:${v.cor}">${v.nome}</div><div class="tl-pista">
      ${evs.map(e => { const l = pct(e.ini), w = Math.max(pct(e.fim) - l, 0.8);
        return `<button class="tl-barra ${e.conf?"":"est"}" style="left:${l}%;width:${w}%;background:${v.cor}" data-i="${ocs.indexOf(e)}" title="${esc(e.nome)} — ${dataBR(e.ini)}">${w > 8 ? `<span>${esc(e.curto || e.nome)}</span>` : k === "sazonal" ? `<span class="fora">${esc(e.curto || e.nome)}</span>` : ""}</button>`; }).join("")}
    </div></div>`;
  }).join("");
  $("#timeline").innerHTML = `<div class="tl-scroll"><div class="tl-inner">
    <div class="tl-linha tl-cab"><div class="tl-rot"></div><div class="tl-pista">${meses}<div class="tl-hoje" style="left:${pct(hoje)}%"><span>${T("tl.hoje")}</span></div></div></div>
    ${linhas}</div></div><div id="tl-det" class="tl-det">${T("tl.toque")}</div>`;
  $$("#timeline .tl-barra").forEach(b => b.onclick = b.onmouseenter = () => {
    const e = ocs[+b.dataset.i];
    const g = guiaDe(e);
    $("#tl-det").innerHTML = `<strong>${esc(e.nome)}</strong> ${tagConf(e.conf)}<br>📆 ${dataBR(e.ini)}${+e.fim-+e.ini > 864e5 ? " → " + dataBR(e.fim) : ""} · ${diasAte(e.ini, e.fim)}<br><span class="nota">${esc(e.desc)}</span>
      ${g ? `<br><button class="btn ver-guia" data-g="${g.id}">${T("tl.verGuia")}</button>` : e.tipo === "bg" ? `<br><a class="btn sec" href="#battlegrounds">${T("tl.verCasa")}</a>` : ""}`;
    const vb = $("#tl-det .ver-guia"); if (vb) vb.onclick = () => abrirGuia(vb.dataset.g);
  });

  $("#tl-lista").innerHTML = `<h3>${T("tl.proximos")}</h3>` + ocs.filter(e => tlFiltro === "todos" || tlFiltro === e.tipo).map(e => { const g = guiaDe(e); return `
    <div class="tl-item" style="--c:${TL_TIPOS[e.tipo].cor}">
      <div class="tl-data"><b>${e.ini.getDate()}</b>${mesCurto(e.ini)}<small>${e.ini.getFullYear()}</small></div>
      <div style="flex:1"><strong>${esc(e.nome)}</strong> ${tagConf(e.conf)}
      <div class="nota">${diasAte(e.ini, e.fim)} · ${esc(e.desc)}</div></div>
      ${g ? `<button class="btn sec ver-guia" data-g="${g.id}">${T("tl.detalhes")}</button>` : e.tipo === "bg" ? `<a class="btn sec" href="#battlegrounds">${T("tl.itens")}</a>` : ""}
    </div>`; }).join("");
  $$("#tl-lista .ver-guia").forEach(b => b.onclick = () => abrirGuia(b.dataset.g));
}
function guiaDe(e){ const k = e._k || e.nome; return (window.EVENTOS_GUIA || []).find(g => g.tl && g.tl === k); }
function diasAte(ini, fim){
  const agora = Date.now();
  if (agora >= ini && agora <= fim) return T("tl.agora");
  const d = Math.ceil((ini - agora) / 864e5);
  return d <= 1 ? T("tl.amanha") : T("tl.emDias", {n: d});
}

/* ================= INIT ================= */
renderInicio(); renderFiltros(); renderNavios(); renderComparador(); renderCalc();
renderArmas(); renderKits(); renderEventos(); renderMapa();
renderBattlegrounds(); renderBonus(); renderGuiaEventos(); renderTimeline();
mostrarAba();
})();
