/* =========================================================
   BATTLEGROUNDS, MAPAS BÔNUS e LINHA DO TEMPO DE EVENTOS
   Fontes: fórum oficial (Battlefield Rewards FAQ, FAQs de
   cada modo, FAQ de Set Items, resumos de mapas bônus).
   Preço: 💎 = diamantes, 🪙 = ouro. "Moedas" = quantidade de
   moedas da casa necessária para LIBERAR o item.
   ========================================================= */

window.BATTLEGROUNDS = [
  { casa:"Sobek", animal:"🐊 Crocodilo", cor:"#3d9a4f", modo:"Pirate's Dominion",
    comoJoga:"Times de 8 vs 8 (vermelho × azul). Destrua as muralhas e domine 3 ilhas em anel. Cada ilha dominada dá 1 ponto a cada 2 s; vence quem chegar a 500 pontos ou estiver na frente após 10 min.",
    premio:"Vencedores: 3 moedas Sobek; perdedores: 1; maior dano do time vencedor: 1 Medalha de Águia.",
    itens:[
      { nome:"Lower Sobek Deck", tipo:"deque", moedas:120, preco:"45.000 💎", efeito:"+10 canhões, +6 lançadores, inafundável (convés inferior)" },
      { nome:"Bite of the Gator (×1.000)", tipo:"munição", moedas:20, preco:"2.000 💎", efeito:"Bala contra navios: dano base 10, crítico 16%, bônus crítico 12%" },
      { nome:"Talon Axe", tipo:"lançador", moedas:30, preco:"1.900.000 🪙", efeito:"Lançador contra monstros: dano 15, dispersão 60%, destrutível" },
      { nome:"Icy Bite", tipo:"equipamento", moedas:50, preco:"237.500 🪙", efeito:"Ouro +8%, HP ao restaurar +8%" },
      { nome:"Evasion Maneuver (×10)", tipo:"buff", moedas:10, preco:"3.000 💎", efeito:"Esquiva de crítico +10% por 1 h (recarga 1 h)" },
      { nome:"Sanguine Drool (×10)", tipo:"buff", moedas:40, preco:"3.000 💎", efeito:"Chance de crítico +17% por 1 min (recarga 2 min)" },
      { nome:"Mast Crusher Rocket (×10)", tipo:"foguete", moedas:80, preco:"2.000 💎", efeito:"Velocidade do alvo -30% por 20 s (recarga 1 min)" },
      { nome:"Cayman Armor", tipo:"conjunto Águia", moedas:300, preco:"18.000 💎", efeito:"HP +1.650, velocidade -1,6 nós (set Might of the Eagle)" }
    ]},
  { casa:"Anansi", animal:"🕷️ Aranha", cor:"#c0703a", modo:"Spider Bay",
    comoJoga:"Times de 9 vs 9. Derrube as 3 torres inimigas e depois destrua a base adversária. Se o tempo acabar, vence quem causou mais dano à base.",
    premio:"Moedas Anansi e Medalhas de Águia.",
    itens:[
      { nome:"Arachne (navio)", tipo:"navio", moedas:120, preco:"85.000 💎", efeito:"13.500 HP, 70 canhões, 40 lançadores, +7% de dano a navios em battlegrounds" },
      { nome:"Booming Thunder Deck", tipo:"deque", moedas:200, preco:"20.000 💎", efeito:"+2 canhões, +18 lançadores, inafundável (seção traseira)" },
      { nome:"Anansi Sail", tipo:"vela", moedas:150, preco:"4.750.000 🪙", efeito:"Velocidade +9,3 nós" },
      { nome:"Anansi's Balls (×1.000)", tipo:"munição", moedas:20, preco:"2.000 💎", efeito:"Bala contra navios: dano 10, crítico 16%, bônus crítico 12%" },
      { nome:"Engraved Bell", tipo:"equipamento", moedas:200, preco:"15.000 💎", efeito:"Crítico +5%, esquiva de crítico +5%" },
      { nome:"Arocket-nid (×10)", tipo:"foguete", moedas:140, preco:"5.000 💎", efeito:"Dano 600 em área 150 (recarga 10 min)" },
      { nome:"Thunderclap (×10)", tipo:"buff", moedas:80, preco:"475.000 🪙", efeito:"Dano de foguetes +500 por 1 h (recarga 1 h)" },
      { nome:"Tonatiuh Figurehead", tipo:"conjunto Águia", moedas:300, preco:"20.000 💎", efeito:"Alcance +5%, recarga -10%, dispersão -10% (canhão e arpão)" }
    ]},
  { casa:"Pentar", animal:"🐆 Pantera", cor:"#8e5cc4", modo:"Thunderball",
    comoJoga:"Dois times empurram uma bola gigante com tiros de canhão e foguetes até a zona final adversária. Navios afundados voltam reparados em até 15 s. Vence quem marcar mais pontos.",
    premio:"Vencedores: 1 moeda Pentar.",
    itens:[
      { nome:"Middle Panther Deck", tipo:"deque", moedas:120, preco:"20.000 💎", efeito:"+10 canhões, +6 lançadores, inafundável (convés do meio)" },
      { nome:"Panther Fang", tipo:"canhão", moedas:100, preco:"1.900.000 🪙", efeito:"Canhão contra navios: dano 15, dispersão 60%, destrutível" },
      { nome:"Panther Jaws (×1.000)", tipo:"munição", moedas:20, preco:"2.000 💎", efeito:"Bala contra navios: dano 10, crítico 16%, bônus crítico 12%" },
      { nome:"Creeping Death Rocket (×10)", tipo:"foguete", moedas:60, preco:"6.000 💎", efeito:"500 de dano/s por 10 s (recarga 5 min)" },
      { nome:"Deadly Talon (×10)", tipo:"buff", moedas:30, preco:"3.500 💎", efeito:"Dano crítico +17% por 1 min (recarga 5 min)" },
      { nome:"Overload the Launcher (×10)", tipo:"buff", moedas:10, preco:"285.000 🪙", efeito:"Dano de arpão +20%, reflete 10% do dano, 10 min" },
      { nome:"Emblem of Peace (×10)", tipo:"buff", moedas:40, preco:"3.000 💎", efeito:"Proteção por 6 h (tempo real)" },
      { nome:"Catamount Bulkhead", tipo:"conjunto Águia", moedas:300, preco:"28.500 💎", efeito:"HP +3.800" }
    ],
    extra:"Set Panther Power (evento da pantera): Dark Cry (+10% dano crítico), Nejeret's Figurehead (recarga -12%), Obsidian Anchor e Thunder Hull (+2.000 HP)."},
  { casa:"Lodos", animal:"🦈 Tubarão", cor:"#3a7fc0", modo:"Wrath of Carnage",
    comoJoga:"Time vermelho × azul. Destrua a torre inimiga com canhões e foguetes. Partidas de no máximo 10 minutos.",
    premio:"Vencedores: 3 moedas Lodos; perdedores: 1; maior dano do time vencedor: 1 Medalha de Águia.",
    itens:[
      { nome:"Reef Deck", tipo:"deque / conjunto Águia", moedas:300, preco:"35.000 💎", efeito:"+6 canhões, +6 lançadores (seção frontal)" },
      { nome:"Steel Fin", tipo:"equipamento", moedas:75, preco:"20.000 💎", efeito:"HP +1.800, velocidade +0,7 nós" },
      { nome:"Attack Shark", tipo:"equipamento", moedas:30, preco:"15.000 💎", efeito:"Chance de crítico +6%" },
      { nome:"Sawtooth (×1.000)", tipo:"munição", moedas:10, preco:"2.000 💎", efeito:"Bala contra navios: dano 10, crítico 16%, bônus crítico 12%" },
      { nome:"Ripper Rocket (×10)", tipo:"foguete", moedas:15, preco:"380.000 🪙", efeito:"500–700 de dano, velocidade do alvo -22% por 1 min" },
      { nome:"Quick Reload (×10)", tipo:"buff", moedas:20, preco:"4.000 💎", efeito:"Recarga de canhão -15% por 1 min (recarga 5 min)" },
      { nome:"Shark Hide (×10)", tipo:"buff", moedas:60, preco:"3.000 💎", efeito:"Esquiva de crítico +15% por 1 min (recarga 2 min)" },
      { nome:"Global Maritime Insurance", tipo:"buff", moedas:40, preco:"250 💎", efeito:"Seguro marítimo por 24 h (tempo real)" }
    ]},
  { casa:"Kirus", animal:"🩸 Sangue", cor:"#c0392b", modo:"Capture the Flag",
    comoJoga:"Navegue sobre a bandeira inimiga e leve-a até o ponto da sua. O primeiro time a fazer 5 pontos vence. Invisibilidade ou invencibilidade fazem você perder a bandeira.",
    premio:"Vencedores: 1 moeda Kirus.",
    itens:[
      { nome:"Sound Breaker", tipo:"canhão", moedas:120, preco:"9.000 💎", efeito:"Canhão contra navios: dano 17, dispersão 40%, NÃO se perde" },
      { nome:"Swinging Shot", tipo:"equipamento", moedas:250, preco:"20.000 💎", efeito:"HP +3.650" },
      { nome:"Seaclaw", tipo:"equipamento", moedas:40, preco:"7.500 💎", efeito:"Ouro +10%, chance de preservar deque 25%" },
      { nome:"Lacerating Cannonballs (×1.000)", tipo:"munição", moedas:20, preco:"2.000 💎", efeito:"Bala contra navios: dano 10, crítico 16%, bônus crítico 12%" },
      { nome:"Vampire Rocket (×10)", tipo:"foguete", moedas:50, preco:"4.500 💎", efeito:"2.000–3.000 de dano e rouba 10% como HP (recarga 5 min)" },
      { nome:"Blood Donor (×10)", tipo:"buff", moedas:200, preco:"6.000 💎", efeito:"Recupera 2.000 HP/s por 10 s (recarga 5 min)" },
      { nome:"War Cry (×10)", tipo:"buff", moedas:30, preco:"4.000 💎", efeito:"Dano crítico +14% por 1 h (recarga 1 h)" },
      { nome:"Sonic Bell", tipo:"conjunto Águia", moedas:300, preco:"18.000 💎", efeito:"Crítico +10%, esquiva de crítico +10%" }
    ]},
  { casa:"Buthu", animal:"🦂 Escorpião", cor:"#d4a017", modo:"Death Jaunt",
    comoJoga:"Todos contra todos (mínimo de 8 jogadores). O mapa é dividido em 4 quadrantes; os sobreviventes de cada um se enfrentam quando as barreiras caem. Vence o último navio de pé.",
    premio:"1º lugar: 3 moedas Buthu + 1 Medalha de Águia; 2º–10º: 2 moedas; 11º–20º: 1 moeda.",
    itens:[
      { nome:"Large Buthu Frigate (navio)", tipo:"navio", moedas:80, preco:"65.000 💎", efeito:"12.000 HP, 60 canhões, 30 lançadores, crítico 5%" },
      { nome:"Upper Barbed Deck", tipo:"deque", moedas:120, preco:"40.000 💎", efeito:"+10 canhões, +6 lançadores, inafundável (convés superior)" },
      { nome:"Poison Barb", tipo:"lançador", moedas:30, preco:"8.000 💎", efeito:"Lançador contra monstros: dano 17, dispersão 40%, NÃO se perde" },
      { nome:"Poison Cannonballs (×1.000)", tipo:"munição", moedas:20, preco:"2.000 💎", efeito:"Bala contra navios: dano 10, crítico 16%, bônus crítico 12%" },
      { nome:"Shock Rocket (×10)", tipo:"foguete", moedas:200, preco:"8.000 💎", efeito:"Atordoa em área 160 (recarga 5 min)" },
      { nome:"Scorpion Plates (×10)", tipo:"buff", moedas:60, preco:"8.000 💎", efeito:"Dano recebido -10% por 1 h (recarga 1 h)" },
      { nome:"Gate of the Assassins (×10)", tipo:"buff", moedas:50, preco:"2.000 💎", efeito:"Teletransporte (recarga 5 min)" },
      { nome:"Scorpio Anchor", tipo:"conjunto Águia", moedas:300, preco:"15.000 💎", efeito:"Preserva deque 30%, HP ao restaurar +15%" }
    ],
    extra:"Set Scorpion Power: Assassin Sails, Scorpio Keel (+2.200 HP, +0,7 nós), Spike Mast (+2.000 HP), Tytius Rudder (+4.000 HP). 6 peças: +10 canhões, recarga +16%, dispersão -20%."},
  { casa:"Ursus", animal:"🐻 Urso", cor:"#8d6e63", modo:"Kingsguard",
    comoJoga:"Times de 6 (1 Rei com buff + 5 guardas). Vence quem afundar o Rei adversário. Jogadores afundados soltam caixas que curam o seu Rei.",
    premio:"Ursus Tokens (o Ursus não tem item do set Águia).",
    itens:[
      { nome:"Valkyrie (navio)", tipo:"navio", moedas:"80 tokens", preco:"100.000 💎 ou 80 Ursus Tokens", efeito:"14.500 HP, 80 canhões, 50 lançadores, vel. 4,5–11,1 nós, crítico 5%" },
      { nome:"Paws Quarterdeck", tipo:"deque", moedas:"—", preco:"—", efeito:"+12 canhões, +4 lançadores, inafundável (seção frontal)" },
      { nome:"Bear's Bulkhead", tipo:"equipamento", moedas:"—", preco:"—", efeito:"HP +4.000" },
      { nome:"Ancestor's Plating", tipo:"equipamento", moedas:"—", preco:"—", efeito:"HP +3.500, velocidade -2 nós" },
      { nome:"Figurehead: Brunhilde", tipo:"equipamento", moedas:"—", preco:"—", efeito:"Recarga -10%, reparo -10%, dispersão -5% (canhão e arpão)" }
    ],
    extra:"Set Bear's Might: 3 peças +3.000 HP; 4 peças +3.500 HP e +12 canhões; 5 peças +4.000 HP, +12 canhões e o efeito Bone-Chilling Cold."}
];

/* ---------------- MÁXIMO DE CANHÕES E ARPÕES ----------------
   Fonte: tabelas da comunidade enviadas pelo dono do site.
   [canhões base, canhões do deque próprio, canhões MÁXIMO,
    lançadores base, lançadores do deque próprio, lançadores MÁXIMO]
   null = navio não aparece na tabela correspondente. */
window.MAXIMOS = {
  sloop:        [10, 0,  107, 10, 0,  71],
  brig:         [20, 0,  127, 20, 0,  87],
  warbrig:      [30, 0,  137, 30, 0,  97],
  frigate:      [50, 0,  179, 40, 0,  113],
  largefrigate: [60, 0,  189, 30, 0,  103],
  paladin:      [78, 0,  207, 42, 0,  115],
  dhuka:        [60, 0,  189, 28, 0,  101],
  cordone:      [77, 0,  206, 42, 0,  115],
  ahab:         [15, 0,  144, 90, 0,  163],
  piranha:      [55, 0,  184, 45, 6,  124],
  barracuda:    [66, 0,  195, 42, 6,  121],
  orca:         [78, 10, 217, 40, 12, 125],
  baal:         [82, 10, 221, null, null, null],
  baphomet:     [85, 10, 224, null, null, null],
  devastator:   [50, 14, 193, 40, 2,  115],
  gladiator:    [80, 14, 223, 10, 2,  85],
  dow:          [90, 14, 233, 50, 2,  125],
  arachne:      [70, 0,  199, 40, 0,  113],
  buthu:        [60, 0,  189, null, null, null],
  bloodmoon:    [80, 12, 226, 40, 0,  113],
  fist:         [76, 8,  213, 40, 6,  119],
  frostbrand:   [50, 40, 219, 40, 36, 149],
  blizzard:     [75, 0,  204, 40, 0,  113],
  godfather1:   [70, 12, 211, 40, 12, 125],
  godfather2:   [70, 12, 211, 40, 12, 125],
  dragonscorn:  [76, 10, 215, 50, 12, 135],
  celeritas:    [76, 10, 215, 55, 12, 140],   // = Dragon's Scorn, com +5 lançadores
  ironeagle1:   [76, 10, 215, 50, 8,  131],
  ironeagle2:   [76, 10, 215, 50, 8,  131],
  churning:     [76, 10, 215, 40, 14, 127],
  valkyrie:     [80, 0,  211, null, null, null]
};
(window.NAVIOS || []).forEach(n => {
  const m = window.MAXIMOS[n.id]; if (!m) return;
  n.can = m[0]; n.deckCan = m[1]; n.maxCan = m[2];
  if (m[3] != null) { n.arp = m[3]; n.deckArp = m[4]; n.maxArp = m[5]; }
});

/* ---------------- MÁXIMO DE PV (HP) ----------------
   Fonte: tabela da comunidade "Número máximo de PV por navio".
   Valor = PV próprio do navio. O máximo soma os 15 bônus de
   COMPOSICAO_MAX.hp (total +33.975). */
window.HP_BASE = {
  sloop:2500, brig:4500, warbrig:6000, devastator:6750, dhuka:13000, frostbrand:14250,
  piranha:9750, barracuda:13000, orca:13750, ironeagle1:13500, ironeagle2:13500, dow:14500,
  frigate:8000, gladiator:14000, ahab:14000, paladin:13600, largefrigate:12000, arachne:13500,
  cordone:13750, churning:13500, godfather1:13500, godfather2:13500, fist:13500, blizzard:12000,
  dragonscorn:13500, bloodmoon:14000, celeritas:13500
};
window.HP_EXTRA = 33975;
(window.NAVIOS || []).forEach(n => {
  const b = window.HP_BASE[n.id]; if (b == null) return;
  n.hp = b; n.maxHp = b + window.HP_EXTRA;
});

/* Wrath of Celeritas = Dragon's Scorn + 5 lançadores e +6% de defesa (informado pelo dono do site) */
window.DEFESA = { celeritas: 6 };

/* Conveses tirados das tabelas da comunidade: quem aceita deque Sobek tem convés
   inferior, Pentar = convés do meio, Tempestade = convés superior. */
(window.NAVIOS || []).forEach(n => {
  if (window.DEFESA[n.id] != null) n.def = window.DEFESA[n.id];
  if (n.decks && n.decks !== "—") return;
  if (n.id === "sloop") n.decks = "Inferior";
  else if (n.id === "brig" || n.id === "warbrig") n.decks = "Inferior / Meio";
  else n.decks = "Inferior / Meio / Superior";
});

/* O que soma até o máximo (ordem das colunas das tabelas) */
window.COMPOSICAO_MAX = {
  hp: [
    ["PV próprio do navio","base"], ["Quilha de Inverno (Arctic Keel)","+2.250"], ["Tabique Puma (Catamount Bulkhead)","+3.800"],
    ["Tabique Grande Tempestade (Tempest Bulkhead)","+5.000"], ["Blindagem Caiman (Cayman Armor)","+1.750"], ["Leme Cone de Gelo (Icicle Rudder)","+3.500"],
    ["Pele Grossa (árvore de habilidade)","+275"], ["Metalurgia (árvore de habilidade)","+440"], ["PV por nível de guilda","+500"],
    ["PV por nível de jogador","+510"], ["Kit Inverno nível 1","+2.500"], ["Kit Águia nível 2","+2.200"],
    ["Sangue de Oceano","+750"], ["Sangue de Águia","+3.000"], ["Sangue de Lobo","+4.000"], ["Sangue Roubado","+3.500"]
  ],
  canhoes: [
    ["Canhões próprios do navio", "base"], ["Deque próprio", "varia"], ["Árvore de habilidade", "+12"],
    ["Convés da Guilda", "+10"], ["Convés Trovão (Booming Thunder)", "+2"], ["Convés Recife (Reef)", "+6"],
    ["Convés da Tempestade (Storm)", "+14"], ["Convés Pentar", "+10"], ["Convés Sobek", "+10"],
    ["Convés Lua de Sangue (Blood Moon)", "+12"], ["Set Poder dos Espíritos (Ghost Power)", "+15"],
    ["Set Lua", "+15 (Lua de Sangue: +20)"], ["Convés Asa do Dragão (Dragon's Wing)", "+18"], ["Kit Águia (Might of the Eagle, 6 peças)", "+5"]
  ],
  arpoes: [
    ["Lançadores próprios do navio", "base"], ["Convés Trovão (Booming Thunder)", "+18"], ["Convés da Tortura (Torture)", "+7"],
    ["Convés Pentar", "+6"], ["Convés Buthu (Upper Barbed)", "+6"], ["Convés Sobek", "+6"],
    ["Convés do Caçador", "+12"], ["Convés da Guilda", "+6"], ["Deque próprio", "varia"], ["Convés Lua de Sangue (Blood Moon)", "+12"]
  ],
  nota: "Os navios iniciais (Sloop, Bergantim e Bergantim de Guerra) não têm as seções para alguns deques, por isso o máximo deles é menor."
};

window.SET_AGUIA = {
  nome:"Might of the Eagle",
  desc:"Uma peça por casa (exceto Ursus), 300 moedas cada. Também sai no Great Pirate Tournament.",
  bonus:[
    ["3 peças","Dispersão de canhão -12%"],
    ["4 peças","+2.200 HP"],
    ["5 peças","Esquiva de crítico +15%"],
    ["6 peças","+5 canhões e +1,6 nós de velocidade"]
  ]
};

/* ---------------- MAPAS BÔNUS PADRÃO ----------------
   n = quantidade, hp/dmg/xp/ouro = faixas mín–máx */
window.MAPAS_BONUS = [
  { nome:"Bloody Hook", dif:1, cor:"#c0392b",
    recompensas:"Hole Maker (canhão), Repeating Harpoon Launcher, Lunar Steel, Balas de Aço",
    ondas:[
      [1,[["Hammerfish",13,"400–500","0,9–30","60–120","700–1.100"]]],
      [2,[["Sea Bear",14,"400–600","0,6–33","80–130","900–1.100"]]],
      [3,[["Bounty Hunter",18,"500–600","20–55","120–150","1.100–1.300"]]],
      [4,[["Shadow Pirate",14,"500–600","20–80","100–140","1.100–1.500"]]],
      [5,[["Plunderer",11,"500–600","30–90","100–160","1.100–1.500"],["Sea Scorpion",6,"400–600","30–90","80–130","900–1.100"]]],
      [6,[["Water Rat",10,"600–700","70–150","130–180","1.200–1.600"]]],
      [7,[["Giant Crab",20,"1.000–1.100","50–120","130–150","1.200–1.500"],["👑 Hook (chefe)",1,"2.700–3.000","280–700","380–450","3.000–5.000"]]]
    ]},
  { nome:"Black Rum", dif:2, cor:"#6d4c41",
    recompensas:"Furnace (canhão), Scorpion Harpoon Launcher, Lunar Steel, Essence of Fire (10), Balas de Aço",
    ondas:[
      [1,[["Killer Crab",14,"500–750","20–60","90–150","1.000–1.100"]]],
      [2,[["Sea Saber",16,"500–800","20–60","90–160","1.000–1.400"]]],
      [3,[["Shadow Pirate",14,"500–900","20–80","110–160","1.200–1.500"]]],
      [4,[["Clawed Fury",8,"500–800","15–50","100–170","1.000–1.200"],["Plunderer",14,"500–900","20–50","110–180","1.200–1.600"]]],
      [5,[["Destroyer",14,"600–900","30–100","120–200","1.400–1.800"]]],
      [6,[["Dark Legion",14,"700–900","70–160","140–210","2.000–2.300"],["Stormblade",8,"600–800","20–60","120–200","1.600–2.000"]]],
      [7,[["Loot King",14,"700–900","70–180","180–230","2.100–2.300"]]],
      [8,[["Dark Legion",12,"900–1.100","80–210","190–230","2.400–2.900"]]],
      [9,[["Storm Raven",15,"1.400–1.600","100–260","200–260","2.600–3.100"],["👑 Ice Fist (chefe)",1,"3.000–3.500","400–1.100","400–500","4.000–5.000"]]]
    ]},
  { nome:"Shooting Match", dif:3, cor:"#2e86c1",
    recompensas:"Peacemaker (canhão), 18-Pounder, Manticore e Classe 4 (lançadores), Will-o'-the-wisp, Gangrene Harpoons, Lunar Steel",
    ondas:[
      [1,[["Clawed Menace",16,"800–900","30–80","140–160","1.100–1.200"]]],
      [2,[["Ivan's Myrmidon",18,"800–900","40–100","140–180","1.300–1.700"]]],
      [3,[["Sea Thief",16,"900–1.000","50–130","140–180","1.300–1.800"]]],
      [4,[["Daggerblade",17,"900–1.100","50–110","170–190","1.600–1.900"],["Lightning Blade",12,"800–1.000","30–80","150–170","1.300–1.500"]]],
      [5,[["Loot King",18,"1.000–1.100","60–150","200–220","1.900–2.300"]]],
      [6,[["Iago's Mutineer",15,"1.000–1.100","90–210","230–250","2.200–2.400"]]],
      [7,[["Storm Raven",21,"1.100–1.200","100–210","250–270","2.400–2.700"]]],
      [8,[["Destroyer",17,"1.100–1.300","100–300","280–300","2.400–2.700"]]],
      [9,[["Evil Army",18,"1.100–1.250","60–120","290–310","3.300–3.500"],["Clawed Fury",14,"1.000–1.200","60–80","180–200","1.500–1.700"]]],
      [10,[["Clark's Men",24,"1.000–1.200","70–150","270–300","3.500–3.800"],["Dark Dagger",10,"1.000–1.300","60–150","200–250","2.200–2.700"]]],
      [11,[["Stormblade",16,"1.500–2.100","200–400","250–310","1.500–2.100"],["👑 Barbarossa (chefe)",1,"5.000–6.000","600–1.500","600–700","5.000–7.000"]]]
    ]},
  { nome:"Voodoo Skull", dif:4, cor:"#7d3c98",
    recompensas:"Bombastic (canhão), Coffin Nailer Harpoon Launcher, Essence of Fire (25), Will-o'-the-wisp, Gangrene Harpoons, Balas de Aço",
    ondas:[
      [1,[["Sea Scorpion",20,"900–1.100","30–80","150–200","1.200–1.600"]]],
      [2,[["Sea Thief",18,"900–1.100","40–100","180–220","1.700–2.100"]]],
      [3,[["Destroyer",20,"1.000–1.200","60–140","180–240","1.900–2.300"]]],
      [4,[["Evil Army",18,"1.000–1.200","60–140","190–240","2.000–2.300"]]],
      [5,[["Loot King",18,"1.000–1.300","90–180","200–260","2.100–2.500"]]],
      [6,[["Firestarter",16,"1.200–1.400","60–150","200–250","2.000–2.700"],["Killer Crab",12,"1.000–1.200","30–80","160–180","1.600–2.000"]]],
      [7,[["Destroyer",16,"1.300–1.500","100–210","250–290","2.400–2.800"],["Clawed Menace",12,"1.000–1.200","60–150","170–230","1.800–2.400"]]],
      [8,[["Storm Raven",18,"1.400–1.600","80–120","240–310","2.400–3.100"],["Clawed Fury",10,"1.100–1.300","60–180","180–230","1.900–2.400"]]],
      [9,[["Iago's Mutineer",16,"1.500–1.700","80–250","240–320","2.700–3.100"],["Dark Dagger",9,"1.200–1.400","70–210","190–230","2.200–2.400"]]],
      [10,[["Plunderer",17,"1.500–1.800","90–280","260–330","2.900–3.400"],["Death Claw",8,"1.200–1.500","100–200","200–300","2.200–3.000"]]],
      [11,[["Destroyer",20,"1.800–2.000","150–310","280–350","3.200–3.700"],["Giant Claw",8,"1.400–1.600","70–200","200–300","2.200–3.200"]]],
      [12,[["Evil Army",16,"1.800–2.000","100–350","330–390","3.400–3.900"],["Swordbeast",8,"1.600–1.900","100–300","200–300","3.000–3.700"]]],
      [13,[["Iago's Mutineer",12,"2.200–2.500","100–360","300–400","3.500–4.100"],["Lightning Blade",10,"1.600–2.000","100–300","250–330","3.000–4.100"],["👑 Crusher Skulls (chefe)",1,"5.000–6.000","1.000–2.000","600–800","6.500–7.500"]]]
    ]}
];
window.MAPAS_BONUS_INFO = [
  "Os mapas são abertos com <strong>pedaços de mapa</strong>, que só saem de <strong>mergulhos</strong> (Deep Sea Diver).",
  "Um mergulho custa 100 💎 (50 💎 no Day of Sunken Treasure). Caixas deixadas por NPCs também podem dar mergulhos grátis.",
  "Você tem <strong>3 vidas</strong> para completar o mapa. A próxima onda só começa quando a anterior é eliminada.",
  "Recompensas comuns aos 4 mapas: diamantes, Steel Harpoons, Lunar Protection, Lunar Precision, lançadores Classe 3 e canhões 12-Pounder.",
  "Recolha as caixas rápido: as que ficam para trás desaparecem."
];

/* ---------------- GUIA DE CADA EVENTO ----------------
   tl = nome do evento na TIMELINE (liga a barra ao guia).
   Fontes: FAQs e anúncios do fórum oficial. */
window.EVENTOS_GUIA = [
  { id:"namorados", tl:"Storm of Broken Hearts", nome:"💘 Storm of Broken Hearts (Namorados)", cor:"#e84393",
    quando:"Fevereiro — em 2026 foi de 13/02 (12h) a 21/02 (12h).",
    resumo:"Evento de Dia dos Namorados contra o pirata Zymen Danseker. Cada missão concluída dá 10% de desconto no navio do evento (até 100%).",
    atividades:[
      "8 missões que se alternam entre os dois mapas do evento (uma por dia).",
      "Cada mapa do evento só pode ser jogado uma vez por missão (completando ou perdendo todas as vidas).",
      "Invasões de guilda contra as ilhas de Zymen Danseker (menu Guilda → Invasão). Recompensas em Guilda → Recompensas → Invasão.",
      "A munição do evento causa dano dobrado nos mapas e nos postos avançados de Danseker."
    ],
    mapas:[
      ["Danseker Den","Mapa 1 (missões 1, 3, 5, 7). Pode ser feito com munição normal."],
      ["Dancer's Lair","Mapa 2 (missões 2, 4, 6, 8). Os NPCs só morrem com a munição do evento."]
    ],
    itens:[
      ["⛵ Churning Envy","Navio","76 canhões (+10 do deque), 40 lançadores (+14). Até 100% de desconto pelas missões","200.000 💎"],
      ["🛠️ Cruel Venus Deck","Deque","+10 canhões, +12 lançadores, inafundável (só no Churning Envy)","—"],
      ["💣 Unforgiving Love Mine","Mina","1.500–2.000 de dano + -100 HP/s por 30 s, área de 110 m (recarga 5 min)","5 por 5.000 💎"],
      ["❤️ Hot Blood","Buff","Repara 5.000 na hora + 3.000 HP máximo por 24 h (recarga 1 h)","10 por 5.000 💎"],
      ["🧪 Love Potion","Buff","Cura 500 HP/s por 30 s (recarga 10 min)","5 por 5.000 💎"],
      ["🩸 Boiling Blood","Buff","Item do evento","10 por 5.000 💎"],
      ["🏹 Cupid's Arrow","Arpão","Dano 13 contra monstros, crítico 15%, bônus crítico 11%","1.000 por 1.000 💎"]
    ],
    kits:[] },

  { id:"dragon", tl:"Dragon Hunt", nome:"🐉 Dragon Hunt (Caça ao Dragão)", cor:"#e67e22",
    quando:"Março/abril — em 2026 foi de 02/04 a 22/04.",
    resumo:"Os seguidores do dragão guardam artefatos nas ilhas de guilda. Missões diárias, mapas repetíveis e o minigame Pedra-Papel-Tesoura.",
    atividades:[
      "Missões 1 a 10 liberadas às 12h: as ímpares abrem Dragon Tango e as pares abrem Fire of the Dragon.",
      "Missão extra 11 (You're One In A Minion) abre Celeritas Vengeance, um mapa muito pesado para níveis altos.",
      "Completar Dragon Tango libera Dragon's Sway e completar Fire of the Dragon libera Eye of the Celerita, que podem ser repetidos no mesmo dia.",
      "Escamas de dragão negro caem de NPCs (até ±3 níveis do seu) e são usadas no Pedra-Papel-Tesoura.",
      "Invasões de guilda nas ilhas dos seguidores do dragão.",
      "Completar Dragon Tango e Fire of the Dragon dá até 100% de desconto no navio do evento."
    ],
    mapas:[
      ["Dragon Tango","Missões ímpares. Uma vez por dia."],
      ["Fire of the Dragon","Missões pares. Exige munição do evento."],
      ["Dragon's Sway","Repetível, liberado ao completar Dragon Tango."],
      ["Eye of the Celerita","Repetível, liberado ao completar Fire of the Dragon. Exige munição do evento."],
      ["Celeritas Vengeance","Mapa final, muito difícil. Exige munição do evento."]
    ],
    itens:[
      ["⛵ Wrath of Celeritas","Navio","76 canhões (+10 do deque Mushussu). Até 100% de desconto pelas missões","225.000 💎"],
      ["🛠️ Mushussu Deck","Deque","+10 canhões, +12 lançadores, inafundável","—"],
      ["🛠️ Dragon's Wing Deck","Deque (Pedra-Papel-Tesoura)","+18 canhões, serve em todos os navios (slot extra)","Não se compra"],
      ["💣 Dragon Rage","Canhão","Dano 15, dispersão 40%, permanente","—"],
      ["⚫ Munição do evento","Munição","Dano dobrado em todos os mapas do evento","Loja"],
      ["🚀 Nova Rocket / Dragons-Blight Rocket","Foguetes","Prêmios do Pedra-Papel-Tesoura","Não se compra"],
      ["✨ Dragons-Blessing / Dragon's Wrath (10)","Buffs","Prêmios do Pedra-Papel-Tesoura","Não se compra"],
      ["⚫ Nova Cannonballs","Munição","Prêmio do Pedra-Papel-Tesoura","Não se compra"]
    ],
    kits:[] },

  { id:"torneio", tl:"Great Pirate Tournament", nome:"🦅 Great Pirate Tournament (Torneio)", cor:"#3498db",
    quando:"Maio/junho — em 2026 começou em 20/05.",
    resumo:"As 6 casas mercantes (Sobek, Anansi, Pentar, Lodos, Kirus e Buthu) abrem seus battlegrounds ao mesmo tempo. Todos dão Medalhas de Águia.",
    atividades:[
      "Batalhas em times sorteados, que começam a cada poucos minutos a partir da meia-noite. Dá para jogar quantas quiser por dia.",
      "Cada casa paga suas próprias moedas, que liberam os itens dela (veja a aba Battlegrounds).",
      "Medalhas de Águia saem em todos os battlegrounds e compram os itens do set Águia e o Iron Eagle.",
      "Missões diárias com desafios do torneio.",
      "Os melhores jogadores e guildas ganham um registro de campeão no fim.",
      "Moedas e Medalhas de Águia também podem ser compradas na loja."
    ],
    mapas:[
      ["6 Battlegrounds","Pirate's Dominion, Spider Bay, Thunderball, Wrath of Carnage, Capture the Flag e Death Jaunt."]
    ],
    itens:[
      ["⛵ Iron Eagle II","Navio","76 canhões (+10 do deque Eagle Talon), 50 lançadores (+8)","60 Águias"],
      ["🛠️ Reef Deck","Deque","+6 canhões, +6 lançadores (seção frontal)","35.000 💎"],
      ["💣 Eagle Cannon","Canhão","Dano 16, dispersão 20% (a menor do jogo)","Battlegrounds"],
      ["💣 Panther Fang / Sound Breaker","Canhões","15/60% e 17/40%","Battlegrounds Pentar e Kirus"]
    ],
    kits:[
      ["Might of the Eagle (Kit Águia)","Reef Deck (Lodos), Cayman Armor (Sobek), Catamount Bulkhead (Pentar), Sonic Bell (Kirus), Scorpio Anchor (Buthu), Tonatiuh Figurehead (Anansi)",
        "3 pç: dispersão -12% · 4 pç: +2.200 HP · 5 pç: esquiva crítica +15% · 6 pç: +5 canhões e +1,6 nós"],
      ["Summer's Might (Força do Verão)","Flutter Sail (+9,2 nós, 7.000 💎), Basilisk Mast (+2.500 HP, 23.000 💎), Fin Rudder (+2.500 HP, +10% esquiva de foguete, 9,5 mi 🪙), FangKeel (+2.000 HP, +0,7 nós, 23.000 💎)",
        "3 pç: +2.500 HP · 4 pç: +12 canhões"]
    ] },

  { id:"talk", tl:"Talk Like a Pirate Day", nome:"🦜 Talk Like a Pirate Day", cor:"#16a085",
    quando:"Junho — em 2026 foi de 10/06 a 12/06.",
    resumo:"Mini-evento com um mapa bônus especial cheio de navios inimigos.",
    atividades:[
      "Mapa bônus especial: seja o último navio a flutuar.",
      "Derrote os 2 chefes inimigos.",
      "O mapa pode ser repetido quantas vezes quiser."
    ],
    mapas:[["Mapa bônus do Talk Like a Pirate","Navios inimigos + 2 chefes, repetível."]],
    itens:[["⚫ Arrrmo","Munição especial","Recompensa do mapa","Grátis"],["💎 Diamantes e XP","Recompensa","Ao completar o mapa","Grátis"]],
    kits:[] },

  { id:"aniversario", tl:"Celebration of Heroes (Aniversário)", nome:"🎂 Celebration of Heroes (Aniversário)", cor:"#f1c40f",
    quando:"Início de agosto — em 2026 foi de 01/08 a 03/08 (aniversário do jogo: 1º de agosto).",
    resumo:"Mini-evento de aniversário com 2 mapas bônus repetíveis, 4 missões e o Tabique Grande Tempestade.",
    atividades:[
      "Missões 1 e 2: uma vez por dia cada (renovam às 5h, no reinício do servidor).",
      "Missão 3: uma única vez, dá 1.000 balas Bonebreaker.",
      "Missão 4: um passeio pelo mundo do Pirate Storm que termina com show de fogos.",
      "Os dois mapas bônus podem ser repetidos sem limite.",
      "Prêmios de aniversário para resgatar durante o evento."
    ],
    mapas:[
      ["In Terror's Eye","Pode ser feito com munição normal. Repetível."],
      ["Time of the Storm","Os monstros só morrem com arpões Death Blade. Repetível."]
    ],
    itens:[
      ["🧱 Tempest Bulkhead (Grande Tempestade)","Tabique","+5.000 HP. Pode ser usado junto com outro tabique (ex.: Tabique Águia)","Loja do evento"],
      ["⚫ Bonebreaker","Munição","Exclusiva do evento, funciona com qualquer bala","Loja / missão 3"],
      ["🏹 Death Blade","Arpão","Para monstros perigosos; obrigatório em Time of the Storm","Loja do evento"]
    ],
    kits:[] },

  { id:"cacada", tl:"Thrill of the Hunt", nome:"🐋 Thrill of the Hunt (Caçada)", cor:"#2980b9",
    quando:"Agosto — em 2026 foi de 04/08 a 28/08.",
    resumo:"Evento de caça a monstros marinhos. É a melhor época para montar um navio de arpão.",
    atividades:[
      "Missão diária \"You Can Swim But You Can't Hide\": caçar monstros.",
      "A missão libera o mapa bônus Ahab's Legacy, cheio de monstros.",
      "O Mercador vende o navio Ahab durante o evento."
    ],
    mapas:[["Ahab's Legacy","Mapa bônus de monstros, liberado pela missão diária."]],
    itens:[
      ["⛵ Ahab","Navio","90 lançadores (o maior do jogo) e só 15 canhões. Até 163 lançadores no máximo","40.000 💎"],
      ["🛠️ Convés do Caçador","Deque","+12 lançadores","Evento"]
    ],
    kits:[] },

  { id:"halloween", tl:"Halloween", nome:"🎃 Halloween", cor:"#d35400",
    quando:"Fim de outubro — em 2026 foi de 23/10 a 06/11.",
    resumo:"Três criaturas sombrias saem do esconderijo: o Príncipe Sem Cabeça, Madame Noir e o Moloch. É aqui que se monta o Kit Halloween.",
    atividades:[
      "Missões: The Chance (libera The Legacy), Summoning the Moloch, e Waking the Headless Prince / Calling Madame Noir, que se alternam por dia.",
      "3 mapas bônus por dia. Mystified Islands e Night Spook dão até 100% de desconto no navio Godfather Death.",
      "Em Mystified Islands, Night Spook e Barren Depths é preciso destruir uma torre antes do chefe final.",
      "Invasões de guilda em 3 ilhas: Sirens of the Deep, Flying Dutchman e Draugr.",
      "Conquistas do evento (\"Pandora's Might\") no perfil, só durante o evento.",
      "Chefes: o Príncipe Sem Cabeça e sua frota (caçam fragatas e bergantins), Madame Noir (ataca quem entra no território dela) e o Moloch."
    ],
    mapas:[
      ["Mystified Islands","Destrua a torre e o chefe. Dá desconto no navio. Munição normal."],
      ["Night Spook","Destrua a torre e o chefe. Dá desconto no navio. Exige balas Grinning Death."],
      ["Barren Depths","Destrua a torre e o chefe. Munição normal."],
      ["The Legacy","Liberado pela missão The Chance. Exige Steel Harpoons."]
    ],
    itens:[
      ["⛵ Godfather Death I / II","Navio","70 canhões (+12 do deque Terror), 40 lançadores (+12). Até 211 canhões no máximo","125.000 💎"],
      ["🛠️ Terror Deck","Deque","+12 canhões, +12 lançadores (Godfather)","—"],
      ["🛠️ Torture Deck","Deque","+5 canhões, +7 lançadores (navios com seção frontal)","—"],
      ["⚫ Grinning Death","Munição","Bala de Halloween, obrigatória em Night Spook","1.000 por 1.000 💎"],
      ["🩸 Ghost Blood","Item","Item do evento","—"]
    ],
    kits:[
      ["Poder dos Espíritos (Kit Halloween)","Hell Mast (+2.750 HP, 24.000 💎), Hum-Bug (+2.000 HP, +1 nó, 25.000 💎), Rudder of the Damned (+2.750 HP, +13% esquiva de foguete, 35.000 💎), Soul Sails (+9,2 nós, 10.000 💎)",
        "2 pç: +1.500 HP · 3 pç: +15 canhões · 4 pç: Maldição Fantasma (12% de chance de deixar o inimigo 45% mais lento por 6 s)"]
    ] },

  { id:"inverno", tl:"Attack of the Frostwolves (Inverno)", nome:"❄️ Attack of the Frostwolves (Inverno)", cor:"#5dade2",
    quando:"Dezembro — em 2026 começa em 14/12.",
    resumo:"O maior evento do ano. O Lobo de Gelo e seus generais invadem os mares: 10 dias de missões, 6 mapas bônus, invasões de guilda e três navios de gelo.",
    atividades:[
      "Missões 1 a 10: cada uma libera um mapa do evento e dá 10% de desconto no navio do evento.",
      "Mapas 1 a 3 (pelas missões): o mapa 3 exige munição do evento.",
      "Mapas 4 a 6: abertos para todos das 00h às 12h, todos os dias, sem limite.",
      "Mapas bônus diários: os 3 primeiros dão até 100% de desconto no Fist of Icegard ou no Blizzard; os 3 últimos abrem no dia 11 e podem ser jogados todo dia.",
      "Invasões de 3 ilhas de guilda (Stub-fang, Snap-jaw e Fabid Frostwolves). Os pontos de invasão liberam prêmios.",
      "A partir do mapa 10 aparecem 2 generais esquivos que dão prêmio.",
      "Chefes Colossal Ice Beast nas zonas: Young em Gusty Cliffs (z11, 7 aparições/dia), normal em Karuma (z23, 5/dia) e Veteran em Frostwik (z31, 4/dia).",
      "Winter-Tokens caem dos NPCs dos mapas bônus e são trocados na loja do evento.",
      "Minas: até 8 por mapa (somem ao trocar de mapa). Colocar uma mina estando invisível revela você."
    ],
    mapas:[
      ["Mapas do evento 1–6","1–3 pelas missões, 4–6 abertos diariamente das 00h às 12h."],
      ["Icewind Cliffs · Snowdrift · Frostfire","Mapas bônus com desconto de até 100% no Fist of Icegard ou no Blizzard."],
      ["Icebreath · Black-Ice Ballad · Frostbite","Abrem no dia 11 e podem ser jogados todo dia. Black-Ice Ballad pode dar canhões do evento; Frosty Death dá com certeza."]
    ],
    itens:[
      ["⛵ Frostbrand","Navio","50 canhões (+40 do deque Sleetshine), 40 lançadores (+36). Até 219 canhões","12–15 mi 🪙 (ouro!)"],
      ["⛵ Fist of Icegard","Navio","76 canhões (+8 do deque Iceberg), 40 lançadores (+6)","200.000 💎"],
      ["⛵ Blizzard","Navio","12.000 HP, 75 canhões, 40 lançadores","200.000 💎"],
      ["🛠️ Sleetshine Deck","Deque","+40 canhões, +36 lançadores (Frostbrand)","80.000 💎 + 110.000 pts de invasão"],
      ["🛠️ Iceberg Deck","Deque","+8 canhões, +6 lançadores (Fist of Icegard)","45.000 💎"],
      ["💣 Ice Storm / Nor'easter / Frost Bite","Canhões","Ice Storm 16/50%, Frost Bite 15/50%","Invasões / mapas"],
      ["⚫ Icebreaker","Munição","Dano dobrado nos mapas do evento e nas ilhas de guilda capturadas","Loja"],
      ["💣 Barrel Mine / Homing Mine / Frostwolf Mine","Minas","Até 8 por mapa","Loja"],
      ["⚙️ Anti-Mine Keel / Anti-Mine Rudder","Melhorias","Proteção contra minas","Loja"],
      ["⚙️ Figurine \"Grenadier\" / Icebreaker Hull Plating","Melhorias","Itens novos do evento","Loja"]
    ],
    kits:[
      ["Might of the Winter (Kit Inverno)","Frost-Rimmed Sail (+9,2 nós), Frozen Mast (+3.000 HP), Icicle Rudder (+3.500 HP, +10% esquiva de foguete), Arctic Keel (+2.250 HP, +0,7 nós), navio Blizzard",
        "3 pç: +2.500 HP · 4 pç: +12 canhões · 5 pç: esquiva crítica +15%"]
    ] },

  { id:"lua", tl:null, nome:"🌕 Lua Cheia / Smuggler's Bay (leilão)", cor:"#9b59b6",
    quando:"A cada 28 dias, no dia de lua cheia.",
    resumo:"Leilão especial com os itens mais raros do jogo. Cada lance custa 100 💎 e não é devolvido.",
    atividades:[
      "Dê lances em diamantes; quem vence paga o item.",
      "A maioria dos itens tem várias cópias. O Blood Moon Deck e o navio Bloodmoon são únicos.",
      "Itens de battleground, sets e deques às vezes também aparecem em leilões."
    ],
    mapas:[],
    itens:[
      ["⛵ Bloodmoon (Lua de Sangue)","Navio","80 canhões (+12 do deque próprio), 40 lançadores. Até 226 canhões e 47.975 HP","Leilão"],
      ["⛵ Dragon's Scorn","Navio","76 canhões (+10), 50 lançadores (+12)","~200.000 💎"],
      ["🛠️ Blood Moon Deck","Deque","+12 canhões, +12 lançadores, vale para TODOS os navios do estaleiro","Leilão"],
      ["💣 Moonsteel Cannon","Canhão","Dano 18, dispersão 45% (pode virar Bombástico)","Leilão (a partir de ~12.500 💎)"],
      ["🎯 Blood Moon Ballista","Lançador","Dano 18, dispersão 30%","Leilão"]
    ],
    kits:[
      ["Set Lua (Blood Moon)","Âncora, Figura de Proa, Leme e Tabique Blood Moon + navio Bloodmoon e seu deque próprio",
        "+15 canhões (+20 no Bloodmoon). Com as 6 peças: bônus DoubleShot (tiro duplo)"]
    ] }
];

/* ---------------- LINHA DO TEMPO ----------------
   Datas de referência = edição 2026. conf = confirmado pelo
   anúncio oficial; false = estimativa baseada no padrão. */
window.TIMELINE = [
  { nome:"Storm of Broken Hearts", curto:"Namorados", tipo:"sazonal", ini:"02-13", fim:"02-21", conf:true, desc:"Evento de Dia dos Namorados: navio Churning Envy e deque Cruel Venus." },
  { nome:"Dragon Hunt", curto:"Dragon Hunt", tipo:"sazonal", ini:"04-02", fim:"04-22", conf:true, desc:"Caça aos dragões: Wrath of Celeritas, deques Mushussu e Dragon's Wing, minigame Pedra-Papel-Tesoura." },
  { nome:"Great Pirate Tournament", curto:"Torneio", tipo:"sazonal", ini:"05-20", fim:"06-08", conf:false, desc:"Torneio das 6 casas com Águias: Iron Eagle II, set Might of the Eagle e Summer's Might." },
  { nome:"Celebration of Heroes (Aniversário)", curto:"Aniversário", tipo:"sazonal", ini:"08-01", fim:"08-03", conf:true, desc:"Aniversário do jogo: 2 mapas bônus, 4 missões, balas Bonebreaker e Tempest Bulkhead (+5.000 HP)." },
  { nome:"Temporada PvP", curto:"Temporada PvP", tipo:"pvp", ini:"08-09", fim:"11-09", conf:false, desc:"Temporada de cerca de 3 meses (Season 1 começou em 09/08/2026). Pontos zeram no fim." },
  { nome:"Talk Like a Pirate Day", curto:"Talk Like a Pirate", tipo:"sazonal", ini:"06-10", fim:"06-12", conf:true, desc:"Mapa bônus especial: seja o último navio a flutuar e derrote 2 chefes. Dá XP, diamantes e munição \"Arrrmo\"." },
  { nome:"Thrill of the Hunt", curto:"Caçada", tipo:"sazonal", ini:"08-04", fim:"08-28", conf:true, desc:"Missão diária de caça a monstros, que libera o mapa bônus Ahab's Legacy. O navio Ahab fica à venda." },
  { nome:"Halloween", curto:"Halloween", tipo:"sazonal", ini:"10-23", fim:"11-06", conf:true, desc:"Headless Prince, Madame Noir e Moloch; navio Godfather Death, deque Terror, balas Grinning Death." },
  { nome:"Attack of the Frostwolves (Inverno)", curto:"Inverno", tipo:"sazonal", ini:"12-14", fim:"01-04", conf:false, desc:"Começa em 14/12 (confirmado). 10 dias de missões e mais mapas bônus; Frostbrand, Blizzard e Fist of Icegard." },
  { nome:"BG: Wrath of Carnage (Lodos)", tipo:"bg", ini:"03-23", fim:"03-30", conf:true, desc:"Battleground week." },
  { nome:"BG: Kingsguard (Ursus)", tipo:"bg", ini:"04-01", fim:"04-08", conf:true, desc:"Battleground week." },
  { nome:"BG: Capture the Flag (Kirus)", tipo:"bg", ini:"04-13", fim:"04-20", conf:false, desc:"Battleground week." },
  { nome:"BG: Kingsguard (Ursus)", tipo:"bg", ini:"05-04", fim:"05-11", conf:true, desc:"Battleground week." },
  { nome:"BG: Kingsguard (Ursus)", tipo:"bg", ini:"07-20", fim:"07-27", conf:true, desc:"Battleground week." },
  { nome:"BG: Capture the Flag (Kirus)", tipo:"bg", ini:"08-03", fim:"08-10", conf:false, desc:"Battleground week." },
  { nome:"BG: Pirate's Dominion (Sobek)", tipo:"bg", ini:"08-22", fim:"08-29", conf:true, desc:"Battleground week." },
  { nome:"BG: Thunderball (Pentar)", tipo:"bg", ini:"09-07", fim:"09-14", conf:true, desc:"Battleground week." },
  { nome:"BG: Spider Bay (Anansi)", tipo:"bg", ini:"09-21", fim:"09-28", conf:true, desc:"Battleground week." },
  { nome:"BG: Death Jaunt (Buthu)", tipo:"bg", ini:"10-05", fim:"10-12", conf:true, desc:"Battleground week." },
  { nome:"BG: Wrath of Carnage (Lodos)", tipo:"bg", ini:"10-19", fim:"10-26", conf:true, desc:"Battleground week." },
  { nome:"BG: Kingsguard (Ursus)", tipo:"bg", ini:"11-02", fim:"11-09", conf:true, desc:"Battleground week." },
  { nome:"BG: Capture the Flag (Kirus)", tipo:"bg", ini:"11-16", fim:"11-23", conf:true, desc:"Battleground week." }
];
