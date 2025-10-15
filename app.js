// بيانات الأدوات (1000 أداة حقيقية)
const TOOLS = [
  // 500 أداة بايثون
  {id:"py_001",name:"SQLMap",category:"بايثون",desc:"أداة SQLMap — اختراق قواعد البيانات عبر SQL Injection.",detailed:"SQLMap أداة تلقائية لاكتشاف واستغلال ثغرات حقن SQL. تدعم أنواعًا كثيرة من قواعد البيانات (MySQL, PostgreSQL, Oracle, إلخ).",how:["ثبّت الأداة: git clone https://github.com/sqlmapproject/sqlmap","ادخل المجلد: cd sqlmap","شغّل على موقع تدريبي: python sqlmap.py -u \"http://testphp.vulnweb.com/artists.php?artist=1\" --dbs","لا تستخدمها على مواقع غير مملوكة لك — لأنها جريمة!"],install:"git clone https://github.com/sqlmapproject/sqlmap",example:"# مثال آمن على موقع تدريبي\npython sqlmap.py -u \"http://testphp.vulnweb.com/artists.php?artist=1\" --batch --dbs",snippet_key:"py_001_snip"},
  {id:"py_002",name:"Nuclei",category:"بايثون",desc:"أداة Nuclei — فحص المواقع ضد 1000+ ثغرة معروفة.",detailed:"Nuclei أداة سريعة لفحص الثغرات باستخدام قوالب جاهزة. تدعم HTTP, DNS, TCP, وبروتوكولات أخرى.",how:["ثبّت Go: pkg install golang","ثبّت Nuclei: go install github.com/projectdiscovery/nuclei/v2/cmd/nuclei@latest","شغّل على موقعك: nuclei -u http://yoursite.com","استخدمها فقط على أنظمتك أنت!"],install:"go install github.com/projectdiscovery/nuclei/v2/cmd/nuclei@latest",example:"# فحص موقعك\nnuclei -u http://localhost --severity high",snippet_key:"py_002_snip"},
  {id:"py_003",name:"Scapy",category:"بايثون",desc:"أداة Scapy — تحليل وصنع حزم الشبكة من الصفر.",detailed:"Scapy مكتبة قوية لمعالجة الحزم. تسمح بإرسال، التقاط، وتحليل الحزم على مستوى منخفض.",how:["ثبّت Scapy: pip install scapy","افتح بايثون: python","جرب: from scapy.all import *; send(IP(dst=\"192.168.1.1\")/ICMP())","استخدمه فقط على شبكتك الخاصة!"],install:"pip install scapy",example:"from scapy.all import *\n\n# إرسال حزمة ICMP (آمن على localhost)\npkt = IP(dst=\"127.0.0.1\")/ICMP()\nsend(pkt)",snippet_key:"py_003_snip"},
  {id:"py_004",name:"Sherlock",category:"بايثون",desc:"أداة Sherlock — البحث عن حسابات الشخص على 300+ موقع.",detailed:"Sherlock يبحث عن أسماء المستخدمين عبر الإنترنت. يدعم أكثر من 300 موقع.",how:["ثبّت Sherlock: git clone https://github.com/sherlock-project/sherlock","ادخل المجلد: cd sherlock","ثبّت المتطلبات: python3 -m pip install -r requirements.txt","ابحث عن اسم: python3 sherlock username"],install:"git clone https://github.com/sherlock-project/sherlock",example:"# البحث عن اسم مستخدم\npython3 sherlock john_doe",snippet_key:"py_004_snip"},
  {id:"py_005",name:"PhoneInfoga",category:"بايثون",desc:"أداة PhoneInfoga — جمع معلومات عن رقم الهاتف من مصادر علنية.",detailed:"PhoneInfoga يفحص الأرقام عبر Google, Facebook, وقواعد بيانات عامة. لا يخترق أي نظام.",how:["ثبّت PhoneInfoga: git clone https://github.com/sundowndev/phoneinfoga","ادخل المجلد: cd phoneinfoga","ثبّت المتطلبات: python3 -m pip install -r requirements.txt","افحص رقم: python3 phoneinfoga.py -n +964770XXXXXXX"],install:"git clone https://github.com/sundowndev/phoneinfoga",example:"# فحص رقم عراقي\npython3 phoneinfoga.py -n +964770123456",snippet_key:"py_005_snip"},
  {id:"py_006",name:"Hashcat",category:"بايثون",desc:"أداة Hashcat — كسر هاشات الباسورد باستخدام كرت الشاشة.",detailed:"Hashcat أسرع أداة كسر باسورد في العالم. يدعم 300+ نوع تشفير.",how:["ثبّت Hashcat: pkg install hashcat (على لينكس)","جهّز ملف الهاش: echo '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8' > hash.txt","جهّز قاموس: echo 'password' > wordlist.txt","اكسر الهاش: hashcat -m 0 hash.txt wordlist.txt"],install:"pkg install hashcat",example:"# كسر هاش MD5\nhashcat -m 0 hash.txt wordlist.txt",snippet_key:"py_006_snip"},
  {id:"py_007",name:"Sublist3r",category:"بايثون",desc:"أداة Sublist3r — جمع النطاقات الفرعية لموقع.",detailed:"Sublist3r يجمع النطاقات الفرعية من محركات البحث وخدمات OSINT.",how:["ثبّت Sublist3r: git clone https://github.com/aboul3la/Sublist3r","ادخل المجلد: cd Sublist3r","ثبّت المتطلبات: pip install -r requirements.txt","اجمع النطاقات: python sublist3r.py -d google.com"],install:"git clone https://github.com/aboul3la/Sublist3r",example:"# جمع نطاقات جوجل\npython sublist3r.py -d google.com",snippet_key:"py_007_snip"},
  {id:"py_008",name:"FFUF",category:"بايثون",desc:"أداة FFUF — فحص المواقع لاكتشاف المجلدات والملفات المخفية.",detailed:"FFUF أداة سريعة لفحص المواقع (Fuzzing). تدعم التخصيص الكامل.",how:["ثبّت Go: pkg install golang","ثبّت FFUF: go install github.com/ffuf/ffuf@latest","جهّز قائمة: wget https://raw.githubusercontent.com/danielmiessler/SecLists/master/Discovery/Web-Content/common.txt","افحص الموقع: ffuf -u http://yoursite.com/FUZZ -w common.txt"],install:"go install github.com/ffuf/ffuf@latest",example:"# فحص موقعك\nffuf -u http://localhost/FUZZ -w common.txt",snippet_key:"py_008_snip"},
  {id:"py_009",name:"Amass",category:"بايثون",desc:"أداة Amass — رسم خريطة لأصول الشركة (نطاقات، IPs، سيرفرات).",detailed:"Amass يجمع البيانات من 100+ مصدر OSINT. يدعم التكامل مع PassiveTotal وSecurityTrails.",how:["ثبّت Go: pkg install golang","ثبّت Amass: go install github.com/OWASP/Amass/v3/...@master","اجمع البيانات: amass enum -d google.com -o results.txt","حلل النتائج: cat results.txt"],install:"go install github.com/OWASP/Amass/v3/...@master",example:"# جمع أصول جوجل\namass enum -d google.com",snippet_key:"py_009_snip"},
  {id:"py_010",name:"Gobuster",category:"بايثون",desc:"أداة Gobuster — اكتشاف المجلدات والملفات السرية في المواقع.",detailed:"Gobuster أداة سريعة لفحص المواقع باستخدام قوائم جاهزة.",how:["ثبّت Go: pkg install golang","ثبّت Gobuster: go install github.com/OJ/gobuster/v3@latest","جهّز قائمة: wget https://raw.githubusercontent.com/danielmiessler/SecLists/master/Discovery/Web-Content/common.txt","افحص الموقع: gobuster dir -u http://yoursite.com -w common.txt"],install:"go install github.com/OJ/gobuster/v3@latest",example:"# فحص موقعك\ngobuster dir -u http://localhost -w common.txt",snippet_key:"py_010_snip"},
  // ... (أضف باقي أدوات البايثون حتى 500)

  // 500 أداة تريمكس
  {id:"tx_001",name:"Nmap",category:"تريمكس",desc:"أداة Nmap — مسح الشبكة لاكتشاف الأجهزة والمنافذ.",detailed:"Nmap أداة قياسية لمسح الشبكات. تظهر الأجهزة المتصلة والمنافذ المفتوحة.",how:["ثبّت Nmap: pkg install nmap","امسح شبكتك: nmap -sn 192.168.1.0/24","افحص جهاز: nmap -sV 192.168.1.1","لا تستخدمه على شبكات غير مملوكة لك!"],install:"pkg install nmap",example:"# مسح الشبكة المحلية\nnmap -sn 192.168.1.0/24",snippet_key:"tx_001_snip"},
  {id:"tx_002",name:"Hydra",category:"تريمكس",desc:"أداة Hydra — كسر باسوردات عبر هجوم قوة غاشمة.",detailed:"Hydra يدعم 50+ بروتوكول (SSH, FTP, HTTP, إلخ). يجرب آلاف الباسوردات في الدقيقة.",how:["ثبّت Hydra: pkg install hydra","جهّز قائمة باسوردات: echo -e \"password\\n123456\" > passwords.txt","اكسر باسورد SSH: hydra -l admin -P passwords.txt 192.168.1.1 ssh","استخدمه فقط على أنظمتك أنت!"],install:"pkg install hydra",example:"# كسر باسورد SSH\nhydra -l admin -P passwords.txt 192.168.1.1 ssh",snippet_key:"tx_002_snip"},
  {id:"tx_003",name:"Metasploit",category:"تريمكس",desc:"أداة Metasploit — منصة اختراق متقدمة.",detailed:"Metasploit يحتوي على 2000+ ثغرة جاهزة. يزرع بايلود للتحكم بالجهاز.",how:["ثبّت Metasploit: wget https://raw.githubusercontent.com/Hax4us/Metasploit_termux/master/metasploit.sh","شغّل السكربت: chmod +x metasploit.sh && ./metasploit.sh","افتح الكونسول: msfconsole","استخدمه فقط على أنظمتك أنت!"],install:"wget https://raw.githubusercontent.com/Hax4us/Metasploit_termux/master/metasploit.sh && chmod +x metasploit.sh && ./metasploit.sh",example:"# تشغيل Metasploit\nmsfconsole",snippet_key:"tx_003_snip"},
  {id:"tx_004",name:"Aircrack-ng",category:"تريمكس",desc:"أداة Aircrack-ng — كسر باسوردات الواي فاي (WPA/WPA2).",detailed:"Aircrack-ng يكسر باسوردات الواي فاي الضعيفة. يحتاج كارت واي فاي خارجي (ما يشتغل على معظم الهواتف).",how:["ثبّت Aircrack-ng: pkg install aircrack-ng","امسح الشبكات: airodump-ng wlan0mon","التقط handshake: airodump-ng -c [CHANNEL] --bssid [BSSID] -w capture wlan0mon","اكسر الباسورد: aircrack-ng -w passwords.txt capture-01.cap"],install:"pkg install aircrack-ng",example:"# عرض المساعدة\naircrack-ng --help",snippet_key:"tx_004_snip"},
  {id:"tx_005",name:"John the Ripper",category:"تريمكس",desc:"أداة John the Ripper — كسر هاشات الباسورد.",detailed:"John the Ripper أداة كلاسيكية لكسر هاشات الباسورد. يدعم أنواعًا كثيرة من التشفير.",how:["ثبّت John: pkg install john","جهّز ملف الهاش: echo 'root:5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8' > hash.txt","اكسر الهاش: john hash.txt","اعرض النتائج: john --show hash.txt"],install:"pkg install john",example:"# كسر هاش\njohn hash.txt",snippet_key:"tx_005_snip"},
  {id:"tx_006",name:"Lazymux",category:"تريمكس",desc:"أداة Lazymux — صندوق سحري يجمع 300+ أداة أمنية.",detailed:"Lazymux واجهة بسيطة لتثبيت واستخدام أدوات الأمان الشهيرة.",how:["ثبّت Lazymux: git clone https://github.com/Gameye98/Lazymux","ادخل المجلد: cd Lazymux","شغّل الأداة: python lazymux.py","اختر الأداة التي تريد تثبيتها"],install:"git clone https://github.com/Gameye98/Lazymux",example:"# تشغيل Lazymux\npython lazymux.py",snippet_key:"tx_006_snip"},
  {id:"tx_007",name:"Zphisher",category:"تريمكس",desc:"أداة Zphisher — منصة فيشينغ متقدمة.",detailed:"Zphisher ينشئ صفحات وهمية (فيسبوك، واتساب، إلخ). لا تستخدمه على غيرك!",how:["ثبّت Zphisher: git clone https://github.com/htr-tech/zphisher","ادخل المجلد: cd zphisher","شغّل الأداة: bash zphisher.sh","اختر القالب وانسخ الرابط"],install:"git clone https://github.com/htr-tech/zphisher",example:"# تشغيل Zphisher\nbash zphisher.sh",snippet_key:"tx_007_snip"},
  {id:"tx_008",name:"Seeker",category:"تريمكس",desc:"أداة Seeker — تحديد موقع الضحية عبر رابط.",detailed:"Seeker يحدد الموقع التقريبي (المدينة) عبر رابط. لا يعطي موقع GPS دقيق.",how:["ثبّت Seeker: git clone https://github.com/thewhiteh4t/seeker","ادخل المجلد: cd seeker","ثبّت المتطلبات: chmod +x install.sh && ./install.sh","شغّل الأداة: python3 seeker.py"],install:"git clone https://github.com/thewhiteh4t/seeker",example:"# تشغيل Seeker\npython3 seeker.py",snippet_key:"tx_008_snip"},
  {id:"tx_009",name:"HiddenEye",category:"تريمكس",desc:"أداة HiddenEye — منصة فيشينغ مع 30+ قالب.",detailed:"HiddenEye يدعم فيسبوك، إنستغرام، تويتر، و30+ موقع آخر. لا تستخدمه على غيرك!",how:["ثبّت HiddenEye: git clone https://github.com/DarkSecDevelopers/HiddenEye-Legacy","ادخل المجلد: cd HiddenEye-Legacy","ثبّت المتطلبات: pip3 install -r requirements.txt","شغّل الأداة: python3 HiddenEye.py"],install:"git clone https://github.com/DarkSecDevelopers/HiddenEye-Legacy",example:"# تشغيل HiddenEye\npython3 HiddenEye.py",snippet_key:"tx_009_snip"},
  {id:"tx_010",name:"OSIF",category:"تريمكس",desc:"أداة OSIF — جمع معلومات عن حساب فيسبوك.",detailed:"OSIF يجمع معلومات من Session ID. لا يخترق الحسابات!",how:["ثبّت OSIF: git clone https://github.com/ciku370/OSIF","ادخل المجلد: cd OSIF","ثبّت المتطلبات: pip2 install -r requirements.txt","شغّل الأداة: python2 osif.py"],install:"git clone https://github.com/ciku370/OSIF",example:"# تشغيل OSIF\npython2 osif.py",snippet_key:"tx_010_snip"},
  // ... (أضف باقي أدوات التريمكس حتى 500)
];

// إنشاء SNIPPETS ديناميكيًا
const SNIPPETS = {};
TOOLS.forEach(t => {
  const filename = t.category === "بايثون" ? `${t.name}.py` : `${t.name}.sh`;
  SNIPPETS[t.snippet_key] = {
    name: `مقتطف ${t.name}`,
    filename: filename,
    content: t.example
  };
});

// عناصر DOM
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

// بناء البطاقات
function buildCards() {
  const frag = document.createDocumentFragment();
  TOOLS.forEach(t => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-id', t.id);
    card.setAttribute('data-cat', t.category);
    card.setAttribute('data-name', (t.name || '').toLowerCase());
    card.setAttribute('data-desc', (t.desc || '').toLowerCase());
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

  // Event delegation
  grid.addEventListener('click', (e) => {
    const det = e.target.closest('button[data-action="details"]');
    const dl = e.target.closest('button[data-action="download"]');
    if (det) {
      const id = det.getAttribute('data-id');
      openToolById(id);
      return;
    }
    if (dl) {
      const key = dl.getAttribute('data-key');
      if (key && SNIPPETS[key]) {
        const blob = new Blob([SNIPPETS[key].content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = SNIPPETS[key].filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } else {
        alert('لا يوجد مقتطف للتحميل لهذه الأداة.');
      }
    }
  });
}

// تطبيق الفلاتر والبحث
function applyFilters() {
  const q = (search.value || '').toLowerCase().trim();
  const cards = grid.querySelectorAll('.card');
  let visible = 0;
  cards.forEach(c => {
    const name = c.getAttribute('data-name') || '';
    const desc = c.getAttribute('data-desc') || '';
    const cat = c.getAttribute('data-cat') || '';
    const inFilter = (currentFilter === 'all' || currentFilter === cat);
    const matches = (!q || name.includes(q) || desc.includes(q));
    if (inFilter && matches) {
      c.style.display = 'block';
      visible++;
    } else {
      c.style.display = 'none';
    }
  });
  return visible;
}

// فتح تفاصيل الأداة
function openToolById(id) {
  const t = TOOLS.find(x => x.id === id);
  if (!t) return;
  mTitle.innerText = t.name;
  mCategory.innerText = 'الفئة: ' + t.category;
  mDetailed.innerText = t.detailed || t.desc || '';
  mInstall.innerText = t.install || '—';
  mExample.innerText = t.example || '—';
  mHow.innerHTML = '';
  if (Array.isArray(t.how)) {
    t.how.forEach((step, idx) => {
      const div = document.createElement('div');
      div.className = 'step';
      div.innerText = `${idx + 1}. ${step}`;
      mHow.appendChild(div);
    });
  }
  downloadBtn.onclick = () => {
    const sk = t.snippet_key;
    if (sk && SNIPPETS[sk]) {
      const blob = new Blob([SNIPPETS[sk].content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = SNIPPETS[sk].filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      alert('لا يوجد مقتطف للتحميل لهذه الأداة.');
    }
  };
  copyInstall.onclick = () => copyToClipboard(t.install || '');
  copyExample.onclick = () => copyToClipboard(t.example || '');
  modalBack.style.display = 'flex';
  setTimeout(() => modal.classList.add('show'), 20);
}

// إغلاق المودال
closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
  setTimeout(() => modalBack.style.display = 'none', 180);
});
modalBack.addEventListener('click', (e) => {
  if (e.target === modalBack) closeModal.click();
});

// أزرار الفلترة
function setActiveButton(btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
btnAll.addEventListener('click', () => { currentFilter = 'all'; setActiveButton(btnAll); applyFilters(); });
btnPy.addEventListener('click', () => { currentFilter = 'بايثون'; setActiveButton(btnPy); applyFilters(); });
btnTx.addEventListener('click', () => { currentFilter = 'تريمكس'; setActiveButton(btnTx); applyFilters(); });

// البحث مع debounce
search.addEventListener('input', () => {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => { applyFilters(); }, 120);
});

// اختصارات لوحة المفاتيح
document.addEventListener('keydown', (e) => {
  if (e.key === '1') { btnAll.click(); }
  if (e.key === '2') { btnPy.click(); }
  if (e.key === '3') { btnTx.click(); }
  if (e.key === '/') { e.preventDefault(); search.focus(); }
  if (e.key === 'Escape') { closeModal.click(); }
});

// نسخ إلى الحافظة
function copyToClipboard(text) {
  if (!text) return alert('لا يوجد نص للنسخ');
  navigator.clipboard.writeText(text).then(() => alert('تم النسخ إلى الحافظة')).catch(() => alert('فشل النسخ — انسخ يدويًا'));
}

// بدء التشغيل
document.addEventListener('DOMContentLoaded', () => {
  buildCards();
  applyFilters();
});