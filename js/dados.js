/* =========================================================
   BASE DE DADOS DO GUIA
   Fontes: wiki de fãs (pirate-storm.fandom.com) e fórum
   oficial (board-en.piratestorm.com). Valores podem mudar
   no jogo; null = dado ainda não confirmado.
   ========================================================= */

window.CATEGORIAS = {
  basico:  { nome: "Básico",        cor: "#4fa3d1", desc: "Sempre à venda no Mercador." },
  missao:  { nome: "Missão",        cor: "#5cb85c", desc: "Liberado ao completar uma série de missões." },
  pvp:     { nome: "Warmaster (PvP)", cor: "#d9534f", desc: "Liberado pela patente PvP; pago em caveiras." },
  arena:   { nome: "Arena",         cor: "#9b59b6", desc: "Liberado por pontos de Arena." },
  evento:  { nome: "Evento",        cor: "#f0ad4e", desc: "Disponível durante eventos sazonais." },
  guilda:  { nome: "Guilda",        cor: "#1abc9c", desc: "Requer guilda no Top 10 mensal." },
  leilao:  { nome: "Leilão",        cor: "#95a5a6", desc: "Aparece em leilões especiais." }
};

/* hp, can (canhões), arp (lançadores de arpão), vb (vel. base),
   vm (vel. máx), alc (alcance), crit (esquiva/resist. crítica %) */
window.NAVIOS = [
  { id:"sloop", nome:"Sloop (Chalupa)", cat:"basico", preco:"900–1.000 Ouro",
    obter:"Navio inicial — todo jogador começa com ele.",
    hp:2500, can:10, arp:10, vb:5.5, vm:9.2, alc:200, crit:0, decks:"—", deckProprio:null, tier:1,
    desc:"Pequeno, com um único convés. Não é rápido nem resistente: serve para aprender o básico." },
  { id:"brig", nome:"Brigantine (Bergantim)", cat:"basico", preco:"150.000 Ouro",
    obter:"Mercador, sempre disponível.",
    hp:4500, can:20, arp:20, vb:5.6, vm:11.1, alc:200, crit:0, decks:"Inferior / Meio", deckProprio:null, tier:1,
    desc:"Dois mastros, aguenta mau tempo. Bom primeiro upgrade, mas fraco em combate." },
  { id:"warbrig", nome:"War Brigantine", cat:"basico", preco:"1.000.000 Ouro",
    obter:"Mercador, sempre disponível.",
    hp:6000, can:30, arp:30, vb:5.6, vm:12, alc:200, crit:0, decks:"Inferior / Meio", deckProprio:null, tier:1,
    desc:"O bergantim feito para guerra. Meta recomendada para novatos: junte ouro para ele." },
  { id:"frigate", nome:"Frigate (Fragata)", cat:"basico", preco:"25.000 Diamantes",
    obter:"Mercador ou leilão diário de ouro (prefira o leilão!).",
    hp:8000, can:50, arp:40, vb:5.6, vm:13.3, alc:200, crit:2, decks:"Inferior / Meio / Superior", deckProprio:null, tier:2,
    desc:"Navio de guerra versátil para qualquer situação de combate." },
  { id:"largefrigate", nome:"Large Frigate", cat:"basico", preco:"80.000 Diamantes",
    obter:"Mercador ou leilão diário de ouro (não compre com diamantes!).",
    hp:12000, can:60, arp:30, vb:5.6, vm:14.1, alc:200, crit:4, decks:"Inferior / Meio / Superior", deckProprio:null, tier:2,
    desc:"A nau capitânia definitiva entre os navios comuns." },
  { id:"dhuka", nome:"Dhuka", cat:"missao", preco:"3.000.000 Ouro",
    obter:"Complete as missões do Imediato (First Mate) em Oasia (z8B) e Gusty Cliffs (z11) até abrir o mapa bônus Cienega.",
    hp:null, can:null, arp:null, vb:null, vm:null, alc:null, crit:null, decks:"—", deckProprio:null, tier:2,
    desc:"Muito recomendado pela comunidade como navio intermediário barato." },
  { id:"cordone", nome:"Cordone", cat:"missao", preco:"100.000 Diamantes",
    obter:"Complete todas as missões do Mar de Dunas (Dune Sea).",
    hp:null, can:null, arp:null, vb:null, vm:null, alc:null, crit:null, decks:"—", deckProprio:null, tier:3, desc:"" },
  { id:"piranha", nome:"\"Piranha\" Battle Frigate", cat:"pvp", preco:"500 Caveiras",
    obter:"Alcançar a patente PvP 9 (Ensign).",
    hp:9750, can:55, arp:45, vb:5.6, vm:14.1, alc:200, crit:4, decks:"Inferior / Meio / Superior", deckProprio:"Front Battle", tier:2,
    desc:"Muitos slots de canhão por um preço baixo. Excelente para quem começa no PvP." },
  { id:"barracuda", nome:"\"Barracuda\" Battle Frigate", cat:"pvp", preco:"5.500 Caveiras",
    obter:"Alcançar a patente PvP 5 (Sea Lion).",
    hp:13000, can:66, arp:42, vb:5.6, vm:14.1, alc:200, crit:4, decks:"Inferior / Meio / Superior", deckProprio:"Front Battle", tier:3, desc:"" },
  { id:"orca", nome:"\"Orca\" Battle Frigate", cat:"pvp", preco:"9.000 Caveiras",
    obter:"Alcançar a patente PvP 2 (Sea Terror).",
    hp:13750, can:78, arp:40, vb:5.6, vm:14.1, alc:200, crit:6, decks:"Inferior / Meio / Superior", deckProprio:"Mighty Battle", tier:3, desc:"" },
  { id:"baphomet", nome:"\"Baphomet\" Battle Frigate", cat:"pvp", preco:"15.000 Caveiras",
    obter:"Recompensa da Temporada PvP I (não está mais disponível).",
    hp:null, can:null, arp:null, vb:null, vm:null, alc:235, crit:null, decks:"—", deckProprio:"Mighty Battle", tier:3, desc:"" },
  { id:"baal", nome:"\"Baal\" Battle Frigate", cat:"pvp", preco:"15.000 Caveiras",
    obter:"Recompensa da Temporada PvP II (não está mais disponível).",
    hp:null, can:null, arp:null, vb:null, vm:null, alc:null, crit:null, decks:"—", deckProprio:"Mighty Battle", tier:3, desc:"" },
  { id:"devastator", nome:"Devastator", cat:"arena", preco:"10–11 milhões de Ouro",
    obter:"10 pontos de Arena no 1vs1 (uma vitória).",
    hp:6750, can:50, arp:40, vb:5.6, vm:13.3, alc:200, crit:2, decks:"Inferior / Meio / Superior", deckProprio:"Arena Tween", tier:2,
    desc:"Caro e com pouco HP para o preço no início do jogo." },
  { id:"gladiator", nome:"Gladiator", cat:"arena", preco:"40.000 Diamantes",
    obter:"3.000 pontos de Arena no 2vs2.",
    hp:14000, can:80, arp:10, vb:5.6, vm:14.1, alc:200, crit:8, decks:"Inferior / Meio / Superior", deckProprio:"Arena Tween", tier:3, desc:"" },
  { id:"dow", nome:"Destroyer of Worlds (DOW)", cat:"arena", preco:"1 Diamante",
    obter:"Vencer uma temporada de Arena (1vs1, 2vs2 ou 3vs3).",
    hp:14500, can:90, arp:50, vb:5.6, vm:14.1, alc:220, crit:10, decks:"Inferior / Meio / Superior", deckProprio:"Arena Tween", tier:4,
    desc:"O troféu máximo da Arena, com maior alcance (220)." },
  { id:"paladin", nome:"Paladin", cat:"guilda", preco:"55.000 Diamantes",
    obter:"Estar em guilda Top 10 desde antes do dia 15 do mês anterior (ou esperar dia de navios pela metade do preço).",
    hp:null, can:null, arp:null, vb:null, vm:null, alc:null, crit:null, decks:"—", deckProprio:null, tier:3, desc:"" },
  { id:"ahab", nome:"Ahab", cat:"evento", preco:"40.000 Diamantes",
    obter:"Eventos \"Thrill of the Hunt\" / \"Monster Hunt\".",
    hp:null, can:null, arp:null, vb:null, vm:null, alc:null, crit:null, decks:"—", deckProprio:null, tier:3, desc:"" },
  { id:"buthu", nome:"Large Buthu Frigate", cat:"evento", preco:"65.000 Diamantes + 80 moedas Buthu",
    obter:"Battleground Buthu (Death Jaunt).",
    hp:12000, can:60, arp:30, vb:5.6, vm:14.1, alc:200, crit:5, decks:"Inferior / Meio / Superior", deckProprio:null, tier:3,
    desc:"Faz parte do set Scorpion Power." },
  { id:"arachne", nome:"Arachne", cat:"evento", preco:"85.000 Diamantes + 120 moedas Anansi",
    obter:"Battleground Anansi (Spider Bay).",
    hp:13500, can:70, arp:40, vb:5.6, vm:14.1, alc:200, crit:5, decks:"Inferior / Meio / Superior", deckProprio:null, tier:3,
    desc:"Bônus de +7% de dano a navios nos battlegrounds." },
  { id:"godfather1", nome:"Godfather I", cat:"evento", preco:"150.000 Diamantes",
    obter:"Não está mais disponível.",
    hp:null, can:null, arp:null, vb:null, vm:null, alc:null, crit:null, decks:"—", deckProprio:"Terror", tier:4, desc:"" },
  { id:"godfather2", nome:"Godfather II", cat:"evento", preco:"125.000 Diamantes",
    obter:"Evento de Halloween (outubro).",
    hp:null, can:null, arp:null, vb:null, vm:null, alc:null, crit:null, decks:"—", deckProprio:"Terror", tier:4, desc:"" },
  { id:"frostbrand", nome:"Frostbrand", cat:"evento", preco:"12–15 milhões de Ouro",
    obter:"Evento de Inverno \"Attack of the Frostwolves\" (dezembro).",
    hp:null, can:null, arp:null, vb:null, vm:null, alc:null, crit:null, decks:"—", deckProprio:"Sleetshine", tier:3,
    desc:"Comprado com ouro — ótima opção de navio de evento sem gastar diamantes. O deque Sleetshine adiciona 40 canhões e 36 lançadores." },
  { id:"fist", nome:"Fist of Icegard", cat:"evento", preco:"200.000 Diamantes",
    obter:"Evento de Inverno (descontos de até 100% nos mapas bônus).",
    hp:null, can:null, arp:null, vb:null, vm:null, alc:null, crit:6, decks:"—", deckProprio:"Iceberg", tier:4, desc:"" },
  { id:"blizzard", nome:"Blizzard", cat:"evento", preco:"200.000 Diamantes",
    obter:"Evento de Inverno (descontos de até 100% nos mapas bônus).",
    hp:12000, can:70, arp:40, vb:5.5, vm:14, alc:200, crit:5, decks:"Inferior / Meio / Superior", deckProprio:null, tier:4,
    desc:"Faz parte do set Might of the Winter (3 peças +2.500 HP, 4 peças +12 canhões, 5 peças +15% de esquiva crítica)." },
  { id:"churning", nome:"Churning Envy", cat:"evento", preco:"200.000 Diamantes",
    obter:"Evento \"Storm of Broken Hearts\" (fevereiro).",
    hp:null, can:null, arp:null, vb:null, vm:null, alc:null, crit:null, decks:"—", deckProprio:"Cruel Venus", tier:4, desc:"" },
  { id:"celeritas", nome:"Wrath of Celeritas", cat:"evento", preco:"225.000 Diamantes",
    obter:"Evento \"Dragon Hunt\" (abril).",
    hp:null, can:null, arp:null, vb:null, vm:null, alc:null, crit:null, decks:"—", deckProprio:"Mushussu", tier:4,
    desc:"Mesma configuração do Dragon's Scorn, com 2 vantagens: +5 lançadores de arpão e +6% de defesa." },
  { id:"ironeagle1", nome:"Iron Eagle I", cat:"evento", preco:"50 Águias",
    obter:"Não está mais disponível.",
    hp:null, can:null, arp:null, vb:null, vm:null, alc:null, crit:null, decks:"—", deckProprio:"Eagle Talon", tier:3, desc:"" },
  { id:"ironeagle2", nome:"Iron Eagle II", cat:"evento", preco:"60 Águias",
    obter:"\"The Great Pirate Tournament\" (abril/verão).",
    hp:null, can:null, arp:null, vb:null, vm:null, alc:null, crit:null, decks:"—", deckProprio:"Eagle Talon", tier:3, desc:"" },
  { id:"valkyrie", nome:"Valkyrie", cat:"evento", preco:"100.000 Diamantes ou 80 Ursus Tokens",
    obter:"Battleground Ursus (Kingsguard).",
    hp:14500, can:80, arp:50, vb:4.5, vm:11.1, alc:200, crit:5, decks:"—", deckProprio:null, tier:3,
    desc:"Muito resistente, mas lento. Faz parte do set Bear's Might." },
  { id:"bloodmoon", nome:"Bloodmoon (Lua de Sangue)", cat:"leilao", preco:"Leilão",
    obter:"Leilão da Lua Cheia (The Full Moon).",
    hp:null, can:80, arp:40, vb:null, vm:null, alc:null, crit:null, decks:"—", deckProprio:"Blood Moon", tier:4,
    desc:"Com o set Lua ganha +20 canhões (em vez de +15)." },
  { id:"dragonscorn", nome:"Dragon's Scorn", cat:"leilao", preco:"200.000 Diamantes",
    obter:"Somente no leilão de navios \"Smuggler's Bay\".",
    hp:null, can:null, arp:null, vb:null, vm:null, alc:null, crit:null, decks:"—", deckProprio:"Mushussu", tier:4, desc:"" }
];

/* ---------------- ARMAMENTO ---------------- */
/* Lista completa, do mais fraco ao mais forte (dano base / dispersão).
   melhor:true = destaque como topo de linha. */
window.CANHOES = [
  { nome:"6-Pounder",        dano:6,  disp:"80%", perde:true,  origem:"Mercador — 500 Ouro", nota:"Canhão padrão." },
  { nome:"9-Pounder",        dano:9,  disp:"70%", perde:true,  origem:"Mercador — 2.000 Ouro", nota:"" },
  { nome:"10-Pounder",       dano:9,  disp:"70%", perde:false, origem:"Mercador — 150 Diamantes", nota:"Melhor custo-benefício para novatos." },
  { nome:"Little Warrior",   dano:10, disp:"65%", perde:false, origem:"Recompensa PvP", nota:"" },
  { nome:"Steam Hammer",     dano:12, disp:"60%", perde:true,  origem:"Arena 2vs2", nota:"" },
  { nome:"12-Pounder",       dano:12, disp:"60%", perde:false, origem:"Mercador — 4.000 Diamantes", nota:"" },
  { nome:"Iron Hail",        dano:12, disp:"40%", perde:false, origem:"Mapa bônus Bloody Hook", nota:"" },
  { nome:"Panther Fang",     dano:15, disp:"60%", perde:true,  origem:"Battleground Pentar / Torneio", nota:"" },
  { nome:"Frost Bite",       dano:15, disp:"50%", perde:true,  origem:"Evento de Inverno", nota:"" },
  { nome:"18-Pounder",       dano:15, disp:"50%", perde:false, origem:"Mercador — 6.000 Diamantes / Shooting Match", nota:"" },
  { nome:"Dragon Rage",      dano:15, disp:"40%", perde:false, origem:"Evento Dragon Hunt", nota:"" },
  { nome:"Hole Maker",       dano:16, disp:"60%", perde:false, origem:"Mapa bônus Black Rum / Bloody Hook", nota:"" },
  { nome:"Ice Storm",        dano:16, disp:"50%", perde:false, origem:"Evento de Inverno", nota:"" },
  { nome:"Great Warrior",    dano:16, disp:"50%", perde:false, origem:"Recompensa PvP", nota:"" },
  { nome:"Peacemaker",       dano:16, disp:"40%", perde:false, origem:"Mapa bônus Shooting Match", nota:"Pode virar Bombástico na Oficina." },
  { nome:"Eagle Cannon",     dano:16, disp:"20%", perde:false, origem:"Battlegrounds / Torneio", nota:"Menor dispersão do jogo. Pode virar Bombástico na Oficina." },
  { nome:"Inhuman Shriek",   dano:17, disp:"45%", perde:false, origem:"Arena 1vs1", nota:"Pode virar Bombástico na Oficina." },
  { nome:"Sound Breaker",    dano:17, disp:"40%", perde:false, origem:"Battleground Kirus (120 moedas, 9.000 💎)", nota:"Pode virar Bombástico na Oficina." },
  { nome:"Moonsteel Cannon", dano:18, disp:"45%", perde:false, origem:"Leilão Smuggler's Bay / Lua Cheia", nota:"Pode virar Bombástico na Oficina." },
  { nome:"💀 Bombástico (The Bombastic)", dano:19, disp:"30%", perde:false, melhor:true,
    origem:"Mapa bônus Voodoo Skull (mín. 5 por conclusão) ou Oficina",
    nota:"O MELHOR canhão do jogo. Depois de conseguir, suba o nível dele na Oficina (até nível 3)." }
];
window.CANHOES_EVENTO = ["Nor'easter (Inverno)", "Furnace (Black Rum)", "Canhões de mapas bônus de evento (Black-Ice Ballad, Frosty Death)"];

window.LANCADORES = [
  { nome:"Lançador Classe I",    dano:6,  disp:"80%", perde:true,  origem:"Mercador — 475 Ouro", nota:"" },
  { nome:"Lançador Classe II",   dano:9,  disp:"70%", perde:true,  origem:"Mercador", nota:"" },
  { nome:"Stable Harpoon Thrower", dano:9, disp:"70%", perde:false, origem:"Mercador (diamantes)", nota:"Versão permanente do Classe II." },
  { nome:"Lançador Classe III",  dano:12, disp:"60%", perde:false, origem:"Mercador / recompensa dos 4 mapas bônus", nota:"" },
  { nome:"Scorpio",              dano:12, disp:"40%", perde:false, origem:"Mapa bônus Bloody Hook (Repeating)", nota:"" },
  { nome:"Fang / Talon Axe",     dano:15, disp:"60%", perde:true,  origem:"Battleground Sobek / Torneio", nota:"" },
  { nome:"Lançador Classe IV",   dano:15, disp:"50%", perde:false, origem:"Mercador / Shooting Match", nota:"" },
  { nome:"Reptile Sling (Scorpion)", dano:16, disp:"60%", perde:false, origem:"Mapa bônus Black Rum", nota:"" },
  { nome:"Manticore",            dano:16, disp:"40%", perde:false, origem:"Mapa bônus Shooting Match", nota:"" },
  { nome:"Sting / Poison Barb",  dano:17, disp:"40%", perde:false, origem:"Battleground Buthu (30 moedas, 8.000 💎)", nota:"" },
  { nome:"Blood Moon Ballista",  dano:18, disp:"30%", perde:false, origem:"Leilão Smuggler's Bay / Lua Cheia", nota:"" },
  { nome:"💀 Prego de Caixão (Coffin Nailer)", dano:19, disp:"30%", perde:false, melhor:true,
    origem:"Mapa bônus Voodoo Skull (mín. 5 por conclusão)",
    nota:"O MELHOR lançador de arpão do jogo. Depois de conseguir, suba o nível dele na Oficina." }
];

/* ---------------- OFICINA (Workshop) ---------------- */
window.OFICINA = {
  regras: [
    "Canhões e lançadores têm <strong>níveis de 1 a 5</strong>. Cada melhoria aumenta o dano ou diminui a dispersão.",
    "Só dá para melhorar armas que estão no <strong>inventário</strong> (tire do navio antes).",
    "O tipo de melhoria é sorteado: <strong>Normal</strong> (mais comum) melhora a arma; <strong>Eficiente</strong> melhora e devolve parte dos materiais; <strong>Superior</strong> transforma a arma na categoria seguinte (ex.: 12-Pounder → 18-Pounder).",
    "Quando a arma chega ao nível máximo da categoria, a próxima melhoria é sempre Superior.",
    "O Ferreiro tem 5 níveis: armas melhores pedem um ferreiro de nível mais alto. Treinar o ferreiro custa ouro e libera mais espaços de melhoria.",
    "Uma melhoria iniciada não pode ser cancelada. Dá para terminar na hora pagando diamantes."
  ],
  bombastico: {
    titulo:"Como transformar um canhão em Bombástico",
    base:"Sound Breaker, Moonsteel Cannon, Inhuman Shriek, Eagle Cannon ou Peacemaker (nível 1)",
    passos: [
      ["Nível 1 → Nível 2", "1.026.000 🪙", "9 Carvalho, 9 Lingotes de Prata, 9 Aço Lunar"],
      ["Nível 2 → Nível 3", "1.420.250 🪙", "10 Carvalho, 10 Lingotes de Prata, 10 Aço Lunar"],
      ["Nível 3 → Bombástico (Superior)", "2.200.000 🪙", "10 Carvalho, 10 Lingotes de Prata, 11 Aço Lunar"],
      ["Total", "4.646.250 🪙", "29 Carvalho, 29 Lingotes de Prata, 30 Aço Lunar"]
    ]
  },
  dica:"Prioridade de end game: farme o Voodoo Skull para juntar Bombásticos e Pregos de Caixão (vêm no mínimo 5 de cada, mais 25 Essence of Fire) e depois suba o nível deles na Oficina. Valores de custo são de 2014 e podem ter mudado."
};

window.BALAS = [
  { nome:"Bala de Pedra", preco:"10 Ouro / un.",     dano:1,  crit:"5%",  bonus:"2%",  nota:"Básica, para farm leve." },
  { nome:"Bala de Ferro", preco:"27 Ouro / un.",     dano:2,  crit:"10%", bonus:"2%",  nota:"Padrão para batalhas navais." },
  { nome:"Bala de Aço",   preco:"1 Diamante / un.",  dano:10, crit:"15%", bonus:"10%", nota:"Precisão e dano máximo (PvP/chefes)." }
];
window.ARPOES = [
  { nome:"Arpão",          preco:"10 Ouro / un.",    dano:1,  nota:"Simples, uma ponta." },
  { nome:"Arpão Farpado",  preco:"30 Ouro / un.",    dano:2,  nota:"Duas farpas, mais dano." },
  { nome:"Arpão de Garra", preco:"1 Diamante / un.", dano:10, nota:"O mais forte contra monstros." }
];

/* ---------------- MELHORIAS (KITS) ---------------- */
window.MELHORIAS = {
  "Figuras de Proa": [
    { nome:"Andarta", preco:"80.000 Ouro", efeito:"Recarga de canhão -5%, recarga de arpão -5%" },
    { nome:"Astarte", preco:"10.000 Diamantes", efeito:"Recarga de canhão -10%" },
    { nome:"Nornen",  preco:"10.000 Diamantes", efeito:"Dispersão de canhão -10%, dispersão de arpão -10%" },
    { nome:"Oya",     preco:"10.000 Diamantes", efeito:"Alcance de canhão +10%, alcance de arpão +10%" }
  ],
  "Anteparas (Bulkheads)": [
    { nome:"Simple Bulkhead", preco:"100.000 Ouro", efeito:"HP máximo +1.200" },
    { nome:"Steel Bulkhead",  preco:"12.000 Diamantes", efeito:"HP máximo +3.150" }
  ],
  "Quilhas (Keels)": [
    { nome:"Simple Keel",     preco:"200.000 Ouro", efeito:"Velocidade +0,4 nós, HP +500" },
    { nome:"Reinforced Keel", preco:"10.000 Diamantes", efeito:"Velocidade +0,7 nós, HP +1.200" }
  ],
  "Âncoras": [
    { nome:"Improvised Anchor", preco:"60.000 Ouro", efeito:"Ouro recebido +5%" },
    { nome:"Cast-Iron Anchor",  preco:"6.000 Diamantes", efeito:"Ouro recebido +10%" }
  ],
  "Velas": [
    { nome:"Rugged Hemp Sails",  preco:"5.000 Ouro", efeito:"Velocidade +3,7 nós" },
    { nome:"Rugged Linen Sails", preco:"30.000 Ouro", efeito:"Velocidade +5,6 nós" },
    { nome:"Hemp Sails",         preco:"3.000 Diamantes", efeito:"Velocidade +6,3 nós" },
    { nome:"Linen Sails",        preco:"6.000 Diamantes", efeito:"Velocidade +7,8 nós" }
  ]
};

window.DEQUES = [
  /* afundavel: false = não se perde ao afundar */
  { nome:"Lower Beech",     onde:"Ano todo",               serve:"Todos os navios",              can:4,  arp:0,  sec:"Inferior", afundavel:true },
  { nome:"Middle Beech",    onde:"Ano todo",               serve:"Todos os navios",              can:4,  arp:0,  sec:"Meio", afundavel:true },
  { nome:"Upper Beech",     onde:"Ano todo",               serve:"Navios com convés superior",   can:10, arp:12, sec:"Superior", afundavel:true },
  { nome:"Lower Mahogany",  onde:"Ano todo",               serve:"Todos os navios",              can:8,  arp:4,  sec:"Inferior", afundavel:true },
  { nome:"Middle Mahogany", onde:"Ano todo",               serve:"Todos os navios",              can:8,  arp:4,  sec:"Meio", afundavel:true },
  { nome:"Upper Mahogany",  onde:"Ano todo",               serve:"Navios com convés superior",   can:8,  arp:4,  sec:"Superior", afundavel:true },
  { nome:"Storm",           onde:"Dia 1º de cada mês",     serve:"Navios com convés superior",   can:14, arp:0,  sec:"Superior", afundavel:true },
  { nome:"Dragon's Wing",   onde:"Dragon Hunt (abril)",    serve:"Todos os navios",              can:18, arp:0,  sec:"Própria", afundavel:true },
  { nome:"Front Battle",    onde:"Ano todo",               serve:"Todas as Battle Frigates",     can:14, arp:2,  sec:"Frontal", afundavel:false },
  { nome:"Mighty Battle",   onde:"Ano todo",               serve:"Orca Battle Frigate",          can:10, arp:12, sec:"Própria", afundavel:false },
  { nome:"Arena Tween",     onde:"Temporada de Arena",     serve:"Navios de Arena",              can:14, arp:2,  sec:"Própria", afundavel:false },
  { nome:"Guild",           onde:"Top 10 ilhas de guilda (mensal)", serve:"Todos os navios",     can:10, arp:6,  sec:"Própria", afundavel:false },
  { nome:"Caçador (Hunter)",onde:"Eventos de caça (Thrill of the Hunt)", serve:"Todos os navios",  can:0,  arp:12, sec:"Própria", afundavel:false },
  { nome:"Blood Moon",      onde:"Leilão da Lua Cheia (mensal)", serve:"Todos os navios do estaleiro", can:12, arp:12, sec:"Própria", afundavel:false },
  { nome:"Reef",            onde:"BG Lodos (300 moedas) / Great Pirate Tournament — 35.000 💎", serve:"Navios com seção frontal", can:6,  arp:6,  sec:"Frontal", afundavel:false },
  { nome:"Paws Quarterdeck",onde:"BG Ursus — Kingsguard",  serve:"Navios com seção frontal",     can:12, arp:4,  sec:"Frontal", afundavel:false },
  { nome:"Booming Thunder", onde:"BG Anansi (200 moedas) — 20.000 💎", serve:"Navios com seção traseira", can:2, arp:18, sec:"Traseira", afundavel:false },
  { nome:"Lower Sobek",     onde:"BG Sobek (120 moedas) — 45.000 💎",  serve:"Navios com convés inferior", can:10, arp:6, sec:"Inferior", afundavel:false },
  { nome:"Middle Panther",  onde:"BG Pentar (120 moedas) — 20.000 💎", serve:"Navios com convés do meio",  can:10, arp:6, sec:"Meio", afundavel:false },
  { nome:"Upper Barbed",    onde:"BG Buthu (120 moedas) — 40.000 💎",  serve:"Navios com convés superior", can:10, arp:6, sec:"Superior", afundavel:false },
  { nome:"Torture",         onde:"Halloween (outubro)",    serve:"Navios com seção frontal",     can:5,  arp:7,  sec:"Frontal", afundavel:false },
  { nome:"Terror",          onde:"Halloween (outubro)",    serve:"Godfather I/II",               can:12, arp:12, sec:"Própria", afundavel:false },
  { nome:"Iceberg",         onde:"Inverno (dezembro) — 45.000 Diamantes", serve:"Fist of Icegard", can:8, arp:6, sec:"Própria", afundavel:false },
  { nome:"Sleetshine",      onde:"Inverno (dezembro) — 80.000 Diamantes + 110.000 pts de invasão", serve:"Frostbrand", can:40, arp:36, sec:"Própria", afundavel:false },
  { nome:"Cruel Venus",     onde:"Valentine's (fevereiro)", serve:"Churning Envy",               can:10, arp:12, sec:"Própria", afundavel:false },
  { nome:"Mushussu",        onde:"Dragon Hunt (abril)",    serve:"Dragon's Scorn, Wrath of Celeritas", can:10, arp:12, sec:"Própria", afundavel:false }
];

/* Kits recomendados por fase (sugestão do guia, baseada nos dados acima) */
window.KITS = [
  { fase:"Iniciante", navios:"Sloop → Brigantine → War Brigantine", cor:"#4fa3d1",
    itens:[
      ["Canhões","6-Pounder e 9-Pounder (ouro). Assim que der, troque por 10-Pounder (150 💎, nunca se perde)."],
      ["Lançadores","Classe 1 para caçar monstros nas zonas iniciais."],
      ["Munição","Bala de Ferro para combate, Pedra para farm. Arpão Farpado nos monstros."],
      ["Vela","Rugged Linen Sails (30.000 ouro)."],
      ["Antepara / Quilha","Simple Bulkhead + Simple Keel (ouro)."],
      ["Figura de proa","Andarta (80.000 ouro)."],
      ["Âncora","Improvised Anchor: +5% de ouro desde cedo."],
      ["Deques","Beech/Mahogany conforme os slots do navio."]
    ]},
  { fase:"Intermediário", navios:"Frigate, Dhuka, Piranha, Devastator", cor:"#5cb85c",
    itens:[
      ["Canhões","10-Pounder em massa; comece a comprar 12-Pounder."],
      ["Munição","Ferro no farm, Aço no PvP e chefes. Arpão de Garra só em chefes."],
      ["Vela","Hemp Sails (3.000 💎)."],
      ["Antepara / Quilha","Melhorias de batalha (Battle Bulkheads/Keel) ou Steel Bulkhead + Reinforced Keel."],
      ["Figura de proa","Astarte (recarga -10%) para dano contínuo."],
      ["Âncora","Cast-Iron Anchor (+10% ouro)."],
      ["Deques","Front Battle (Battle Frigates), deques de Battleground e Storm (dia 1º)."],
      ["Selos","Desbloqueie o Perforator (página 3 do Scroll of Power): +dano de canhão."]
    ]},
  { fase:"End Game (completo)", navios:"Navios de evento, Orca, Gladiator, DOW…", cor:"#f0ad4e",
    itens:[
      ["Canhões","💀 Bombástico (Voodoo Skull), melhorado na Oficina."],
      ["Lançadores","💀 Prego de Caixão (Voodoo Skull), melhorado na Oficina."],
      ["Kit Halloween (Poder dos Espíritos)","Hell Mast + Hum-Bug + Rudder of the Damned + Soul Sails. Com as 4 peças: +1.500 HP, +15 canhões e Maldição Fantasma (12% de chance de deixar o inimigo 45% mais lento por 6 s)."],
      ["Kit Pentar (Panther Power)","Middle Panther Deck + Dark Cry + Nejeret's Figurehead + Obsidian Anchor + Thunder Hull. Com as 5 peças: +1,2 nós, +1.800 HP, +15% de dano crítico e recarga -8%."],
      ["Tabique 1 — Grande Tempestade","Tempest Bulkhead (evento de aniversário): +5.000 HP."],
      ["Tabique 2 — Tabique Águia","Catamount Bulkhead (set Águia, Battleground Pentar): +3.800 HP."],
      ["Munição","Aço + munição de evento (Icebreaker dobra o dano nos mapas do evento)."],
      ["Deques","Deque exclusivo do navio + Guilda, Tempestade, Sobek, Lua de Sangue, Asa do Dragão etc. (veja o máximo na aba Comparar)."]
    ]}
];
window.KIT_ENDGAME_TOTAL = "Só os kits e tabiques somam cerca de +12.100 HP, +15 canhões, +1,2 nós, +15% de dano crítico e -8% de recarga, além da Maldição Fantasma.";

/* ---------------- EVENTOS RECORRENTES ---------------- */
window.CALENDARIO = [
  { mes:"Fevereiro", nome:"Storm of Broken Hearts", desc:"Evento de Dia dos Namorados. Navio Churning Envy e deque Cruel Venus." },
  { mes:"Abril", nome:"Dragon Hunt", desc:"Caça aos dragões. Navio Wrath of Celeritas, deques Mushussu e Dragon's Wing, minigame Pedra-Papel-Tesoura." },
  { mes:"Maio", nome:"The Great Pirate Tournament", desc:"Torneio com moeda Águias. Navio Iron Eagle II e deque Reef." },
  { mes:"Junho", nome:"Talk Like a Pirate Day", desc:"Mapa bônus repetível: seja o último navio a flutuar e derrote 2 chefes." },
  { mes:"Agosto", nome:"Thrill of the Hunt", desc:"Caça a monstros, mapa Ahab's Legacy e navio Ahab (90 lançadores)." },
  { mes:"Agosto", nome:"Celebration of Heroes (Aniversário)", desc:"Aniversário do Pirate Storm, com recompensas especiais." },
  { mes:"Outubro", nome:"Halloween", desc:"Navio Godfather II, deques Terror e Torture." },
  { mes:"Dezembro", nome:"Attack of the Frostwolves (Inverno)", desc:"10 dias de missões, mapas bônus, invasões de ilhas de guilda, minas. Navios Frostbrand, Blizzard e Fist of Icegard." },
  { mes:"Quinzenal", nome:"Battleground Week", desc:"Rotação: Kingsguard, Wrath of Carnage, Death Jaunt, Spider Bay, Thunderball, Pirate's Dominion, Capture the Flag." },
  { mes:"Mensal", nome:"Leilão da Lua Cheia / Deque Storm", desc:"Deque Blood Moon e navio Bloodmoon no leilão; deque Storm no dia 1º." },
  { mes:"Trimestral", nome:"Temporada PvP", desc:"Cerca de 3 meses. Pontos de temporada, caveiras e itens Warmaster." }
];

/* Eventos com data confirmada (atualize quando sair anúncio novo) */
window.EVENTOS_DATADOS = [
  { nome:"Capture the Flag", inicio:"2026-11-16T12:00:00", fim:"2026-11-23T11:59:59",
    desc:"Battleground de captura de bandeira. Medalhas pagas até 24/11; itens na loja até 24/11.",
    link:"https://board-en.piratestorm.com/threads/capture-the-flag.28134/" },
  { nome:"Winter Event — Attack of the Frostwolves 2026", inicio:"2026-12-14T00:00:00", fim:null,
    desc:"Evento de inverno: 10 missões, mapas bônus diários, invasão de ilhas de guilda e navios de gelo.",
    link:"https://board-en.piratestorm.com/threads/winter-event-attack-of-the-frostwolves-2026.28142/" }
];

/* ---------------- ZONAS ---------------- */
window.ZONAS = [
  [1,"Carados",""],[2,"Tillena","The Hammer Fish"],[3,"Bearground","Corbyswart"],[4,"Hel's Gate","Housecarl, Giant Leech"],
  [5,"Ginnungagap","The Abyss Pirate"],[6,"Depths of Nerthus","The Wolf Blade"],[7,"Byrades","The Jack's Swarm"],
  [8,"Angaros","The Robber Baron, The Loot King"],[9,"Tirinic","The Dark Legion, The Dark Dagger"],
  [10,"Bonada","The Sea Thief, The Death Claw"],[11,"Gusty Cliffs","The Disciple of Lykan, Young Colossal Ice Beast (evento)"],
  [12,"Icy Tomb","The Grave Robber, The Sea Worshipper"],[13,"Jarlsheim","The Vandis Trailblazer, The Shelled Octopus"],
  [14,"Rikiki","The Blood Shadow, The Blackwater Lizard"],[15,"Kanassa","The Crimson Shadow, The Wolfjaw"],
  [16,"Centralia","The Agisicker, The Platefish"],[17,"Baku","The Sea Saber, The Sea Scorpion"],
  [18,"Icemount","The Leadspewer, The Watermite"],[19,"Highridge","The Gutterfiend, The Shieldcorper"],
  [20,"Niflheim",""],[21,"Hvergelmir",""],[22,"Isles of Skand",""],[23,"Karuma","Colossal Ice Beast (evento)"],
  [24,"Kubertu",""],[25,"Sadaro",""],[26,"Dadana",""],[27,"Orca Gorge",""],[28,"Fenris' End",""],
  [29,"Nassala",""],[30,"Saverra",""],[31,"Frostwik","Veteran Colossal Ice Beast (evento)"],
  [32,"Lupine Fjords",""],[33,"Frozen Hells",""],[34,"Endless Ice",""]
];

window.NIVEIS = [
  [2,550],[3,4000],[4,5000],[5,6250],[6,7750],[7,9500],[8,11500],[9,13750],[10,16250],
  [11,19000],[12,22000],[13,25250],[14,28750],[15,32500],[16,36500],[17,40750],[18,45250],
  [19,50000],[20,80000],[21,374000],[22,682000],[23,1004000],[24,1340000],[25,1690000],
  [26,2210000],[27,2750000],[28,3310000]
];
