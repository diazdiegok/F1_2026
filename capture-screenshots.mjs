import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join } from 'path';

const OUT = 'C:\\Users\\diego\\Desktop\\capturas';
const DESTACADAS_ONLY = process.argv.includes('--destacadas');
const BASE = process.env.CAPTURE_URL || 'http://127.0.0.1:8080/';
const VIEWPORT = { width: 1440, height: 900 };

const TEAMS = [
  ['red_bull', 'Red Bull'],
  ['mercedes', 'Mercedes'],
  ['ferrari', 'Ferrari'],
  ['mclaren', 'McLaren'],
  ['aston_martin', 'Aston Martin'],
  ['alpine', 'Alpine'],
  ['williams', 'Williams'],
  ['rb', 'Racing Bulls'],
  ['audi', 'Audi'],
  ['cadillac', 'Cadillac'],
  ['haas', 'Haas'],
];

const DRIVERS = [
  ['antonelli', 'Antonelli'],
  ['hamilton', 'Hamilton'],
  ['leclerc', 'Leclerc'],
  ['max_verstappen', 'Verstappen'],
  ['norris', 'Norris'],
  ['piastri', 'Piastri'],
  ['russell', 'Russell'],
  ['alonso', 'Alonso'],
  ['sainz', 'Sainz'],
  ['colapinto', 'Colapinto'],
  ['gasly', 'Gasly'],
  ['albon', 'Albon'],
  ['hadjar', 'Hadjar'],
  ['lawson', 'Lawson'],
  ['arvid_lindblad', 'Lindblad'],
  ['hulkenberg', 'Hulkenberg'],
  ['bortoleto', 'Bortoleto'],
  ['perez', 'Perez'],
  ['bottas', 'Bottas'],
  ['ocon', 'Ocon'],
  ['bearman', 'Bearman'],
  ['stroll', 'Stroll'],
];

function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

async function waitReady(page) {
  await page.waitForFunction(() => {
    const loading = document.getElementById('loadingScreen');
    const hidden = !loading || loading.style.display === 'none';
    const main = document.getElementById('mainContent');
    const hasContent = main && (
      main.querySelector('.card, .f1-table, .stat-card, .driver-hero, .h2h-wrap')
    );
    return hidden && hasContent;
  }, { timeout: 120000 });
  await page.waitForTimeout(900);
}

async function setFilters(page, { race = 'all', team = 'all', driver = 'all' }) {
  await page.selectOption('#filterRace', String(race));
  await page.waitForTimeout(200);
  await page.selectOption('#filterTeam', team);
  await page.waitForTimeout(200);
  await page.selectOption('#filterDriver', driver);
  await waitReady(page);
}

async function screenshot(page, folder, filename, { fullPage = true, clip } = {}) {
  const dir = join(OUT, folder);
  mkdirSync(dir, { recursive: true });
  await page.screenshot({
    path: join(dir, filename),
    fullPage: clip ? false : fullPage,
    clip,
    animations: 'disabled',
  });
  console.log('✓', join(folder, filename));
}

async function screenshotHeaderFilters(page, folder, filename) {
  const header = page.locator('header');
  const filters = page.locator('.filters-bar');
  await header.waitFor({ state: 'visible' });
  await filters.waitFor({ state: 'visible' });
  const hb = await header.boundingBox();
  const fb = await filters.boundingBox();
  if (!hb || !fb) throw new Error('No se pudo medir header/filtros');
  await screenshot(page, folder, filename, {
    fullPage: false,
    clip: {
      x: 0,
      y: Math.max(0, Math.floor(hb.y)),
      width: VIEWPORT.width,
      height: Math.ceil(hb.height + fb.height + 2),
    },
  });
}

async function main() {
  mkdirSync(OUT, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
  });
  await page.goto(BASE, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await waitReady(page);

  // ── Vistas globales y destacadas ──
  await setFilters(page, {});
  await screenshot(page, 'destacadas', '01-campeonato-general-todo.png');

  await screenshotHeaderFilters(page, 'destacadas', '02-header-y-filtros.png');

  if (!DESTACADAS_ONLY) {
    const raceOptions = await page.$$eval('#filterRace option', opts =>
      opts.map(o => ({ value: o.value, text: o.textContent?.trim() || '' }))
        .filter(o => o.value !== 'all')
    );

    for (const r of raceOptions) {
      if (!r.text.startsWith('✓')) continue;
      await setFilters(page, { race: r.value });
      const name = `${String(r.value).padStart(2, '0')}-${slug(r.text.replace(/^✓\s*/, ''))}.png`;
      await screenshot(page, 'carreras', name);
    }

    for (const [id, label] of TEAMS) {
      await setFilters(page, { team: id });
      await screenshot(page, 'equipos', `${slug(label)}.png`);
    }

    for (const [id, label] of DRIVERS) {
      await setFilters(page, { driver: id });
      await screenshot(page, 'pilotos', `${slug(label)}.png`);
    }
  }

  const combos = [
    { file: '03-una-carrera-canada.png', race: '5', team: 'all', driver: 'all' },
    { file: '04-una-carrera-monaco.png', race: '6', team: 'all', driver: 'all' },
    { file: '05-carrera-equipo-todos-pilotos-ferrari-canada.png', race: '5', team: 'ferrari', driver: 'all' },
    { file: '06-carrera-equipo-todos-pilotos-mercedes-monaco.png', race: '6', team: 'mercedes', driver: 'all' },
    { file: '07-carrera-equipo-piloto-hamilton-monaco.png', race: '6', team: 'ferrari', driver: 'hamilton' },
    { file: '08-carrera-equipo-piloto-antonelli-canada.png', race: '5', team: 'mercedes', driver: 'antonelli' },
    { file: '09-carrera-equipo-piloto-colapinto-canada.png', race: '5', team: 'alpine', driver: 'colapinto' },
    { file: '10-todas-carreras-equipo-todos-pilotos-ferrari.png', race: 'all', team: 'ferrari', driver: 'all' },
    { file: '11-todas-carreras-equipo-todos-pilotos-redbull.png', race: 'all', team: 'red_bull', driver: 'all' },
    { file: '12-todas-carreras-piloto-leclerc.png', race: 'all', team: 'all', driver: 'leclerc' },
    { file: '13-todas-carreras-piloto-verstappen.png', race: 'all', team: 'all', driver: 'max_verstappen' },
    { file: '14-carrera-equipo-piloto-alonso-australia.png', race: '1', team: 'aston_martin', driver: 'alonso' },
    { file: '15-vista-mixta-carrera-miami-mclaren.png', race: '4', team: 'mclaren', driver: 'all' },
  ];

  for (const c of combos) {
    await setFilters(page, { race: c.race, team: c.team, driver: c.driver });
    await screenshot(page, 'destacadas', c.file);
  }

  await browser.close();
  console.log('\nCapturas guardadas en:', OUT);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
