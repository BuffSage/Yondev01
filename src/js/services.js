
import { mountFrame } from './common.js';

// SVG Icons (Cleaned up for crispness)
const icons = {
  // New Clean "Web Layout" icon for Landing Pages
  landing: `<svg class="service-icon-svg" viewBox="0 0 24 24"><path d="M21,16V4H3V16H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14V20H16V22H8V20H10V18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M5,6H19V8H5V6M5,9H19V11H5V9M5,12H12V14H5V12Z" /></svg>`,

  laptop: `<svg class="service-icon-svg" viewBox="0 0 24 24"><path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" /></svg>`,
  form: `<svg class="service-icon-svg" viewBox="0 0 24 24"><path d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V9H7V7M7,11H17V13H7V11M7,15H13V17H7V15Z" /></svg>`,
  analytics: `<svg class="service-icon-svg" viewBox="0 0 24 24"><path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" /></svg>`,

  // Clean Social
  social: `<svg class="service-icon-svg" viewBox="0 0 24 24"><path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 1 1 4 12A8 8 0 0 1 12 4M13 14H15L14.5 17H12.5M10.5 17H9L9.5 14H11.5M15.1 7.1L16.2 8.2L12 12.4L7.8 8.2L8.9 7.1L12 10.2Z" /></svg>`,
  socialAlt: `<svg class="service-icon-svg" viewBox="0 0 24 24"><path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.13C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2C16.3,2 15,3.3 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.87C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.13L15.09,18.3C15.04,18.53 15,18.76 15,19A3,3 0 0,0 18,22A3,3 0 0,0 21,19A3,3 0 0,0 18,16.08Z" /></svg>`,

  // Clean Map
  map: `<svg class="service-icon-svg" viewBox="0 0 24 24"><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>`,

  // Clean Search
  search: `<svg class="service-icon-svg" viewBox="0 0 24 24"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>`,

  // Clean Mail
  mail: `<svg class="service-icon-svg" viewBox="0 0 24 24"><path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4M20 18H4V8L12 13L20 8V18M12 11L4 6H20L12 11Z" /></svg>`,
  // Content Creation
  camera: `<svg class="service-icon-svg" viewBox="0 0 24 24"><path d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" /></svg>`
};

const texts = {
  en: {
    title: "Services",
    subtitle: "Clean websites and smart marketing, built for small businesses that want real results.",
    sections: {
      business: "Business Websites",
      social: "Social Media Presence",
      marketing: "Digital Marketing"
    },
    items: {
      landing: { title: "Landing Pages", desc: "Fast, high-converting pages that turn visitors into leads." },
      dynamic: { title: "Dynamic Sites", desc: "Multi-page websites that grow with your business and stay easy to update." },
      analytics: { title: "Digital Analytics", desc: "We set up tracking and clear reporting so you always understand how your visitors behave." },
      socialStrategy: { title: "Social Media Strategy", desc: "Consistent content planning that keeps your brand visible and engaging." },
      gbp: { title: "Google Business Profile", desc: "Optimised Google Maps listings that help local customers find you right away." },
      socialContent: { title: "Content Creation", desc: "Custom visuals and copy for your brand, published on a regular schedule with no extra work from you." },
      seo: { title: "SEO", desc: "Targeted content and technical optimisations that steadily improve your search rankings." },
      email: { title: "Contact Automation", desc: "Automated message flows that keep your leads engaged without any manual follow-up." }
    },
    cta: {
      heading: "Ready to get started?",
      sub: "Tell us what you need. We'll get back to you within 24 hours.",
      btn: "Get in Touch"
    }
  },
  de: {
    title: "Leistungen",
    subtitle: "Saubere Websites und gezieltes Marketing für Unternehmen, die echte Ergebnisse wollen.",
    sections: {
      business: "Business Websites",
      social: "Social Media Präsenz",
      marketing: "Digitales Marketing"
    },
    items: {
      landing: { title: "Landing Pages", desc: "Schnelle, überzeugende Seiten, die Besucher in Kunden verwandeln." },
      dynamic: { title: "Dynamische Websites", desc: "Mehrseitige Websites, die mit Ihrem Unternehmen wachsen und sich leicht aktualisieren lassen." },
      analytics: { title: "Web-Analyse", desc: "Wir richten Tracking und Auswertung ein, damit Sie genau verstehen, wie Besucher Ihre Seite nutzen." },
      socialStrategy: { title: "Social Media Strategie", desc: "Konsistente Inhalte und Planung, die Ihre Marke sichtbar und relevant halten." },
      gbp: { title: "Google Unternehmensprofil", desc: "Optimierte Einträge auf Google Maps, damit lokale Kunden Sie sofort finden." },
      socialContent: { title: "Content-Erstellung", desc: "Maßgeschneiderte Grafiken und Texte für Ihre Marke, regelmäßig veröffentlicht ohne Mehraufwand für Sie." },
      seo: { title: "SEO Optimierung", desc: "Gezielte Inhalte und technische Optimierungen, die Ihr Ranking nachhaltig verbessern." },
      email: { title: "Kontakt-Automatisierung", desc: "Automatisierte Abläufe sorgen dafür, dass Ihre Kontakte zur richtigen Zeit die richtige Nachricht erhalten." }
    },
    cta: {
      heading: "Bereit loszulegen?",
      sub: "Sagen Sie uns, was Sie brauchen. Wir melden uns innerhalb von 24 Stunden.",
      btn: "Kontakt aufnehmen"
    }
  }
};

const getContent = (lang) => {
  const t = texts[lang];
  return `
<section class="page-header">
  <div class="container">
    <h1 class="page-title">${t.title}</h1>
    <p style="max-width:600px;margin:20px auto 0;color:var(--muted);font-size:1.2rem;">
      ${t.subtitle}
    </p>
  </div>
</section>

<!-- Section 1: Business Websites -->
<section class="services-section">
  <div class="container">
    <div class="services-header">
      <h2>${t.sections.business}</h2>
    </div>
    <div class="services-grid">
      <article class="service-card">
        <div class="service-icon-wrapper">${icons.landing}</div>
        <h3>${t.items.landing.title}</h3>
        <p>${t.items.landing.desc}</p>
      </article>
      <article class="service-card">
        <div class="service-icon-wrapper">${icons.laptop}</div>
        <h3>${t.items.dynamic.title}</h3>
        <p>${t.items.dynamic.desc}</p>
      </article>
      <article class="service-card">
        <div class="service-icon-wrapper">${icons.analytics}</div>
        <h3>${t.items.analytics.title}</h3>
        <p>${t.items.analytics.desc}</p>
      </article>
    </div>
  </div>
</section>

<!-- Section 2: Social Media Presence -->
<section class="services-section">
  <div class="container">
    <div class="services-header">
      <h2>${t.sections.social}</h2>
    </div>
    <div class="services-grid">
      <article class="service-card">
        <div class="service-icon-wrapper">${icons.socialAlt}</div>
        <h3>${t.items.socialStrategy.title}</h3>
        <p>${t.items.socialStrategy.desc}</p>
      </article>
      <article class="service-card">
        <div class="service-icon-wrapper">${icons.map}</div>
        <h3>${t.items.gbp.title}</h3>
        <p>${t.items.gbp.desc}</p>
      </article>
      <article class="service-card">
        <div class="service-icon-wrapper">${icons.camera}</div>
        <h3>${t.items.socialContent.title}</h3>
        <p>${t.items.socialContent.desc}</p>
      </article>
    </div>
  </div>
</section>

<!-- Section 3: Digital Marketing -->
<section class="services-section">
  <div class="container">
    <div class="services-header">
      <h2>${t.sections.marketing}</h2>
    </div>
    <div class="services-grid">
      <article class="service-card">
        <div class="service-icon-wrapper">${icons.search}</div>
        <h3>${t.items.seo.title}</h3>
        <p>${t.items.seo.desc}</p>
      </article>
      <article class="service-card">
        <div class="service-icon-wrapper">${icons.mail}</div>
        <h3>${t.items.email.title}</h3>
        <p>${t.items.email.desc}</p>
      </article>
    </div>
  </div>
</section>

<!-- Bottom CTA -->
<section class="services-cta">
  <div class="container">
    <h2>${t.cta.heading}</h2>
    <p>${t.cta.sub}</p>
    <a class="btn services-cta-btn" href="contact.html">${t.cta.btn}</a>
  </div>
</section>
`;
};

mountFrame(getContent, "services");
