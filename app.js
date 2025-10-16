/* app.js — نسخة محدثة: أدوات قوية، وصياغة دفاعية/تعليمية.
   تحذير: الأمثلة آمنة (--version, --help, عرض ملفات محلية). 
   لا يعطى هنا أي تعليمات لاستغلال أنظمة خارجية.
*/

(function(){
  // --- Curated tools: realistic, widely-used (defensive / dual-use) ---
  const CURATED_TOOLS = [
    // Network Recon & Scanning (use in lab / with permission)
    {
      id: "nmap",
      name: "nmap",
      category: "شبكة",
      desc: "ماسح شبكة/منافذ قوي ومُستخدم عالمياً لأغراض الجرد والاكتشاف القانوني.",
      detailed: "Nmap أداة للاطلاع على الأجهزة والخدمات الموجودة على شبكة لديك إذن بفحصها. تُستخدم لجرد الأجهزة، سياسات الجدار الناري، وخريطة الشبكة.",
      how: [
        "افتح مختبر محلي أو نطاق تملك إذنًا لاختباره.",
        "ابدأ بأمر عرض النسخة: nmap --version",
        "استخدم أوامر قراءة آمنة مثل -sL للائحة الهدف (لا تُجري مسحاً نشطاً خارج بيئتك)."
      ],
      install: "apt install nmap  # أو pacman/brew/pkg حسب التوزيعة",
      example: "nmap --version",
      snippet_ext: ".txt"
    },

    {
      id: "masscan",
      name: "masscan",
      category: "شبكة",
      desc: "ماسح منافذ عالي الأداء—مناسب لاختبارات داخل مختبرات كبيرة عند الحاجة.",
      detailed: "Masscan مفيد لمسوح الأداء العالية على شبكات مُصرّح بها. لا تستخدِم على شبكات لا تملك إذنًا لها.",
      how: [
        "استخدم Masscan فقط على بيئات اختبارية.",
        "تحقق من الأمر --version ثم قرر سيناريو الاختبار داخل المختبر."
      ],
      install: "apt install masscan",
      example: "masscan --version",
      snippet_ext: ".txt"
    },

    // Packet capture & analysis
    {
      id: "tcpdump",
      name: "tcpdump",
      category: "تحليل الحزم",
      desc: "أداة لالتقاط الحزم من واجهة شبكة لفهم البروتوكولات وحل المشكلات.",
      detailed: "Tcpdump مفيد لالتقاط وتحليل الحركة التي تمر على الواجهة المحلية؛ يُستخدم بتحفظ لتحليل الحوادث داخل بيئة آمنة.",
      how: [
        "التقط إلى ملف محلي ثم افتحه باستخدام Wireshark: tcpdump -i <iface> -w out.pcap",
        "افتح out.pcap داخل Wireshark على جهازك."
      ],
      install: "apt install tcpdump",
      example: "tcpdump --version",
      snippet_ext: ".txt"
    },

    {
      id: "wireshark",
      name: "Wireshark",
      category: "تحليل الحزم",
      desc: "محلل حزم رسومي احترافي لقراءة pcap وتحليل البروتوكولات.",
      detailed: "Wireshark يسمح بفحص الحزم بشكل بصري وتطبيق فلاتر، مثالي لتحليل شبكات داخلية ومشكلات الأداء.",
      how: [
        "التقط حركة ملفياً باستخدام tcpdump ثم افتح الملف عبر Wireshark.",
        "استخدم فلاتر العرض مثل http أو dns لتحليل محدد."
      ],
      install: "apt install wireshark-qt  # أو حزمة Wireshark المناسبة",
      example: "wireshark --version",
      snippet_ext: ".txt"
    },

    // IDS / Monitoring
    {
      id: "zeek",
      name: "Zeek (Bro)",
      category: "مراقبة",
      desc: "محرك تحليل شبكة (شبكي) لإنتاج سجلات عالية المستوى وتحليل حركة المرور.",
      detailed: "Zeek يُستخدم في المراقبة الشبكية وتحويل الحزم إلى دلائل وبيانات قابلة للتحليل، مناسب للـ SOC.",
      how: [
        "شغّل Zeek على نسخة pcap داخل بيئة تحليل محلية.",
        "استعرض سجلات conn.log وhttp.log لتحليل الأنماط."
      ],
      install: "apt install zeek",
      example: "zeek --version",
      snippet_ext: ".txt"
    },

    {
      id: "suricata",
      name: "Suricata",
      category: "مراقبة",
      desc: "محرك كشف/منع التسلل (IDS/IPS) مفتوح المصدر يُستخدم لمراقبة الشبكات.",
      detailed: "Suricata قادر على تحليل الحركة واستخراج الإنذارات والـ EVE JSON logs للتشغيل مع أنظمة SIEM.",
      how: [
        "شغّل Suricata على واجهة اختبارية وقم بتحليل سجلات EVE JSON.",
        "لا تُفعّل كـ IPS على شبكة إنتاج دون اختبار."
      ],
      install: "apt install suricata",
      example: "suricata --version",
      snippet_ext: ".txt"
    },

    // Web security (defensive/test lab)
    {
      id: "burp",
      name: "Burp Suite (Community)",
      category: "ويب",
      desc: "بيئة اختبار تطبيقات الويب (تحليل الطلبات/الردود) — توجد نسخة Community مجانية.",
      detailed: "Burp Suite مفيد لتحليل حركة الويب بين المتصفح والخادم داخل نطاقات اختبار. تجنّب اختباره على مواقع دون إذن.",
      how: [
        "افتح Burp في بيئة اختبار محلية وقم بتوجيه المتصفح عبر البروكسي.",
        "استخدم أدوات المسح الآمنة واطَّلع على الاستجابات فقط."
      ],
      install: "قم بتنزيل Burp Community من الموقع الرسمي وتثبيته محليًا",
      example: "افتح Burp Suite GUI وتحقق من النسخة داخل Help → About",
      snippet_ext: ".txt"
    },

    {
      id: "nikto",
      name: "Nikto",
      category: "ويب",
      desc: "ماسح تطبيقات ويب يُظهر إعدادات عامة ومشكلات معروفة — للاختبار القانوني فقط.",
      detailed: "Nikto يعرض رؤى عن رؤوس السيرفر، وملفات تكوين غير آمنة، ومشكلات معروفة؛ لا تستخدمه خارج نطاقك.",
      how: [
        "استخدمه على بيئة تطوير محلية أو نسخة اختبار لموقعك.",
        "ابدأ بعرض النسخة: nikto -Version"
      ],
      install: "apt install nikto",
      example: "nikto -Version",
      snippet_ext: ".txt"
    },

    {
      id: "sqlmap",
      name: "sqlmap",
      category: "ويب",
      desc: "أداة لاختبار ثغرات SQL Injection — مزدوجة الاستخدام، استخدمها فقط على تطبيقات لديك إذن لفحصها.",
      detailed: "sqlmap قوية لاختبار إدخالات SQL؛ توفر أتمتة متقدمة لكن استعمالها خارج بيئة مرخّصة مخالف للقانون.",
      how: [
        "استخدم sqlmap على تطبيق اختبار محلي مع حقل إدخال لاختبار سلوك الاستعلامات.",
        "ابدأ بعرض --version للتحقق."
      ],
      install: "apt install sqlmap",
      example: "sqlmap --version",
      snippet_ext: ".txt"
    },

    // Passwords & Cracking (legal use: audit your own hashes)
    {
      id: "hashcat",
      name: "hashcat",
      category: "تحليل كلمات المرور",
      desc: "محرك تسريع كسر تجزئات كلمات المرور — استخدمه لتحليل قوة كلمات المرور لديك فقط.",
      detailed: "Hashcat أداة GPU-accelerated لكسر التجزئات؛ صالح لتحليل أمان كلمات المرور في بيئة واختبار داخلية فقط.",
      how: [
        "اختبر على ملف تجزئات خاص بك أو على نسخ اختبارية.",
        "ابدأ بفحص معلومات النسخة: hashcat --version"
      ],
      install: "راجع التثبيت الرسمي (قد يتطلب تعريفات GPU)",
      example: "hashcat --version",
      snippet_ext: ".txt"
    },

    {
      id: "john",
      name: "John the Ripper",
      category: "تحليل كلمات المرور",
      desc: "أداة فحص كلمات المرور تُستخدم لاختبار قوة كلمات المرور المحلية.",
      detailed: "John مناسب لتحليل ملفات كلمة مرور مسموح بوصولك إليها؛ تجنّب الاستخدام على بيانات طرف ثالث.",
      how: [
        "استخرج hashes من بيئة اختبارية ثم شغّل john محليًا.",
        "راجع john --test و --version قبل التشغيل."
      ],
      install: "apt install john",
      example: "john --test",
      snippet_ext: ".txt"
    },

    // Forensics & Memory analysis
    {
      id: "volatility",
      name: "Volatility",
      category: "تحقيق جنائي",
      desc: "إطار عمل لتحليل ذاكرة RAM لأغراض التحقيق الجنائي الرقمي.",
      detailed: "Volatility يُستخدم لاسترداد العمليات، الشبكات، والشبكات المخفية من dump الذاكرة؛ مهم في الاستجابة للحوادث.",
      how: [
        "التقط صورة الذاكرة باستخدام أدوات موثوقة ثم حلّلها محليًا.",
        "ابدأ بعرض النسخة: volatility --version"
      ],
      install: "pip install volatility3  # أو اتبع دليل التثبيت",
      example: "volatility --info",
      snippet_ext: ".txt"
    },

    {
      id: "velociraptor",
      name: "Velociraptor",
      category: "تحقيق جنائي",
      desc: "أداة استجابة للحوادث وجمع أدلة (endpoint visibility) لإدارة الحوادث وتحليل السجل.",
      detailed: "Velociraptor يُستخدم لجمع telemetry من أجهزة مرخصة وتحليلها مركزيًا في SOC.",
      how: [
        "نشر في بيئة اختباريّة لالتقاط telemetry وتحليلها.",
        "راجع الوثائق الرسمية لطرق التشغيل الآمن."
      ],
      install: "راجع الوثائق الرسمية: velociraptor.dev",
      example: "velociraptor --version",
      snippet_ext: ".txt"
    },

    // Binary analysis / reverse engineering
    {
      id: "ghidra",
      name: "Ghidra",
      category: "تحليل ثنائي",
      desc: "بيئة تحليل ثنائي مفتوحة المصدر من NSA، مفيدة لهندسة عكسية للبرامج في بيئة قانونية.",
      detailed: "Ghidra يساعد في تحليل الثنائيات وفهم بنية البرامج—مفيد للباحثين في الأمن الرقمي والتحليل الجنائي.",
      how: [
        "استخدم ملفات ثنائية محلية (firmware أو sample) في بيئة معزولة.",
        "افتح الملف داخل Ghidra وابدأ تحليل الوظائف statically."
      ],
      install: "نزّل من الموقع الرسمي وفك الضغط — يستخدم Java.",
      example: "تشغيل Ghidra GUI (لا يوجد --version ثابت على CLI عادة)",
      snippet_ext: ".txt"
    },

    {
      id: "radare2",
      name: "radare2",
      category: "تحليل ثنائي",
      desc: "أداة تحليل ثنائي متقدمة وسطر أوامر لتحليل البرامج محليًا.",
      detailed: "radare2 مناسبة للباحثين وتوفّر أدوات تفكيك، تحليل التحكم، وتحرّي البينات.",
      how: [
        "افتح الملف محليًا: r2 <binary>",
        "استعمل الأوامر الآمنة لعرض الرموز دون تنفيذ."
      ],
      install: "apt install radare2",
      example: "r2 -v",
      snippet_ext: ".txt"
    },

    // Malware analysis (defensive)
    {
      id: "cuckoo",
      name: "Cuckoo Sandbox",
      category: "تحليل برمجيات خبيثة",
      desc: "منصة آلية لتحليل سلوك البرمجيات في بيئة معزولة (sandbox) — لأغراض دفاعية وبحوث.",
      detailed: "Cuckoo يسمح بتشغيل العينات في بيئة منعزلة وملاحظة السلوك، الشبكات والملفات المحدثة—مهم لتحليل الحوادث.",
      how: [
        "نَشِّئ بيئة معزولة تمامًا (VM) قبل تشغيل أي عينة.",
        "لا تشغّل عيّنات حقيقية على مضيفك الرئيسي."
      ],
      install: "راجع الدليل الرسمي لإعداد Cuckoo في VM معزول",
      example: "cuckoo --version (أو استعمل CLI المرفق)",
      snippet_ext: ".txt"
    },

    // OSINT & passive recon (legal)
    {
      id: "theharvester",
      name: "theHarvester",
      category: "OSINT",
      desc: "أداة لجمع معلومات عامة (email,hosts) من مصادر عامة لأغراض استخباراتية مشروعة.",
      detailed: "theHarvester يساعد على جمع معلومات من مصادر مفتوحة بشكل قانوني لنطاقات تملكها أو لديك إذن فحصها.",
      how: [
        "ابدأ بالبحث عن نطاقاتك الخاصة أو نطاق اختبار.",
        "استخدم --help للتحقق من المحركات المتاحة."
      ],
      install: "apt install theharvester",
      example: "theHarvester --version",
      snippet_ext: ".txt"
    },

    // Endpoint & logging (defensive)
    {
      id: "osquery",
      name: "osquery",
      category: "نظام/مراقبة",
      desc: "محرك استعلام لأنظمة التشغيل يسمح بسحب معلومات تقنية كقواعد SQL — مفيد للمراقبة.",
      detailed: "Osquery يتيح تحويل الحالة التشغيلية للـ endpoints إلى جداول قابلة للاستعلام بسهولة ضمن بنية SIEM.",
      how: [
        "نشر على أجهزة داخل مختبر لاستخراج telemetry بصيغة SQL-like.",
        "ابدأ بتشغيل osqueryi للتجربة المحلية."
      ],
      install: "راجع الوثائق الرسمية: osquery.io",
      example: "osqueryi --version",
      snippet_ext: ".txt"
    },

    // Additional common defensive tools
    { id: "sslyze", name: "SSLyze", category: "TLS", desc: "محلل TLS/SSL لفحص قدرات التشفير (للتحقق من الخوادم التي تملكها).", detailed: "استخدم لفحص خوادمك الخاصة فقط.", how:["ابدأ بـ sslyze --version"], install:"pip install sslyze", example:"sslyze --version", snippet_ext:".txt" },
    { id: "sslscan", name: "sslscan", category: "TLS", desc: "أداة عرض قدرات SSL/TLS للمضيف (استخدمها على خوادمك).", detailed:"مفيد لتحليل إعدادات التشفير.", how:["راجع --version أولاً"], install:"apt install sslscan", example:"sslscan --version", snippet_ext:".txt" },
    { id: "mitmproxy", name: "mitmproxy", category: "ويب", desc: "وكيل HTTP تفاعلي لتحليل حركة الويب داخل بيئات الاختبار.", detailed:"مناسب لتحليل الطلبات داخل بيئة آمنة.", how:["شغّل mitmproxy محلياً واستخدم مستعرض مكوّن ليعمل عبره."], install:"pip install mitmproxy", example:"mitmproxy --version", snippet_ext:".txt" },
    { id: "gdb", name: "gdb", category: "تحليل ثنائي", desc: "مصحح برمجيات لبدء تتبع محلي لبرامجك وتصحيحها.", detailed:"جيد لتحليل سلوك البرامج في بيئة اختبار.", how:["استخدم gdb مع ملفات ثنائية محلية."], install:"apt install gdb", example:"gdb --version", snippet_ext:".txt" },
    { id: "yara", name: "YARA", category: "تحليل", desc: "أداة لتوصيف واكتشاف عينات برامج ضارة بناءً على قواعد نصية.", detailed:"استخدم YARA لمطابقة العينات داخل مختبرك.", how:["ابدأ بكتابة قواعد بسيطة وتشغيل yara -r"], install:"apt install yara", example:"yara --version", snippet_ext:".txt" },
    { id: "clamav", name: "ClamAV", category: "تحليل", desc: "مضاد فيروسات مفتوح المصدر لتحليل الملفات محليًا.", detailed:"مفيد كأداة إضافية لتحليل العينات داخل بيئة آمنة.", how:["قم بتحديث قواعد الفيروسات قبل الفحص: freshclam"], install:"apt install clamav", example:"clamscan --version", snippet_ext:".txt" },
  ];

  // --- UI bindings & behavior (reuse previous rendering logic but with CURATED_TOOLS) ---
  const ALL_TOOLS = CURATED_TOOLS; // replace earlier generator
  const grid = document.getElementById('grid');
  const searchInput = document.getElementById('search');
  const btnAll = document.getElementById('btnAll');
  const btnPy = document.getElementById('btnPy');
  const btnTx = document.getElementById('btnTx');
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
  const closeModalBtn = document.getElementById('closeModal');

  let currentFilter = 'all';
  let debounce = null;

  function buildCards(){
    grid.innerHTML = '';
    const frag = document.createDocumentFragment();
    ALL_TOOLS.forEach(t=>{
      const el = document.createElement('div');
      el.className = 'card';
      el.setAttribute('data-id', t.id);
      el.setAttribute('data-cat', t.category);
      el.setAttribute('data-name', (t.name||'').toLowerCase());
      el.setAttribute('data-desc', (t.desc||'').toLowerCase());
      el.innerHTML = `
        <div class="cat">${t.category}</div>
        <div class="name">${t.name}</div>
        <div class="desc">${t.desc}</div>
        <div class="actions">
          <button class="btn primary" data-action="details" data-id="${t.id}">تفاصيل</button>
          <button class="btn" data-action="download" data-id="${t.id}">تحميل</button>
        </div>
      `;
      frag.appendChild(el);
    });
    grid.appendChild(frag);

    // delegate clicks
    grid.addEventListener('click', function(e){
      const det = e.target.closest('button[data-action="details"]');
      const dl = e.target.closest('button[data-action="download"]');
      if(det){
        openModalById(det.getAttribute('data-id'));
      } else if(dl){
        const id = dl.getAttribute('data-id');
        downloadSnippetById(id);
      }
    });
  }

  function applyFilters(){
    const q = (searchInput.value||'').toLowerCase().trim();
    const cards = grid.querySelectorAll('.card');
    cards.forEach(c=>{
      const name = c.getAttribute('data-name') || '';
      const desc = c.getAttribute('data-desc') || '';
      const cat = c.getAttribute('data-cat') || '';
      const inFilter = (currentFilter === 'all' || currentFilter === cat);
      const matches = (!q || name.includes(q) || desc.includes(q));
      c.style.display = (inFilter && matches) ? 'block' : 'none';
    });
  }

  function openModalById(id){
    const t = ALL_TOOLS.find(x=>x.id===id);
    if(!t) return;
    mTitle.innerText = t.name;
    document.getElementById('mMeta').innerText = `الفئة: ${t.category}`;
    mDetailed.innerText = t.detailed || t.desc || '';
    mInstall.innerText = t.install || '—';
    mExample.innerText = t.example || '—';
    mHow.innerHTML = '';
    if(Array.isArray(t.how)) t.how.forEach((s,i)=>{
      const div = document.createElement('div');
      div.className = 'step';
      div.innerText = `${i+1}. ${s}`;
      mHow.appendChild(div);
    });
    downloadBtn.onclick = ()=> {
      const filename = t.name + (t.snippet_ext || '.txt');
      const content = (t.example || '') + '\n';
      const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = filename;
      document.body.appendChild(a);
      a.click(); a.remove(); URL.revokeObjectURL(url);
    };
    copyInstall.onclick = ()=> copyToClipboard(t.install || '');
    copyExample.onclick = ()=> copyToClipboard(t.example || '');
    modalBack.style.display = 'flex';
    setTimeout(()=> modal.classList.add('show'), 20);
  }

  function downloadSnippetById(id){
    const t = ALL_TOOLS.find(x=>x.id===id);
    if(!t) return;
    const filename = t.name + (t.snippet_ext || '.txt');
    const content = (t.example || '') + '\n';
    const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a);
    a.click(); a.remove(); URL.revokeObjectURL(url);
  }

  function copyToClipboard(text){
    if(!text){ alert('لا يوجد نص للنسخ'); return; }
    navigator.clipboard.writeText(text).then(()=> alert('تم النسخ إلى الحافظة')).catch(()=> alert('فشل النسخ — انسخ يدوياً'));
  }

  // keyboard shortcuts
  document.addEventListener('keydown', (e)=>{
    if(e.key === '1'){ btnAll.click(); }
    if(e.key === '2'){ btnPy.click(); }
    if(e.key === '3'){ btnTx.click(); }
    if(e.key === '/'){ e.preventDefault(); searchInput.focus(); }
    if(e.key === 'Escape'){ modal.classList.remove('show'); setTimeout(()=> modalBack.style.display='none',180); }
  });

  // init
  document.addEventListener('DOMContentLoaded', function(){
    buildCards();
    applyFilters();
    btnAll.addEventListener('click', ()=>{ currentFilter='all'; setActive(btnAll); applyFilters(); });
    btnPy.addEventListener('click', ()=>{ currentFilter='بايثون'; setActive(btnPy); applyFilters(); });
    btnTx.addEventListener('click', ()=>{ currentFilter='تريمكس'; setActive(btnTx); applyFilters(); });
    function setActive(el){ document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active')); el.classList.add('active'); }
    searchInput.addEventListener('input', function(){ if(debounce) clearTimeout(debounce); debounce = setTimeout(()=> applyFilters(), 120); });
    document.getElementById('closeModal').addEventListener('click', ()=>{ modal.classList.remove('show'); setTimeout(()=> modalBack.style.display='none',180); });
    modalBack.addEventListener('click', (e)=>{ if(e.target === modalBack){ modal.classList.remove('show'); setTimeout(()=> modalBack.style.display='none',180); } });
    console.log('Curated tools loaded:', ALL_TOOLS.length);
  });

})();
