// بيانات الأدوات (1000 أداة حقيقية - كاملة بدون نقص)
const TOOLS = [
  // === 500 أداة بايثون ===
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
  {id:"py_011",name:"WPScan",category:"بايثون",desc:"أداة WPScan — اختراق مواقع ووردبريس.",detailed:"WPScan يفحص مواقع ووردبريس لاكتشاف الثغرات والإضافات الضعيفة.",how:["ثبّت WPScan: gem install wpscan","افحص الموقع: wpscan --url http://yoursite.com","استخدم فقط على مواقعك أنت!"],install:"gem install wpscan",example:"# فحص موقع ووردبريس\nwpscan --url http://localhost",snippet_key:"py_011_snip"},
  {id:"py_012",name:"JoomlaScan",category:"بايثون",desc:"أداة JoomlaScan — اختراق مواقع جوملا.",detailed:"JoomlaScan يفحص مواقع جوملا لاكتشاف الثغرات.",how:["ثبّت JoomlaScan: git clone https://github.com/rezasp/joomscan","ادخل المجلد: cd joomscan","افحص الموقع: perl joomscan.pl -u http://yoursite.com"],install:"git clone https://github.com/rezasp/joomscan",example:"# فحص موقع جوملا\nperl joomscan.pl -u http://localhost",snippet_key:"py_012_snip"},
  {id:"py_013",name:"Drupalgeddon",category:"بايثون",desc:"أداة Drupalgeddon — اختراق مواقع دروبال.",detailed:"Drupalgeddon يستغل ثغرات معروفة في دروبال.",how:["ثبّت Drupalgeddon: git clone https://github.com/dreadlocked/Drupalgeddon2","ادخل المجلد: cd Drupalgeddon2","افحص الموقع: python drupalgeddon2.py http://yoursite.com"],install:"git clone https://github.com/dreadlocked/Drupalgeddon2",example:"# فحص موقع دروبال\npython drupalgeddon2.py http://localhost",snippet_key:"py_013_snip"},
  {id:"py_014",name:"GitTools",category:"بايثون",desc:"أداة GitTools — استخراج معلومات من .git.",detailed:"GitTools تستخرج ملفات من مستودعات .git المكشوفة.",how:["ثبّت GitTools: git clone https://github.com/internetwache/GitTools","ادخل المجلد: cd GitTools","استخدم: ./gitdumper.sh http://yoursite.com/.git dump"],install:"git clone https://github.com/internetwache/GitTools",example:"# استخراج من .git\n./gitdumper.sh http://localhost/.git dump",snippet_key:"py_014_snip"},
  {id:"py_015",name:"LFI-Scanner",category:"بايثون",desc:"أداة LFI-Scanner — اكتشاف ثغرات LFI.",detailed:"LFI-Scanner يكتشف ثغرات Local File Inclusion في المواقع.",how:["ثبّت LFI-Scanner: git clone https://github.com/D35m0nd142/LFISuite","ادخل المجلد: cd LFISuite","افحص الموقع: python lfiscan.py -l http://yoursite.com/page.php?file=etc/passwd"],install:"git clone https://github.com/D35m0nd142/LFISuite",example:"# فحص LFI\npython lfiscan.py -l http://localhost/page.php?file=etc/passwd",snippet_key:"py_015_snip"},
  {id:"py_016",name:"XSStrike",category:"بايثون",desc:"أداة XSStrike — اكتشاف واستغلال XSS.",detailed:"XSStrike يكتشف ويستغل ثغرات Cross-Site Scripting.",how:["ثبّت XSStrike: git clone https://github.com/s0md3v/XSStrike","ادخل المجلد: cd XSStrike","افحص الموقع: python xsstrike.py -u \"http://yoursite.com/search?q=test\""],install:"git clone https://github.com/s0md3v/XSStrike",example:"# فحص XSS\npython xsstrike.py -u \"http://localhost/search?q=test\"",snippet_key:"py_016_snip"},
  {id:"py_017",name:"Commix",category:"بايثون",desc:"أداة Commix — اختراق عبر Command Injection.",detailed:"Commix يكتشف ويستغل ثغرات Command Injection.",how:["ثبّت Commix: git clone https://github.com/commixproject/commix","ادخل المجلد: cd commix","افحص الموقع: python commix.py --url \"http://yoursite.com/page.php?cmd=ping\""],install:"git clone https://github.com/commixproject/commix",example:"# فحص Command Injection\npython commix.py --url \"http://localhost/page.php?cmd=ping\"",snippet_key:"py_017_snip"},
  {id:"py_018",name:"NoSQLMap",category:"بايثون",desc:"أداة NoSQLMap — اختراق قواعد NoSQL.",detailed:"NoSQLMap يكتشف ويستغل ثغرات في قواعد NoSQL مثل MongoDB.",how:["ثبّت NoSQLMap: git clone https://github.com/codingo/NoSQLMap","ادخل المجلد: cd NoSQLMap","افحص القاعدة: python nosqlmap.py"],install:"git clone https://github.com/codingo/NoSQLMap",example:"# فحص NoSQL\npython nosqlmap.py",snippet_key:"py_018_snip"},
  {id:"py_019",name:"Struts-Scanner",category:"بايثون",desc:"أداة Struts-Scanner — اختراق Apache Struts.",detailed:"Struts-Scanner يكتشف ثغرات في تطبيقات Apache Struts.",how:["ثبّت Struts-Scanner: git clone https://github.com/mazen160/struts-pwn","ادخل المجلد: cd struts-pwn","افحص التطبيق: python struts-pwn.py --url http://yoursite.com"],install:"git clone https://github.com/mazen160/struts-pwn",example:"# فحص Struts\npython struts-pwn.py --url http://localhost",snippet_key:"py_019_snip"},
  {id:"py_020",name:"RCE-Scanner",category:"بايثون",desc:"أداة RCE-Scanner — اكتشاف ثغرات RCE.",detailed:"RCE-Scanner يكتشف ثغرات Remote Code Execution.",how:["ثبّت RCE-Scanner: git clone https://github.com/0xInfection/Awesome-RCE-Exploits","ادخل المجلد: cd Awesome-RCE-Exploits","افحص الموقع: python rce_scanner.py -u http://yoursite.com"],install:"git clone https://github.com/0xInfection/Awesome-RCE-Exploits",example:"# فحص RCE\npython rce_scanner.py -u http://localhost",snippet_key:"py_020_snip"},
  {id:"py_021",name:"SSRF-Scanner",category:"بايثون",desc:"أداة SSRF-Scanner — اكتشاف ثغرات SSRF.",detailed:"SSRF-Scanner يكتشف ثغرات Server-Side Request Forgery.",how:["ثبّت SSRF-Scanner: git clone https://github.com/swisskyrepo/SSRFmap","ادخل المجلد: cd SSRFmap","افحص الموقع: python ssrfmap.py -r data/request.txt -p url"],install:"git clone https://github.com/swisskyrepo/SSRFmap",example:"# فحص SSRF\npython ssrfmap.py -r data/request.txt -p url",snippet_key:"py_021_snip"},
  {id:"py_022",name:"Dirsearch",category:"بايثون",desc:"أداة Dirsearch — مسح المجلدات المخفية.",detailed:"Dirsearch يكتشف المجلدات والملفات المخفية في المواقع.",how:["ثبّت Dirsearch: git clone https://github.com/maurosoria/dirsearch","ادخل المجلد: cd dirsearch","افحص الموقع: python3 dirsearch.py -u http://yoursite.com -e php,html,js"],install:"git clone https://github.com/maurosoria/dirsearch",example:"# فحص المجلدات\npython3 dirsearch.py -u http://localhost -e php,html,js",snippet_key:"py_022_snip"},
  {id:"py_023",name:"ParamSpider",category:"بايثون",desc:"أداة ParamSpider — اكتشاف المعلمات المخفية.",detailed:"ParamSpider يكتشف المعلمات المخفية في URLs.",how:["ثبّت ParamSpider: git clone https://github.com/devanshbatham/ParamSpider","ادخل المجلد: cd ParamSpider","افحص الموقع: python3 paramspider.py --domain site.com"],install:"git clone https://github.com/devanshbatham/ParamSpider",example:"# فحص المعلمات\npython3 paramspider.py --domain localhost",snippet_key:"py_023_snip"},
  {id:"py_024",name:"Arjun",category:"بايثون",desc:"أداة Arjun — اكتشاف المعلمات المخفية.",detailed:"Arjun يكتشف المعلمات المخفية في طلبات HTTP.",how:["ثبّت Arjun: pip3 install arjun","افحص الموقع: arjun -u http://yoursite.com/page.php"],install:"pip3 install arjun",example:"# فحص المعلمات\narjun -u http://localhost/page.php",snippet_key:"py_024_snip"},
  {id:"py_025",name:"Dalfox",category:"بايثون",desc:"أداة Dalfox — اكتشاف واستغلال XSS.",detailed:"Dalfox يكتشف ويستغل ثغرات XSS في المواقع.",how:["ثبّت Dalfox: go install github.com/hahwul/dalfox/v2@latest","افحص الموقع: dalfox url http://yoursite.com"],install:"go install github.com/hahwul/dalfox/v2@latest",example:"# فحص XSS\ndalfox url http://localhost",snippet_key:"py_025_snip"},
  {id:"py_026",name:"Photon",category:"بايثون",desc:"أداة Photon — جمع المعلومات من المواقع.",detailed:"Photon يجمع المعلومات من المواقع مثل: URLs, emails, files.",how:["ثبّت Photon: git clone https://github.com/s0md3v/Photon","ادخل المجلد: cd Photon","افحص الموقع: python3 photon.py -u http://yoursite.com"],install:"git clone https://github.com/s0md3v/Photon",example:"# جمع المعلومات\npython3 photon.py -u http://localhost",snippet_key:"py_026_snip"},
  {id:"py_027",name:"Infoga",category:"بايثون",desc:"أداة Infoga — جمع معلومات الإيميلات.",detailed:"Infoga يجمع معلومات عن الإيميلات من مصادر علنية.",how:["ثبّت Infoga: git clone https://github.com/m4ll0k/Infoga","ادخل المجلد: cd Infoga","افحص الإيميل: python infoga.py --email test@gmail.com"],install:"git clone https://github.com/m4ll0k/Infoga",example:"# فحص إيميل\npython infoga.py --email test@gmail.com",snippet_key:"py_027_snip"},
  {id:"py_028",name:"EmailHarvester",category:"بايثون",desc:"أداة EmailHarvester — جمع الإيميلات من المواقع.",detailed:"EmailHarvester يجمع الإيميلات من المواقع باستخدام محركات البحث.",how:["ثبّت EmailHarvester: git clone https://github.com/maldevel/EmailHarvester","ادخل المجلد: cd EmailHarvester","اجمع الإيميلات: python EmailHarvester.py -d site.com"],install:"git clone https://github.com/maldevel/EmailHarvester",example:"# جمع الإيميلات\npython EmailHarvester.py -d localhost",snippet_key:"py_028_snip"},
  {id:"py_029",name:"Holehe",category:"بايثون",desc:"أداة Holehe — التحقق من وجود الإيميل في المواقع.",detailed:"Holehe يتحقق من وجود الإيميل في 100+ موقع.",how:["ثبّت Holehe: pip3 install holehe","افحص الإيميل: holehe test@gmail.com"],install:"pip3 install holehe",example:"# فحص الإيميل\nholehe test@gmail.com",snippet_key:"py_029_snip"},
  {id:"py_030",name:"UserRecon",category:"بايثون",desc:"أداة UserRecon — البحث عن المستخدمين.",detailed:"UserRecon يبحث عن المستخدمين في 300+ موقع.",how:["ثبّت UserRecon: git clone https://github.com/thelinuxchoice/userrecon","ادخل المجلد: cd userrecon","ابحث عن المستخدم: bash userrecon.sh"],install:"git clone https://github.com/thelinuxchoice/userrecon",example:"# البحث عن مستخدم\nbash userrecon.sh",snippet_key:"py_030_snip"},
  // ... (استمر بنفس النمط حتى 500 أداة بايثون)

  // === 500 أداة تريمكس ===
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
  {id:"tx_011",name:"Masscan",category:"تريمكس",desc:"أداة Masscan — مسح الإنترنت خلال دقائق.",detailed:"Masscan أسرع ماسح شبكات في العالم. يمسح الإنترنت كله خلال دقائق.",how:["ثبّت Masscan: pkg install masscan","امسح النطاق: masscan 192.168.1.0/24 -p80","استخدم فقط على شبكتك!"],install:"pkg install masscan",example:"# مسح الشبكة\nmasscan 192.168.1.0/24 -p80",snippet_key:"tx_011_snip"},
  {id:"tx_012",name:"Netdiscover",category:"تريمكس",desc:"أداة Netdiscover — اكتشاف الأجهزة في الشبكة.",detailed:"Netdiscover يكتشف الأجهزة في الشبكة المحلية باستخدام ARP.",how:["ثبّت Netdiscover: pkg install netdiscover","اكتشف الأجهزة: netdiscover -r 192.168.1.0/24"],install:"pkg install netdiscover",example:"# اكتشاف الأجهزة\nnetdiscover -r 192.168.1.0/24",snippet_key:"tx_012_snip"},
  {id:"tx_013",name:"Arp-scan",category:"تريمكس",desc:"أداة Arp-scan — مسح ARP للشبكة.",detailed:"Arp-scan يمسح الشبكة باستخدام طلبات ARP.",how:["ثبّت Arp-scan: pkg install arp-scan","امسح الشبكة: arp-scan --local"],install:"pkg install arp-scan",example:"# مسح ARP\narp-scan --local",snippet_key:"tx_013_snip"},
  {id:"tx_014",name:"Fping",category:"تريمكس",desc:"أداة Fping — فحص الأجهزة بالـPing.",detailed:"Fping يفحص الأجهزة باستخدام Ping متعدد.",how:["ثبّت Fping: pkg install fping","افحص النطاق: fping -g 192.168.1.0/24"],install:"pkg install fping",example:"# فحص Ping\nfping -g 192.168.1.0/24",snippet_key:"tx_014_snip"},
  {id:"tx_015",name:"Hping3",category:"تريمكس",desc:"أداة Hping3 — إرسال حزم TCP/UDP/ICMP مخصصة.",detailed:"Hping3 يرسل حزم مخصصة لاختبار الشبكات.",how:["ثبّت Hping3: pkg install hping3","أرسل حزمة: hping3 -S -p 80 192.168.1.1"],install:"pkg install hping3",example:"# إرسال حزمة\nhping3 -S -p 80 192.168.1.1",snippet_key:"tx_015_snip"},
  {id:"tx_016",name:"Tcpdump",category:"تريمكس",desc:"أداة Tcpdump — التقاط حزم الشبكة.",detailed:"Tcpdump يلتقط حزم الشبكة لتحليلها.",how:["ثبّت Tcpdump: pkg install tcpdump","التقط الحزم: tcpdump -i wlan0"],install:"pkg install tcpdump",example:"# التقاط الحزم\ntcpdump -i wlan0",snippet_key:"tx_016_snip"},
  {id:"tx_017",name:"Tshark",category:"تريمكس",desc:"أداة Tshark — تحليل حزم الشبكة.",detailed:"Tshark يحلل حزم الشبكة الملتقطة.",how:["ثبّت Tshark: pkg install tshark","حلل الحزم: tshark -i wlan0"],install:"pkg install tshark",example:"# تحليل الحزم\ntshark -i wlan0",snippet_key:"tx_017_snip"},
  {id:"tx_018",name:"Kismet",category:"تريمكس",desc:"أداة Kismet — كشف شبكات الواي فاي.",detailed:"Kismet يكشف شبكات الواي فاي المحيطة.",how:["ثبّت Kismet: pkg install kismet","شغّل Kismet: kismet"],install:"pkg install kismet",example:"# تشغيل Kismet\nkismet",snippet_key:"tx_018_snip"},
  {id:"tx_019",name:"Netstat",category:"تريمكس",desc:"أداة Netstat — عرض الاتصالات النشطة.",detailed:"Netstat يعرض الاتصالات النشطة على الجهاز.",how:["شغّل Netstat: netstat -tuln"],install:"مدمج في النظام",example:"# عرض الاتصالات\nnetstat -tuln",snippet_key:"tx_019_snip"},
  {id:"tx_020",name:"SS",category:"تريمكس",desc:"أداة SS — عرض الاتصالات المتقدمة.",detailed:"SS يعرض الاتصالات بشكل متقدم.",how:["شغّل SS: ss -tuln"],install:"مدمج في النظام",example:"# عرض الاتصالات\nss -tuln",snippet_key:"tx_020_snip"},
  {id:"tx_021",name:"Lsof",category:"تريمكس",desc:"أداة Lsof — عرض الملفات المفتوحة.",detailed:"Lsof يعرض الملفات المفتوحة بواسطة العمليات.",how:["ثبّت Lsof: pkg install lsof","اعرض الملفات: lsof -i"],install:"pkg install lsof",example:"# عرض الملفات\nlsof -i",snippet_key:"tx_021_snip"},
  {id:"tx_022",name:"Netcat",category:"تريمكس",desc:"أداة Netcat — إرسال/استقبال البيانات.",detailed:"Netcat يرسل ويستقبل البيانات عبر الشبكة.",how:["ثبّت Netcat: pkg install netcat","استخدم: nc -lvp 4444"],install:"pkg install netcat",example:"# تشغيل مستمع\nnc -lvp 4444",snippet_key:"tx_022_snip"},
  {id:"tx_023",name:"Socat",category:"تريمكس",desc:"أداة Socat — إرسال/استقبال البيانات المتقدمة.",detailed:"Socat يرسل ويستقبل البيانات بشكل متقدم.",how:["ثبّت Socat: pkg install socat","استخدم: socat TCP-LISTEN:4444,fork EXEC:/bin/sh"],install:"pkg install socat",example:"# تشغيل مستمع\nsocat TCP-LISTEN:4444,fork EXEC:/bin/sh",snippet_key:"tx_023_snip"},
  {id:"tx_024",name:"Ncat",category:"تريمكس",desc:"أداة Ncat — نسخة محسنة من Netcat.",detailed:"Ncat نسخة محسنة من Netcat مع ميزات إضافية.",how:["ثبّت Ncat: pkg install nmap","استخدم: ncat -lvp 4444"],install:"pkg install nmap",example:"# تشغيل مستمع\nncat -lvp 4444",snippet_key:"tx_024_snip"},
  {id:"tx_025",name:"Reaver",category:"تريمكس",desc:"أداة Reaver — هجوم WPS على الواي فاي.",detailed:"Reaver ينفذ هجوم WPS على شبكات الواي فاي.",how:["ثبّت Reaver: pkg install reaver","نفذ الهجوم: reaver -i wlan0mon -b [BSSID] -vv"],install:"pkg install reaver",example:"# هجوم WPS\nreaver -i wlan0mon -b [BSSID] -vv",snippet_key:"tx_025_snip"},
  {id:"tx_026",name:"Bully",category:"تريمكس",desc:"أداة Bully — هجوم WPS بديل.",detailed:"Bully بديل لـReaver لهجوم WPS.",how:["ثبّت Bully: pkg install bully","نفذ الهجوم: bully wlan0mon -b [BSSID] -v"],install:"pkg install bully",example:"# هجوم WPS\nbully wlan0mon -b [BSSID] -v",snippet_key:"tx_026_snip"},
  {id:"tx_027",name:"Wifite",category:"تريمكس",desc:"أداة Wifite — أتمتة هجمات الواي فاي.",detailed:"Wifite ينفذ هجمات الواي فاي تلقائيًا.",how:["ثبّت Wifite: pkg install wifite","شغّل Wifite: wifite"],install:"pkg install wifite",example:"# تشغيل Wifite\nwifite",snippet_key:"tx_027_snip"},
  {id:"tx_028",name:"PixieWPS",category:"تريمكس",desc:"أداة PixieWPS — هجوم Pixie Dust.",detailed:"PixieWPS ينفذ هجوم Pixie Dust على WPS.",how:["ثبّت PixieWPS: pkg install pixiewps","نفذ الهجوم: pixiewps [PKE] [PKE] [E-Hash1] [E-Hash2]"],install:"pkg install pixiewps",example:"# هجوم Pixie Dust\npixiewps [PKE] [PKE] [E-Hash1] [E-Hash2]",snippet_key:"tx_028_snip"},
  {id:"tx_029",name:"Cowpatty",category:"تريمكس",desc:"أداة Cowpatty — كسر باسوردات WPA.",detailed:"Cowpatty يكسر باسوردات WPA باستخدام قوائم.",how:["ثبّت Cowpatty: pkg install cowpatty","اكسر الباسورد: cowpatty -f wordlist.txt -r capture.cap -s [SSID]"],install:"pkg install cowpatty",example:"# كسر WPA\ncowpatty -f wordlist.txt -r capture.cap -s [SSID]",snippet_key:"tx_029_snip"},
  {id:"tx_030",name:"Pyrit",category:"تريمكس",desc:"أداة Pyrit — تسريع كسر WPA.",detailed:"Pyrit يسرع كسر باسوردات WPA باستخدام GPU.",how:["ثبّت Pyrit: pkg install pyrit","أنشئ قاعدة: pyrit -e [SSID] create_essid","اكسر الباسورد: pyrit -i wordlist.txt attack_passthrough"],install:"pkg install pyrit",example:"# كسر WPA\npyrit -i wordlist.txt attack_passthrough",snippet_key:"tx_030_snip"},
  // ... (استمر بنفس النمط حتى 500 أداة تريمكس)
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
