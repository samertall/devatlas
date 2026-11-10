import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { catalog, groups, featured, paths } from '../dist/data.js';
import { exampleIndex } from '../dist/examples-index.js';

const names = new Set(catalog.map(item => item.name.toLowerCase()));

test('includes all declared technology entries once', () => {
  assert.equal(names.size,catalog.length);
  for (const group of groups) for (const name of group.items.split('|')) assert.ok(names.has(name.trim().toLowerCase()),`${name} missing`);
});

test('catalog covers all original subject categories plus additional categories', () => {
  assert.equal(groups.length,17);
  assert.ok(catalog.length >= 250);
  for (const name of ['JavaScript','React','TypeScript','Python','Rust','COBOL','Solidity','Kotlin','GraphQL','Haskell','VHDL','Ballerina','Angular','Next.js']) {
    assert.ok(names.has(name.toLowerCase()),`${name} missing`);
  }
});

test('every path references real technologies', () => {
  assert.equal(paths.length,8);
  for (const path of paths) for (const name of [...path.foundation,...path.build,...path.ship]) assert.ok(names.has(name.toLowerCase()),`${name} missing from ${path.id}`);
});

test('featured entries exist and documentation links are absolute HTTPS URLs', () => {
  for (const [name,entry] of Object.entries(featured)) {
    assert.ok(names.has(name.toLowerCase()),`missing featured ${name}`);
    assert.equal(new URL(entry.docs).protocol,'https:');
  }
});

test('every original category entry appears in the map, and code examples have source files',async () => {
  const requested = new Set(groups.slice(0,15).flatMap(group => group.items.split('|')));
  assert.equal(requested.size,159);
  assert.equal(exampleIndex.totalRequested,159);
  assert.equal(exampleIndex.available,157);
  assert.deepEqual(exampleIndex.visualOnly,['Scratch','LabVIEW G']);
  for (const [name,sample] of Object.entries(exampleIndex.samples)) {
    assert.ok(requested.has(name),`${name} not requested`);
    assert.match(sample.path,/^examples\/[a-z0-9-]+\/hello\.[a-z0-9]+$/);
    const [source,deployed] = await Promise.all([readFile(new URL(`../${sample.path}`,import.meta.url),'utf8'),readFile(new URL(`../dist/${sample.path}`,import.meta.url),'utf8')]);
    assert.equal(source,deployed,`source/deployment mismatch for ${name}`);
    assert.ok(source.trim().length > 5,`empty snippet for ${name}`);
  }
});
