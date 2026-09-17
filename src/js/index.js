import { mountFrame } from './common.js';

/**
 * Images (local files):
 * - Hero header:   src/assets/images/ProustFP.jpg
 * - Organize photo:src/assets/images/TimeFrontKennyEliason-min.jpg
 * - Projects:      src/assets/images/project1.jpg, project2.jpg, project3.jpg
 */

const texts = {
  en: {
    hero: {
      title: "Reclaim Your Time",
      cta1: "Explore Services",
      cta2: "Get in Touch"
    },
    workflow: {
      title: "Curate A Better Workflow",
      text: "At YonDev, we streamline your business operations with smart organisation tools that save time and reduce stress. Focus on your mission. We'll handle the digital housekeeping."
    },
    projects: {
      title: "Projects",
      ndn: {
        desc: "Business website for an asbestos & pollutant remediation company.",
        tags: ["Web Design", "Email System", "Google Business"]
      },
      nosmet: {
        desc: "Upcoming communication training program.",
        tags: ["Web Design"]
      },
      fischernis: {
        desc: "Android app for commercial fishing reports.",
        tags: ["Android", "Web Design", "Logo Design"]
      }
    },
    cta: {
      title: "Ready to Start?", // Simplified title
      btn: "Get in Touch",
      steps: [
        { num: "01", title: "Connect", desc: "Send us a message about your goals." },
        { num: "02", title: "Plan", desc: "We propose a tailored solution." },
        { num: "03", title: "Build", desc: "We launch your new digital presence." }
      ]
    }
  },
  de: {
    hero: {
      title: "Gewinnen Sie Zeit zurück",
      cta1: "Leistungen ansehen",
      cta2: "Kostenlose Beratung"
    },
    workflow: {
      title: "Ein besserer Workflow",
      text: "Bei YonDev optimieren wir Ihre Geschäftsabläufe mit intelligenten Organisationstools, die Zeit sparen und Stress reduzieren. Konzentrieren Sie sich auf Ihre Mission. Wir kümmern uns um die digitale Ordnung."
    },
    projects: {
      title: "Projekte",
      ndn: {
        desc: "Firmenwebsite für ein Unternehmen zur Asbest- und Schadstoffsanierung.",
        tags: ["Web Design", "Email System", "Google Business"]
      },
      nosmet: {
        desc: "Kommendes Kommunikationstraining-Programm.",
        tags: ["Webdesign"]
      },
      fischernis: {
        desc: "Android-App für gewerbliche Fischereiberichte.",
        tags: ["Android", "Webdesign", "Logo-Design"]
      }
    },
    cta: {
      title: "Bereit für den Start?",
      btn: "Kontakt aufnehmen",
      steps: [
        { num: "01", title: "Kontakt", desc: "Schreiben Sie uns Ihre Ziele." },
        { num: "02", title: "Konzept", desc: "Wir erstellen einen maßgeschneiderten Plan." },
        { num: "03", title: "Start", desc: "Wir realisieren Ihre digitale Vision." }
      ]
    }
  }
};

const getContent = (lang) => {
  const t = texts[lang];
  return `
<!-- Filled header hero (uses background image) -->
<section class="hero hero-filled" id="home" style="background-image:url('src/assets/images/ProustFP.jpg')">
  <div class="hero-center">
    <h1>${t.hero.title}</h1>
    <div class="cta">
  <a class="btn primary" href="services.html">${t.hero.cta1}</a>
  <a class="btn secondary" href="contact.html">${t.hero.cta2}</a>
    </div>
  </div>
</section>

<!-- Curate section with big text and no background image -->
<section class="section text-banner" id="workflow">
  <div class="container">
    <h2>${t.workflow.title}</h2>
    <p class="banner-text" style="
      font-size: 1.25rem;
      line-height: 1.6;
      margin-top: 24px;
    ">
      ${t.workflow.text}
    </p>
  </div>
</section>

<!-- Projects Slider -->
<section class="section" id="projects">
  <div class="container" style="text-align: center;">
    <h2>${t.projects.title}</h2>
    
    <div class="projects-carousel-wrapper">
      <button class="slider-control-btn prev-btn" aria-label="${lang === 'de' ? 'Vorheriges Projekt' : 'Previous project'}">
        <svg viewBox="0 0 24 24" width="24" height="24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
      </button>
      
      <div class="projects-slider">
        <article class="card project-card">
          <a href="https://ndnsanierung.de" target="_blank" rel="noopener" class="project-logo-wrap">
            <img src="src/assets/images/ndnsanierung-logo.png" alt="NDNSanierung.de logo" class="project-logo">
          </a>
          <h3><a href="https://ndn-sanierung.de" target="_blank" rel="noopener">NDN-Sanierung.de</a></h3>
          <p>${t.projects.ndn.desc}</p>
          <div class="project-tags">${t.projects.ndn.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}</div>
        </article>
        <article class="card project-card">
          <a href="https://nosmet.org" target="_blank" rel="noopener" class="project-logo-wrap" style="background: #ffffff;">
            <div style="display: flex; align-items: center; justify-content: center; height: 100px; font-weight: 800; font-size: 26px; letter-spacing: -0.5px; color: #101418;">
              Nosmet.org
            </div>
          </a>
          <h3><a href="https://nosmet.org" target="_blank" rel="noopener">Nosmet</a></h3>
          <p>${t.projects.nosmet.desc}</p>
          <div class="project-tags">${t.projects.nosmet.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}</div>
        </article>
        <article class="card project-card">
          <a href="https://fischernis.de" target="_blank" rel="noopener" class="project-logo-wrap" style="background: #ffffff;">
            <div style="display: flex; align-items: center; justify-content: center; height: 100px;">
              <div style="width: 80px; height: 80px; border-radius: 20px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <img src="src/assets/images/fischernis-logo.png?v=1" alt="Fischernis logo" style="width: 100%; height: 100%; object-fit: cover; transform: scale(1.35); display: block;">
              </div>
            </div>
          </a>
          <h3><a href="https://fischernis.de" target="_blank" rel="noopener">Fischernis</a></h3>
          <p>${t.projects.fischernis.desc}</p>
          <div class="project-tags">${t.projects.fischernis.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}</div>
        </article>
      </div>
      
      <button class="slider-control-btn next-btn" aria-label="${lang === 'de' ? 'Nächstes Projekt' : 'Next project'}">
        <svg viewBox="0 0 24 24" width="24" height="24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
      </button>
    </div>
  </div>
</section>

<!-- Improved Flow / CTA Section -->
<section class="section" id="cta" style="background:linear-gradient(to bottom, var(--bg), var(--surface));">
  <div class="container" style="text-align:center;">
    <h2 style="margin-bottom:60px;">${t.cta.title}</h2>
    
    <!-- 3-Step Flow -->
    <div class="steps-grid">
      ${t.cta.steps.map(step => `
        <div style="position:relative; padding-left: 20px;">
           <!-- Vertical line visual -->
           <div style="position:absolute; left:0; top:0; bottom:0; width:4px; background:var(--line); border-radius:2px;"></div>
           <div style="color:var(--accent); font-weight:800; font-size:14px; margin-bottom:8px;">${step.num}</div>
           <h3 style="margin:0 0 8px; font-size:20px;">${step.title}</h3>
           <p style="margin:0; font-size:15px; color:var(--muted);">${step.desc}</p>
        </div>
      `).join('')}
    </div>

    <!-- Final Action -->
    <a class="btn primary cta-main-btn" href="contact.html">${t.cta.btn}</a>
  </div>
</section>
`;
};

mountFrame(getContent, 'home');

// Carousel scroll navigation
const slider = document.querySelector('.projects-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (slider && prevBtn && nextBtn) {
  const updateArrows = () => {
    const scrollLeft = slider.scrollLeft;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    // Hide left arrow at the beginning
    if (scrollLeft <= 5) {
      prevBtn.style.opacity = '0';
      prevBtn.style.pointerEvents = 'none';
    } else {
      prevBtn.style.opacity = '1';
      prevBtn.style.pointerEvents = 'auto';
    }

    // Hide right arrow at the end
    if (scrollLeft >= maxScroll - 5) {
      nextBtn.style.opacity = '0';
      nextBtn.style.pointerEvents = 'none';
    } else {
      nextBtn.style.opacity = '1';
      nextBtn.style.pointerEvents = 'auto';
    }
  };

  // Set initial arrow states (multiple runs cover delayed rendering)
  updateArrows();
  setTimeout(updateArrows, 100);
  setTimeout(updateArrows, 500);

  // Listeners
  slider.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('resize', updateArrows, { passive: true });

  prevBtn.addEventListener('click', () => {
    const card = slider.querySelector('.project-card');
    if (card) {
      const gap = parseInt(window.getComputedStyle(slider).gap, 10) || 24;
      const scrollAmount = card.clientWidth + gap; // Scroll by card width + responsive gap
      slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  });

  nextBtn.addEventListener('click', () => {
    const card = slider.querySelector('.project-card');
    if (card) {
      const gap = parseInt(window.getComputedStyle(slider).gap, 10) || 24;
      const scrollAmount = card.clientWidth + gap; // Scroll by card width + responsive gap
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  });
}
