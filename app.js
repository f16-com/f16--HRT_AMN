// إضافة صوت النقر
function playClickSound() {
  const audio = document.getElementById('clickSound');
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(e => console.log("Sound blocked"));
  }
}

// باقي الكود كما هو مع إضافة playClickSound() في الأزرار
// ... (نفس كود الأدوات الـ1000)

// في دالة openToolById:
function openToolById(id) {
  playClickSound();
  // ... باقي الكود
}

// في معالجات الأزرار:
copyInstall.onclick = () => { playClickSound(); copyToClipboard(t.install || ''); };
copyExample.onclick = () => { playClickSound(); copyToClipboard(t.example || ''); };
downloadBtn.onclick = () => { playClickSound(); /* ... */ };

// في معالجات الفلترة:
btnAll.addEventListener('click', () => { playClickSound(); /* ... */ });
btnPy.addEventListener('click', () => { playClickSound(); /* ... */ });
btnTx.addEventListener('click', () => { playClickSound(); /* ... */ });