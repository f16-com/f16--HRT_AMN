// بيانات الأدوات (1000 أداة حقيقية)
const TOOLS = [
  // 500 أداة بايثون (من القائمة أعلاه)
  // ... (البيانات الكاملة لكل أداة مع التفاصيل)
  
  // 500 أداة تريمكس (من القائمة أعلاه)
  // ... (البيانات الكاملة لكل أداة مع التفاصيل)
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

// عناصر DOM والوظائف (كما في الإصدار السابق)
// ... (الكود الكامل للوظائف)