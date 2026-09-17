// Sticky hide header: hide when header bottom reaches hero bottom
window.requestAnimationFrame(() => {
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('.hero');
  let lastScrollY = window.scrollY;
  let ticking = false;
  function onScrollHideHeader() {
    if (!header || !hero) return;
    const headerRect = header.getBoundingClientRect();
    const heroRect = hero.getBoundingClientRect();
    // Restore to original: hide when header bottom reaches hero bottom
    if (headerRect.bottom >= heroRect.bottom) {
      header.classList.add('hide-header');
    } else if (window.scrollY <= 0) {
      header.classList.remove('hide-header');
    } else if (window.scrollY < lastScrollY) {
      // Scrolling up
      header.classList.remove('hide-header');
    }
    lastScrollY = window.scrollY;
    ticking = false;
  }
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(onScrollHideHeader);
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
});

// Simple translation state
export function getLang() {
  return localStorage.getItem('yondev-lang') || 'de';
}

export function mountFrame(contentRaw, active = "home") {
  const lang = getLang();

  // Sync document language for accessibility
  document.documentElement.lang = lang;

  // Execute content template if it's a function
  const content = typeof contentRaw === 'function' ? contentRaw(lang) : contentRaw;

  // Navigation and footer localizations
  const t = {
    en: {
      home: "Home",
      services: "Services",
      blog: "Blog",
      contact: "Contact",
      rights: `© ${new Date().getFullYear()} Yondev. All rights reserved.`,
      impressum: "Legal",
      cookies: "Cookie Settings",
      themeDark: "Dark Mode",
      themeLight: "Light Mode"
    },
    de: {
      home: "Startseite",
      services: "Leistungen",
      blog: "Blog",
      contact: "Kontakt",
      rights: `© ${new Date().getFullYear()} Yondev. Alle Rechte vorbehalten.`,
      impressum: "Rechtliches",
      cookies: "Cookie-Einstellungen",
      themeDark: "Dunkelmodus",
      themeLight: "Lichtmodus"
    }
  }[lang];

  document.body.innerHTML = `
<header class="site-header">
  <nav class="container nav">
    <a href="index.html" class="brand" aria-label="${lang === 'de' ? 'Zur Startseite' : 'Go to homepage'}">
      <img src="src/assets/images/YonDevLogo01.png" alt="Yondev Logo" class="brand-logo" width="40" height="40" />
      Yondev
    </a>
    <ul>
      <li><a href="index.html" ${active === "home" ? "aria-current='page'" : ""}>${t.home}</a></li>
      <li><a href="services.html" ${active === "services" ? "aria-current='page'" : ""}>${t.services}</a></li>
      <li><a href="blog.html" ${active === "blog" ? "aria-current='page'" : ""}>${t.blog}</a></li>
      <li><a class="btn primary" href="contact.html" ${active === "contact" ? "aria-current='page'" : ""}>${t.contact}</a></li>
    </ul>
    
    <button class="lang-toggle" aria-label="Switch Language">
      ${lang === 'de' ? 'EN' : 'DE'}
    </button>

    <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <div class="mobile-menu" hidden>
      <a href="index.html">${t.home}</a>
      <a href="services.html">${t.services}</a>
      <a href="blog.html">${t.blog}</a>
      <a href="contact.html" class="btn primary">${t.contact}</a>
    </div>
  </nav>
</header>

<main id="app"></main>

<footer class="footer">
  <div class="container row">
    <small>${t.rights}</small>
    <small><a href="rechtliches.html">${t.impressum}</a></small>
    <small><a href="#" class="cookie-settings-link" style="text-decoration: underline;">${t.cookies}</a></small>
    <button class="btn theme-toggle" type="button">${t.themeDark}</button>
  </div>
</footer>
<button class="back-to-top" aria-label="Back to top">↑</button>
`;

  // mount page content
  const app = document.getElementById('app');
  app.innerHTML = content;

  // Language Toggle Logic
  document.querySelector('.lang-toggle')?.addEventListener('click', () => {
    const newLang = lang === 'en' ? 'de' : 'en';
    localStorage.setItem('yondev-lang', newLang);
    location.reload(); // Reload to re-render everything
  });

  // mobile dropdown logic (closed by default, hidden on desktop)
  const nav = document.querySelector('.nav');
  const toggle = nav?.querySelector('.menu-toggle');
  const menu = nav?.querySelector('.mobile-menu');

  function closeMenu() {
    if (!menu) return;
    menu.hidden = true;
    menu.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  }
  function openMenu() {
    if (!menu) return;
    menu.hidden = false;
    menu.classList.add('open');
    toggle?.setAttribute('aria-expanded', 'true');
  }

  // ensure closed on mount
  closeMenu();

  toggle?.addEventListener('click', () => {
    const open = menu && !menu.hidden;
    open ? closeMenu() : openMenu();
  });

  // close on link click
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // close when leaving mobile breakpoint
  const mq = window.matchMedia('(max-width: 900px)');
  function handleBreakpoint(e) { if (!e.matches) closeMenu(); }
  mq.addEventListener('change', handleBreakpoint);
  handleBreakpoint(mq);

  // theme toggle logic
  const themeBtn = document.querySelector('.theme-toggle');

  // Default to system preference
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function getTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return systemPrefersDark.matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    // Set button label based on target theme name
    if (themeBtn) {
      const label = theme === 'dark' ? t.themeLight : t.themeDark;
      themeBtn.textContent = label;
    }
  }

  // Initialize theme
  setTheme(getTheme());

  // Sync theme with system preference changes if no user override is saved
  systemPrefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
    }
  });

  themeBtn?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
  });

  // back to top button
  const backBtn = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) backBtn?.classList.add('show');
    else backBtn?.classList.remove('show');
  });
  backBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Re-open Klaro cookie preferences on footer/page link click
  document.querySelectorAll('.cookie-settings-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.klaro) {
        window.klaro.show(undefined, true);
      }
    });
  });
}
