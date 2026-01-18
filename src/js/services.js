
import { mountFrame } from './common.js';

// SVG Icons (Cleaned up for crispness)
// SVG Icons (Cleaned up for crispness)
const icons = {
  // New Clean "Web Layout" icon for Landing Pages
  landing: `<svg class="service-icon-svg" viewBox="0 0 24 24"><path d="M21,16V4H3V16H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14V20H16V22H8V20H10V18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M5,6H19V8H5V6M5,9H19V11H5V9M5,12H12V14H5V12Z" /></svg>`,

  laptop: `<svg class="service-icon-svg" viewBox="0 0 24 24"><path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" /></svg>`,
  email: `<svg class="service-icon-svg" viewBox="0 0 24 24"><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" /></svg>`,

  // Clean Social
  social: `<svg class="service-icon-svg" viewBox="0 0 24 24"><path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 1 1 4 12A8 8 0 0 1 12 4M13 14H15L14.5 17H12.5M10.5 17H9L9.5 14H11.5M15.1 7.1L16.2 8.2L12 12.4L7.8 8.2L8.9 7.1L12 10.2Z" /></svg>`,
  socialAlt: `<svg class="service-icon-svg" viewBox="0 0 24 24"><path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.13C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2C16.3,2 15,3.3 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.87C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.13L15.09,18.3C15.04,18.53 15,18.76 15,19A3,3 0 0,0 18,22A3,3 0 0,0 21,19A3,3 0 0,0 18,16.08Z" /></svg>`,

  // Clean Map
  map: `<svg class="service-icon-svg" viewBox="0 0 24 24"><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>`,

  // Clean Search
  search: `<svg class="service-icon-svg" viewBox="0 0 24 24"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>`,

  // Clean Mail
  mail: `<svg class="service-icon-svg" viewBox="0 0 24 24"><path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4M20 18H4V8L12 13L20 8V18M12 11L4 6H20L12 11Z" /></svg>`
};

const texts = {
  en: {
    title: "Services",
    subtitle: "We build comprehensive digital solutions to help your business grow.",
    sections: {
      business: "Business Websites",
      social: "Social Media Presence",
      marketing: "Digital Marketing"
    },
    items: {
      landing: { title: "Landing Pages", desc: "High-converting, fast-loading pages with clear messaging designed to turn visitors into leads." },
      dynamic: { title: "Dynamic Sites", desc: "Multi-page experiences that grow with your business, featuring easy content management." },
      forms: { title: "Outreach Forms", desc: "Simple, secure contact forms that feed inquiries straight to your inbox without spam." },
      socialStrategy: { title: "Social Media Strategy", desc: "Consistent content planning and scheduling that keeps your brand visible and engaging." },
      gbp: { title: "Google Business Profile", desc: "Optimized map listings that help local customers find you immediately on search." },
      seo: { title: "SEO", desc: "Keyword-focused content and technical optimizations that help you climb search rankings." },
      email: { title: "Email Campaigns", desc: "Targeted newsletters and automated flows that nurture leads and turn subscribers into clients." }
    }
  },
  de: {
    title: "Leistungen",
    subtitle: "Wir entwickeln umfassende digitale Lösungen für das Wachstum Ihres Unternehmens.",
    sections: {
      business: "Business Websites", // Removed hyphen for cleaner look often preferred in headers
      social: "Social Media Präsenz",
      marketing: "Digitales Marketing"
    },
    items: {
      landing: { title: "Landing Pages", desc: "Hochkonvertierende, schnelle Seiten, die Besucher direkt in Kunden verwandeln." },
      dynamic: { title: "Dynamische Websites", desc: "Mehrseitige Erlebnisse, die mit Ihrem Unternehmen wachsen, inklusive einfacher Inhaltsverwaltung." },
      forms: { title: "Kontaktformulare", desc: "Sichere Formulare, die Anfragen ohne Spam direkt in Ihren Posteingang leiten." },
      socialStrategy: { title: "Social Media Strategie", desc: "Konsistente Planung und Inhalte, die Ihre Marke sichtbar und attraktiv halten." },
      gbp: { title: "Google Unternehmensprofil", desc: "Optimierte Karteneinträge, damit lokale Kunden Sie sofort finden." },
      seo: { title: "SEO Optimierung", desc: "Fokussierte Inhalte und technische Optimierungen für bessere Rankings." },
      email: { title: "E-Mail Kampagnen", desc: "Zielgerichtete Newsletter, die Interessenten binden und zu Kunden machen." } // Removed hyphen in E-Mail-Kampagnen if preferred, but grammar usually dictates it. Kept space for aesthetics if requested, or clean up others.
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
        <div class="service-icon-wrapper">${icons.email}</div>
        <h3>${t.items.forms.title}</h3>
        <p>${t.items.forms.desc}</p>
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
`;
};

mountFrame(getContent, "services");
