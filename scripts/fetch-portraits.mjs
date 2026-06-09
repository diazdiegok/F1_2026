import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'assets', 'drivers');
mkdirSync(outDir, { recursive: true });

const sleep = ms => new Promise(r => setTimeout(r, ms));
const F1_BASE = 'https://media.formula1.com/image/upload/f_auto,c_limit,q_82,w_900/content/dam/fom-website/drivers';

const F1_DRIVERS = {
  max_verstappen: 'M/MAXVER01_Max_Verstappen/maxver01.png',
  hadjar: 'I/ISAHAD01_Isack_Hadjar/isahad01.png',
  russell: 'G/GEORUS01_George_Russell/georus01.png',
  leclerc: 'C/CHALEC01_Charles_Leclerc/chalec01.png',
  hamilton: 'L/LEWHAM01_Lewis_Hamilton/lewham01.png',
  norris: 'L/LANNOR01_Lando_Norris/lannor01.png',
  piastri: 'O/OSCPIA01_Oscar_Piastri/oscpia01.png',
  alonso: 'F/FERALO01_Fernando_Alonso/feralo01.png',
  stroll: 'L/LANSTR01_Lance_Stroll/lanstr01.png',
  gasly: 'P/PIEGAS01_Pierre_Gasly/piegas01.png',
  colapinto: 'F/FRACOL01_Franco_Colapinto/fracol01.png',
  albon: 'A/ALEALB01_Alexander_Albon/alealb01.png',
  sainz: 'C/CARSAI01_Carlos_Sainz/carsai01.png',
  lawson: 'L/LIALAW01_Liam_Lawson/lialaw01.png',
  ocon: 'E/ESTOCO01_Esteban_Ocon/estoco01.png',
};

const PHOTO_DRIVERS = {
  antonelli: 'Kimi Antonelli at the Melbourne Walk during the 2026 Australian Grand Prix (028A7923) cropped.jpg',
  arvid_lindblad: 'Arvid Lindblad at the Red Bull Fan Zone \u2013 Crown Riverwalk, Melbourne (028A7869) (cropped).jpg',
  bearman: 'Oliver Bearman at the Melbourne Walk during the 2026 Australian Grand Prix (028A7963).jpg',
  hulkenberg: '2026 Chinese GP - Nico Hulkenberg.jpg',
  bortoleto: 'Gabriel Bortoleto at the Melbourne Walk during the 2026 Australian Grand Prix (028A8581) cropped.jpg',
  perez: '2026 Chinese GP - Cadillac - Sergio Perez - FP1.jpg',
  bottas: 'Valtteri Bottas at the 2026 Adelaide Motorsport Festival (DSCF2629).jpg',
};

async function download(url, dest) {
  const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, redirect: 'follow' });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  writeFileSync(dest, Buffer.from(await r.arrayBuffer()));
  console.log('OK', dest);
}

for (const [id, path] of Object.entries(F1_DRIVERS)) {
  const dest = join(outDir, `${id}.png`);
  if (existsSync(dest)) { console.log('SKIP', dest); continue; }
  try {
    await download(`${F1_BASE}/${path}`, dest);
    await sleep(400);
  } catch (e) { console.error('FAIL', id, e.message); }
}

for (const [id, file] of Object.entries(PHOTO_DRIVERS)) {
  const dest = join(outDir, `${id}.jpg`);
  if (existsSync(dest)) { console.log('SKIP', dest); continue; }
  const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}`;
  try {
    await download(url, dest);
    await sleep(2500);
  } catch (e) { console.error('FAIL', id, e.message); }
}
