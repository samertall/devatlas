import { groups, catalog, featured, paths, challenges, categoryName } from './data.js';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const escapeHTML = (s) => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
const keyOf = name => name.toLowerCase();
const byName = new Map(catalog.map(item => [keyOf(item.name),item]));
const storeKey = 'devatlas.saved.v1';
let saved;
try { saved = new Set(JSON.parse(localStorage.getItem(storeKey) || '[]').filter(x => typeof x === 'string')); }
catch { saved = new Set(); }
let compared = [];
let activeCategory = 'all';
let search = '';
let selectedKind = 'all';
let sort = 'az';
let shown = 24;
let activePath = null;
let challengeIndex = new Date().getUTCDate() % challenges.length;
let toastTimer;

const categoriesOf = item => item.categories.map(id => categoryName[id]);
const monogram = name => {
  const initial = name.match(/[A-Za-z0-9+#]/g)?.slice(0,2).join('') || '∞';
  return initial.toUpperCase();
};
const toneOf = name => [...name].reduce((n,c) => n + c.charCodeAt(0),0) % 5;
const iconHTML = item => `<span class="tech-monogram tone-${toneOf(item.name)}" aria-hidden="true">${escapeHTML(monogram(item.name))}</span>`;

function toast(message) {
  const node = $('#toast');
  node.textContent = message;
  node.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.classList.remove('visible'),3000);
}

function persistSaved() {
  try { localStorage.setItem(storeKey,JSON.stringify([...saved])); }
  catch { toast('Browser storage is unavailable. Your saved list will reset on refresh.'); }
  $('#savedCount').textContent = saved.size;
}

function toggleSaved(name) {
  const k = keyOf(name);
  saved.has(k) ? saved.delete(k) : saved.add(k);
  persistSaved();
  renderCatalog();
  if ($('#savedDialog').open) renderSaved();
  if ($('#detailDialog').open) renderDetail(name);
  toast(saved.has(k) ? `${name} added to your shortlist` : `${name} removed from your shortlist`);
}

function toggleCompare(name) {
  const k = keyOf(name);
  if (compared.includes(k)) compared = compared.filter(n => n !== k);
  else if (compared.length >= 3) return toast('Compare up to three technologies at a time.');
  else compared.push(k);
  $('#compareCount').textContent = compared.length;
  renderCatalog();
  if ($('#compareDialog').open) renderCompare();
  if ($('#detailDialog').open) renderDetail(name);
  toast(compared.includes(k) ? `${name} added to comparison` : `${name} removed from comparison`);
}

function updateURL() {
  const url = new URL(location.href);
  if (activeCategory === 'all') url.searchParams.delete('category');
  else url.searchParams.set('category',activeCategory);
  if (search) url.searchParams.set('q',search);
  else url.searchParams.delete('q');
  history.replaceState({},'',url);
}

function matchingCatalog() {
  const words = search.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return catalog.filter(item => {
    if (activeCategory !== 'all' && !item.categories.includes(activeCategory)) return false;
    if (selectedKind !== 'all' && item.kind !== selectedKind) return false;
    const haystack = [item.name,...categoriesOf(item),featured[item.name]?.use || '',featured[item.name]?.tagline || ''].join(' ').toLowerCase();
    return words.every(word => haystack.includes(word));
  }).sort((a,b) => sort === 'featured' ? Number(Boolean(featured[b.name])) - Number(Boolean(featured[a.name])) || a.name.localeCompare(b.name) : sort === 'za' ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name));
}

function renderFilters() {
  const all = [{ id:'all',name:'All categories' },...groups];
  $('#filterRow').innerHTML = all.map(group => `<button type="button" class="filter-button ${group.id === activeCategory ? 'active' : ''}" data-category="${escapeHTML(group.id)}" aria-pressed="${String(group.id === activeCategory)}">${escapeHTML(group.name)}</button>`).join('');
}

function renderCatalog() {
  const results = matchingCatalog();
  $('#resultsText').textContent = `Showing ${Math.min(shown,results.length)} of ${results.length} matching technologies`;
  $('#catalogGrid').innerHTML = results.length ? results.slice(0,shown).map(item => {
    const isSaved = saved.has(keyOf(item.name));
    const isCompared = compared.includes(keyOf(item.name));
    const tags = categoriesOf(item).slice(0,2);
    return `<article class="tech-card">
      <div class="tech-card-top">${iconHTML(item)}<div class="tech-card-actions">
        <button type="button" class="icon-button ${isSaved?'selected':''}" data-save="${escapeHTML(item.name)}" aria-label="${isSaved?'Unsave':'Save'} ${escapeHTML(item.name)}" title="${isSaved?'Remove from saved':'Save for later'}">${isSaved?'♥':'♡'}</button>
        <button type="button" class="icon-button ${isCompared?'selected':''}" data-compare="${escapeHTML(item.name)}" aria-label="${isCompared?'Remove':'Add'} ${escapeHTML(item.name)} ${isCompared?'from':'to'} comparison" title="Compare">${isCompared?'◈':'◇'}</button>
      </div></div>
      <button class="tech-card-main" type="button" data-detail="${escapeHTML(item.name)}"><span class="tech-name" title="${escapeHTML(item.name)}">${escapeHTML(item.name)}</span><span class="tech-type">${item.kind === 'tool'?'Framework / tool / runtime':'Language / syntax'}</span></button>
      <div class="tech-card-footer">${tags.map(tag => `<span class="tech-tag">${escapeHTML(tag)}</span>`).join('')}</div></article>`;
  }).join('') : `<div class="empty-state"><h3>No matches in this orbit.</h3><p>Try a different term or reset your filters.</p><button type="button" class="button button-secondary" id="emptyReset">Reset filters</button></div>`;
  $('#loadMore').hidden = shown >= results.length;
  renderFilters();
}

function resetFilters() {
  search = '';activeCategory = 'all';selectedKind = 'all';sort = 'az';shown = 24;
  $('#searchInput').value = '';
  $('#kindSelect').value = 'all';
  $('#sortSelect').value = 'az';
  renderCatalog();updateURL();
}

function showDialog(id) { const dialog = $(`#${id}`);if (!dialog.open) dialog.showModal(); }

function renderDetail(name) {
  const item = byName.get(keyOf(name));if (!item) return;
  const meta = featured[item.name];
  const isSaved = saved.has(keyOf(name));
  const isCompared = compared.includes(keyOf(name));
  const mainUse = meta?.use || categoriesOf(item).join(', ');
  $('#detailContent').innerHTML = `<div class="detail-title">${iconHTML(item)}<div><h2>${escapeHTML(item.name)}</h2><small>${item.kind === 'tool'?'Framework, runtime or developer tool':'Language, query, markup or syntax'}</small></div></div>
    <p class="detail-tagline">${escapeHTML(meta?.tagline || `Explore ${item.name} in the developer ecosystem.`)}</p>
    <div class="detail-grid"><div class="detail-box"><span>Common use</span><strong>${escapeHTML(mainUse)}</strong></div><div class="detail-box"><span>Learning profile</span><strong>${escapeHTML(meta?.difficulty || 'Depends on prior experience and use')}</strong></div></div>
    <div class="dialog-eyebrow">DISCOVERED IN</div><div class="detail-categories">${categoriesOf(item).map(cat => `<span class="tech-tag">${escapeHTML(cat)}</span>`).join('')}</div>
    <div class="detail-actions"><button type="button" class="button button-primary" data-save="${escapeHTML(name)}">${isSaved?'Remove from saved':'♡ Save to shortlist'}</button><button type="button" class="button button-secondary" data-compare="${escapeHTML(name)}">${isCompared?'Remove from compare':'◇ Compare'}</button>${meta?.docs?`<a class="button button-secondary" href="${escapeHTML(meta.docs)}" target="_blank" rel="noopener noreferrer">Official docs ↗</a>`:''}</div>`;
}

function renderCompare() {
  const items = compared.map(id => byName.get(id)).filter(Boolean);
  if (!items.length) {
    $('#compareContent').innerHTML = `<div class="dialog-empty">No technologies selected yet. Use the ◇ icon on up to three catalog cards to compare them.</div>`;
    return;
  }
  const cell = fn => items.map(item => `<td>${escapeHTML(fn(item))}</td>`).join('');
  $('#compareContent').innerHTML = `<div class="dialog-list">${items.map(item => `<div class="dialog-row">${iconHTML(item)}<strong>${escapeHTML(item.name)}</strong><button data-compare="${escapeHTML(item.name)}" type="button">Remove ×</button></div>`).join('')}</div>
    <table class="compare-table"><thead><tr><th>Attribute</th>${items.map(item => `<th scope="col">${escapeHTML(item.name)}</th>`).join('')}</tr></thead><tbody>
    <tr><td>Kind</td>${cell(item => item.kind === 'tool'?'Framework / tool':'Language / syntax')}</tr>
    <tr><td>Use cases</td>${cell(item => featured[item.name]?.use || categoriesOf(item).join(', '))}</tr>
    <tr><td>Categories</td>${cell(item => categoriesOf(item).join(', '))}</tr>
    <tr><td>Learning profile</td>${cell(item => featured[item.name]?.difficulty || 'Varies')}</tr>
    </tbody></table><p class="dialog-intro">These are discovery notes, not performance rankings. Always evaluate your project constraints and ecosystem requirements.</p>`;
}

function renderSaved() {
  const items = [...saved].map(id => byName.get(id)).filter(Boolean).sort((a,b) => a.name.localeCompare(b.name));
  $('#savedContent').innerHTML = items.length ? `<div class="dialog-list">${items.map(item => `<div class="dialog-row">${iconHTML(item)}<strong>${escapeHTML(item.name)}</strong><button type="button" data-detail="${escapeHTML(item.name)}">Explore</button><button type="button" data-save="${escapeHTML(item.name)}">Remove ×</button></div>`).join('')}</div><button class="button button-secondary" type="button" id="copySaved">Copy shortlist ↗</button>` : `<div class="dialog-empty">Nothing saved yet. Browse the catalog and tap ♡ to build your own shortlist.</div>`;
}

function renderPaths() {
  $('#pathGrid').innerHTML = paths.map(p => `<button class="path-card ${activePath === p.id?'active':''}" type="button" data-path="${p.id}" aria-pressed="${String(activePath === p.id)}"><span class="path-icon">${p.icon}</span><span class="path-title">${escapeHTML(p.name)} <span class="path-arrow">↗</span></span><span class="path-subtitle">${escapeHTML(p.subtitle)}</span></button>`).join('');
}

function renderRoadmap(id) {
  const path = paths.find(p => p.id === id);if (!path) return;
  activePath = id;
  renderPaths();
  $('#roadmap').hidden = false;
  $('#roadmap').innerHTML = `<div class="roadmap-header"><div><div class="dialog-eyebrow">YOUR STARTER ROADMAP</div><h3>${escapeHTML(path.name)}</h3><p>One possible route from fundamentals to a practical project. Adapt it to your experience.</p></div><div class="roadmap-actions"><button type="button" class="small-button" id="copyRoadmap">Copy plan ↗</button><button type="button" class="small-button" id="closeRoadmap" aria-label="Close roadmap">✕</button></div></div><div class="roadmap-steps">${[['01','Foundation',path.foundation],['02','Build',path.build],['03','Ship & grow',path.ship]].map(([num,label,items]) => `<div class="roadmap-step"><span class="step-number">STEP ${num}</span><h4>${label}</h4><div class="roadmap-chips">${items.map(name => `<button type="button" data-detail="${escapeHTML(name)}">${escapeHTML(name)} ↗</button>`).join('')}</div></div>`).join('')}</div><p class="project-prompt"><strong style="color:#e6deff">Your first project:</strong> ${escapeHTML(path.project)}</p>`;
  history.replaceState({},'',`${location.pathname}${location.search}#pathfinder`);
  $('#roadmap').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'nearest'});
}

function roadmapText() {
  const p = paths.find(p => p.id === activePath);if (!p) return '';
  return `My DevAtlas roadmap: ${p.name}\n\n1. Foundation: ${p.foundation.join(', ')}\n2. Build: ${p.build.join(', ')}\n3. Ship & grow: ${p.ship.join(', ')}\n\nProject: ${p.project}\n\nExplore: https://devatlas-samer-2026.usefulotter1.chatgpt.site/#pathfinder`;
}

function renderChallenge() { $('#challengeText').textContent = challenges[challengeIndex]; }
async function copyText(value,label='Copied to clipboard!') {
  try { await navigator.clipboard.writeText(value); toast(label); }
  catch { toast('Clipboard access is unavailable. Try selecting and copying manually.'); }
}

// Event delegation keeps the large filtered catalog quick and robust.
document.addEventListener('click', e => {
  const el = e.target.closest('button,a');if (!el) return;
  if (el.dataset.close) return $(`#${el.dataset.close}`)?.close();
  if (el.dataset.category) {activeCategory = el.dataset.category;shown=24;renderCatalog();updateURL();return;}
  if (el.dataset.path) return renderRoadmap(el.dataset.path);
  if (el.dataset.save) return toggleSaved(el.dataset.save);
  if (el.dataset.compare) return toggleCompare(el.dataset.compare);
  if (el.dataset.detail) {renderDetail(el.dataset.detail);showDialog('detailDialog');return;}
  if (el.id === 'clearFilters' || el.id === 'emptyReset') return resetFilters();
  if (el.id === 'loadMore') {shown+=24;renderCatalog();return;}
  if (el.id === 'openSaved') {renderSaved();showDialog('savedDialog');return;}
  if (el.id === 'openCompare') {renderCompare();showDialog('compareDialog');return;}
  if (el.id === 'copySaved') return copyText([...saved].map(id => byName.get(id)?.name).filter(Boolean).join('\n'),'Shortlist copied!');
  if (el.id === 'copyRoadmap') return copyText(roadmapText(),'Roadmap copied!');
  if (el.id === 'closeRoadmap') {activePath=null;$('#roadmap').hidden=true;renderPaths();return;}
  if (el.id === 'newChallenge') {challengeIndex=(challengeIndex+1)%challenges.length;renderChallenge();return;}
  if (el.id === 'shareChallenge') return copyText(`Today's DevAtlas challenge:\n${challenges[challengeIndex]}\n\nBuild yours: https://devatlas-samer-2026.usefulotter1.chatgpt.site/#challenge\n#DevAtlas #BuildInPublic`,'Challenge copied. Invite a friend!');
  if (el.id === 'menuToggle') {const open=$('.primary-nav').classList.toggle('open');el.setAttribute('aria-expanded',String(open));return;}
  if (el.closest('.primary-nav')) {$('.primary-nav').classList.remove('open');$('#menuToggle').setAttribute('aria-expanded','false');}
});

$('#searchInput').addEventListener('input',e => {search=e.target.value.trim();shown=24;renderCatalog();updateURL();});
$('#kindSelect').addEventListener('change',e => {selectedKind=e.target.value;shown=24;renderCatalog();});
$('#sortSelect').addEventListener('change',e => {sort=e.target.value;renderCatalog();});
document.addEventListener('keydown',e => {
  if (e.key==='/' && !e.altKey && !e.ctrlKey && !e.metaKey && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) && !$$('dialog').some(d => d.open)) {e.preventDefault();$('#searchInput').focus();}
});
$$('dialog').forEach(dialog => dialog.addEventListener('click',e => {if (e.target === dialog) dialog.close();}));

const searchParams = new URLSearchParams(location.search);
if (searchParams.has('q')) {search=searchParams.get('q') || '';$('#searchInput').value=search;}
if (groups.some(g => g.id === searchParams.get('category'))) activeCategory=searchParams.get('category');
$('#statTotal').textContent = `${catalog.length}+`;
$('#statCategories').textContent = groups.length;
$('#catalogTotal').textContent = `${catalog.length} technologies indexed`;
persistSaved();renderPaths();renderCatalog();renderChallenge();
