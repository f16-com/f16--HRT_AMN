const TOOLS = [];
const SNIPPETS = {};

const grid = document.getElementById('grid');
const search = document.getElementById('search');
const btnAll = document.getElementById('btnAll');
const btnPy = document.getElementById('btnPy');
const btnTx = document.getElementById('btnTx');
const modalBack = document.getElementById('modalBack');
const modal = document.getElementById('modal');
const mTitle = document.getElementById('mTitle');
const mCategory = document.getElementById('mCategory');
const mDetailed = document.getElementById('mDetailed');
const mInstall = document.getElementById('mInstall');
const mExample = document.getElementById('mExample');
const mHow = document.getElementById('mHow');
const downloadBtn = document.getElementById('downloadBtn');
const copyInstall = document.getElementById('copyInstall');
const copyExample = document.getElementById('copyExample');
const closeModal = document.getElementById('closeModal');

let currentFilter = 'all';
let debounceTimer = null;

function buildCards(){
  const frag = document.createDocumentFragment();
  TOOLS.forEach(t=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="cat">${t.category}</div>
      <div class="name">${t.name}</div>
      <div class="desc">${t.desc}</div>
      <div class="actions">
        <button class="btn primary" data-action="details" data-id="${t.id}">تفاصيل</button>
        <button class="btn" data-action="download" data-key="${t.snippet_key}">تحميل</button>
      </div>
    `;
    frag.appendChild(card);
  });
  grid.appendChild(frag);
}

document.addEventListener('DOMContentLoaded', ()=>{
  buildCards();
});
