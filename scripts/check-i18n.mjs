// Comprueba que el texto en duro de cada elemento con data-i18n coincida con
// su traduccion al español en src/data/i18n.ts.
//
// Por que importa: setLanguage() en Layout.astro NO se ejecuta cuando el idioma
// es "es" (el por defecto), asi que en español el visitante ve el HTML en duro,
// nunca la traduccion. Si los dos textos divergen, el sitio muestra una version
// distinta en cada idioma y nadie se entera.
//
// Uso: node scripts/check-i18n.mjs

import { readFileSync, readdirSync } from "node:fs";

const src = readFileSync("src/data/i18n.ts", "utf8");
const translations = {};
const entry = /"([\w.]+)":\s*\{\s*es:\s*"((?:[^"\\]|\\.)*)"/g;
let m;
while ((m = entry.exec(src))) {
  translations[m[1]] = m[2].replace(/\\"/g, '"');
}

const files = [
  ...readdirSync("src/components").map((f) => "src/components/" + f),
  "src/layouts/Layout.astro",
];

// Las entidades HTML del texto en duro renderizan igual que el caracter suelto
// que lleva la traduccion, asi que se normalizan antes de comparar.
const norm = (s) =>
  s
    .replace(/&middot;/g, "·")
    .replace(/&mdash;/g, "—")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
let problems = 0;

for (const file of files) {
  const content = readFileSync(file, "utf8");
  const tag = /data-i18n="([\w.]+)"[^>]*>\s*([^<]*?)\s*</g;
  let hit;
  while ((hit = tag.exec(content))) {
    const [, key, hardcoded] = hit;
    if (!translations[key]) {
      console.log("SIN CLAVE   " + file + "  ->  " + key);
      problems++;
      continue;
    }
    if (hardcoded && norm(hardcoded) !== norm(translations[key])) {
      console.log("\nDESAJUSTE   " + file + "  ->  " + key);
      console.log("  en duro : " + norm(hardcoded).slice(0, 120));
      console.log("  i18n es : " + norm(translations[key]).slice(0, 120));
      problems++;
    }
  }
}

console.log(problems ? "\n=> " + problems + " problema(s)" : "\n=> todo sincronizado");
process.exit(problems ? 1 : 0);
