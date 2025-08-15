
import { mountFrame } from './common.js';

const content = `
<section class="section">
  <div class="container">
    <h2>Services</h2>
    <div class="grid grid-3">
      <article class="card"><h3>Landing Pages</h3><p>High‑converting, fast‑loading pages with clear messaging.</p></article>
      <article class="card"><h3>Business Websites</h3><p>Multi‑page sites with SEO basics and simple content management.</p></article>
      <article class="card"><h3>Lightweight Web Apps</h3><p>Tailored tools and dashboards to cut busywork.</p></article>
    </div>
  </div>
</section>`;

mountFrame(content, "services");
