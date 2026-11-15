/* =========================================================
   SISTEMA DE IDIOMAS (PT-BR / EN / ES)
   - Idioma vem de ?lang=xx, depois do que o visitante escolheu
     antes (localStorage), depois do idioma do navegador.
   - Textos fixos da página: atributo data-i18n="chave".
   - Textos do app.js: função t("chave").
   - Dados (navios, eventos…): cada idioma traz um "data" que
     substitui só os textos, mantendo os números.
   Carregar DEPOIS dos arquivos de dados e de js/lang/*.js e
   ANTES do app.js.
   ========================================================= */
(function(){
  "use strict";
  var SUP = ["pt", "en", "es"];
  var I = window.I18N || {};

  function salvar(l){ try { localStorage.setItem("ps_lang", l); } catch(e) {} }
  function detectar(){
    var q = null;
    try { q = new URLSearchParams(location.search).get("lang"); } catch(e) {}
    if (SUP.indexOf(q) >= 0) { salvar(q); return q; }
    var s = null; try { s = localStorage.getItem("ps_lang"); } catch(e) {}
    if (SUP.indexOf(s) >= 0) return s;
    var n = (navigator.language || "pt").slice(0, 2).toLowerCase();
    return SUP.indexOf(n) >= 0 ? n : "pt";
  }

  var LANG = window.LANG = detectar();
  window.LOCALE = { pt:"pt-BR", en:"en-US", es:"es-ES" }[LANG];
  var L = I[LANG] || {}, PT = I.pt || {};

  window.t = function(k, vars){
    var s = (L.ui && L.ui[k] != null) ? L.ui[k] : (PT.ui && PT.ui[k] != null) ? PT.ui[k] : k;
    if (vars) s = String(s).replace(/\{(\w+)\}/g, function(m, v){ return vars[v] != null ? vars[v] : m; });
    return s;
  };

  /* chaves estáveis antes de traduzir (ligam linha do tempo ↔ guia) */
  (window.TIMELINE || []).forEach(function(e){ e._k = e.nome; });

  /* ---------- tradução dos dados ---------- */
  function mesclar(alvo, over){
    if (Array.isArray(over) && Array.isArray(alvo)) {
      over.forEach(function(v, i){
        if (v == null) return;
        if (typeof v === "object" && alvo[i] && typeof alvo[i] === "object") mesclar(alvo[i], v);
        else alvo[i] = v;
      });
      return alvo;
    }
    Object.keys(over).forEach(function(k){
      var v = over[k];
      if (v == null) return;
      if (typeof v === "object" && alvo[k] && typeof alvo[k] === "object") mesclar(alvo[k], v);
      else alvo[k] = v;
    });
    return alvo;
  }
  /* inglês usa 1,000.5 em vez de 1.000,5: troca os separadores dentro dos números */
  window.numTxt = function(s){
    if (!L.swapNum || typeof s !== "string") return s;
    return s.replace(/\d[\d.,]*\d/g, function(tok){ return tok.replace(/[.,]/g, function(c){ return c === "." ? "," : "."; }); });
  };
  function trocarPalavras(txt){
    if (typeof txt !== "string") return txt;
    txt = window.numTxt(txt);
    (L.palavras || []).forEach(function(p){ txt = txt.split(p[0]).join(p[1]); });
    return txt;
  }

  if (LANG !== "pt" && L.data) {
    var D = L.data;
    /* troca automática de palavras curtas em preços e conveses */
    (window.NAVIOS || []).forEach(function(n){ n.preco = trocarPalavras(n.preco); n.decks = trocarPalavras(n.decks); });
    Object.keys(window.MELHORIAS || {}).forEach(function(g){ window.MELHORIAS[g].forEach(function(i){ i.preco = trocarPalavras(i.preco); }); });
    (window.BALAS || []).concat(window.ARPOES || []).forEach(function(b){ b.preco = trocarPalavras(b.preco); });
    (window.BATTLEGROUNDS || []).forEach(function(b){ b.itens.forEach(function(i){ i.preco = trocarPalavras(i.preco); i.moedas = trocarPalavras(String(i.moedas)); }); });

    /* NAVIOS vem indexado por id */
    if (D.NAVIOS) (window.NAVIOS || []).forEach(function(n){ if (D.NAVIOS[n.id]) mesclar(n, D.NAVIOS[n.id]); });
    Object.keys(D).forEach(function(k){
      if (k === "NAVIOS") return;
      var v = D[k];
      if (window[k] && typeof window[k] === "object" && typeof v === "object") mesclar(window[k], v);
      else window[k] = v;
    });
  }

  /* ---------- textos fixos da página ---------- */
  document.documentElement.lang = { pt:"pt-BR", en:"en", es:"es" }[LANG];
  if (LANG !== "pt" && L.html) {
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var v = L.html[el.getAttribute("data-i18n")];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function(el){
      var v = L.html[el.getAttribute("data-i18n-ph")]; if (v != null) el.placeholder = v;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function(el){
      var v = L.html[el.getAttribute("data-i18n-aria")]; if (v != null) el.setAttribute("aria-label", v);
    });
    if (L.meta) {
      var md = document.querySelector('meta[name="description"]'); if (md && L.meta.desc) md.content = L.meta.desc;
      var og = document.querySelector('meta[property="og:description"]'); if (og && L.meta.og) og.content = L.meta.og;
      var ot = document.querySelector('meta[property="og:title"]'); if (ot && L.meta.nome) ot.content = L.meta.nome;
    }
  }
  /* link da privacidade leva o idioma junto */
  document.querySelectorAll('a[href^="privacidade.html"]').forEach(function(a){ a.href = "privacidade.html?lang=" + LANG; });

  /* ---------- seletor de idioma ---------- */
  var alvo = document.querySelector(".topo-in");
  if (alvo) {
    var box = document.createElement("div");
    box.className = "lang-sw";
    box.setAttribute("role", "group");
    box.setAttribute("aria-label", t("idioma"));
    [["pt","🇧🇷","PT"],["en","🇺🇸","EN"],["es","🇪🇸","ES"]].forEach(function(o){
      var b = document.createElement("button");
      b.type = "button";
      b.className = o[0] === LANG ? "ativo" : "";
      b.title = { pt:"Português (Brasil)", en:"English", es:"Español" }[o[0]];
      b.textContent = o[2];
      b.setAttribute("lang", o[0]);
      b.onclick = function(){
        salvar(o[0]);
        var u = new URL(location.href);
        u.searchParams.set("lang", o[0]);
        location.href = u.toString();
      };
      box.appendChild(b);
    });
    var menu = document.getElementById("menu-btn");
    alvo.insertBefore(box, menu);
  }
})();
