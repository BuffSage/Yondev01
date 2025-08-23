
import { mountFrame } from './common.js';

const posts = [
  { title: "Cutting busywork with simple forms", date: "2025-07-10", excerpt: "How a basic intake form saved hours per week." },
  { title: "SEO basics for small sites", date: "2025-06-02", excerpt: "Titles, headings, speed — the simple wins that matter." },
  { title: "Designing for speed", date: "2025-05-19", excerpt: "Why fast sites convert better and how to get there." }
];



const list = posts.map(p => `
  <article class="card">
    <h3>${p.title}</h3>
    <div class="meta" style="color:var(--muted);font-size:14px;margin-bottom:8px">${p.date}</div>
    <p>${p.excerpt}</p>
  </article>
`).join("");

const content = `
<section class="section">
  <div class="container">
    <h2>Blog</h2>
    <div class="grid grid-2">
      ${list}
    </div>
  </div>
</section>`;

mountFrame(content, "blog");
