// ─── F1 2026 STATIC DATA ───────────────────────────────────────────────────

const TEAMS = {
  red_bull:     { name: 'Red Bull Racing',   color: '#3671C6', bg: 'rgba(54,113,198,.15)',   principal: 'Laurent Mekies',    base: 'Milton Keynes, RU',  chassis: 'RB22',     engine: 'Honda RBPTH003'  },
  mercedes:     { name: 'Mercedes',           color: '#27F4D2', bg: 'rgba(39,244,210,.15)',   principal: 'Toto Wolff',        base: 'Brackley, RU',       chassis: 'W17',      engine: 'Mercedes M17'    },
  ferrari:      { name: 'Ferrari',            color: '#E8002D', bg: 'rgba(232,0,45,.15)',     principal: 'F. Vasseur',        base: 'Maranello, Italia',  chassis: 'SF-26',    engine: 'Ferrari 066/12'  },
  mclaren:      { name: 'McLaren',            color: '#FF8000', bg: 'rgba(255,128,0,.15)',    principal: 'Andrea Stella',     base: 'Woking, RU',         chassis: 'MCL40',    engine: 'Mercedes M17'    },
  aston_martin: { name: 'Aston Martin',       color: '#229971', bg: 'rgba(34,153,113,.15)',   principal: 'Adrian Newey',      base: 'Silverstone, RU',    chassis: 'AMR26',    engine: 'Honda RBPTH003'  },
  alpine:       { name: 'Alpine',             color: '#FF87BC', bg: 'rgba(255,135,188,.15)',  principal: 'Flavio Briatore',   base: 'Enstone, RU',        chassis: 'A525',     engine: 'Renault E-Tech'  },
  williams:     { name: 'Williams',           color: '#64C4FF', bg: 'rgba(100,196,255,.15)',  principal: 'James Vowles',      base: 'Grove, RU',          chassis: 'FW47',     engine: 'Mercedes M17'    },
  rb:           { name: 'Racing Bulls',       color: '#6692FF', bg: 'rgba(102,146,255,.15)',  principal: 'Alan Permane',      base: 'Faenza, Italia',     chassis: 'VCARB 02', engine: 'Honda RBPTH003'  },
  audi:         { name: 'Audi',               color: '#C4A139', bg: 'rgba(196,161,57,.15)',   principal: 'Mattia Binotto',    base: 'Hinwil, Suiza',      chassis: 'C46',      engine: 'Audi FE-002'     },
  cadillac:     { name: 'Cadillac',           color: '#C9A227', bg: 'rgba(201,162,39,.15)',  principal: 'Graeme Lowdon',     base: 'Silverstone, RU',    chassis: 'CADI-1',   engine: 'Ferrari 066/12'  },
  haas:         { name: 'Haas',               color: '#B6BABD', bg: 'rgba(182,186,189,.1)',   principal: 'Ayao Komatsu',      base: 'Kannapolis, EE.UU.', chassis: 'VF-26',    engine: 'Ferrari 066/12'  },
};

const DRIVERS = {
  max_verstappen: { name:'Max Verstappen',    short:'VER', number:1,  team:'red_bull',     flag:'🇳🇱', nationality:'Neerlandesa',   dob:'1997-09-30', age: ()=>calcAge('1997-09-30'),
    career:[{y:'2015–2016',t:'Toro Rosso',c:'toro_rosso',role:'Titular'},{y:'2016–2024',t:'Red Bull Racing',c:'red_bull',role:'Titular'},{y:'2025–2026',t:'Red Bull Racing',c:'red_bull',role:'Titular'}],
    bio:'Cuatro veces campeón mundial (2021-2024). Considerado uno de los mejores pilotos de la historia. Domina en mojado y seco.', bestCareer:'4x Campeón Mundial'},
  hadjar:      { name:'Isack Hadjar',      short:'HAD', number:6,  team:'red_bull',     flag:'🇫🇷', nationality:'Francesa',      dob:'2004-09-28', age: ()=>calcAge('2004-09-28'),
    career:[{y:'2024',t:'Racing Bulls (Reserva)',c:'rb',role:'Reserva'},{y:'2025–2026',t:'Red Bull Racing',c:'red_bull',role:'Titular'}],
    bio:'Joven promesa francesa. Ganador del F2 en 2024. Debut en F1 en 2025 con Red Bull.', bestCareer:'Subcampeón F2 2024'},
  russell:     { name:'George Russell',    short:'RUS', number:63, team:'mercedes',     flag:'🇬🇧', nationality:'Británica',     dob:'1998-02-15', age: ()=>calcAge('1998-02-15'),
    career:[{y:'2019–2021',t:'Williams',c:'williams',role:'Titular'},{y:'2022–2026',t:'Mercedes',c:'mercedes',role:'Titular'}],
    bio:'Piloto veloz y consistente. Primer triunfo en Interlagos 2022. Líder del proyecto Mercedes en la era post-Hamilton.', bestCareer:'1x Victoria GP (2022)'},
  antonelli:   { name:'Kimi Antonelli',    short:'ANT', number:12, team:'mercedes',     flag:'🇮🇹', nationality:'Italiana',      dob:'2006-08-25', age: ()=>calcAge('2006-08-25'),
    career:[{y:'2024',t:'Mercedes (Junior)',c:'mercedes',role:'Piloto de academia'},{y:'2025–2026',t:'Mercedes',c:'mercedes',role:'Titular'}],
    bio:'El más joven en debutar en F1 en la era moderna. Reemplazó a Hamilton en Mercedes. Considerado la próxima gran estrella.', bestCareer:'Más joven debutante Mercedes'},
  leclerc:     { name:'Charles Leclerc',   short:'LEC', number:16, team:'ferrari',      flag:'🇲🇨', nationality:'Monegasca',     dob:'1997-10-16', age: ()=>calcAge('1997-10-16'),
    career:[{y:'2018',t:'Sauber',c:'sauber',role:'Titular'},{y:'2019–2026',t:'Ferrari',c:'ferrari',role:'Titular'}],
    bio:'El favorito de Mónaco. Velocísimo en clasificación, múltiples poles. Líder de Ferrari junto a Hamilton.', bestCareer:'5x Pole Positions en Mónaco'},
  hamilton:    { name:'Lewis Hamilton',    short:'HAM', number:44, team:'ferrari',      flag:'🇬🇧', nationality:'Británica',     dob:'1985-01-07', age: ()=>calcAge('1985-01-07'),
    career:[{y:'2007–2012',t:'McLaren',c:'mclaren',role:'Titular'},{y:'2013–2024',t:'Mercedes',c:'mercedes',role:'Titular'},{y:'2025–2026',t:'Ferrari',c:'ferrari',role:'Titular'}],
    bio:'7 veces campeón mundial. El más ganador de la historia de la F1 con 103 victorias. Se unió a Ferrari en 2025 en busca del octavo título.', bestCareer:'7x Campeón Mundial • 103 Victorias'},
  norris:      { name:'Lando Norris',      short:'NOR', number:4,  team:'mclaren',      flag:'🇬🇧', nationality:'Británica',     dob:'1999-11-13', age: ()=>calcAge('1999-11-13'),
    career:[{y:'2019–2026',t:'McLaren',c:'mclaren',role:'Titular'}],
    bio:'Velocísimo y con enorme fanbase. Primer campeón potencial de McLaren en décadas. Ganó múltiples carreras en 2024-2026.', bestCareer:'1x Subcampeón (2024)'},
  piastri:     { name:'Oscar Piastri',     short:'PIA', number:81, team:'mclaren',      flag:'🇦🇺', nationality:'Australiana',   dob:'2001-04-06', age: ()=>calcAge('2001-04-06'),
    career:[{y:'2022',t:'Alpine (Reserva)',c:'alpine',role:'Reserva'},{y:'2023–2026',t:'McLaren',c:'mclaren',role:'Titular'}],
    bio:'Campeón de F2 y F3 consecutivo. Debut sólido en 2023. Ahora una de las mayores amenazas en la parrilla.', bestCareer:'Campeón F2 2021, F3 2020'},
  alonso:      { name:'Fernando Alonso',   short:'ALO', number:14, team:'aston_martin', flag:'🇪🇸', nationality:'Española',      dob:'1981-07-29', age: ()=>calcAge('1981-07-29'),
    career:[{y:'2001–2006',t:'Minardi / Renault',c:'renault',role:'Titular'},{y:'2007',t:'McLaren',c:'mclaren',role:'Titular'},{y:'2008–2018',t:'Renault / Ferrari / McLaren',c:'renault',role:'Titular'},{y:'2019',t:'McLaren (Reserva)',c:'mclaren',role:'Reserva'},{y:'2021–2022',t:'Alpine',c:'alpine',role:'Titular'},{y:'2023–2026',t:'Aston Martin',c:'aston_martin',role:'Titular'}],
    bio:'Dos veces campeón mundial. Leyenda viva. A los 44 años sigue siendo competitivo. La máquina de pilotar más completa de la historia.', bestCareer:'2x Campeón Mundial • 32 Victorias'},
  stroll:      { name:'Lance Stroll',      short:'STR', number:18, team:'aston_martin', flag:'🇨🇦', nationality:'Canadiense',    dob:'1998-10-29', age: ()=>calcAge('1998-10-29'),
    career:[{y:'2017–2018',t:'Williams',c:'williams',role:'Titular'},{y:'2019',t:'Racing Point',c:'racing_point',role:'Titular'},{y:'2020–2026',t:'Aston Martin',c:'aston_martin',role:'Titular'}],
    bio:'Hijo del dueño del equipo Lawrence Stroll. Ha demostrado buenas actuaciones en mojado. Trabaja duro en el auto.', bestCareer:'3x Podios en F1'},
  gasly:       { name:'Pierre Gasly',      short:'GAS', number:10, team:'alpine',       flag:'🇫🇷', nationality:'Francesa',      dob:'1996-02-07', age: ()=>calcAge('1996-02-07'),
    career:[{y:'2017–2019',t:'Toro Rosso / Red Bull',c:'red_bull',role:'Titular'},{y:'2020–2022',t:'AlphaTauri',c:'rb',role:'Titular'},{y:'2023–2026',t:'Alpine',c:'alpine',role:'Titular'}],
    bio:'Ganador del GP de Italia 2020. Líder del equipo Alpine. Experiencia en Red Bull y estructura de equipos pequeños.', bestCareer:'1x Victoria GP (Monza 2020)'},
  colapinto:   { name:'Franco Colapinto',  short:'COL', number:43, team:'alpine',       flag:'🇦🇷', nationality:'Argentina',     dob:'2003-05-27', age: ()=>calcAge('2003-05-27'),
    career:[{y:'2024',t:'Williams',c:'williams',role:'Titular (reemplazo)'},{y:'2025',t:'Alpine (Reserva)',c:'alpine',role:'Reserva'},{y:'2026',t:'Alpine',c:'alpine',role:'Titular'}],
    bio:'¡El orgullo argentino en la F1! Brilló en su debut con Williams en 2024. En 2026 consigue su primera butaca titular en Alpine.', bestCareer:'1x Top 8 (Clasificación Williams 2024)'},
  albon:       { name:'Alex Albon',        short:'ALB', number:23, team:'williams',     flag:'🇹🇭', nationality:'Tailandesa',    dob:'1996-03-23', age: ()=>calcAge('1996-03-23'),
    career:[{y:'2019',t:'Toro Rosso / Red Bull',c:'red_bull',role:'Titular'},{y:'2020',t:'Red Bull Racing',c:'red_bull',role:'Titular'},{y:'2021',t:'Red Bull (Reserva)',c:'red_bull',role:'Reserva'},{y:'2022–2026',t:'Williams',c:'williams',role:'Titular'}],
    bio:'Piloto tailandés-británico. Líder de Williams. Destacado rendimiento extrayendo lo máximo de un auto medio.', bestCareer:'2x Podios (Red Bull 2020)'},
  sainz:       { name:'Carlos Sainz',      short:'SAI', number:55, team:'williams',     flag:'🇪🇸', nationality:'Española',      dob:'1994-09-01', age: ()=>calcAge('1994-09-01'),
    career:[{y:'2015–2017',t:'Toro Rosso / Renault',c:'renault',role:'Titular'},{y:'2018–2019',t:'Renault / McLaren',c:'mclaren',role:'Titular'},{y:'2021–2024',t:'Ferrari',c:'ferrari',role:'Titular'},{y:'2025–2026',t:'Williams',c:'williams',role:'Titular'}],
    bio:'Hijo del mítico Carlos Sainz Sr. Un ganador nato. 3 victorias en Ferrari. Lideró Williams en 2025-2026 buscando recuperar el protagonismo.', bestCareer:'3x Victoria GP'},
  lawson:      { name:'Liam Lawson',       short:'LAW', number:30, team:'rb',           flag:'🇳🇿', nationality:'Neozelandesa',  dob:'2002-02-11', age: ()=>calcAge('2002-02-11'),
    career:[{y:'2023',t:'AlphaTauri (Reserva/Reemplazo)',c:'rb',role:'Reemplazo'},{y:'2025–2026',t:'Racing Bulls',c:'rb',role:'Titular'}],
    bio:'Talentoso neozelandés. Impresionó como reemplazo en 2023. Ahora es titular en Racing Bulls.', bestCareer:'Top 8 en F2 2022'},
  arvid_lindblad: { name:'Arvid Lindblad', short:'LIN', number:7,  team:'rb',           flag:'🇬🇧', nationality:'Británico-Sueca',dob:'2006-06-28', age: ()=>calcAge('2006-06-28'),
    career:[{y:'2025',t:'Racing Bulls (Academia)',c:'rb',role:'Piloto de academia'},{y:'2026',t:'Racing Bulls',c:'rb',role:'Titular'}],
    bio:'Prodigio de la academia Red Bull. Debutó en F1 en 2026 siendo uno de los más jóvenes de la historia.', bestCareer:'Campeón F3 2024'},
  hulkenberg:  { name:'Nico Hülkenberg',   short:'HUL', number:27, team:'audi',         flag:'🇩🇪', nationality:'Alemana',       dob:'1987-08-19', age: ()=>calcAge('1987-08-19'),
    career:[{y:'2010–2019',t:'Williams/Force India/Sauber/Renault',c:'renault',role:'Titular'},{y:'2022–2024',t:'Aston Martin / Haas',c:'haas',role:'Titular'},{y:'2025–2026',t:'Audi',c:'audi',role:'Titular'}],
    bio:'El piloto con más salidas en F1 sin victoria. Lidera el proyecto Audi. Experiencia invaluable para un equipo nuevo.', bestCareer:'Record de F1 sin victoria (230+ carreras)'},
  bortoleto:   { name:'Gabriel Bortoleto', short:'BOR', number:5,  team:'audi',         flag:'🇧🇷', nationality:'Brasileña',     dob:'2004-10-14', age: ()=>calcAge('2004-10-14'),
    career:[{y:'2023–2024',t:'McLaren (Academia)',c:'mclaren',role:'Piloto de academia'},{y:'2025–2026',t:'Audi',c:'audi',role:'Titular'}],
    bio:'Campeón de F2 y F3 en temporadas consecutivas. La nueva joya brasileña. Debuta en F1 con Audi en 2025.', bestCareer:'Campeón F2 2024, F3 2023'},
  perez:       { name:'Sergio Pérez',      short:'PER', number:11, team:'cadillac',     flag:'🇲🇽', nationality:'Mexicana',      dob:'1990-01-26', age: ()=>calcAge('1990-01-26'),
    career:[{y:'2011–2012',t:'Sauber',c:'sauber',role:'Titular'},{y:'2013',t:'McLaren',c:'mclaren',role:'Titular'},{y:'2014–2018',t:'Force India',c:'force_india',role:'Titular'},{y:'2019–2020',t:'Racing Point',c:'aston_martin',role:'Titular'},{y:'2021–2024',t:'Red Bull Racing',c:'red_bull',role:'Titular'},{y:'2025–2026',t:'Cadillac',c:'cadillac',role:'Titular'}],
    bio:'El "Ministro de Defensa". 6 victorias con Red Bull. En 2025 se unió a Cadillac como nuevo equipo de F1. Ídolo en México.', bestCareer:'2x Subcampeón (2021-2023) • 6 Victorias'},
  bottas:      { name:'Valtteri Bottas',   short:'BOT', number:77, team:'cadillac',     flag:'🇫🇮', nationality:'Finlandesa',    dob:'1989-08-28', age: ()=>calcAge('1989-08-28'),
    career:[{y:'2013–2016',t:'Williams',c:'williams',role:'Titular'},{y:'2017–2021',t:'Mercedes',c:'mercedes',role:'Titular'},{y:'2022–2024',t:'Alfa Romeo / Sauber',c:'audi',role:'Titular'},{y:'2025–2026',t:'Cadillac',c:'cadillac',role:'Titular'}],
    bio:'Compañero fiel de Hamilton en Mercedes. 10 victorias en F1. Ahora experimento valioso en el proyecto Cadillac.', bestCareer:'10x Victoria GP • 20x Pole Position'},
  ocon:        { name:'Esteban Ocon',      short:'OCO', number:31, team:'haas',         flag:'🇫🇷', nationality:'Francesa',      dob:'1996-09-17', age: ()=>calcAge('1996-09-17'),
    career:[{y:'2016',t:'Manor / Force India (Reemplazo)',c:'force_india',role:'Reemplazo'},{y:'2017–2018',t:'Force India',c:'force_india',role:'Titular'},{y:'2019',t:'Mercedes (Reserva)',c:'mercedes',role:'Reserva'},{y:'2020–2024',t:'Renault / Alpine',c:'alpine',role:'Titular'},{y:'2025–2026',t:'Haas',c:'haas',role:'Titular'}],
    bio:'Ganador del GP de Hungría 2021. Piloto completo y consistente. Lideró el resurgimiento de Haas.', bestCareer:'1x Victoria GP (Hungría 2021)'},
  bearman:     { name:'Oliver Bearman',    short:'BEA', number:87, team:'haas',         flag:'🇬🇧', nationality:'Británica',     dob:'2005-05-08', age: ()=>calcAge('2005-05-08'),
    career:[{y:'2024',t:'Ferrari (Sustitución)',c:'ferrari',role:'Sustitución Sakhir'},{y:'2024',t:'Haas (Sustitución)',c:'haas',role:'Sustitución'},{y:'2025–2026',t:'Haas',c:'haas',role:'Titular'}],
    bio:'Primer aparición a los 18 años cubriendo a Sainz. Impresionó con Haas antes de convertirse en titular.', bestCareer:'Top 10 debut en Sakhir 2024'},
};

function calcAge(dob) {
  const today = new Date();
  const birth = new Date(dob);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

// Group drivers by team
const TEAM_DRIVERS = {};
for (const [id, d] of Object.entries(DRIVERS)) {
  if (!TEAM_DRIVERS[d.team]) TEAM_DRIVERS[d.team] = [];
  TEAM_DRIVERS[d.team].push(id);
}

// Race calendar placeholder (filled from API)
let RACES = [];
let RESULTS_CACHE = {};
let STANDINGS_CACHE = { drivers: [], constructors: [] };

// ─── LOGO & HELMET SVG GENERATION ───────────────────────────────────────────

const TEAM_LOGOS = {
  red_bull:     'logos/teams/red_bull.png',
  mercedes:     'logos/teams/mercedes.png',
  ferrari:      'logos/teams/ferrari.png',
  mclaren:      'logos/teams/mclaren.png',
  aston_martin: 'logos/teams/aston_martin.png',
  alpine:       'logos/teams/alpine.png',
  williams:     'logos/teams/williams.png',
  rb:           'logos/teams/rb.png',
  audi:         'logos/teams/audi.svg',
  cadillac:     'logos/teams/cadillac.svg',
  haas:         'logos/teams/haas.png',
};

const CIRCUIT_MAP_BASE = 'https://raw.githubusercontent.com/julesr0y/f1-circuits-svg/main/circuits/minimal/white-outline';

function getTeamLogoFallback(teamId, color) {
  const initials = (TEAMS[teamId] || { name: teamId }).name.split(' ').map(w => w[0]).join('').slice(0, 3);
  return `<svg viewBox="0 0 100 80" class="team-logo-svg"><circle cx="50" cy="40" r="32" fill="none" stroke="${color || '#FFF'}" stroke-width="3"/><text x="50" y="46" font-family="Arial Black" font-weight="900" font-size="16" fill="${color || '#FFF'}" text-anchor="middle">${initials}</text></svg>`;
}

function getTeamLogoSVG(teamId, color) {
  const logoUrl = TEAM_LOGOS[teamId];
  const teamName = (TEAMS[teamId] || { name: teamId }).name;
  if (logoUrl) {
    const fallbackId = `team-logo-fallback-${teamId}`;
    return `<img src="${logoUrl}" alt="${teamName} logo" class="team-logo-img" onerror="this.style.display='none';document.getElementById('${fallbackId}').style.display='block';" /><div id="${fallbackId}" style="display:none;width:100%;height:100%;">${getTeamLogoFallback(teamId, color)}</div>`;
  }
  return getTeamLogoFallback(teamId, color);
}

function getTeamLogoInline(teamId) {
  const logoUrl = TEAM_LOGOS[teamId];
  const color = (TEAMS[teamId] || { color: '#888' }).color;
  if (logoUrl) {
    return `<img src="${logoUrl}" alt="" class="team-logo-inline" onerror="this.outerHTML='<span class=\\'team-dot\\' style=\\'background:${color}\\'></span>'" />`;
  }
  return `<span class="team-dot" style="background:${color}"></span>`;
}

function getDriverHelmetSVG(driverId, teamColor) {
  const d = DRIVERS[driverId];
  if (!d) return '';
  const tc = teamColor || '#FFFFFF';
  
  let stripeColor = '#FFFFFF';
  let accentColor = '#222222';
  if (d.flag === '🇦🇷') { // Colapinto
    stripeColor = '#74ACDF';
    accentColor = '#FFD100';
  } else if (d.flag === '🇮🇹') { // Antonelli
    stripeColor = '#009246';
    accentColor = '#ce2b37';
  } else if (d.flag === '🇲🇨') { // Leclerc
    stripeColor = '#E8002D';
    accentColor = '#FFFFFF';
  } else if (d.flag === '🇬🇧') { // Hamilton / Russell / Norris / Bearman
    stripeColor = '#00247D';
    accentColor = '#CF142B';
  } else if (d.flag === '🇪🇸') { // Sainz / Alonso
    stripeColor = '#FFC400';
    accentColor = '#C60B1E';
  } else if (d.flag === '🇫🇷') { // Gasly / Hadjar / Ocon
    stripeColor = '#002395';
    accentColor = '#ED2939';
  } else if (d.flag === '🇳🇱') { // Verstappen
    stripeColor = '#FF8000';
    accentColor = '#21468B';
  } else if (d.flag === '🇲🇽') { // Perez
    stripeColor = '#006847';
    accentColor = '#CE1126';
  } else if (d.flag === '🇦🇺') { // Piastri
    stripeColor = '#FFCD00';
    accentColor = '#00008B';
  }
  
  return `
    <svg viewBox="0 0 100 100" class="driver-helmet-svg">
      <path d="M50,15 C22,15 15,32 15,55 C15,75 25,85 50,85 C75,85 85,75 85,55 C85,32 78,15 50,15 Z" fill="${tc}"/>
      <path d="M22,30 C30,30 35,45 35,55 C35,65 30,80 22,80 Z" fill="${stripeColor}"/>
      <path d="M78,30 C70,30 65,45 65,55 C65,65 70,80 78,80 Z" fill="${stripeColor}"/>
      <path d="M46,15 H54 V85 H46 Z" fill="${accentColor}"/>
      <path d="M25,36 H75 Q83,48 75,58 H25 Q17,48 25,36 Z" fill="#151525" stroke="${accentColor}" stroke-width="2"/>
      <path d="M28,40 H42 L38,45 H28 Z" fill="#FFF" opacity="0.3"/>
      <path d="M40,15 Q50,8 60,15 Z" fill="${accentColor}" opacity="0.8"/>
      <text x="50" y="76" font-family="'Orbitron', sans-serif" font-weight="900" font-size="12" fill="#FFF" text-anchor="middle" opacity="0.85">${d.number}</text>
    </svg>
  `;
}

// ─── CIRCUIT DATA & TRACK MAP SVGS ───────────────────────────────────────────

const CIRCUIT_DATA = {
  'albert_park': { laps: 58, length: '5.278 km', turns: 16, drsZones: 4 },
  'shanghai':    { laps: 56, length: '5.451 km', turns: 16, drsZones: 2 },
  'suzuka':      { laps: 53, length: '5.807 km', turns: 18, drsZones: 2 },
  'bahrain':     { laps: 57, length: '5.412 km', turns: 15, drsZones: 3 },
  'jeddah':      { laps: 50, length: '6.174 km', turns: 27, drsZones: 3 },
  'miami':       { laps: 57, length: '5.412 km', turns: 19, drsZones: 3 },
  'monaco':      { laps: 78, length: '3.337 km', turns: 19, drsZones: 1 },
  'imola':       { laps: 63, length: '4.909 km', turns: 19, drsZones: 2 },
  'villeneuve':  { laps: 70, length: '4.361 km', turns: 14, drsZones: 3 },
  'catalunya':   { laps: 66, length: '4.675 km', turns: 16, drsZones: 2 },
  'red_bull_ring':{ laps: 71, length: '4.318 km', turns: 10, drsZones: 3 },
  'silverstone': { laps: 52, length: '5.891 km', turns: 18, drsZones: 2 },
  'hungaroring': { laps: 70, length: '4.381 km', turns: 14, drsZones: 1 },
  'spa':         { laps: 44, length: '7.004 km', turns: 19, drsZones: 2 },
  'zandvoort':   { laps: 72, length: '4.259 km', turns: 14, drsZones: 2 },
  'monza':       { laps: 53, length: '5.793 km', turns: 11, drsZones: 2 },
  'baku':        { laps: 51, length: '6.003 km', turns: 20, drsZones: 2 },
  'marina_bay':  { laps: 62, length: '5.063 km', turns: 23, drsZones: 3 },
  'americas':    { laps: 56, length: '5.513 km', turns: 20, drsZones: 2 },
  'rodriguez':   { laps: 71, length: '4.304 km', turns: 17, drsZones: 2 },
  'interlagos':  { laps: 71, length: '4.309 km', turns: 15, drsZones: 2 },
  'vegas':       { laps: 50, length: '6.201 km', turns: 17, drsZones: 3 },
  'yas_marina':  { laps: 58, length: '5.281 km', turns: 16, drsZones: 2 },
};

function getCircuitInfo(circuitId) {
  return CIRCUIT_DATA[circuitId] || { laps: 58, length: '5.3 km', turns: 16, drsZones: 2 };
}

function getCircuitCard(race, circuitInfo, accentColor) {
  const c = accentColor || '#e50914';

  const circuitEmojis = {
    'monaco':        { emoji: '🇲🇨', country: 'Mónaco',          type: 'Urbano',   label: 'El más lento · El más icónico' },
    'bahrain':       { emoji: '🇧🇭', country: 'Baréin',           type: 'Desierto', label: 'Pista de día y noche' },
    'albert_park':   { emoji: '🇦🇺', country: 'Australia',        type: 'Urbano',   label: 'Primera carrera del año' },
    'jeddah':        { emoji: '🇸🇦', country: 'Arabia Saudita',   type: 'Urbano',   label: 'El circuito más rápido del mundo' },
    'miami':         { emoji: '🇺🇸', country: 'EE.UU.',           type: 'Urbano',   label: 'El glamour del sur de Florida' },
    'imola':         { emoji: '🇮🇹', country: 'Italia',           type: 'Clásico',  label: 'Historia pura de la F1' },
    'villeneuve':    { emoji: '🇨🇦', country: 'Canadá',           type: 'Semipermanente', label: 'Isla de Notre-Dame' },
    'catalunya':     { emoji: '🇪🇸', country: 'España',           type: 'Permanente', label: 'Favorito para test de pretemporada' },
    'red_bull_ring': { emoji: '🇦🇹', country: 'Austria',          type: 'Montaña',  label: 'Circuito compacto en los Alpes' },
    'silverstone':   { emoji: '🇬🇧', country: 'Gran Bretaña',     type: 'Clásico',  label: 'La catedral del automovilismo' },
    'hungaroring':   { emoji: '🇭🇺', country: 'Hungría',          type: 'Sinuoso',  label: 'Difícil de adelantar, estrategia clave' },
    'spa':           { emoji: '🇧🇪', country: 'Bélgica',          type: 'Clásico',  label: 'El circuito más amado del paddock' },
    'zandvoort':     { emoji: '🇳🇱', country: 'Países Bajos',     type: 'Playero',  label: 'Tribuna Naranja · Home de Verstappen' },
    'monza':         { emoji: '🇮🇹', country: 'Italia',           type: 'Velocidad', label: 'El templo de la velocidad' },
    'baku':          { emoji: '🇦🇿', country: 'Azerbaiyán',       type: 'Urbano',   label: 'Caos garantizado en el muro' },
    'marina_bay':    { emoji: '🇸🇬', country: 'Singapur',         type: 'Nocturno', label: 'El único GP nocturno' },
    'americas':      { emoji: '🇺🇸', country: 'EE.UU.',           type: 'Permanente', label: 'Austin, Texas — COTA' },
    'rodriguez':     { emoji: '🇲🇽', country: 'México',           type: 'Altura',   label: '2.285 m sobre el nivel del mar' },
    'interlagos':    { emoji: '🇧🇷', country: 'Brasil',           type: 'Clásico',  label: 'Lluvia, drama y emoción garantizados' },
    'vegas':         { emoji: '🇺🇸', country: 'EE.UU.',           type: 'Urbano',   label: 'Las Vegas Strip · Máxima velocidad' },
    'yas_marina':    { emoji: '🇦🇪', country: 'Abu Dabi',         type: 'Marina',   label: 'Cierre de temporada bajo las estrellas' },
    'shanghai':      { emoji: '🇨🇳', country: 'China',            type: 'Permanente', label: 'Vuelve a la grilla tras 5 años' },
    'suzuka':        { emoji: '🇯🇵', country: 'Japón',            type: 'Clásico',  label: 'El circuito en forma de 8' },
  };

  const CIRCUIT_LAYOUT_MAP = {
    'monaco':        'monaco-6',
    'bahrain':       'bahrain-1',
    'albert_park':   'melbourne-2',
    'jeddah':        'jeddah-1',
    'miami':         'miami-1',
    'imola':         'imola-3',
    'villeneuve':    'montreal-6',
    'catalunya':     'catalunya-6',
    'red_bull_ring': 'spielberg-3',
    'silverstone':   'silverstone-8',
    'hungaroring':   'hungaroring-3',
    'spa':           'spa-francorchamps-4',
    'zandvoort':     'zandvoort-5',
    'monza':         'monza-7',
    'baku':          'baku-1',
    'marina_bay':    'marina-bay-4',
    'americas':      'austin-1',
    'rodriguez':     'mexico-city-3',
    'interlagos':    'interlagos-2',
    'vegas':         'las-vegas-1',
    'yas_marina':    'yas-marina-2',
    'shanghai':      'shanghai-1',
    'suzuka':        'suzuka-2',
  };

  const info = circuitEmojis[race.circuitId] || { emoji: '🏁', country: race.country, type: 'Permanente', label: race.circuitName };
  const layout = CIRCUIT_LAYOUT_MAP[race.circuitId] || race.circuitId;
  const mapUrl = `${CIRCUIT_MAP_BASE}/${layout}.svg`;

  return `
    <div class="circuit-identity-card" style="--cic-color:${c}">
      <div class="cic-main-grid">
        <div class="cic-info-section">
          <div class="cic-flag">${info.emoji}</div>
          <div class="cic-badge" style="background:${c}">${info.type}</div>
          <div class="cic-country">${info.country}</div>
          <div class="cic-label">${info.label}</div>
        </div>
        <div class="cic-map-section">
          <img src="${mapUrl}" 
               alt="Trazado de ${race.raceName || 'Circuito'}" 
               class="track-map-img" 
               style="max-width:100%; max-height:140px; filter: drop-shadow(0 0 8px ${c}aa); opacity:0.9; transition: all 0.3s ease;" 
               onerror="this.style.display='none'; document.getElementById('track-fallback-${race.circuitId}').style.display='block';" />
          <div id="track-fallback-${race.circuitId}" style="display:none; color:var(--text3); font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1px;">🗺️ Trazado no disponible</div>
        </div>
      </div>
      <div class="cic-stats">
        <div class="cic-stat"><span class="cic-val" style="color:${c}">${circuitInfo.laps}</span><span class="cic-key">Vueltas</span></div>
        <div class="cic-stat"><span class="cic-val">${circuitInfo.length}</span><span class="cic-key">Long. Vuelta</span></div>
        <div class="cic-stat"><span class="cic-val">${circuitInfo.turns}</span><span class="cic-key">Curvas</span></div>
        <div class="cic-stat"><span class="cic-val" style="color:var(--green)">${circuitInfo.drsZones}</span><span class="cic-key">Zonas DRS</span></div>
      </div>
    </div>
  `;
}
