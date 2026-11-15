/* Português (Brasil) — idioma base. Os textos fixos da página
   já estão em português no index.html; aqui ficam só os textos
   gerados pelo app.js. */
window.I18N = window.I18N || {};
window.I18N.pt = {
  ui: {
    "idioma":"Idioma",
    "site.nome":"Guia Pirate Storm BR",
    "site.titulo":"Guia Pirate Storm BR — Navios, Canhões, Kits e Eventos",
    "tab.inicio":"Início","tab.navios":"Navios","tab.comparar":"Comparar Navios","tab.armas":"Armamento","tab.kits":"Kits & Melhorias",
    "tab.battlegrounds":"Battlegrounds","tab.bonus":"Mapas Bônus","tab.eventos":"Eventos","tab.novatos":"Guia do Novato","tab.mapa":"Mapa & Níveis",

    "poder":"Nível de poder","canhoes":"Canhões","arpoes":"Arpões","max":"máx","todos":"Todos",
    "f.hp":"HP (base)","f.hpMax":"🏆 HP MÁXIMO","c.hpMax":"HP máx","comp.hp":"PV (HP)","comp.total":"Total de bônus","f.canBase":"Canhões (base)","f.arpBase":"Lançadores (base)",
    "f.canDeck":"Canhões no deque próprio","f.arpDeck":"Lançadores no deque próprio",
    "f.canMax":"🏆 Canhões MÁXIMO","f.arpMax":"🏆 Lançadores MÁXIMO",
    "f.vb":"Velocidade base","f.vm":"Velocidade máx.","f.alc":"Alcance de armas","f.esq":"Esquiva crítica","f.res":"Resist. crítica","f.decks":"Conveses","f.def":"Defesa",
    "nos":"nós","preco":"Preço","comoObter":"Como obter","dequeExcl":"Deque exclusivo","lancadores":"lançadores","canhoesMin":"canhões",
    "disponivelEm":"Disponível em","kitRec":"Kit recomendado","naoConf":"\"—\" indica dado ainda não confirmado pela comunidade.",

    "c.navio":"Navio","c.tipo":"Tipo","c.canMax":"Canhões máx","c.arpMax":"Arpões máx","c.vm":"Vel. máx","c.alc":"Alcance","c.crit":"Crít. %",
    "lancArpao":"Lançadores de arpão",
    "calc.deque":"Deque","calc.nenhum":"— nenhum —","calc.lanc":"Lançadores",
    "calc.nota":"Valores somam o máximo base do navio e os deques escolhidos. Confira no jogo se o deque cabe no seu navio (veja \"Serve em\" na aba Kits).",

    "a.nome":"Nome","a.dano":"Dano base","a.disp":"Dispersão","a.afundar":"Ao afundar","a.origem":"Como obter","a.obs":"Observação",
    "perde":"Pode perder","perm":"Permanente",
    "of.base":"Canhão de partida","of.etapa":"Etapa","of.ouro":"Ouro","of.mat":"Materiais",
    "b.municao":"Munição","b.critC":"Chance crítica","b.critB":"Bônus crítico","b.uso":"Uso","arpao":"Arpão",
    "k.item":"Item","k.efeito":"Efeito",
    "d.deque":"Deque","d.secao":"Seção","d.serve":"Serve em","d.onde":"Onde conseguir","d.tipo":"Tipo","afund":"Afundável","inafund":"Inafundável",

    "ev.breve":"Em breve","ev.comeca":"Começa em","ev.agora":"Acontecendo agora","ev.termina":"Termina em","ev.fim":"Encerrado",
    "ev.oficial":"Anúncio oficial →","agoraCurto":"agora",
    "ev.nenhum":"Nenhum evento com data confirmada no momento. Confira os anúncios abaixo.",
    "ev.att":"🔄 Anúncios atualizados automaticamente do fórum oficial. Última atualização: <strong>{d}</strong>.",
    "ev.semFeed":"Ainda não há anúncios carregados. Rode o script de atualização (veja LEIAME.md).",

    "z.zona":"Zona","z.chefes":"Chefes / NPCs principais","n.nivel":"Nível","n.xp":"XP necessária",
    "s.navios":"navios catalogados","s.deques":"deques","s.zonas":"zonas","s.eventos":"tipos de evento",

    "bs.navio":"Navio","bs.canhao":"Canhão · dano","bs.lanc":"Lançador de arpão · dano","bs.oficina":"Oficina (Workshop)",
    "bs.oficinaS":"Melhorar canhões e lançadores","bs.municao":"Munição","bs.deque":"Deque","bs.evento":"Evento","bs.zona":"Zona",
    "bs.casa":"Casa","bs.itemBG":"Item BG","bs.mapaBonus":"Mapa bônus","bs.ondas":"ondas","bs.onda":"onda","bs.nada":"Nada encontrado",

    "ad.placeholder":"Espaço de anúncio ({s}) — configure seu ID do AdSense em js/config.js",

    "bg.todas":"Todas","bg.casa":"Casa","bg.peca":"Peça","bg.bonusSet":"Bônus do conjunto","bg.acumula":"Os bônus se acumulam: com 6 peças você tem todos.",
    "bg.moedas":"Moedas","bg.modo":"Modo","bg.como":"Como funciona","bg.premio":"🏅 Prêmio por partida","bg.efeitoEst":"Efeito / Estatísticas",
    "tipo.navio":"navio","tipo.deque":"deque","tipo.deque / conjunto Águia":"deque / conjunto Águia","tipo.canhão":"canhão","tipo.lançador":"lançador",
    "tipo.munição":"munição","tipo.foguete":"foguete","tipo.buff":"buff","tipo.equipamento":"equipamento","tipo.vela":"vela","tipo.conjunto Águia":"conjunto Águia",

    "mb.mapa":"Mapa","mb.dif":"Dificuldade","mb.ondas":"Ondas","mb.inimigos":"Inimigos","mb.chefe":"Chefe final",
    "mb.xp":"XP total (aprox.)","mb.ouro":"Ouro total (aprox.)","mb.recomp":"🎁 Recompensas especiais","mb.onda":"Onda","mb.ondasN":"{n} ondas",
    "mb.nota":"Valores por inimigo (mín–máx). ❤️ HP · 💥 dano · ⭐ XP · 🪙 ouro.",

    "g.ativ":"🎯 Atividades","g.mapas":"🗺️ Mapas","g.itens":"🎁 Itens","g.precoOrig":"Preço / origem","g.kits":"🧰 Kits (conjuntos)","g.pecas":"Peças",

    "tl.sazonal":"Eventos sazonais","tl.bg":"Battleground weeks","tl.pvp":"Temporada PvP","tl.hoje":"Hoje",
    "tl.toque":"Toque numa barra para ver os detalhes.","tl.conf":"Confirmado","tl.est":"Estimativa",
    "tl.verGuia":"Ver itens, kits e mapas ↓","tl.verCasa":"Ver itens da casa →","tl.proximos":"📋 Próximos eventos",
    "tl.detalhes":"Detalhes","tl.itens":"Itens","tl.agora":"🟢 acontecendo agora","tl.amanha":"começa amanhã","tl.emDias":"em {n} dias"
  }
};
