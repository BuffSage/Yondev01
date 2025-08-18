import { mountFrame } from './common.js';

/**
 * Images (local files):
 * - Hero header:   src/assets/images/ProustFP.jpg
 * - Organize photo:src/assets/images/TimeFrontKennyEliason-min.jpg
 * - Projects:      src/assets/images/project1.jpg, project2.jpg, project3.jpg
 */

const content = `
<!-- Filled header hero (uses background image) -->
<section class="hero hero-filled" id="home" style="background-image:url('src/assets/images/ProustFP.jpg')">
  <div class="container hero-grid">
    <div class="hero-copy">
      <h1>Reclaim Your Time</h1>
      <p class="sub" style="
            margin:0;
            font-weight:400;            /* slightly higher weight (unbolded) */
            font-size:clamp(15px, 3.2vw, 30px);
            line-height:1.25;
          ">Streamlined sites and simple tooling that reduce busywork so you can focus on what matters.</p>
      <div class="cta">
        <a class="btn primary" href="services.html">Explore Services</a>
        <a class="btn" href="contact.html">Get in Touch</a>
      </div>
    </div>
  </div>
</section>

<!-- Organize: photo covered by fade overlay with ONLY the given text (bigger, centered, normal weight) -->
<section class="section" id="workflow">
  <div class="container">
    <h2>Curate A Better Workflow</h2>

    <figure class="organize-figure">
      <img src="src/assets/images/TimeFrontKennyEliason-min.jpg" alt="Organized content with quick edits" loading="lazy" />
      <figcaption class="visually-hidden">Organize — structure that makes edits easy</figcaption>

      <!-- Center the overlay content both vertically & horizontally -->
      <div class="organize-overlay" style="align-items:center; justify-content:center;">
        <div class="organize-overlay-content" style="max-width:900px; text-align:center; align-items:center;">
          <p class="sub" style="
            margin:0;
            font-weight:400;            /* normal weight (unbolded) */
            font-size:clamp(20px, 3.2vw, 40px);
            line-height:1.25;
          ">
            At YonDev, we streamline your business operations with smart organisation tools that save time and reduce stress.
            Focus on your mission. We'll handle the digital housekeeping.
          </p>
        </div>
      </div>
    </figure>
  </div>
</section>

<!-- Past Projects -->
<section class="section" id="projects">
  <div class="container">
    <h2>Past Projects</h2>
    <div class="grid grid-3">
      <article class="card">
        <img src="src/assets/images/project1.jpg" alt="Project 1">
        <h3>Local Cafe Landing</h3>
        <p>Mobile-first hero, sticky menu, and contact form — boosted calls and walk-ins.</p>
      </article>
      <article class="card">
        <a href="https://ndnsanierung.de" target="_blank" rel="noopener">
          <img src="src/assets/images/ndnsanierung.svg" alt="NDNSanierung project preview">
        </a>
        <h3><a href="https://ndnsanierung.de" target="_blank" rel="noopener">NDNSanierung.de</a></h3>
        <p>Renovation company portfolio featuring gallery and quick contact options.</p>
      </article>
      <article class="card">
        <img src="src/assets/images/project3.jpg" alt="Project 3">
        <h3>Artist Microsite</h3>
        <p>Lightweight page with embedded video, socials, and mailing list.</p>
      </article>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section" id="cta">
  <div class="container">
    <div class="card" style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap">
      <div>
        <h3 style="margin:0 0 6px;">Ready to Bridge Better?</h3>
        <p style="margin:0;color:var(--muted)">Tell me what you need; I’ll propose a simple, time-saving plan.</p>
      </div>
      <a class="btn primary" href="contact.html">Get in Touch</a>
    </div>
  </div>
</section>
`;

mountFrame(content, 'home');
