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
  <div class="hero-center">
    <h1>Reclaim Your Time</h1>
    <p class="sub" style="
          margin:0;
          font-weight:400;
          font-size:clamp(15px, 3.2vw, 30px);
          line-height:1.25;
        ">Streamlined sites and simple tooling that reduce busywork so you can focus on what matters.</p>
    <div class="cta">
      <a class="btn primary" href="services.html">Explore Services</a>
      <a class="btn" href="contact.html">Get in Touch</a>
    </div>
  </div>
</section>

<!-- Curate section with big text and no background image -->
<section class="section text-banner" id="workflow">
  <div class="container">
    <h2>Curate A Better Workflow</h2>
    <p class="banner-text">At YonDev, we streamline your business operations with smart organisation tools that save time and reduce stress. Focus on your mission. We'll handle the digital housekeeping.</p>
  </div>
</section>

<!-- Past Projects -->
<section class="section" id="projects">
  <div class="container">
    <h2>Past Projects</h2>
    <div class="grid grid-3">
      <article class="card" tabindex="0">
        <a href="https://yondev.de" target="_blank" rel="noopener">
          <img src="https://image.thum.io/get/https://yondev.de" alt="yondev.de preview">
        </a>
        <h3><a href="https://yondev.de" target="_blank" rel="noopener">Gonco Chicken</a></h3>
        <p>Playful landing for a crispy chicken brand.</p>
        <p class="extra">Built for quick browsing with bold visuals and smooth navigation.</p>
      </article>
      <article class="card" tabindex="0">
        <a href="https://ndnsanierung.de" target="_blank" rel="noopener">
          <img src="https://image.thum.io/get/https://ndnsanierung.de" alt="NDNSanierung.de preview">
        </a>
        <h3><a href="https://ndnsanierung.de" target="_blank" rel="noopener">NDNSanierung.de</a></h3>
        <p>Renovation specialist portfolio with gallery and contact.</p>
        <p class="extra">Responsive showcase highlighting services, project imagery, and fast quote requests.</p>
      </article>
      <article class="card" tabindex="0">
        <a href="https://flopriverquest.com/" target="_blank" rel="noopener">
          <img src="https://image.thum.io/get/https://flopriverquest.com/" alt="Flop: River Quest preview">
        </a>
        <h3><a href="https://flopriverquest.com/" target="_blank" rel="noopener">Flop: River Quest</a></h3>
        <p>Dynamic landing page with current developments of mobile game app.</p>
        <p class="extra">Stay updated with the latest features and progress.</p>
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

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => card.classList.toggle('expanded'));
});
