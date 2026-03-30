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
      sub: "Streamlined sites and simple tooling that reduce busywork so you can focus on what matters.",
      cta1: "Explore Services",
      cta2: "Get in Touch"
    },
    workflow: {
      title: "Curate A Better Workflow",
      text: "At YonDev, we streamline your business operations with smart organisation tools that save time and reduce stress. Focus on your mission. We'll handle the digital housekeeping."
    },
    projects: {
      title: "Past Projects",
      ndn: {
        desc: "Business website for an asbestos & pollutant remediation company.",
        tags: ["Web Design", "Email System", "Google Business"]
      },
      tanoffice: {
        desc: "Business Website and Logo for tanning salon management software.",
        tags: ["Web Design", "Logo Design", "Contact Form"]
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
      sub: "Effiziente Websites und einfache Tools, die unnötige Arbeit reduzieren, damit Sie sich auf das Wesentliche konzentrieren können.",
      cta1: "Leistungen ansehen",
      cta2: "Kontaktieren Sie uns"
    },
    workflow: {
      title: "Ein besserer Workflow",
      text: "Bei YonDev optimieren wir Ihre Geschäftsabläufe mit intelligenten Organisationstools, die Zeit sparen und Stress reduzieren. Konzentrieren Sie sich auf Ihre Mission. Wir kümmern uns um die digitale Ordnung."
    },
    projects: {
      title: "Vergangene Projekte",
      ndn: {
        desc: "Firmenwebsite für ein Unternehmen zur Asbest- und Schadstoffsanierung.",
        tags: ["Web Design", "Email System", "Google Business"]
      },  
      tanoffice: {
        desc: "Firmenwebsite und Logo für Sonnenstudio-Management-Software.",
        tags: ["Web Design", "Logo-Design", "Kontaktformular"]
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
    <p class="sub" style="
          margin:0;
          font-weight:400;
          font-size:clamp(15px, 3.2vw, 30px);
          line-height:1.25;
        ">${t.hero.sub}</p>
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

<!-- Past Projects -->
<section class="section" id="projects">
  <div class="container">
    <h2>${t.projects.title}</h2>
    <div class="grid grid-2">
      <article class="card project-card">
        <a href="https://ndnsanierung.de" target="_blank" rel="noopener" class="project-logo-wrap">
          <img src="src/assets/images/ndnsanierung-logo.png" alt="NDNSanierung.de logo" class="project-logo">
        </a>
        <h3><a href="https://ndn-sanierung.de" target="_blank" rel="noopener">NDN-Sanierung.de</a></h3>
        <p>${t.projects.ndn.desc}</p>
        <div class="project-tags">${t.projects.ndn.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}</div>
      </article>
      <article class="card project-card">
        <a href="https://tanoffice.de" target="_blank" rel="noopener" class="project-logo-wrap">
          <img src="src/assets/images/TanOfficeYondev.png" alt="TanOffice logo" class="project-logo">
        </a>
        <h3><a href="https://tanoffice.de" target="_blank" rel="noopener">TanOffice.de</a></h3>
        <p>${t.projects.tanoffice.desc}</p>
        <div class="project-tags">${t.projects.tanoffice.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}</div>
      </article>
    </div>
  </div>
</section>

<!-- Improved Flow / CTA Section -->
<section class="section" id="cta" style="background:linear-gradient(to bottom, var(--bg), var(--surface));">
  <div class="container" style="text-align:center;">
    <h2 style="margin-bottom:60px;">${t.cta.title}</h2>
    
    <!-- 3-Step Flow -->
    <div style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
      margin-bottom: 60px;
      text-align: left;
    ">
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
    <a class="btn primary" href="contact.html" style="font-size: 1.2rem; padding: 18px 48px;">${t.cta.btn}</a>
  </div>
</section>
`;
};

mountFrame(getContent, 'home');
