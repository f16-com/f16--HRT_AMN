/* app.js — واجهة الأدوات (1000 أداة)، فلترة، بحث، مودال، تنزيل مقتطف آمن */
(function(){
  // ---------- Helpers ----------
  function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
  function esc(s){ return s.replaceAll('"','\\"'); }

  // ---------- curated real tool names (defensive descriptions) ----------
  // A curated set of well-known security tools — descriptions are defensive/educational.
  const CURATED = [
    // network & scanning
    {id:'nmap', name:'nmap', category:'شبكة', kind:'real', install:'apt install nmap', example:'nmap --version'},
    {id:'masscan', name:'masscan', category:'شبكة', kind:'real', install:'apt install masscan', example:'masscan --version'},
    {id:'tcpdump', name:'tcpdump', category:'تحليل الحزم', kind:'real', install:'apt install tcpdump', example:'tcpdump --version'},
    {id:'wireshark', name:'wireshark', category:'تحليل الحزم', kind:'real', install:'apt install wireshark', example:'wireshark --version'},
    {id:'tshark', name:'tshark', category:'تحليل الحزم', kind:'real', install:'apt install tshark', example:'tshark --version'},
    // web / appsec
    {id:'nikto', name:'nikto', category:'ويب', kind:'real', install:'apt install nikto', example:'nikto -Version'},
    {id:'sqlmap', name:'sqlmap', category:'ويب', kind:'real', install:'apt install sqlmap', example:'sqlmap --version'},
    {id:'burpsuite', name:'burpsuite', category:'ويب', kind:'real', install:'# download Burp Suite', example:'open Burp GUI'},
    {id:'ffuf', name:'ffuf', category:'ويب', kind:'real', install:'apt install ffuf', example:'ffuf -h'},
    {id:'gobuster', name:'gobuster', category:'ويب', kind:'real', install:'apt install gobuster', example:'gobuster -h'},
    // passwords & cracking
    {id:'hashcat', name:'hashcat', category:'كلمات المرور', kind:'real', install:'see docs (GPU drivers may be required)', example:'hashcat --version'},
    {id:'john', name:'john', category:'كلمات المرور', kind:'real', install:'apt install john', example:'john --test'},
    {id:'hydra', name:'hydra', category:'كلمات المرور', kind:'real', install:'apt install hydra', example:'hydra --version'},
    // forensics & memory
    {id:'volatility', name:'volatility', category:'تحقيق جنائي', kind:'real', install:'pip install volatility3', example:'volatility --info'},
    {id:'sleuthkit', name:'sleuthkit', category:'تحقيق جنائي', kind:'real', install:'apt install sleuthkit', example:'fls -V'},
    // reverse engineering
    {id:'ghidra', name:'ghidra', category:'تحليل ثنائي', kind:'real', install:'# download Ghidra', example:'open Ghidra GUI'},
    {id:'radare2', name:'radare2', category:'تحليل ثنائي', kind:'real', install:'apt install radare2', example:'r2 -v'},
    {id:'gdb', name:'gdb', category:'تحليل ثنائي', kind:'real', install:'apt install gdb', example:'gdb --version'},
    // monitoring / endpoint
    {id:'osquery', name:'osquery', category:'مراقبة', kind:'real', install:'see osquery docs', example:'osqueryi --version'},
    {id:'velociraptor', name:'velociraptor', category:'مراقبة', kind:'real', install:'# see docs', example:'velociraptor --version'},
    {id:'suricata', name:'suricata', category:'مراقبة', kind:'real', install:'apt install suricata', example:'suricata --version'},
    {id:'zeek', name:'zeek', category:'مراقبة', kind:'real', install:'apt install zeek', example:'zeek --version'},
    // malware analysis / sandbox
    {id:'cuckoo', name:'cuckoo', category:'تحليل برمجيات خبيثة', kind:'real', install:'# see Cuckoo docs', example:'cuckoo --version'},
    {id:'yara', name:'yara', category:'تحليل', kind:'real', install:'apt install yara', example:'yara --version'},
    {id:'clamav', name:'clamav', category:'تحليل', kind:'real', install:'apt install clamav', example:'clamscan --version'},
    // OSINT & tools
    {id:'theharvester', name:'theHarvester', category:'OSINT', kind:'real', install:'apt install theharvester', example:'theHarvester --version'},
    {id:'shodan', name:'shodan', category:'OSINT', kind:'real', install:'pip install shodan', example:'shodan --help'},
    {id:'amass', name:'amass', category:'OSINT', kind:'real', install:'apt install amass', example:'amass -version'},
    // proxies / intercept
    {id:'mitmproxy', name:'mitmproxy', category:'ويب', kind:'real', install:'pip install mitmproxy', example:'mitmproxy --version'},
    {id:'burp', name:'burp', category:'ويب', kind:'real', install:'# download Burp', example:'open Burp GUI'}
  ];

  // ---------- Generators for additional entries ----------
  const pyPurposes = [
    "تحليل pcap محلي", "نمذجة سجلات", "أتمتة SSH داخل المختبر",
    "فحص الشهادات TLS/SSL محليًا", "تحليل أداء خدمات محلية"
  ];
  const txPurposes = [
    "فحص منافذ محلي", "التقاط حزم تشخيصي", "أدوات واي-فاي تعليمية", "تحليل DNS محلي"
  ];
  const useCases = [
    "تشغيل داخل مختبر معزول", "تحليل ملفات محلية فقط", "تعلم سلوك الشبكة في بيئة اختبار"
  ];

  // ---------- Build ALL_TOOLS (1000) ----------
  const ALL_TOOLS = [];

  // Add curated real tools first (unique)
  CURATED.forEach((t, idx)=>{
    const detailed = `${t.name} — أداة معروفة في المجال.\n\nالوصف: ${t.name} تستخدم لأغراض تحليلية ودفاعية. ${t.kind==='real' ? 'استخدمها داخل بيئتك التي تملك إذناً لفحصها.' : ''}`;
    const how = [
      "ابدأ بعرض النسخة: --version أو --help",
      "اجمع نتائج محليًا وحللها داخل مختبرك",
      "لا تستخدم على شبكات أو أنظمة بدون إذن"
    ];
    ALL_TOOLS.push({
      id: t.id,
      name: t.name,
      category: (t.category==='شبكة' || t.category==='تحليل الحزم') ? (t.category) : (t.category || 'بايثون'),
      desc: `${t.category} — أداة مشهورة ومزدوجة الاستخدام (تعليمية/تحليلية).`,
      detailed,
      how,
      install: t.install || '# راجع الوثائق',
      example: t.example || '# --version',
      snippet_ext: t.example && t.example.includes('.sh') ? '.sh' : '.txt'
    });
  });

  // fill up to 500 python-like tools (py_tool_001 .. )
  for(let i=1;i<=500;i++){
    const name = `py_tool_${String(i).padStart(3,'0')}`;
    const purpose = pick(pyPurposes);
    const usecase = pick(useCases);
    const detailed = `أداة بايثون ${name}\n\nالغرض: ${purpose}.\nاستخدام نموذجي: ${usecase}.\nالقيود: شغّلها داخل بيئة اختبار تملك إذنًا.`;
    const how = [
      "انشئ venv ثم فعل البيئة",
      "ثبت المكتبات داخل المختبر فقط",
      "شغّل المقتطف الآمن: python <snippet>.py"
    ];
    ALL_TOOLS.push({
      id: `py_${String(1000+i)}`, // unique id (avoid colliding with curated)
      name,
      category: 'بايثون',
      desc: `${purpose} — أداة تعليمية/تشخيصية.`,
      detailed,
      how,
      install: `pip install ${name}  # مثال افتراضي`,
      example: `# ${name}.py\nprint("مثال آمن: ${name}")\n`,
      snippet_ext: '.py'
    });
  }

  // fill up to 500 termux-like tools
  for(let i=1;i<=500;i++){
    const name = `tx_tool_${String(i).padStart(3,'0')}`;
    const purpose = pick(txPurposes);
    const usecase = pick(useCases);
    const detailed = `أداة Termux ${name}\n\nالغرض: ${purpose}.\nاستخدام نموذجي: ${usecase}.\nالقيود: مثال تعليمي — لا تستخدمها ضد أنظمة بدون إذن.`;
    const how = [
      "ابدأ بـ --help أو --version",
      "شغّل على جهازك داخل Termux أو شيل محلي",
      "حلّل المخرجات محليًا داخل بيئة آمنة"
    ];
    ALL_TOOLS.push({
      id: `tx_${String(2000+i)}`,
      name,
      category: 'تريمكس',
      desc: `${purpose} — أداة تعليمية/تشخيصية.`,
      detailed,
      how,
      install: `pkg install ${name}  # تحقق من اسم الحزمة`,
      example: `#!/usr/bin/env bash\necho "مثال آمن: ${name} --version"\n`,
      snippet_ext: '.sh'
    });
  }

  // ---------- UI & rendering ----------
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
  let renderedIndex = 0;
  const CHUNK = 100;
  totalCountEl.innerText = ALL_TOOLS.length;

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

  function appendNextChunk(){
    let added = 0;
    const q = (searchInput.value||'').toLowerCase().trim();
    for(let i=renderedIndex; i<ALL_TOOLS.length && added<CHUNK; i++){
      const t = ALL_TOOLS[i];
      const inFilter = (currentFilter==='all' || currentFilter===t.category);
      const matches = (!q || t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q));
      if(inFilter && matches){
        grid.appendChild(createCard(t));
        added++;
      }
      renderedIndex = i+1;
    }
    if(renderedIndex >= ALL_TOOLS.length) loadMoreBtn.style.display = 'none';
  }

  function resetAndRender(){
    grid.innerHTML = '';
    renderedIndex = 0;
    loadMoreBtn.style.display = 'inline-block';
    appendNextChunk();
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
        const d = document.createElement('div'); d.className='step'; d.innerText = `${i+1}. ${s}`; mHow.appendChild(d);
      });
    }
    downloadBtn.onclick = ()=> {
      const filename = t.name + (t.snippet_ext || '.txt');
      const content = (t.example || '') + '\n';
      const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href=url; a.download=filename; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    };
    copyInstall.onclick = ()=> copyToClipboard(t.install||'');
    copyExample.onclick = ()=> copyToClipboard(t.example||'');
    modalBack.style.display = 'flex';
    setTimeout(()=> modal.classList.add('show'), 20);
  }

  function closeModalFunc(){ modal.classList.remove('show'); setTimeout(()=> modalBack.style.display='none',160); }

  // grid delegation
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
      const a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    }
  });

  // clipboard
  function copyToClipboard(text){
    if(!text) return alert('لا يوجد نص للنسخ');
    navigator.clipboard.writeText(text).then(()=> alert('تم النسخ إلى الحافظة')).catch(()=> alert('فشل النسخ — انسخ يدوياً'));
  }

  // filters & search
  btnAll.addEventListener('click', ()=>{ currentFilter='all'; setActive(btnAll); resetAndRender(); });
  btnPy.addEventListener('click', ()=>{ currentFilter='بايثون'; setActive(btnPy); resetAndRender(); });
  btnTx.addEventListener('click', ()=>{ currentFilter='تريمكس'; setActive(btnTx); resetAndRender(); });

  function setActive(el){ document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active')); el.classList.add('active'); }

  let searchTimer = null;
  searchInput.addEventListener('input', ()=>{
    if(searchTimer) clearTimeout(searchTimer);
    searchTimer = setTimeout(()=> resetAndRender(), 160);
  });

  loadMoreBtn.addEventListener('click', ()=> appendNextChunk());

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
  document.addEventListener('DOMContentLoaded', ()=>{ resetAndRender(); });
  // expose for debugging
  window.F16_ALL_TOOLS = ALL_TOOLS;
})();
