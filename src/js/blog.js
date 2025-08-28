
import { mountFrame } from './common.js';

const posts = [
  { title: "Cutting busywork with simple forms", date: "2025-07-10", excerpt: "How a basic intake form saved hours per week." },
  { title: "SEO basics for small sites", date: "2025-06-02", excerpt: "Titles, headings, speed — the simple wins that matter." },
  { title: "Designing for speed", date: "2025-05-19", excerpt: "Why fast sites convert better and how to get there." }
];



const content = `
<section class="section">
  <div class="container" style="text-align:center;">
    <h2>Blog</h2>
    <h3 style="font-size:clamp(24px,4vw,36px);margin:40px 0 60px 0;color:var(--text);">New Blogs Coming Soon!</h3>
    <div style="display:flex;justify-content:center;align-items:center;margin-top:40px;margin-bottom:80px;">
      <a href="https://www.buymeacoffee.com/Yondev" target="_blank" 
         style="background:#ffcf40;color:#111;padding:16px 32px;border-radius:14px;font-weight:600;text-decoration:none;font-size:18px;border:2px solid #000;box-shadow:0 4px 12px rgba(0,0,0,0.15);transition:transform 0.2s ease,box-shadow 0.2s ease;"
         onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 20px rgba(0,0,0,0.2)'"
         onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)'">
        ☕ Buy me a coffee
      </a>
    </div>
  </div>
</section>`;

mountFrame(content, "blog");
