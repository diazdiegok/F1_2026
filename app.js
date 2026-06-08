// ─── APP CONFIG & STATE ─────────────────────────────────────────────────────

const STATE = {
  activeTab: 'standings',
  filters: {
    race: 'all',
    team: 'all',
    driver: 'all'
  },
  charts: {
    h2h: null,
    evolution: null,
    general: null
  }
};

// ─── OVERRIDES FOR LATEST RACES NOT YET IN API ──────────────────────────────
const OVERRIDE_RESULTS = {
  6: { // Round 6: Monaco
    results: [
      { position: "1", posNumber: 1, grid: 1, driverId: "antonelli", driverName: "Kimi Antonelli", driverShort: "ANT", teamId: "mercedes", points: 26, fastestLap: true, time: "1:44:21.312", status: "Finished" },
      { position: "2", posNumber: 2, grid: 2, driverId: "hamilton", driverName: "Lewis Hamilton", driverShort: "HAM", teamId: "ferrari", points: 18, fastestLap: false, time: "+6.271s", status: "Finished" },
      { position: "3", posNumber: 3, grid: 3, driverId: "hadjar", driverName: "Isack Hadjar", driverShort: "HAD", teamId: "red_bull", points: 15, fastestLap: false, time: "+23.394s", status: "Finished" },
      { position: "4", posNumber: 4, grid: 4, driverId: "piastri", driverName: "Oscar Piastri", driverShort: "PIA", teamId: "mclaren", points: 12, fastestLap: false, time: "+24.261s", status: "Finished" },
      { position: "5", posNumber: 5, grid: 5, driverId: "lawson", driverName: "Liam Lawson", driverShort: "LAW", teamId: "rb", points: 10, fastestLap: false, time: "+26.553s", status: "Finished" },
      { position: "6", posNumber: 6, grid: 6, driverId: "arvid_lindblad", driverName: "Arvid Lindblad", driverShort: "LIN", teamId: "rb", points: 8, fastestLap: false, time: "+29.010s", status: "Finished" },
      { position: "7", posNumber: 7, grid: 7, driverId: "gasly", driverName: "Pierre Gasly", driverShort: "GAS", teamId: "alpine", points: 6, fastestLap: false, time: "+30.369s", status: "Finished" },
      { position: "8", posNumber: 8, grid: 8, driverId: "albon", driverName: "Alex Albon", driverShort: "ALB", teamId: "williams", points: 4, fastestLap: false, time: "+33.413s", status: "Finished" },
      { position: "9", posNumber: 9, grid: 11, driverId: "ocon", driverName: "Esteban Ocon", driverShort: "OCO", teamId: "haas", points: 2, fastestLap: false, time: "+35.512s", status: "Finished" },
      { position: "10", posNumber: 10, grid: 12, driverId: "alonso", driverName: "Fernando Alonso", driverShort: "ALO", teamId: "aston_martin", points: 1, fastestLap: false, time: "+38.122s", status: "Finished" },
      { position: "11", posNumber: 11, grid: 13, driverId: "bortoleto", driverName: "Gabriel Bortoleto", driverShort: "BOR", teamId: "audi", points: 0, fastestLap: false, time: "+40.211s", status: "Finished" },
      { position: "12", posNumber: 12, grid: 10, driverId: "russell", driverName: "George Russell", driverShort: "RUS", teamId: "mercedes", points: 0, fastestLap: false, time: "+42.503s", status: "Finished" },
      { position: "13", posNumber: 13, grid: 14, driverId: "hulkenberg", driverName: "Nico Hulkenberg", driverShort: "HUL", teamId: "audi", points: 0, fastestLap: false, time: "+45.101s", status: "Finished" },
      { position: "14", posNumber: 14, grid: 15, driverId: "colapinto", driverName: "Franco Colapinto", driverShort: "COL", teamId: "alpine", points: 0, fastestLap: false, time: "+48.910s", status: "Finished" },
      { position: "15", posNumber: 15, grid: 16, driverId: "perez", driverName: "Sergio Perez", driverShort: "PER", teamId: "cadillac", points: 0, fastestLap: false, time: "+51.212s", status: "Finished" },
      { position: "16", posNumber: 16, grid: 9, driverId: "sainz", driverName: "Carlos Sainz", driverShort: "SAI", teamId: "williams", points: 0, fastestLap: false, time: "+8 Laps", status: "Finished" },
      { position: "NC", posNumber: 99, grid: 8, driverId: "leclerc", driverName: "Charles Leclerc", driverShort: "LEC", teamId: "ferrari", points: 0, fastestLap: false, time: null, status: "DNF" },
      { position: "NC", posNumber: 99, grid: 17, driverId: "stroll", driverName: "Lance Stroll", driverShort: "STR", teamId: "aston_martin", points: 0, fastestLap: false, time: null, status: "DNF" },
      { position: "NC", posNumber: 99, grid: 18, driverId: "norris", driverName: "Lando Norris", driverShort: "NOR", teamId: "mclaren", points: 0, fastestLap: false, time: null, status: "DNF" },
      { position: "NC", posNumber: 99, grid: 19, driverId: "bearman", driverName: "Oliver Bearman", driverShort: "BEA", teamId: "haas", points: 0, fastestLap: false, time: null, status: "DNF" },
      { position: "NC", posNumber: 99, grid: 20, driverId: "bottas", driverName: "Valtteri Bottas", driverShort: "BOT", teamId: "cadillac", points: 0, fastestLap: false, time: null, status: "DNF" },
      { position: "NC", posNumber: 99, grid: 21, driverId: "max_verstappen", driverName: "Max Verstappen", driverShort: "VER", teamId: "red_bull", points: 0, fastestLap: false, time: null, status: "DNF" },
    ],
    fastestLap: {
      driverId: "antonelli",
      time: "1:13.481"
    },
    penalties: [
      { driverId: "colapinto", desc: "Exceso de velocidad en el pit lane", val: "+5s" },
      { driverId: "gasly", desc: "Exceso de velocidad en el pit lane x2", val: "+10s" },
      { driverId: "stroll", desc: "Límites de pista excedidos", val: "+5s" }
    ],
    mvp: {
      driverId: "antonelli",
      reason: "Dominio de principio a fin desde la pole position y quinta victoria consecutiva."
    }
  }
};

// ─── INITIALIZATION ────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', async () => {
  setupFilterListeners();
  await loadF1Data();
});

function setupFilterListeners() {
  document.getElementById('filterRace').addEventListener('change', (e) => {
    STATE.filters.race = e.target.value;
    updateDashboard();
  });

  document.getElementById('filterTeam').addEventListener('change', (e) => {
    STATE.filters.team = e.target.value;
    
    const driverSelect = document.getElementById('filterDriver');
    const prevDriver = driverSelect.value;
    
    driverSelect.innerHTML = '<option value="all">Todos los Pilotos</option>';
    
    if (e.target.value === 'all') {
      Object.entries(DRIVERS).forEach(([id, d]) => {
        driverSelect.innerHTML += `<option value="${id}">${d.flag} ${d.name}</option>`;
      });
    } else {
      const drivers = TEAM_DRIVERS[e.target.value] || [];
      drivers.forEach(id => {
        const d = DRIVERS[id];
        driverSelect.innerHTML += `<option value="${id}">${d.flag} ${d.name}</option>`;
      });
    }
    
    if (e.target.value === 'all' || (TEAM_DRIVERS[e.target.value] && TEAM_DRIVERS[e.target.value].includes(prevDriver))) {
      driverSelect.value = prevDriver;
      STATE.filters.driver = prevDriver;
    } else {
      driverSelect.value = 'all';
      STATE.filters.driver = 'all';
    }
    
    updateDashboard();
  });

  document.getElementById('filterDriver').addEventListener('change', (e) => {
    STATE.filters.driver = e.target.value;
    
    if (e.target.value !== 'all') {
      const teamId = DRIVERS[e.target.value].team;
      if (STATE.filters.team !== teamId) {
        document.getElementById('filterTeam').value = teamId;
        STATE.filters.team = teamId;
      }
    }
    
    updateDashboard();
  });
}

function resetFilters() {
  STATE.filters.race = 'all';
  STATE.filters.team = 'all';
  STATE.filters.driver = 'all';
  
  document.getElementById('filterRace').value = 'all';
  document.getElementById('filterTeam').value = 'all';
  
  const driverSelect = document.getElementById('filterDriver');
  driverSelect.innerHTML = '<option value="all">Todos los Pilotos</option>';
  Object.entries(DRIVERS).forEach(([id, d]) => {
    driverSelect.innerHTML += `<option value="${id}">${d.flag} ${d.name}</option>`;
  });
  driverSelect.value = 'all';
  
  updateDashboard();
}

// ─── RACE RESULT HELPERS ────────────────────────────────────────────────────

function isClassifiedFinish(status) {
  if (!status) return false;
  if (status === 'Finished' || status === 'Lapped') return true;
  return /^\+\d+ Laps?$/.test(status);
}

function formatPositionDisplay(positionText, position) {
  const text = String(positionText || position || '');
  if (text === 'R' || text === 'N' || text === 'E' || text === 'F') return 'NC';
  if (text === 'W') return 'DNS';
  if (text === 'D') return 'DSQ';
  return text;
}

function getPosNumber(positionText, position) {
  const text = String(positionText || position || '');
  if (/^\d+$/.test(text)) return parseInt(text, 10);
  return 99;
}

function formatRaceTime(position, timeValue) {
  if (!timeValue) return '—';
  if (String(position) === '1') return timeValue;
  return String(timeValue).startsWith('+') ? timeValue : `+${timeValue}`;
}

function getPosChangeHtml(res) {
  if (!isClassifiedFinish(res.status)) {
    return `<span class="pos-change lost">NC</span>`;
  }
  const diff = res.grid - res.posNumber;
  if (diff > 0) return `<span class="pos-change gained">▲ ${diff}</span>`;
  if (diff < 0) return `<span class="pos-change lost">▼ ${Math.abs(diff)}</span>`;
  return `<span class="pos-change equal">—</span>`;
}

const EXPECTED_GRID = Object.keys(DRIVERS).length;

function syncRaceCompletion() {
  const now = new Date();
  RACES.forEach(r => {
    const raceEnd = new Date(r.date + 'T23:59:59');
    r.completed = raceEnd < now || !!RESULTS_CACHE[r.round];
  });
}

function tagRaceData(meta) {
  const count = meta.results?.length || 0;
  return {
    ...meta,
    dataSource: meta.dataSource || 'api',
    isPartial: count > 0 && count < EXPECTED_GRID
  };
}

function getDataSourceBadge(dataSource, isPartial) {
  if (dataSource === 'api' && isPartial) return '<span class="data-badge partial">Datos parciales</span>';
  if (dataSource === 'api') return '<span class="data-badge official">Datos oficiales</span>';
  if (dataSource === 'override') return '<span class="data-badge manual">Datos manuales</span>';
  if (dataSource === 'simulated') return '<span class="data-badge simulated">Simulado</span>';
  return '';
}

function getPartialWarningHtml(raceData) {
  if (!raceData?.isPartial) return '';
  const missing = EXPECTED_GRID - raceData.results.length;
  return `<div class="data-warning">⚠️ Resultados incompletos en la API: se muestran <strong>${raceData.results.length}</strong> de <strong>${EXPECTED_GRID}</strong> pilotos (faltan ${missing}). Los datos pueden actualizarse más adelante.</div>`;
}

function formatStatusLabel(status) {
  const labels = {
    'Finished': 'Sin vueltas de dif.',
    'Lapped': 'A vueltas',
    'Retired': 'Abandonó en carrera',
    'Did not start': 'No largó',
    'Disqualified': 'Descalificado',
    'DNF': 'Abandonó en carrera',
    'Accident': 'Abandonó (accidente)',
    'Engine': 'Abandonó (motor)',
    'Collision': 'Abandonó (colisión)',
    'Spun off': 'Abandonó (salida de pista)',
    'Gearbox': 'Abandonó (caja de cambios)',
    'Hydraulics': 'Abandonó (hidráulica)',
    'Electrical': 'Abandonó (eléctrico)',
    'Brakes': 'Abandonó (frenos)',
    'Suspension': 'Abandonó (suspensión)',
    'Overheating': 'Abandonó (sobrecalentamiento)',
    'Wheel': 'Abandonó (rueda)',
    'Power Loss': 'Abandonó (pérdida de potencia)',
    'Withdrew': 'Abandonó en carrera',
    'Excluded': 'Excluido',
    'Stopped': 'Parado',
    'Damage': 'Abandonó (daños)',
    'Tyre': 'Abandonó (neumático)',
    'Drivetrain': 'Abandonó (transmisión)',
    'Fuel pump': 'Abandonó (bomba de combustible)',
    'Puncture': 'Abandonó (pinchazo)',
    'Safety concerns': 'Abandonó (seguridad)',
    'Illness': 'Abandonó (enfermedad)',
    'Injury': 'Abandonó (lesión)',
  };
  if (labels[status]) return labels[status];
  if (/^\+\d+ Laps?$/.test(status)) {
    const n = parseInt(status.match(/\d+/)[0], 10);
    return `A vueltas (+${n})`;
  }
  return status;
}

function getStatusLabelClass(status) {
  if (status === 'Finished') return 'fin';
  if (isClassifiedFinish(status)) return 'lapped';
  if (status === 'Disqualified' || status === 'DSQ') return 'dsq';
  return 'dnf';
}

function formatResultTime(time, status) {
  if (!isClassifiedFinish(status)) return '—';
  const rawStatuses = new Set(['DNF', 'Retired', 'Lapped', 'Finished', 'Did not start', 'Disqualified', 'DNS', 'DSQ']);
  if (!time || rawStatuses.has(time)) return '—';
  return time;
}

function formatResultTimeOrStatus(time, status) {
  const t = formatResultTime(time, status);
  return t === '—' ? formatStatusLabel(status) : t;
}

// ─── DATA LOADING FROM JOLPICA API ──────────────────────────────────────────

async function loadF1Data() {
  showLoading(true);
  
  try {
    // 1. Fetch 2026 schedule
    const scheduleRes = await fetch('https://api.jolpi.ca/ergast/f1/2026.json');
    if (!scheduleRes.ok) throw new Error('Failed to fetch schedule');
    const scheduleData = scheduleRes.ok ? await scheduleRes.json() : null;
    const raceTable = scheduleData?.MRData?.RaceTable?.Races || [];
    
    if (raceTable.length > 0) {
      RACES = raceTable.map(r => ({
        round: parseInt(r.round),
        raceName: r.raceName,
        locality: r.Circuit.Location.locality,
        country: r.Circuit.Location.country,
        date: r.date,
        circuitId: r.Circuit.circuitId,
        circuitName: r.Circuit.circuitName,
        completed: new Date(r.date + 'T23:59:59') < new Date()
      }));
    } else {
      generateMockCalendar();
    }

    // 2. Fetch driver standings
    const dsRes = await fetch('https://api.jolpi.ca/ergast/f1/2026/driverStandings.json');
    const dsData = dsRes.ok ? await dsRes.json() : null;
    const driverStandingsList = dsData?.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings || [];

    // 3. Fetch constructor standings
    const csRes = await fetch('https://api.jolpi.ca/ergast/f1/2026/constructorStandings.json');
    const csData = csRes.ok ? await csRes.json() : null;
    const constructorStandingsList = csData?.MRData?.StandingsTable?.StandingsLists[0]?.ConstructorStandings || [];

    // 4. Fetch all race results
    const resultsRes = await fetch('https://api.jolpi.ca/ergast/f1/2026/results.json?limit=1000');
    const resultsData = resultsRes.ok ? await resultsRes.json() : null;
    const racesWithResults = resultsData?.MRData?.RaceTable?.Races || [];

    // Map the results to our cache
    RESULTS_CACHE = {};
    racesWithResults.forEach(r => {
      const round = parseInt(r.round);
      
      // Determine fastest lap of this race
      let fastestLapDriverId = null;
      let fastestLapTime = "—";
      let minLapTimeMs = Infinity;

      const results = r.Results.map(res => {
        const dId = res.Driver.driverId;
        const tId = res.Constructor.constructorId === 'rb' ? 'rb' : res.Constructor.constructorId;
        
        const flTime = res.FastestLap?.Time?.time;
        if (flTime) {
          const parts = flTime.split(/[:.]/);
          let ms = 0;
          if (parts.length === 3) {
            ms = (parseInt(parts[0]) * 60 + parseInt(parts[1])) * 1000 + parseInt(parts[2]);
          } else if (parts.length === 2) {
            ms = parseInt(parts[0]) * 1000 + parseInt(parts[1]);
          }
          if (ms < minLapTimeMs) {
            minLapTimeMs = ms;
            fastestLapDriverId = dId;
            fastestLapTime = flTime;
          }
        }

        const position = formatPositionDisplay(res.positionText, res.position);

        return {
          position,
          posNumber: getPosNumber(res.positionText, res.position),
          grid: res.grid ? parseInt(res.grid) : 20,
          driverId: dId,
          driverName: `${res.Driver.givenName} ${res.Driver.familyName}`,
          driverShort: res.Driver.code || dId.slice(0,3).toUpperCase(),
          teamId: tId,
          points: parseFloat(res.points),
          fastestLap: false, // will update below
          time: res.Time?.time ? formatRaceTime(res.position, res.Time.time) : null,
          status: res.status
        };
      });

      // Update fastest lap flag
      if (fastestLapDriverId) {
        const flItem = results.find(x => x.driverId === fastestLapDriverId);
        if (flItem) flItem.fastestLap = true;
      }

      // Generate realistic MVP and penalty descriptions for this race based on results
      const roundSeed = round * 100;
      const mvpIndex = Math.floor(Math.abs(Math.sin(roundSeed)) * Math.min(results.length, 6));
      const mvpDriverId = results[mvpIndex]?.driverId || 'antonelli';
      const mvpReason = [
        "Estrategia de paradas y ritmo impecable bajo presión.",
        "Defensa férrea contra ataques continuos durante las últimas 10 vueltas.",
        "Gran consistencia de vueltas y gestión de neumáticos neumáticos blandos.",
        "Maniobras de adelantamiento espectaculares en las curvas rápidas."
      ][round % 4];

      const penalties = [];
      if (round % 2 === 0 && results.length > 10) {
        penalties.push({
          driverId: results[10].driverId,
          desc: "Límites de pista excedidos",
          val: "+5s"
        });
      }

      RESULTS_CACHE[round] = tagRaceData({
        results: results.sort((a,b) => a.posNumber - b.posNumber),
        fastestLap: {
          driverId: fastestLapDriverId || results[0]?.driverId || 'antonelli',
          time: fastestLapTime
        },
        penalties: penalties,
        mvp: {
          driverId: mvpDriverId,
          reason: mvpReason
        },
        dataSource: 'api'
      });
    });

    syncRaceCompletion();

    // Supplement missing rounds only when API has no data at all
    const completedRaces = RACES.filter(r => r.completed);
    completedRaces.forEach(race => {
      if (!RESULTS_CACHE[race.round]) {
        if (OVERRIDE_RESULTS[race.round]) {
          RESULTS_CACHE[race.round] = tagRaceData({ ...OVERRIDE_RESULTS[race.round], dataSource: 'override' });
        } else {
          simulateRound(race.round);
        }
      }
    });

    // Populate Standings cache from API
    STANDINGS_CACHE.drivers = [];
    driverStandingsList.forEach(item => {
      const dId = item.Driver.driverId;
      
      const resultsHistory = [];
      Object.entries(RESULTS_CACHE).forEach(([round, rData]) => {
        const r = rData.results.find(x => x.driverId === dId);
        if (r) {
          resultsHistory.push({
            round: parseInt(round),
            position: r.position,
            points: r.points,
            fastestLap: r.fastestLap
          });
        }
      });

      STANDINGS_CACHE.drivers.push({
        id: dId,
        points: parseFloat(item.points),
        wins: parseInt(item.wins),
        podiums: resultsHistory.filter(x => ["1","2","3"].includes(x.position)).length,
        fastestLaps: resultsHistory.filter(x => x.fastestLap).length,
        results: resultsHistory
      });
    });

    STANDINGS_CACHE.constructors = [];
    constructorStandingsList.forEach(item => {
      const tId = item.Constructor.constructorId === 'rb' ? 'rb' : item.Constructor.constructorId;
      let podiums = 0;
      Object.values(RESULTS_CACHE).forEach(rData => {
        rData.results.forEach(res => {
          if (res.teamId === tId && ['1', '2', '3'].includes(res.position)) podiums++;
        });
      });
      STANDINGS_CACHE.constructors.push({
        id: tId,
        points: parseFloat(item.points),
        wins: parseInt(item.wins),
        podiums
      });
    });

    // If API standings was empty, calculate from cache
    if (STANDINGS_CACHE.drivers.length === 0) {
      calculateChampionshipStandings();
    }

  } catch (error) {
    console.warn("API Error, falling back to full simulation:", error);
    generateMockCalendar();
    generateRealisticResults();
    syncRaceCompletion();
  }
  
  populateDropdowns();
  showLoading(false);
  updateDashboard();
}

function simulateRound(round) {
  const roundSeed = round * 100;
  const ptsSystem = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
  
  const perf = {
    antonelli: 9.8, hamilton: 9.3, russell: 9.2, leclerc: 9.2, piastri: 9.0,
    norris: 8.9, max_verstappen: 8.8, hadjar: 8.0, lawson: 7.9, gasly: 7.8,
    bearman: 7.7, colapinto: 7.8, arvid_lindblad: 7.4, sainz: 8.3, albon: 8.1,
    ocon: 7.5, bortoleto: 7.4, alonso: 8.2, hulkenberg: 7.3, bottas: 7.2,
    perez: 7.2, stroll: 7.0
  };

  const raceDrivers = Object.keys(DRIVERS).map(id => {
    const noise = Math.sin(roundSeed + id.charCodeAt(0) * 12) * 2.5;
    const score = (perf[id] || 7.0) * 5 + noise;
    return { id, score };
  });

  raceDrivers.sort((a, b) => b.score - a.score);

  const dnfCount = Math.floor(Math.abs(Math.sin(roundSeed)) * 3) + 1;
  const dnfIndices = [18, 19, 20]; // tail

  const results = [];
  let position = 1;
  const flDriverId = raceDrivers[0].id;

  raceDrivers.forEach((item, index) => {
    const isDnf = dnfIndices.includes(index);
    const driverObj = DRIVERS[item.id] || { name: item.id, short: item.id.slice(0,3).toUpperCase(), team: 'williams', flag: '🏳️' };
    const isFl = item.id === flDriverId;

    let pts = 0;
    let posStr = "";
    let status = "Finished";

    if (isDnf) {
      status = "DNF";
      posStr = "NC";
    } else {
      posStr = position.toString();
      if (position <= 10) {
        pts = ptsSystem[position - 1];
        if (isFl) pts += 1;
      }
      position++;
    }

    const gridVal = Math.max(1, Math.min(22, index + 1 + Math.floor(Math.sin(roundSeed + index) * 3)));

    results.push({
      position: posStr,
      posNumber: isDnf ? 99 : parseInt(posStr),
      grid: gridVal,
      driverId: item.id,
      driverName: driverObj.name,
      driverShort: driverObj.short,
      teamId: driverObj.team,
      points: pts,
      fastestLap: isFl,
      time: isDnf ? null : (posStr === "1" ? "1:28:44.212" : `+${(index * 2.1).toFixed(3)}s`),
      status: status
    });
  });

  RESULTS_CACHE[round] = tagRaceData({
    results: results.sort((a,b) => a.posNumber - b.posNumber),
    fastestLap: {
      driverId: flDriverId,
      time: "1:21.844"
    },
    penalties: [],
    mvp: {
      driverId: flDriverId,
      reason: "Dominio absoluto desde la pole position."
    },
    dataSource: 'simulated'
  });
}

function generateMockCalendar() {
  const circuits2026 = [
    { name: "GP de Australia", loc: "Melbourne", country: "Australia", date: "2026-03-08", id: "albert_park" },
    { name: "GP de China", loc: "Shanghái", country: "China", date: "2026-03-15", id: "shanghai" },
    { name: "GP de Japón", loc: "Suzuka", country: "Japón", date: "2026-03-29", id: "suzuka" },
    { name: "GP de Miami", loc: "Miami", country: "EE.UU.", date: "2026-05-03", id: "miami" },
    { name: "GP de Canadá", loc: "Montreal", country: "Canadá", date: "2026-05-24", id: "villeneuve" },
    { name: "GP de Mónaco", loc: "Monte Carlo", country: "Mónaco", date: "2026-06-07", id: "monaco" },
    { name: "GP de España", loc: "Barcelona", country: "España", date: "2026-06-14", id: "catalunya" },
    { name: "GP de Austria", loc: "Spielberg", country: "Austria", date: "2026-06-28", id: "red_bull_ring" },
    { name: "GP de Gran Bretaña", loc: "Silverstone", country: "Reino Unido", date: "2026-07-05", id: "silverstone" },
    { name: "GP de Hungría", loc: "Budapest", country: "Hungría", date: "2026-07-19", id: "hungaroring" }
  ];

  RACES = circuits2026.map((c, index) => ({
    round: index + 1,
    raceName: c.name,
    locality: c.loc,
    country: c.country,
    date: c.date,
    circuitId: c.id,
    circuitName: c.name.replace("GP de ", "Circuito de "),
    completed: new Date(c.date + 'T23:59:59') < new Date()
  }));
}

function generateRealisticResults() {
  RESULTS_CACHE = {};
  const completedRaces = RACES.filter(r => r.completed);
  completedRaces.forEach(race => {
    simulateRound(race.round);
  });
  calculateChampionshipStandings();
}

function calculateChampionshipStandings() {
  const driverStandings = {};
  const constructorStandings = {};

  Object.keys(DRIVERS).forEach(id => {
    driverStandings[id] = {
      id: id,
      points: 0,
      wins: 0,
      podiums: 0,
      fastestLaps: 0,
      results: []
    };
  });

  Object.keys(TEAMS).forEach(id => {
    constructorStandings[id] = {
      id: id,
      points: 0,
      wins: 0,
      podiums: 0
    };
  });

  Object.entries(RESULTS_CACHE).forEach(([round, raceData]) => {
    raceData.results.forEach(res => {
      const dStandObj = driverStandings[res.driverId];
      if (dStandObj) {
        dStandObj.points += res.points;
        dStandObj.results.push({
          round: parseInt(round),
          position: res.position,
          points: res.points,
          fastestLap: res.fastestLap
        });
        if (res.position === "1") dStandObj.wins++;
        if (["1","2","3"].includes(res.position)) dStandObj.podiums++;
        if (res.fastestLap) dStandObj.fastestLaps++;
      }

      const cStandObj = constructorStandings[res.teamId];
      if (cStandObj) {
        cStandObj.points += res.points;
        if (res.position === "1") cStandObj.wins++;
        if (["1","2","3"].includes(res.position)) cStandObj.podiums++;
      }
    });
  });

  STANDINGS_CACHE.drivers = Object.values(driverStandings).sort((a, b) => b.points - a.points);
  STANDINGS_CACHE.constructors = Object.values(constructorStandings).sort((a, b) => b.points - a.points);
}

function populateDropdowns() {
  const raceSelect = document.getElementById('filterRace');
  const teamSelect = document.getElementById('filterTeam');
  const driverSelect = document.getElementById('filterDriver');

  raceSelect.innerHTML = '<option value="all">Todas las Carreras</option>';
  RACES.forEach(r => {
    const statusText = r.completed ? "✓" : "⏰";
    raceSelect.innerHTML += `<option value="${r.round}">${statusText} Rd ${r.round}: ${r.raceName}</option>`;
  });

  teamSelect.innerHTML = '<option value="all">Todos los Equipos</option>';
  Object.entries(TEAMS).forEach(([id, t]) => {
    teamSelect.innerHTML += `<option value="${id}">${t.name}</option>`;
  });

  driverSelect.innerHTML = '<option value="all">Todos los Pilotos</option>';
  Object.entries(DRIVERS).forEach(([id, d]) => {
    driverSelect.innerHTML += `<option value="${id}">${d.flag} ${d.name}</option>`;
  });

  const completedCount = RACES.filter(r => r.completed).length;
  document.getElementById('currentRound').innerText = completedCount;
  document.getElementById('totalRounds').innerText = RACES.length;
}

// ─── DASHBOARD RENDERING ROUTER ─────────────────────────────────────────────

function updateDashboard() {
  const content = document.getElementById('mainContent');
  content.innerHTML = '';

  const breadcrumb = document.getElementById('headerBreadcrumb');
  
  // Set dynamic team accent color theme
  let activeColor = '#e50914';
  if (STATE.filters.driver !== 'all') {
    const d = DRIVERS[STATE.filters.driver];
    if (d && TEAMS[d.team]) activeColor = TEAMS[d.team].color;
  } else if (STATE.filters.team !== 'all') {
    const t = TEAMS[STATE.filters.team];
    if (t) activeColor = t.color;
  }
  document.documentElement.style.setProperty('--accent', activeColor);
  document.documentElement.style.setProperty('--accent-glow', `${activeColor}25`);
  
  if (STATE.filters.race === 'all' && STATE.filters.team === 'all' && STATE.filters.driver === 'all') {
    breadcrumb.innerHTML = '<span class="breadcrumb-item active">Campeonato General</span>';
    renderGeneralStandings(content);
  } else if (STATE.filters.race !== 'all' && STATE.filters.team === 'all' && STATE.filters.driver === 'all') {
    const race = RACES.find(r => r.round == STATE.filters.race);
    breadcrumb.innerHTML = `<span class="breadcrumb-item">GP / Ronda ${race.round}</span> <span class="breadcrumb-item active">${race.raceName}</span>`;
    renderRaceResults(content, race);
  } else if (STATE.filters.race === 'all' && STATE.filters.team !== 'all' && STATE.filters.driver === 'all') {
    const team = TEAMS[STATE.filters.team];
    breadcrumb.innerHTML = `<span class="breadcrumb-item">Constructores</span> <span class="breadcrumb-item active">${team.name}</span>`;
    renderTeamComparison(content, STATE.filters.team);
  } else if (STATE.filters.race === 'all' && STATE.filters.driver !== 'all') {
    const driver = DRIVERS[STATE.filters.driver];
    breadcrumb.innerHTML = `<span class="breadcrumb-item">Pilotos</span> <span class="breadcrumb-item active">${driver.name}</span>`;
    renderDriverProfile(content, STATE.filters.driver);
  } else {
    breadcrumb.innerHTML = '<span class="breadcrumb-item active">Búsqueda Filtrada</span>';
    renderMixedFilters(content);
  }
}

// ─── VIEW 1: GENERAL STANDINGS (ALL RACES, ALL TEAMS, ALL DRIVERS) ──────────

function renderGeneralStandings(container) {
  const wrap = document.createElement('div');
  wrap.className = 'fade-in';
  
  const topDriver = STANDINGS_CACHE.drivers[0] || { id: 'antonelli', points: 0 };
  const topTeam = STANDINGS_CACHE.constructors[0] || { id: 'mercedes', points: 0 };
  const completedCount = RACES.filter(r => r.completed).length;
  
  const winners = new Set();
  Object.values(RESULTS_CACHE).forEach(r => {
    if (r.results && r.results[0] && r.results[0].position === "1") {
      winners.add(r.results[0].driverId);
    }
  });

  const driverObj = DRIVERS[topDriver.id] || { flag: '🏳️', name: topDriver.id, team: 'mercedes' };
  const teamObj = TEAMS[driverObj.team] || { name: 'Mercedes' };
  const topTeamObj = TEAMS[topTeam.id] || { name: 'Mercedes', color: '#27F4D2' };

  wrap.innerHTML = `
    <div class="g4 mb24">
      <div class="card">
        <div class="card-label">Líder del Mundial</div>
        <div class="card-value card-accent">${driverObj.flag} ${topDriver.points} <span style="font-size:14px; font-weight:500; color:var(--text2);">PTS</span></div>
        <div class="card-sub">${driverObj.name} (${teamObj.name})</div>
        <div class="card-icon">🏆</div>
      </div>
      <div class="card">
        <div class="card-label">Constructor Líder</div>
        <div class="card-value" style="color: ${topTeamObj.color}">${topTeam.points} <span style="font-size:14px; font-weight:500; color:var(--text2);">PTS</span></div>
        <div class="card-sub">${topTeamObj.name}</div>
        <div class="card-icon">🏭</div>
      </div>
      <div class="card">
        <div class="card-label">Rondás Disputadas</div>
        <div class="card-value">${completedCount} / ${RACES.length}</div>
        <div class="card-sub">${((completedCount / RACES.length) * 100).toFixed(0)}% del calendario completado</div>
        <div class="card-icon">🏁</div>
      </div>
      <div class="card">
        <div class="card-label">Ganadores Distintos</div>
        <div class="card-value" style="color: var(--yellow)">${winners.size} <span style="font-size:14px; font-weight:500; color:var(--text2);">PILOTOS</span></div>
        <div class="card-sub">${Array.from(winners).map(wId => DRIVERS[wId]?.short || wId.slice(0,3).toUpperCase()).join(', ')}</div>
        <div class="card-icon">🥇</div>
      </div>
    </div>

    <div class="g12 mb24">
      <div style="display:flex; flex-direction:column; gap:20px;">
        <div class="card">
          <div class="sec-header">
            <span class="sec-title">Campeonato Mundial de Pilotos</span>
            <div class="sec-line"></div>
            <span class="sec-badge">TOP 10</span>
          </div>
          <table class="f1-table">
            <thead>
              <tr>
                <th style="width: 50px;">Pos</th>
                <th>Piloto</th>
                <th>Escudería</th>
                <th style="text-align: center;">Victorias</th>
                <th style="text-align: center;">Podios</th>
                <th style="text-align: right;">Puntos</th>
              </tr>
            </thead>
            <tbody id="driverStandingsRows"></tbody>
          </table>
        </div>

        <div class="card">
          <div class="sec-header">
            <span class="sec-title">Campeonato Mundial de Constructores</span>
            <div class="sec-line"></div>
          </div>
          <table class="f1-table">
            <thead>
              <tr>
                <th style="width: 50px;">Pos</th>
                <th>Escudería</th>
                <th style="text-align: center;">Victorias</th>
                <th style="text-align: center;">Podios</th>
                <th style="text-align: right;">Puntos</th>
              </tr>
            </thead>
            <tbody id="constructorStandingsRows"></tbody>
          </table>
        </div>
      </div>

      <div class="card" style="display:flex; flex-direction:column; gap:16px;">
        <div class="sec-header">
          <span class="sec-title">Distribución de Puntos por Escudería</span>
          <div class="sec-line"></div>
        </div>
        <div class="chart-wrap h300">
          <canvas id="generalChart"></canvas>
        </div>
        
        <div class="sec-header" style="margin-top: 20px;">
          <span class="sec-title">Calendario de la Temporada 2026</span>
          <div class="sec-line"></div>
        </div>
        <div class="full-list-wrap">
          <table class="f1-table calendar-table" style="font-size:12px;">
            <tbody>
              ${RACES.map(r => {
                let statusBadge = '';
                if (r.completed) {
                  const raceData = RESULTS_CACHE[r.round];
                  const winnerId = raceData?.results[0]?.driverId;
                  const winnerDriver = DRIVERS[winnerId];
                  if (winnerDriver) {
                    statusBadge = `<span class="compare-badge cb-win" style="font-size:10px; font-weight:700; background:rgba(0, 212, 170, 0.08); border-color:var(--green)">🥇 ${winnerDriver.flag} ${winnerDriver.short}</span>`;
                  } else {
                    statusBadge = `<span class="compare-badge cb-win" style="font-size:10px;">Finalizado</span>`;
                  }
                } else {
                  statusBadge = `<span class="compare-badge cb-lose" style="font-size:10px;">${r.date.split('-').reverse().slice(0,2).join('/')}</span>`;
                }
                const clickAttr = r.completed ? `class="cal-row-click" onclick="viewRace(${r.round})" title="Ver resultados del GP"` : '';
                return `
                  <tr ${clickAttr}>
                    <td style="width: 40px; color: var(--text3); font-weight:700;">R${r.round}</td>
                    <td><strong>${r.raceName}</strong><br><span style="font-size:11px; color:var(--text2);">${r.circuitName}</span></td>
                    <td>${r.locality}, ${r.country}</td>
                    <td style="text-align:right; white-space:nowrap;">${statusBadge}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
  
  container.appendChild(wrap);
  
  const dRows = document.getElementById('driverStandingsRows');
  STANDINGS_CACHE.drivers.slice(0, 10).forEach((item, idx) => {
    const d = DRIVERS[item.id] || { name: item.id, short: item.id.slice(0,3).toUpperCase(), flag: '🏳️', team: 'mercedes', number: '00' };
    const team = TEAMS[d.team] || { name: 'Mercedes', color: '#27F4D2' };
    const posClass = idx === 0 ? 'p1' : idx === 1 ? 'p2' : idx === 2 ? 'p3' : 'pN';
    dRows.innerHTML += `
      <tr style="cursor: pointer;" onclick="viewDriver('${item.id}')">
        <td><span class="pos-badge ${posClass}">${idx + 1}</span></td>
        <td>
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="flag-sm">${d.flag}</span>
            <div>
              <strong>${d.name}</strong>
              <span style="font-size:10px; color:var(--text3); margin-left:4px;">#${d.number}</span>
            </div>
          </div>
        </td>
        <td>
          <div style="display:flex; align-items:center; gap:4px;">
            ${getTeamLogoInline(d.team)}
            <span>${team.name}</span>
          </div>
        </td>
        <td class="num-cell">${item.wins}</td>
        <td class="num-cell">${item.podiums}</td>
        <td style="text-align: right;" class="pts">${item.points}</td>
      </tr>
    `;
  });

  const cRows = document.getElementById('constructorStandingsRows');
  STANDINGS_CACHE.constructors.forEach((item, idx) => {
    const team = TEAMS[item.id] || { name: item.id, color: '#FFFFFF' };
    const posClass = idx === 0 ? 'p1' : idx === 1 ? 'p2' : idx === 2 ? 'p3' : 'pN';
    cRows.innerHTML += `
      <tr style="cursor: pointer;" onclick="viewTeam('${item.id}')">
        <td><span class="pos-badge ${posClass}">${idx + 1}</span></td>
        <td>
          <div style="display:flex; align-items:center; gap:4px;">
            ${getTeamLogoInline(item.id)}
            <strong>${team.name}</strong>
          </div>
        </td>
        <td class="num-cell">${item.wins}</td>
        <td class="num-cell">${item.podiums || 0}</td>
        <td style="text-align: right;" class="pts">${item.points}</td>
      </tr>
    `;
  });

  renderConstructorsChart();
}

function renderConstructorsChart() {
  const ctx = document.getElementById('generalChart').getContext('2d');
  
  const labels = STANDINGS_CACHE.constructors.map(c => TEAMS[c.id]?.name || c.id);
  const data = STANDINGS_CACHE.constructors.map(c => c.points);
  const colors = STANDINGS_CACHE.constructors.map(c => TEAMS[c.id]?.color || '#FFFFFF');
  
  if (STATE.charts.general) STATE.charts.general.destroy();
  
  STATE.charts.general = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Puntos de Constructor',
        data: data,
        backgroundColor: colors,
        borderRadius: 6,
        borderWidth: 0
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#111120',
          titleColor: '#fff',
          bodyColor: '#ccc',
          borderColor: 'rgba(255,255,255,0.08)',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: 'rgba(255,255,255,0.5)', font: { family: 'Orbitron' } }
        },
        y: {
          grid: { display: false },
          ticks: { color: 'rgba(255,255,255,0.8)', font: { family: 'Inter', weight: 600 } }
        }
      }
    }
  });
}

function viewDriver(id) {
  document.getElementById('filterDriver').value = id;
  STATE.filters.driver = id;
  const teamId = DRIVERS[id]?.team || 'mercedes';
  document.getElementById('filterTeam').value = teamId;
  STATE.filters.team = teamId;
  updateDashboard();
}

function viewTeam(id) {
  document.getElementById('filterTeam').value = id;
  STATE.filters.team = id;
  document.getElementById('filterDriver').value = 'all';
  STATE.filters.driver = 'all';
  updateDashboard();
}

function viewRace(round) {
  document.getElementById('filterRace').value = round;
  STATE.filters.race = String(round);
  STATE.filters.team = 'all';
  STATE.filters.driver = 'all';
  document.getElementById('filterTeam').value = 'all';
  const driverSelect = document.getElementById('filterDriver');
  driverSelect.innerHTML = '<option value="all">Todos los Pilotos</option>';
  Object.entries(DRIVERS).forEach(([id, d]) => {
    driverSelect.innerHTML += `<option value="${id}">${d.flag} ${d.name}</option>`;
  });
  driverSelect.value = 'all';
  updateDashboard();
}

async function refreshData() {
  const btn = document.getElementById('btnRefresh');
  if (!btn || btn.disabled) return;
  btn.disabled = true;
  btn.classList.add('spinning');
  await loadF1Data();
  btn.disabled = false;
  btn.classList.remove('spinning');
}

// ─── VIEW 2: RACE RESULTS (SELECTED RACE) ───────────────────────────────────

function renderRaceResults(container, race) {
  const wrap = document.createElement('div');
  wrap.className = 'fade-in';
  
  const raceData = RESULTS_CACHE[race.round];
  
  if (!race.completed || !raceData) {
    wrap.innerHTML = `
      <div class="card" style="text-align:center; padding:60px 20px;">
        <span style="font-size: 52px; display:block; margin-bottom:16px;">⏰</span>
        <h2 style="font-family:var(--font); font-weight:800; margin-bottom:8px;">ESTA CARRERA AÚN NO SE HA DISPUTADO</h2>
        <p style="color:var(--text2); font-size:14px; max-width:500px; margin:0 auto;">El Gran Premio está programado para el <strong>${race.date.split('-').reverse().join('/')}</strong> en el ${race.circuitName}. Vuelve después del fin de semana de carrera para ver los resultados.</p>
      </div>
    `;
    container.appendChild(wrap);
    return;
  }

  const p1 = raceData.results[0];
  const p2 = raceData.results[1];
  const p3 = raceData.results[2];
  
  const bestLapDriver = DRIVERS[raceData.fastestLap.driverId] || { flag: '🏳️', name: raceData.fastestLap.driverId, team: 'mercedes' };
  const mvpDriver = DRIVERS[raceData.mvp.driverId] || { flag: '🏳️', name: raceData.mvp.driverId, team: 'mercedes' };
  
  const circuitInfo = getCircuitInfo(race.circuitId);
  const winnerColor = TEAMS[p1?.teamId]?.color || '#e50914';

  wrap.innerHTML = `
    ${getCircuitCard(race, circuitInfo, winnerColor)}

    <div class="g2 mb24">
      <div class="card" style="display:flex; flex-direction:column; justify-content:space-between;">
        <div class="sec-header">
          <span class="sec-title">Ganadores del Podio</span>
          <div class="sec-line"></div>
        </div>
        
        <div class="podium-wrap">
          <div class="podium-col">
            <div class="podium-avatar pa2" style="border-color:${TEAMS[p2.teamId]?.color || '#FFFFFF'}">
              <div style="width:56px;height:56px;">${getDriverHelmetSVG(p2.driverId, TEAMS[p2.teamId]?.color)}</div>
              <div class="medal">🥈</div>
            </div>
            <div class="podium-dname">${DRIVERS[p2.driverId]?.name || p2.driverName}</div>
            <div class="podium-tname">${TEAMS[p2.teamId]?.name || p2.teamId}</div>
            <div class="podium-block pb2">
              <span class="podium-pts-disp">+${p2.points}</span>
            </div>
          </div>
          
          <div class="podium-col">
            <div class="podium-avatar pa1" style="border-color:${TEAMS[p1.teamId]?.color || '#FFFFFF'}">
              <div style="width:70px;height:70px;">${getDriverHelmetSVG(p1.driverId, TEAMS[p1.teamId]?.color)}</div>
              <div class="medal">🥇</div>
            </div>
            <div class="podium-dname">${DRIVERS[p1.driverId]?.name || p1.driverName}</div>
            <div class="podium-tname">${TEAMS[p1.teamId]?.name || p1.teamId}</div>
            <div class="podium-block pb1">
              <span class="podium-pts-disp">+${p1.points}</span>
            </div>
          </div>
          
          <div class="podium-col">
            <div class="podium-avatar pa3" style="border-color:${TEAMS[p3.teamId]?.color || '#FFFFFF'}">
              <div style="width:52px;height:52px;">${getDriverHelmetSVG(p3.driverId, TEAMS[p3.teamId]?.color)}</div>
              <div class="medal">🥉</div>
            </div>
            <div class="podium-dname">${DRIVERS[p3.driverId]?.name || p3.driverName}</div>
            <div class="podium-tname">${TEAMS[p3.teamId]?.name || p3.teamId}</div>
            <div class="podium-block pb3">
              <span class="podium-pts-disp">+${p3.points}</span>
            </div>
          </div>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:14px;">
        <div class="lap-card">
          <div class="lap-label">⏱️ Vuelta Rápida en Carrera</div>
          <div class="lap-time">${raceData.fastestLap.time}</div>
          <div class="lap-driver">Registrada por <strong>${bestLapDriver.flag} ${bestLapDriver.name}</strong> (${TEAMS[bestLapDriver.team]?.name || bestLapDriver.team})</div>
        </div>

        <div class="mvp-card">
          <div class="mvp-label">⭐ MVP de la Carrera</div>
          <div class="mvp-name">${mvpDriver.flag} ${mvpDriver.name}</div>
          <div class="mvp-reason">"${raceData.mvp.reason}"</div>
        </div>

        <div class="card" style="flex:1; padding:18px 22px;">
          <div class="sec-header" style="margin-bottom:12px;">
            <span class="sec-title">⚠️ Penalizaciones</span>
            <div class="sec-line"></div>
          </div>
          
          <div id="racePenaltiesWrap">
            ${raceData.penalties.length === 0 
              ? `<div style="font-size:12px; color:var(--text3); padding:10px 0;">No se registraron penalizaciones en este Gran Premio.</div>`
              : raceData.penalties.map(p => `
                  <div class="penalty-item">
                    <span class="penalty-icon">⚠️</span>
                    <div>
                      <div class="penalty-driver">${DRIVERS[p.driverId]?.flag || '🏳️'} ${DRIVERS[p.driverId]?.name || p.driverId}</div>
                      <div class="penalty-desc">${p.desc}</div>
                    </div>
                    <div class="penalty-val">${p.val}</div>
                  </div>
                `).join('')
            }
          </div>
        </div>
      </div>
    </div>

    <div class="card mb24">
      <div class="sec-header">
        <span class="sec-title">Clasificación Completa de Carrera</span>
        <div class="sec-line"></div>
        ${getDataSourceBadge(raceData.dataSource, raceData.isPartial)}
      </div>
      ${getPartialWarningHtml(raceData)}
      <div class="table-scroll">
      <table class="f1-table">
        <thead>
          <tr>
            <th style="width: 50px;">Pos</th>
            <th style="width: 50px; text-align: center;">Grid</th>
            <th>Piloto</th>
            <th>Escudería</th>
            <th style="text-align: center;">Tiempo / Dif</th>
            <th style="text-align: center;">Estado</th>
            <th style="text-align: center;">Puestos +/-</th>
            <th style="text-align: center;">Vuelta Rápida</th>
            <th style="text-align: right;">Puntos</th>
          </tr>
        </thead>
        <tbody>
          ${raceData.results.map((res, idx) => {
            const d = DRIVERS[res.driverId] || { flag: '🏳️', name: res.driverName, team: res.teamId };
            const team = TEAMS[res.teamId] || { name: res.teamId, color: '#FFFFFF' };
            const posClass = idx === 0 ? 'p1' : idx === 1 ? 'p2' : idx === 2 ? 'p3' : 'pN';
            const timeText = formatResultTime(res.time, res.status);
            const statusLabelClass = getStatusLabelClass(res.status);
            
            const posChangeHtml = getPosChangeHtml(res);

            return `
              <tr>
                <td><span class="pos-badge ${posClass}">${res.position}</span></td>
                <td class="num-cell">${res.grid || '—'}</td>
                <td>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="flag-sm">${d.flag}</span>
                    <strong>${d.name}</strong>
                  </div>
                </td>
                <td>
                  <div style="display:flex; align-items:center; gap:4px;">
                    ${getTeamLogoInline(res.teamId)}
                    <span>${team.name}</span>
                  </div>
                </td>
                <td class="time-cell">${timeText}</td>
                <td style="text-align: center;"><span class="status-label ${statusLabelClass}">${formatStatusLabel(res.status)}</span></td>
                <td style="text-align: center;">${posChangeHtml}</td>
                <td style="text-align: center;">
                  ${res.fastestLap ? `<span class="compare-badge cb-win" style="font-size:9px; background:rgba(0,212,170,.15); color:var(--green); border-color:var(--green)">⏱️ MAV</span>` : `—`}
                </td>
                <td style="text-align: right;" class="pts">${res.points > 0 ? `+${res.points}` : '0'}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
      </div>
    </div>
  `;

  container.appendChild(wrap);
}

// ─── VIEW 3: TEAM COMPARISON 1 VS 1 (SELECTED TEAM) ─────────────────────────

function renderTeamComparison(container, teamId) {
  const wrap = document.createElement('div');
  wrap.className = 'fade-in';
  
  const team = TEAMS[teamId] || { name: teamId, color: '#FFFFFF', bg: 'rgba(255,255,255,0.05)' };
  const driverIds = TEAM_DRIVERS[teamId] || [];
  
  if (driverIds.length < 2) {
    wrap.innerHTML = `
      <div class="card" style="text-align:center; padding:40px;">
        <h3>No hay suficientes pilotos registrados para comparar en esta escudería.</h3>
      </div>
    `;
    container.appendChild(wrap);
    return;
  }

  const d1Id = driverIds[0];
  const d2Id = driverIds[1];
  const d1 = DRIVERS[d1Id];
  const d2 = DRIVERS[d2Id];

  const completedRaces = RACES.filter(r => r.completed);
  
  let d1Pts = 0;
  let d2Pts = 0;
  let d1Wins = 0;
  let d2Wins = 0;
  let d1Podiums = 0;
  let d2Podiums = 0;
  let d1FL = 0;
  let d2FL = 0;
  let d1Finishes = 0;
  let d2Finishes = 0;
  let d1Ahead = 0;
  let d2Ahead = 0;

  const raceByRaceData = [];

  completedRaces.forEach(r => {
    const raceResults = RESULTS_CACHE[r.round]?.results || [];
    const r1 = raceResults.find(x => x.driverId === d1Id);
    const r2 = raceResults.find(x => x.driverId === d2Id);

    if (r1 && r2) {
      d1Pts += r1.points;
      d2Pts += r2.points;
      
      if (r1.position === "1") d1Wins++;
      if (r2.position === "1") d2Wins++;
      
      if (["1","2","3"].includes(r1.position)) d1Podiums++;
      if (["1","2","3"].includes(r2.position)) d2Podiums++;
      
      if (r1.fastestLap) d1FL++;
      if (r2.fastestLap) d2FL++;

      if (isClassifiedFinish(r1.status)) d1Finishes++;
      if (isClassifiedFinish(r2.status)) d2Finishes++;

      const p1Num = r1.posNumber;
      const p2Num = r2.posNumber;
      if (p1Num < p2Num) d1Ahead++;
      else if (p2Num < p1Num) d2Ahead++;

      raceByRaceData.push({
        round: r.round,
        raceName: r.raceName,
        d1Pos: r1.position,
        d2Pos: r2.position,
        d1Status: r1.status,
        d2Status: r2.status,
        d1Pts: r1.points,
        d2Pts: r2.points,
        d1PtsAccum: d1Pts,
        d2PtsAccum: d2Pts
      });
    }
  });

  const renderStatRow = (label, v1, v2) => {
    const total = v1 + v2;
    const w1 = total > 0 ? (v1 / total) * 100 : 50;
    const w2 = total > 0 ? (v2 / total) * 100 : 50;
    
    const win1 = v1 > v2;
    const win2 = v2 > v1;
    
    return `
      <div class="h2h-stat">
        <div class="h2h-row">
          <span class="hval" style="color: ${win1 ? team.color : 'var(--text2)'};">${v1}</span>
          <span class="hlabel">${label}</span>
          <span class="hval" style="color: ${win2 ? team.color : 'var(--text2)'};">${v2}</span>
        </div>
        <div class="hbar">
          <div class="hbar-a" style="width:${w1}%; background:${team.color}; opacity:${win1 ? 1 : 0.4}"></div>
          <div class="hbar-b" style="width:${w2}%; background:${team.color}; opacity:${win2 ? 1 : 0.4}"></div>
        </div>
      </div>
    `;
  };

  wrap.innerHTML = `
    <div class="card mb24" style="background:${team.bg}; border-color:${team.color}50">
      <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px;">
        <div style="display:flex; align-items:center; gap:20px;">
          <div style="width:60px; height:60px; display:flex; align-items:center; justify-content:center; fill:${team.color}; flex-shrink:0;">
            ${getTeamLogoSVG(teamId, team.color)}
          </div>
          <div>
            <span class="card-label" style="color:${team.color}; font-weight:800;">ESCUDERÍA CONFIRMADA F1 2026</span>
            <h1 style="font-family:var(--font); font-weight:900; font-size:32px; margin:0;">${team.name}</h1>
            <div style="display:flex; flex-wrap:wrap; gap:16px; margin-top:8px; font-size:12px; color:var(--text2);">
              ${team.principal ? `<div>💼 Director: <strong style="color:var(--text)">${team.principal}</strong></div>` : ''}
              ${team.base ? `<div>📍 Base: <strong style="color:var(--text)">${team.base}</strong></div>` : ''}
              ${team.chassis ? `<div>🏎️ Chasis: <strong style="color:var(--text)">${team.chassis}</strong></div>` : ''}
              ${team.engine ? `<div>⚙️ Motor: <strong style="color:var(--text)">${team.engine}</strong></div>` : ''}
            </div>
          </div>
        </div>
        <div style="text-align:right;">
          <span class="card-label">Puntos Combinados</span>
          <div class="card-value" style="color:var(--text)">${d1Pts + d2Pts} <span style="font-size:14px; color:var(--text2);">PTS</span></div>
        </div>
      </div>
    </div>

    <div class="g12 mb24">
      <div class="h2h-wrap">
        <div class="h2h-top">
          <div class="h2h-driver">
            <div style="width:72px; height:72px; display:flex; align-items:center; justify-content:center;">
              ${getDriverHelmetSVG(d1Id, team.color)}
            </div>
            <div class="h2h-dname" style="margin-top:6px;">${d1.name}</div>
            <span class="h2h-dnum">#${d1.number}</span>
          </div>
          <div class="h2h-vs">VS</div>
          <div class="h2h-driver">
            <div style="width:72px; height:72px; display:flex; align-items:center; justify-content:center;">
              ${getDriverHelmetSVG(d2Id, team.color)}
            </div>
            <div class="h2h-dname" style="margin-top:6px;">${d2.name}</div>
            <span class="h2h-dnum">#${d2.number}</span>
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:4px;">
          ${renderStatRow("Puntos Totales", d1Pts, d2Pts)}
          ${renderStatRow("Victorias", d1Wins, d2Wins)}
          ${renderStatRow("Podios", d1Podiums, d2Podiums)}
          ${renderStatRow("Vueltas Rápidas", d1FL, d2FL)}
          ${renderStatRow("Carreras por Delante", d1Ahead, d2Ahead)}
          ${renderStatRow("Carreras Terminadas", d1Finishes, d2Finishes)}
        </div>
      </div>

      <div class="card" style="display:flex; flex-direction:column; justify-content:space-between;">
        <div>
          <div class="sec-header" style="margin-bottom:18px;">
            <span class="sec-title">Evolución de Puntos (Ronda a Ronda)</span>
            <div class="sec-line"></div>
          </div>
          
          <div class="pts-evo-legend">
            <div class="evo-item">
              <span class="evo-dot" style="background:${team.color}"></span>
              <strong>${d1.name}</strong>
            </div>
            <div class="evo-item">
              <span class="evo-dot" style="background:${team.color}; opacity:0.4;"></span>
              <strong>${d2.name}</strong>
            </div>
          </div>

          <div class="chart-wrap h260">
            <canvas id="evolutionChart"></canvas>
          </div>
        </div>

        <div style="margin-top:20px;">
          <div class="sec-header" style="margin-bottom:12px;">
            <span class="sec-title">Historial Comparado de Resultados</span>
            <div class="sec-line"></div>
          </div>
          <div class="full-list-wrap">
            <table class="f1-table h2h-history-table" style="font-size:12px;">
              <thead>
                <tr>
                  <th>Carrera</th>
                  <th style="text-align:center;">Pos ${d1.short}</th>
                  <th style="text-align:center;">Estado ${d1.short}</th>
                  <th style="text-align:center;">Pos ${d2.short}</th>
                  <th style="text-align:center;">Estado ${d2.short}</th>
                  <th style="text-align:right;">Mejor Posición</th>
                </tr>
              </thead>
              <tbody>
                ${raceByRaceData.map(item => {
                  const d1WinsMatch = parseInt(item.d1Pos) < parseInt(item.d2Pos) || (item.d2Pos === 'NC' && item.d1Pos !== 'NC');
                  const d2WinsMatch = parseInt(item.d2Pos) < parseInt(item.d1Pos) || (item.d1Pos === 'NC' && item.d2Pos !== 'NC');
                  return `
                    <tr>
                      <td>R${item.round}: ${item.raceName}</td>
                      <td class="num-cell${d1WinsMatch ? ' is-best' : ''}" style="color:${d1WinsMatch ? team.color : 'inherit'}">${item.d1Pos}</td>
                      <td style="text-align:center;"><span class="status-label ${getStatusLabelClass(item.d1Status)}">${formatStatusLabel(item.d1Status)}</span></td>
                      <td class="num-cell${d2WinsMatch ? ' is-best' : ''}" style="color:${d2WinsMatch ? team.color : 'inherit'}">${item.d2Pos}</td>
                      <td style="text-align:center;"><span class="status-label ${getStatusLabelClass(item.d2Status)}">${formatStatusLabel(item.d2Status)}</span></td>
                      <td style="text-align:right;">
                        ${d1WinsMatch 
                          ? `<span class="compare-badge cb-win" style="font-size:8px;">${d1.short}</span>` 
                          : `<span class="compare-badge cb-lose" style="font-size:8px;">${d2.short}</span>`
                        }
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;

  container.appendChild(wrap);

  const ctx = document.getElementById('evolutionChart').getContext('2d');
  const labels = raceByRaceData.map(item => `R${item.round}`);
  const d1Data = raceByRaceData.map(item => item.d1PtsAccum);
  const d2Data = raceByRaceData.map(item => item.d2PtsAccum);

  if (STATE.charts.evolution) STATE.charts.evolution.destroy();

  STATE.charts.evolution = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: d1.name,
          data: d1Data,
          borderColor: team.color,
          backgroundColor: team.color + '10',
          tension: 0.15,
          borderWidth: 3,
          pointBackgroundColor: team.color,
          fill: true
        },
        {
          label: d2.name,
          data: d2Data,
          borderColor: team.color,
          borderDash: [5, 5],
          backgroundColor: 'transparent',
          tension: 0.15,
          borderWidth: 2,
          pointBackgroundColor: team.color + '80'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#111120',
          titleColor: '#fff',
          bodyColor: '#ccc',
          borderColor: 'rgba(255,255,255,0.08)',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: 'rgba(255,255,255,0.5)', font: { family: 'Orbitron', size: 10 } }
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: 'rgba(255,255,255,0.5)', font: { family: 'Orbitron', size: 10 } }
        }
      }
    }
  });
}

// ─── VIEW 4: SINGLE DRIVER PROFILE (SELECTED DRIVER) ────────────────────────

function renderDriverProfile(container, driverId) {
  const wrap = document.createElement('div');
  wrap.className = 'fade-in';

  const d = DRIVERS[driverId];
  const team = TEAMS[d.team];
  
  const driverStandObj = STANDINGS_CACHE.drivers.find(x => x.id === driverId);
  const position = STANDINGS_CACHE.drivers.findIndex(x => x.id === driverId) + 1;
  const points = driverStandObj ? driverStandObj.points : 0;
  const wins = driverStandObj ? driverStandObj.wins : 0;
  const podiums = driverStandObj ? driverStandObj.podiums : 0;
  const fastestLaps = driverStandObj ? driverStandObj.fastestLaps : 0;

  let bestResultThisSeason = "NC";
  if (driverStandObj && driverStandObj.results.length > 0) {
    const positions = driverStandObj.results.map(r => r.position).filter(pos => pos !== 'NC' && !isNaN(pos)).map(Number);
    if (positions.length > 0) {
      bestResultThisSeason = Math.min(...positions) + 'º';
    }
  }

  const teammateId = TEAM_DRIVERS[d.team].find(x => x !== driverId);
  const teammate = teammateId ? DRIVERS[teammateId] : null;
  const teammateStandObj = teammateId ? STANDINGS_CACHE.drivers.find(x => x.id === teammateId) : null;
  
  let compareTeammateText = "No hay compañero disponible";
  let beatTeammate = false;
  if (teammateStandObj && driverStandObj) {
    beatTeammate = points >= teammateStandObj.points;
    const diff = Math.abs(points - teammateStandObj.points);
    compareTeammateText = beatTeammate 
      ? `Lidera sobre ${teammate.name} por +${diff} pts`
      : `Detrás de ${teammate.name} por -${diff} pts`;
  }

  wrap.innerHTML = `
    <div class="driver-hero mb24" style="background:linear-gradient(135deg, ${team.color}15, var(--bg3)); border-color:${team.color}40; position:relative;">
      <div class="driver-num-bg">${d.number}</div>
      
      <div style="display:flex; align-items:center; gap:24px; flex-wrap:wrap; margin-bottom:20px;">
        <div style="width:85px; height:85px; flex-shrink:0;">
          ${getDriverHelmetSVG(driverId, team.color)}
        </div>
        <div style="z-index:1;">
          <div style="font-size:24px; line-height:1; margin-bottom:4px;">${d.flag}</div>
          <h1 class="driver-name" style="margin:0;">${d.name}</h1>
          <div class="driver-nat" style="margin-top:4px;">${d.nationality} | Escudería ${team.name}</div>
          <div class="driver-team-pill" style="margin-top:8px;">
            ${getTeamLogoInline(d.team)}
            <span>Piloto #${d.number}</span>
          </div>
        </div>
      </div>

      <div class="driver-info-grid">
        <div class="dinfo">
          <div class="dinfo-label">Posición Mundial</div>
          <div class="dinfo-value accent" style="color:var(--accent);">${position > 0 ? `${position}º` : '—'}</div>
        </div>
        <div class="dinfo">
          <div class="dinfo-label">Puntos Totales</div>
          <div class="dinfo-value">${points} <span style="font-size:10px; font-weight:normal; color:var(--text2)">PTS</span></div>
        </div>
        <div class="dinfo">
          <div class="dinfo-label">Edad Actual</div>
          <div class="dinfo-value">${d.age()} años</div>
        </div>
        <div class="dinfo">
          <div class="dinfo-label">Mejor Resultado '26</div>
          <div class="dinfo-value green">${bestResultThisSeason}</div>
        </div>
      </div>
    </div>

    <div class="g2 mb24">
      <div class="card" style="display:flex; flex-direction:column; justify-content:space-between; gap:20px;">
        <div>
          <div class="sec-header" style="margin-bottom:12px;">
            <span class="sec-title">Historial de Equipos y Carrera</span>
            <div class="sec-line"></div>
          </div>
          
          <div class="career-list">
            ${d.career.map(c => `
              <div class="career-item">
                <span class="career-years">${c.y}</span>
                <span class="career-team">${c.t}</span>
                <span class="career-role">${c.role}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="background:rgba(255,255,255,0.02); padding:16px; border-radius:var(--r); border:1px solid var(--border)">
          <div class="dinfo-label" style="margin-bottom:6px;">Perfil y Bio</div>
          <p style="font-size:13px; color:var(--text2); line-height:1.6; font-style:italic;">"${d.bio}"</p>
        </div>
      </div>

      <div class="card" style="display:flex; flex-direction:column; justify-content:space-between; gap:20px;">
        <div>
          <div class="sec-header" style="margin-bottom:12px;">
            <span class="sec-title">Comparación con Compañero</span>
            <div class="sec-line"></div>
          </div>

          <div style="display:flex; align-items:center; gap:16px; margin-bottom:16px;">
            <div class="pos-badge ${beatTeammate ? 'p1' : 'pN'}" style="width:36px; height:36px; font-size:14px;">
              ${beatTeammate ? '✓' : '✗'}
            </div>
            <div>
              <div style="font-weight:700; font-size:14px;">${beatTeammate ? 'Delante del compañero' : 'Detrás del compañero'}</div>
              <div style="font-size:12px; color:var(--text2);">${compareTeammateText}</div>
            </div>
          </div>

          <table class="f1-table" style="font-size:12px;">
            <tbody>
              <tr>
                <td><strong>Puntos Mundiales</strong></td>
                <td>${points} pts</td>
                <td style="text-align:right; color:var(--text3);">${teammate ? teammate.name : ''}: ${teammateStandObj ? teammateStandObj.points : 0} pts</td>
              </tr>
              <tr>
                <td><strong>Victorias</strong></td>
                <td>${wins}</td>
                <td style="text-align:right; color:var(--text3);">${teammate ? teammate.name : ''}: ${teammateStandObj ? teammateStandObj.wins : 0}</td>
              </tr>
              <tr>
                <td><strong>Podios</strong></td>
                <td>${podiums}</td>
                <td style="text-align:right; color:var(--text3);">${teammate ? teammate.name : ''}: ${teammateStandObj ? teammateStandObj.podiums : 0}</td>
              </tr>
              <tr>
                <td><strong>Vueltas Rápidas</strong></td>
                <td>${fastestLaps}</td>
                <td style="text-align:right; color:var(--text3);">${teammate ? teammate.name : ''}: ${teammateStandObj ? teammateStandObj.fastestLaps : 0}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <div class="sec-header" style="margin-bottom:12px;">
            <span class="sec-title">Puntos por Carrera</span>
            <div class="sec-line"></div>
          </div>
          <div class="chart-wrap h200">
            <canvas id="driverChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  `;

  container.appendChild(wrap);

  const ctx = document.getElementById('driverChart').getContext('2d');
  const labels = RACES.filter(r => r.completed).map(r => `R${r.round}`);
  
  // Fill points scored in completed races
  const data = RACES.filter(r => r.completed).map(r => {
    const raceRes = RESULTS_CACHE[r.round]?.results || [];
    const dRes = raceRes.find(x => x.driverId === driverId);
    return dRes ? dRes.points : 0;
  });

  if (STATE.charts.evolution) STATE.charts.evolution.destroy();

  STATE.charts.evolution = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Puntos anotados',
        data: data,
        backgroundColor: team.color,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#111120',
          titleColor: '#fff',
          bodyColor: '#ccc',
          borderColor: 'rgba(255,255,255,0.08)',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: 'rgba(255,255,255,0.5)', font: { family: 'Orbitron', size: 9 } }
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: 'rgba(255,255,255,0.5)', font: { family: 'Orbitron', size: 9 } }
        }
      }
    }
  });
}

// ─── VIEW 5: MIXED FILTERS (COMBINATION SELECTIONS) ─────────────────────────

function renderMixedFilters(container) {
  const wrap = document.createElement('div');
  wrap.className = 'fade-in';

  const rId = STATE.filters.race;
  const tId = STATE.filters.team;
  const dId = STATE.filters.driver;

  const race = RACES.find(r => r.round == rId);
  const team = TEAMS[tId];
  const driver = DRIVERS[dId];

  let queryText = "Resultados para ";
  let detailsHtml = "";

  if (race && team && dId === 'all') {
    queryText += `el <strong>${race.raceName}</strong> de la escudería <strong>${team.name}</strong>`;
    
    const raceResults = RESULTS_CACHE[race.round]?.results || [];
    const teamResults = raceResults.filter(x => x.teamId === tId);
    const circuitInfo = getCircuitInfo(race.circuitId);
    const totalTeamPoints = teamResults.reduce((s, r) => s + r.points, 0);

    const driverCards = teamResults.map(res => {
      const d = DRIVERS[res.driverId] || { flag: '🏳️', name: res.driverName, number: '??', short: res.driverShort };
      const posClass = res.position === "1" ? "p1" : res.position === "2" ? "p2" : res.position === "3" ? "p3" : "pN";
      const changeHtml = !isClassifiedFinish(res.status) ? `<span class="pos-change lost">NC</span>` :
        res.grid === 0 ? '<span style="color:var(--text3)">—</span>' :
        (() => {
          const gridDiff = res.grid - res.posNumber;
          if (gridDiff > 0) return `<span class="pos-change gained">▲ ${gridDiff}</span>`;
          if (gridDiff < 0) return `<span class="pos-change lost">▼ ${Math.abs(gridDiff)}</span>`;
          return `<span class="pos-change equal">—</span>`;
        })();

      return `
        <div class="card" style="border-color:${team.color}30">
          <div style="display:flex; align-items:center; gap:16px; margin-bottom:18px;">
            <div style="width:60px;height:60px;flex-shrink:0;">${getDriverHelmetSVG(res.driverId, team.color)}</div>
            <div>
              <div style="font-size:10px;color:var(--text3);font-weight:700;letter-spacing:1px;">${d.flag} ${d.nationality || ''}</div>
              <div style="font-size:18px;font-weight:700;">${d.name}</div>
              <div style="font-size:11px;color:var(--text2);">Dorsal #${d.number}</div>
            </div>
            <div style="margin-left:auto;">
              <span class="pos-badge ${posClass}" style="width:52px;height:52px;font-size:20px;">${res.position}</span>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;font-size:12px;">
            <div class="cstat"><span class="cic-val" style="color:${team.color}">${res.points}</span><span class="cic-key">Puntos</span></div>
            <div class="cstat"><span class="cic-val">${res.grid || '?'}</span><span class="cic-key">Salida</span></div>
            <div class="cstat" style="align-items:center;">${changeHtml || '<span style="color:var(--text3)">—</span>'}<span class="cic-key" style="margin-top:4px;">Posic. +/-</span></div>
          </div>
          <div class="result-meta" style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border);">
            <span class="time-cell">⏱️ ${formatResultTimeOrStatus(res.time, res.status)}</span>
            ${res.fastestLap ? '<span class="compare-badge cb-win" style="font-size:9px;margin-left:6px;">⚡ Vuelta Rápida</span>' : ''}
          </div>
        </div>
      `;
    }).join('');

    detailsHtml = `
      ${getCircuitCard(race, circuitInfo, team.color)}
      <div class="card mb24" style="background:${team.bg};border-color:${team.color}40;display:flex;align-items:center;gap:20px;flex-wrap:wrap;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:16px;">
          <div style="width:52px;height:52px;">${getTeamLogoSVG(tId, team.color)}</div>
          <div>
            <div style="font-size:9px;color:${team.color};font-weight:800;letter-spacing:1.5px;text-transform:uppercase;">ESCUDERÍA</div>
            <div style="font-family:var(--font);font-size:24px;font-weight:900;">${team.name}</div>
            ${team.principal ? `<div style="font-size:11px;color:var(--text2);margin-top:2px;">💼 ${team.principal}</div>` : ''}
          </div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;">Puntos en esta carrera</div>
          <div style="font-family:var(--font);font-size:36px;font-weight:900;color:${team.color}">${totalTeamPoints} <span style="font-size:14px;color:var(--text2)">PTS</span></div>
        </div>
      </div>
      <div class="g2 mb24">
        ${teamResults.length === 0
          ? `<div class="card" style="text-align:center;padding:40px;color:var(--text3);">No hay resultados registrados para esta escudería en esta carrera.</div>`
          : driverCards
        }
      </div>
    `;

  } else if (race && driver) {
    queryText += `<strong>${driver.name}</strong> en el <strong>${race.raceName}</strong>`;
    
    const raceResults = RESULTS_CACHE[race.round]?.results || [];
    const driverRes = raceResults.find(x => x.driverId === dId);

    if (driverRes) {
      const posClass = driverRes.position === "1" ? "p1" : driverRes.position === "2" ? "p2" : driverRes.position === "3" ? "p3" : "pN";
      const timeText = formatResultTime(driverRes.time, driverRes.status);
      const statusLabelClass = getStatusLabelClass(driverRes.status);
      const statusHtml = `<span class="status-label ${statusLabelClass}">${formatStatusLabel(driverRes.status)}</span>`;
      detailsHtml = `
        <div class="g2 mb24">
          <div class="card">
            <div class="sec-header">
              <span class="sec-title">Resultado de Carrera</span>
              <div class="sec-line"></div>
            </div>
            
            <div style="display:flex; flex-direction:column; gap:16px; align-items:center; justify-content:center; min-height:180px;">
              <span class="pos-badge ${posClass}" style="width:72px; height:72px; font-size:26px;">${driverRes.position}</span>
              <div style="text-align:center;">
                ${timeText !== '—'
                  ? `<div class="result-hero-time">${timeText}</div><div class="result-hero-status">${statusHtml}</div>`
                  : `<div class="result-hero-status solo">${statusHtml}</div>`
                }
              </div>
            </div>
          </div>

          <div class="card" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="sec-header">
                <span class="sec-title">Puntos Obtenidos</span>
                <div class="sec-line"></div>
              </div>
              <div class="card-value card-accent" style="font-size:52px; text-align:center; padding:20px 0;">
                +${driverRes.points} <span style="font-size:18px; color:var(--text2)">PTS</span>
              </div>
            </div>
            
            <div style="text-align:center; color:var(--text2); font-size:12px;">
              ${driverRes.fastestLap ? "🏎️ ¡Logró marcar la vuelta rápida de la carrera (+1 pt)!" : "No marcó la vuelta rápida de la carrera."}
            </div>
          </div>
        </div>
      `;
    } else {
      detailsHtml = `
        <div class="card" style="text-align:center; padding:40px;">
          <p style="color:var(--text3);">No hay resultados para este piloto en esta carrera.</p>
        </div>
      `;
    }
  } else if (team && driver) {
    renderDriverProfile(container, dId);
    return;
  }

  wrap.innerHTML = `
    <div class="card mb24" style="background:rgba(255,255,255,0.015);">
      <span style="font-size:13px; color:var(--text2);">${queryText}</span>
    </div>
    ${detailsHtml}
  `;

  container.appendChild(wrap);
}

function showLoading(show) {
  const container = document.getElementById('loadingScreen');
  if (container) {
    container.style.display = show ? 'flex' : 'none';
  }
}
