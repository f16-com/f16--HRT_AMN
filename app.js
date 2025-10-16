/* app.js
   قاعدة أدوات مُولّدة: 1000 أداة (500 بايثون + 500 تريمكس)
   كل أداة: id, name, category, desc, detailed, how[], install, example, snippet_ext
   يعرض الموقع دفعات لعدم تحميل DOM كله مرة واحدة (أداء أفضل).
*/

(function(){
  // -------------------------
  // small helper randomizers for descriptive text
  // -------------------------
  function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

  const pyPurposes = [
    "تحليل ملفات pcap محليًا",
    "أتمتة إدارة السيرفرات داخل بيئة اختبارية",
    "تحليل سجلات النظام والتطبيق",
    "نمذجة بيانات لاكتشاف نمط الهجوم",
    "أداة لاختبارات تحميل داخل المختبر",
    "تحليل رسائل HTTP/REST محليًا"
  ];
  const pyUsecases = [
    "مفيد لتحليل بيانات شبكة مملوكة لك",
    "يُستخدم لاستخراج رؤى من سجلات محلية",
    "مثالي لتجارب أمنية داخل مختبر مغلق",
    "قابل للتطوير للتعلم وبناء قواعد كشف مبدئية"
  ];

  const txPurposes = [
    "فحص منافذ محلي داخل Termux",
    "التقاط حزم على واجهة محلية للتشخيص",
    "أدوات واي-فاي تعليمية (مختبر)",
    "أدوات مساعدة لإدارة الشبكات على الأجهزة المحمولة",
    "عمل تقارير تشخيصية للشبكة المحلية"
  ];
  const txUsecases = [
    "شغّلها على جهازك داخل Termux لاختبار محلي",
    "ابدأ دائمًا بـ --help أو --version قبل الفحص",
    "مناسبة لتعليم أساسيات الشبكات داخليًا"
  ];

  // -------------------------
  // Build arrays programmatically
  // -------------------------
  const ALL_TOOLS = [];

  for(let i=1;i<=500;i++){
    const name = `py_tool_${String(i).padStart(3,'0')}`;
    const purpose = pick(pyPurposes);
    const usecase = pick(pyUsecases);
    const detailed = `أداة بايثون ${i} — ${name}\n\nالغرض: ${purpose}.\nاستخدام نموذجي: ${usecase}.\nالقيود: هذه أداة تعليمية — شغّلها على ملفات محلية أو ضمن بيئة اختبار أنت تملك إذنها.`;
    const how = [
      "أنشئ بيئة افتراضية: python -m venv venv && source venv/bin/activate",
      "ثبت الاعتمادات داخل المختبر فقط إذا لزم: pip install <package>",
      "حمّل المقتطف الآمن ونفّذه: python <snippet>.py",
      "راجع المخرجات وجرب تعديل بيانات الإدخال محليًا"
    ];
    const example = `# ${name}.py — مثال آمن\nprint("تشغيل آمن: ${name}")\n`;
    ALL_TOOLS.push({
      id: `py_${String(i).padStart(3,'0')}`,
      name,
      category: "بايثون",
      desc: `${purpose} — مصممة للاستخدام التعليمي والتشخيصي.`,
      detailed,
      how,
      install: `pip install ${name}  # مثال افتراضي — تحقق من المستودع الفعلي`,
      example,
      snippet_ext: ".py"
    });
  }

  for(let i=1;i<=500;i++){
    const name = `tx_tool_${String(i).padStart(3,'0')}`;
    const purpose = pick(txPurposes);
    const usecase = pick(txUsecases);
    const detailed = `أداة Termux ${i} — ${name}\n\nالغرض: ${purpose}.\nاستخدام نموذجي: ${usecase}.\nالقيود: مثال تعليمي — لا تشغّل على شبكات أو أجهزة بدون إذن.`;
    const how = [
      "افتح Termux أو شيل محلي على جهازك",
      "ابدأ بالأمر: --version أو --help قبل أي اختبار",
      "شغّل الأداة على localhost أو بيئة اختبارية",
      "حلّل الناتج محليًا داخل بيئة آمنة"
    ];
    const example = `#!/usr/bin/env bash\necho "تشغيل آمن: ${name} --version"\n`;
    ALL_TOOLS.push({
      id: `tx_${String(i).padStart(3,'0')}`,
      name,
      category: "تريمكس",
      desc: `${purpose} — للاستخدام التعليمي والتشخيصي.`,
      detailed,
      how,
      install: `pkg install ${name}  # تأكد من اسم الحزمة في مستودعك`,
      example,
      snippet_ext: ".sh"
    });
  }

  // -------------------------
  // UI & rendering
  // -------------------------
  const grid = document.getElementById('grid');
  const searchInput = document.getElementById('searchInput');
  const btnAll = document.getElementById('btnAll');
  const btnPy = document.getElementById('btnPy');
  const btnTx = document.getElementById('btnTx');
  const loadMoreBtn = document.getElementById('loadMore');
  const totalCountEl = document.getElementById('totalCount');

  const modalBack = document.getElementById('modalBack');
  const modal = document.getElementById('modal');
  const mTitle = document.getElementById('mTitle');
  const mMeta = document.getElementById('mMeta');
  const mDetailed = document.getElementById('mDetailed');
  const mInstall = document.getElementById('mInstall');
  const mExample = document.getElementById('mExample');
  const mHow = document.getElementById('mHow');
  const downloadBtn = document.getElementById('downloadBtn');
  const copyInstall = document.getElementById('copyInstall');
  const copyExample = document.getElementById('copyExample');
  const closeModal = document.getElementById('closeModal');

  let currentFilter = 'all';
  let renderedCount = 0;
  const CHUNK = 100; // عدد الأدوات لكل دفعة
  totalCountEl.innerText = ALL_TOOLS.length;

  // create card element
  function createCard(t){
    const div = document.createElement('div');
    div.className = 'card';
    div.setAttribute('data-id', t.id);
    div.setAttribute('data-cat', t.category);
    div.setAttribute('data-name', (t.name||'').toLowerCase());
    div.setAttribute('data-desc', (t.desc||'').toLowerCase());
    div.innerHTML = `
      <div class="cat">${t.category}</div>
      <div class="name">${t.name}</div>
      <div class="desc">${t.desc}</div>
      <div class="actions">
        <button class="btn primary" data-action="details" data-id="${t.id}">تفاصيل</button>
        <button class="btn" data-action="download" data-id="${t.id}">تحميل</button>
      </div>
    `;
    return div;
  }

  function loadMore(){
    let added = 0;
    const q = (searchInput.value||'').toLowerCase().trim();
    for(let i=renderedCount;i<ALL_TOOLS.length && added<CHUNK;i++){
      const t = ALL_TOOLS[i];
      const inFilter = (currentFilter==='all' || currentFilter===t.category);
      const matches = (!q || (t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q)));
      if(inFilter && matches){
        grid.appendChild(createCard(t));
        added++; renderedCount++;
      } else {
        renderedCount++;
        i--; // ensure we still try next until we add CHUNK items (but careful with performance)
        // To avoid complex skipping logic, simpler approach: break and rely on applyFilters to reset rendering
        // For simplicity here, we accept that CHUNK is best-effort in current filter state.
        break;
      }
    }
    if(renderedCount >= ALL_TOOLS.length) loadMoreBtn.style.display = 'none';
  }

  // Simpler rendering strategy: when filter/search changes, clear and show first CHUNK matching items
  function renderInitial(){
    grid.innerHTML = '';
    renderedCount = 0;
    const q = (searchInput.value||'').toLowerCase().trim();
    let added = 0;
    for(let i=0;i<ALL_TOOLS.length && added<CHUNK;i++){
      const t = ALL_TOOLS[i];
      const inFilter = (currentFilter==='all' || currentFilter===t.category);
      const matches = (!q || (t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q)));
      if(inFilter && matches){
        grid.appendChild(createCard(t));
        added++;
      }
    }
    // set renderedCount to index of last appended + 1 for next load
    renderedCount = added;
    loadMoreBtn.style.display = (renderedCount < ALL_TOOLS.length) ? 'inline-block' : 'none';
  }

  // smarter loadMore: append next CHUNK matching items
  function loadMoreSmart(){
    let added = 0;
    const q = (searchInput.value||'').toLowerCase().trim();
    for(let i=0;i<ALL_TOOLS.length && added<CHUNK;i++){
      // skip those already shown
      if(i < renderedCount) continue;
      const t = ALL_TOOLS[i];
      const inFilter = (currentFilter==='all' || currentFilter===t.category);
      const matches = (!q || (t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q)));
      if(inFilter && matches){
        grid.appendChild(createCard(t));
        added++;
        renderedCount = i+1;
      } else {
        renderedCount = i+1;
      }
    }
    if(renderedCount >= ALL_TOOLS.length) loadMoreBtn.style.display = 'none';
  }

  // open modal
  function openModalById(id){
    const t = ALL_TOOLS.find(x=>x.id===id);
    if(!t) return;
    mTitle.innerText = t.name;
    mMeta.innerText = `الفئة: ${t.category}`;
    mDetailed.innerText = t.detailed || t.desc || '';
    mInstall.innerText = t.install || '—';
    mExample.innerText = t.example || '—';
    mHow.innerHTML = '';
    if(Array.isArray(t.how)){
      t.how.forEach((s,i)=>{
        const d = document.createElement('div');
        d.className = 'step';
        d.innerText = `${i+1}. ${s}`;
        mHow.appendChild(d);
      });
    }
    downloadBtn.onclick = ()=> {
      const filename = t.name + (t.snippet_ext || '.txt');
      const content = (t.example || '') + '\n';
      const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href=url; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    };
    copyInstall.onclick = ()=> copyToClipboard(t.install||'');
    copyExample.onclick = ()=> copyToClipboard(t.example||'');
    modalBack.style.display = 'flex';
    setTimeout(()=> modal.classList.add('show'), 20);
  }

  function closeModalFunc(){
    modal.classList.remove('show');
    setTimeout(()=> modalBack.style.display = 'none', 160);
  }

  // delegation for grid actions
  grid.addEventListener('click', (e)=>{
    const det = e.target.closest('button[data-action="details"]');
    const dl = e.target.closest('button[data-action="download"]');
    if(det){ openModalById(det.getAttribute('data-id')); return; }
    if(dl){
      const id = dl.getAttribute('data-id');
      const t = ALL_TOOLS.find(x=>x.id===id);
      if(!t) return;
      const filename = t.name + (t.snippet_ext || '.txt');
      const content = (t.example || '') + '\n';
      const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href=url; a.download=filename; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    }
  });

  // clipboard
  function copyToClipboard(text){
    if(!text) return alert('لا يوجد نص للنسخ');
    navigator.clipboard.writeText(text).then(()=> alert('تم النسخ إلى الحافظة')).catch(()=> alert('فشل النسخ — انسخ يدوياً'));
  }

  // filters & search handlers
  btnAll.addEventListener('click', ()=>{ currentFilter='all'; setActive(btnAll); renderInitial(); });
  btnPy.addEventListener('click', ()=>{ currentFilter='بايثون'; setActive(btnPy); renderInitial(); });
  btnTx.addEventListener('click', ()=>{ currentFilter='تريمكس'; setActive(btnTx); renderInitial(); });

  function setActive(el){
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    el.classList.add('active');
  }

  // search debounce
  let searchTimer = null;
  searchInput.addEventListener('input', ()=>{
    if(searchTimer) clearTimeout(searchTimer);
    searchTimer = setTimeout(()=> renderInitial(), 160);
  });

  loadMoreBtn.addEventListener('click', ()=> loadMoreSmart());

  // modal controls
  document.getElementById('closeModal').addEventListener('click', closeModalFunc);
  modalBack.addEventListener('click', (e)=> { if(e.target === modalBack) closeModalFunc(); });

  // keyboard shortcuts
  document.addEventListener('keydown', (e)=>{
    if(e.key==='1') btnAll.click();
    if(e.key==='2') btnPy.click();
    if(e.key==='3') btnTx.click();
    if(e.key==='/' ){ e.preventDefault(); searchInput.focus(); }
    if(e.key==='Escape') closeModalFunc();
  });

  // initial render
  document.addEventListener('DOMContentLoaded', ()=>{
    renderInitial();
  });

  // expose for debug
  window.F16_TOOLS = ALL_TOOLS;

})();
