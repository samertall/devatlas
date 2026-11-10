import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { groups } from '../dist/data.js';
import { sampleSpecs } from '../examples/specs.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)),'..');
const originalGroups = groups.slice(0,15);
const requested = [...new Set(originalGroups.flatMap(group => group.items.split('|')))];
const visualOnly = ['Scratch','LabVIEW G'];
const requestedKeys = new Set(requested.map(name => name.toLowerCase()));
const slug = name => name.toLowerCase()
  .replace(/\+\+/g,'pp').replace(/#/g,'sharp').replace(/&/g,'and')
  .replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

const samples = [];
const seenNames = new Set();
const seenSlugs = new Set();
for (const [name,extension,code] of sampleSpecs) {
  const key = name.toLowerCase();
  if (!requestedKeys.has(key)) throw new Error(`${name}: not in original 15 groups`);
  if (seenNames.has(key)) throw new Error(`${name}: duplicate example`);
  if (!/^[a-z0-9]+$/.test(extension)) throw new Error(`${name}: unsafe extension`);
  if (!code.trim()) throw new Error(`${name}: empty code`);
  const pathSlug = slug(name);
  if (seenSlugs.has(pathSlug)) throw new Error(`${name}: slug collision ${pathSlug}`);
  seenNames.add(key);
  seenSlugs.add(pathSlug);
  const path = `examples/${pathSlug}/hello.${extension}`;
  for (const base of [root,join(root,'dist')]) {
    const file = join(base,path);
    await mkdir(dirname(file),{recursive:true});
    await writeFile(file,`${code.trimEnd()}\n`,'utf8');
  }
  samples.push({name,path,extension});
}

const byName = Object.fromEntries(samples.map(sample => [sample.name,sample]));
const index = { totalRequested:requested.length, available:samples.length, visualOnly, samples:byName };
await writeFile(join(root,'dist','examples-index.js'),`// Generated from examples/specs.mjs by npm run build:examples.\nexport const exampleIndex = ${JSON.stringify(index,null,2)};\n`);

const lines = [
  '# Language example coverage',
  '',
  `All **${requested.length} unique entries** from the original 15 requested categories are indexed here.`,
  `**${samples.length} entries** also include an inspectable source example.`,
  '',
  'The remaining entries are still discoverable in the [live catalog](https://devatlas-samer-2026.usefulotter1.chatgpt.site/) but may require proprietary tooling, a visual editor, context-specific schema, or a community-verified example.',
  '',
  'Examples show syntax and basic concepts. They are not all executed in CI; runtime/version/hardware requirements vary.',
  '',
  '**Visual programming exception:** Scratch and LabVIEW G use graphical/block-based or proprietary native project formats. Their catalog entries are complete; this repository does not invent text source files for them.',
];
for (const group of originalGroups) {
  lines.push('',`## ${group.name}`,'');
  for (const name of group.items.split('|')) {
    const item = byName[name];
    lines.push(item ? `- [${name}](${item.path}) — source example` : `- ${name} — visual programming environment (catalog entry)`);
  }
}
await writeFile(join(root,'LANGUAGE_COVERAGE.md'),`${lines.join('\n')}\n`);
console.log(`Built ${samples.length} code examples for ${requested.length} unique requested entries.`);
