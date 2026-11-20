// Kiểm tra cấu trúc bài học lessons/<file>.html theo quy định của lệnh /claude-bai.
// Dùng: node tools/check-lesson.js [lessons/bai-xx-....html ...]   (mặc định: mọi bài đã có trong lessons/)
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const dir = path.join(root, "lessons");
const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : fs.readdirSync(dir).filter((f) => /^bai-\d+.*\.html$/.test(f)).map((f) => path.join(dir, f));

const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "assets/syllabus.js"), "utf8"), ctx);
const SY = ctx.window.SYLLABUS;
const count = (s, re) => (s.match(re) || []).length;

let bad = 0;
for (const f of files) {
  const name = path.basename(f), errs = [], warns = [];
  const html = fs.readFileSync(f, "utf8");
  const id = Number((html.match(/data-lesson="(\d+)"/) || [])[1]);
  const L = SY.find((x) => x.id === id);
  if (!L) errs.push(`data-lesson="${id}" không có trong syllabus`);
  else if (L.file !== name) errs.push(`tên file khác syllabus (${L.file})`);
  if (!/data-page="lesson"/.test(html) || !/data-root="\.\."/.test(html)) errs.push('body phải có data-page="lesson" data-root=".."');
  for (const s of ['id="hero"', 'id="toc"', 'id="sources"', 'id="lesson-nav"', 'id="quiz-score"', 'class="objectives"'])
    if (!html.includes(s)) errs.push(`thiếu ${s}`);
  for (const h of ["Tóm tắt ghi nhớ", "Thuật ngữ (Glossary)", "Câu hỏi luyện tập", "Thực hành", "Tài liệu gốc Anthropic"])
    if (!new RegExp(`<h2[^>]*>[^<]*(<[^>]+>[^<]*)*${h.replace(/[()]/g, "\\$&")}`).test(html)) errs.push(`thiếu <h2> "${h}"`);
  if (/assets\/icons\//.test(html)) errs.push("không dùng file icon – dùng <span class=\"emo\">emoji</span>");
  if (/<style[\s>]/.test(html)) errs.push("không viết CSS riêng trong bài");

  const fig = count(html, /<figure class="diagram"/g);
  if (fig < 2) errs.push(`chỉ có ${fig} sơ đồ figure.diagram (cần ≥ 2)`);
  if (count(html, /<figcaption><b>Hình \d+\.<\/b>/g) < fig) errs.push("mỗi figure cần figcaption bắt đầu bằng <b>Hình N.</b>");
  if (!/class="svc-grid"/.test(html)) errs.push("thiếu .svc-grid");
  if (!/class="(tbl|compare)"/.test(html)) errs.push("thiếu bảng .tbl hoặc .compare");
  if (count(html, /callout exam/g) < 3) errs.push("cần ≥ 3 .callout.exam (Mẹo thực chiến)");
  if (!/callout warn/.test(html)) errs.push("thiếu .callout.warn");
  if (!/callout key/.test(html)) errs.push("thiếu .callout.key");
  if (!/<dl class="glossary"/.test(html)) errs.push("thiếu dl.glossary");
  if (count(html, /<li><a href="http/g) < 1 && L && L.docs.length < 1) errs.push("thiếu nguồn");
  if (!/<pre>/.test(html)) warns.push("không có khối code <pre> (bỏ qua nếu bài không mang tính kỹ thuật)");

  // câu hỏi
  const qs = html.split(/<div class="q"/).slice(1);
  if (qs.length < 8 || qs.length > 12) errs.push(`${qs.length} câu hỏi (cần 8–12)`);
  let multi = 0; const dist = {};
  qs.forEach((q, i) => {
    const ans = (q.match(/^\s*data-answer="([A-E,\s]+)"/) || [])[1];
    if (!ans) { errs.push(`câu ${i + 1}: thiếu data-answer`); return; }
    const keys = ans.split(",").map((s) => s.trim());
    if (keys.length > 1) multi++;
    keys.forEach((k) => (dist[k] = (dist[k] || 0) + 1));
    const opts = (q.split("</ol>")[0].match(/<li data-k="([A-E])"/g) || []).map((s) => s.slice(-2, -1));
    if (opts.length < 4) errs.push(`câu ${i + 1}: chỉ có ${opts.length} phương án`);
    keys.forEach((k) => { if (!opts.includes(k)) errs.push(`câu ${i + 1}: đáp án ${k} không có trong phương án`); });
    if (!/class="explain"/.test(q)) errs.push(`câu ${i + 1}: thiếu .explain`);
  });
  if (qs.length && multi < 1) errs.push("cần ít nhất 1 câu chọn nhiều");
  if (qs.length >= 8 && Object.keys(dist).length < 3) warns.push(`đáp án phân bố chưa đều: ${JSON.stringify(dist)}`);

  if (errs.length) { bad++; console.log(`✗ ${name}`); errs.forEach((e) => console.log("   - " + e)); }
  else console.log(`✓ ${name}  (${qs.length} câu, ${fig} sơ đồ)`);
  warns.forEach((w) => console.log("   ! " + w));
}
process.exit(bad ? 1 : 0);
