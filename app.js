const tools = [
  {
    name: "Metasploit",
    type: "termux",
    description: "إطار استغلال ضخم يستخدمه خبراء الأمن لاختبار الاختراق.",
    link: "https://github.com/rapid7/metasploit-framework"
  },
  {
    name: "Wireshark",
    type: "python",
    description: "أداة تحليل الشبكات لمراقبة الحزم وتفكيك الاتصالات.",
    link: "https://www.wireshark.org/"
  },
  {
    name: "Nmap",
    type: "termux",
    description: "ماسح منافذ قوي لاكتشاف الأجهزة والخدمات على الشبكة.",
    link: "https://nmap.org/"
  },
  {
    name: "Aircrack-ng",
    type: "termux",
    description: "أداة متخصصة في اختراق الشبكات اللاسلكية عبر تحليل الـ WPA/WEP.",
    link: "https://www.aircrack-ng.org/"
  },
  {
    name: "SocialFish",
    type: "python",
    description: "أداة تصيد متقدمة لإنشاء صفحات مزيفة لاختبار الأمن.",
    link: "https://github.com/UndeadSec/SocialFish"
  },
  {
    name: "Hydra",
    type: "termux",
    description: "أداة كسر كلمات المرور القوية تدعم أكثر من 50 بروتوكول.",
    link: "https://github.com/vanhauser-thc/thc-hydra"
  }
];

const container = document.getElementById("tools-container");
const search = document.getElementById("search");
const filters = document.querySelectorAll(".filter");
const modal = document.getElementById("details-modal");
const toolName = document.getElementById("tool-name");
const toolDesc = document.getElementById("tool-description");
const downloadBtn = document.getElementById("download-btn");
const closeBtn = document.getElementById("close-btn");

function renderTools(list) {
  container.innerHTML = "";
  list.forEach(tool => {
    const div = document.createElement("div");
    div.className = "tool";
    div.innerHTML = `<h3>${tool.name}</h3>
                     <button onclick="showDetails('${tool.name}')">التفاصيل</button>`;
    container.appendChild(div);
  });
}

function showDetails(name) {
  const tool = tools.find(t => t.name === name);
  toolName.textContent = tool.name;
  toolDesc.textContent = tool.description;
  downloadBtn.onclick = () => window.open(tool.link, "_blank");
  modal.classList.remove("hidden");
}

closeBtn.onclick = () => modal.classList.add("hidden");

search.addEventListener("input", e => {
  const term = e.target.value.toLowerCase();
  const filtered = tools.filter(t => t.name.toLowerCase().includes(term));
  renderTools(filtered);
});

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;
    const filtered = type === "all" ? tools : tools.filter(t => t.type === type);
    renderTools(filtered);
  });
});

renderTools(tools);
