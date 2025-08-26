export function mountFrame(content, active = "home"){

  document.body.innerHTML = `
<header class="site-header">
  <nav class="container nav">
    <a href="index.html" class="brand" aria-label="Go to homepage">
      <img src="/yondev.com/src/assets/images/YonDevLogo01.png" alt="Yondev Logo" class="brand-logo" width="36" height="36" style="display:inline-block;vertical-align:middle;max-width:40px;max-height:40px;object-fit:contain;" />
      Yondev
    </a>
    <ul>
      <li><a href="index.html" ${active==="home"?"aria-current='page'":""}>Home</a></li>
      <li><a href="services.html" ${active==="services"?"aria-current='page'":""}>Services</a></li>
      <li><a href="blog.html" ${active==="blog"?"aria-current='page'":""}>Blog</a></li>
      <li><a class="btn primary" href="contact.html" ${active==="contact"?"aria-current='page'":""}>Contact</a></li>
    </ul>
    <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <div class="mobile-menu" hidden>
      <a href="index.html">Home</a>
      <a href="services.html">Services</a>
      <a href="blog.html">Blog</a>
      <a href="contact.html" class="btn primary">Contact</a>
    </div>
  </nav>
</header>

<main id="app"></main>

<footer class="footer">
  <div class="container row">
    <small>© ${new Date().getFullYear()} Yondev. All rights reserved.</small>
    <small><a href="impressum.html">Impressum – Datenschutz</a></small>
    <button class="btn theme-toggle" type="button">Dark Mode</button>
  </div>
</footer>
<button class="back-to-top" aria-label="Back to top">↑</button>
`;

  // mount page content
  const app = document.getElementById('app');
  app.innerHTML = content;

  // mobile dropdown logic (closed by default, hidden on desktop)
  const nav = document.querySelector('.nav');
  const toggle = nav?.querySelector('.menu-toggle');
  const menu = nav?.querySelector('.mobile-menu');

  function closeMenu(){
    if (!menu) return;
    menu.hidden = true;
    menu.classList.remove('open');
    toggle?.setAttribute('aria-expanded','false');
  }
  function openMenu(){
    if (!menu) return;
    menu.hidden = false;
    menu.classList.add('open');
    toggle?.setAttribute('aria-expanded','true');
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
  function handleBreakpoint(e){ if(!e.matches) closeMenu(); }
  mq.addEventListener('change', handleBreakpoint);
  handleBreakpoint(mq);

  // theme toggle logic
  const themeBtn = document.querySelector('.theme-toggle');
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  setTheme(initial);

  themeBtn?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
  });

  function setTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
    if(themeBtn) themeBtn.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  }

  // back to top button
  const backBtn = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 300) backBtn?.classList.add('show');
    else backBtn?.classList.remove('show');
  });
  backBtn?.addEventListener('click', () => {
    window.scrollTo({ top:0, behavior:'smooth' });
  });

  // cookie consent banner
  initCookieConsent();
}

function initCookieConsent(){
  const stored = localStorage.getItem('cookie-consent');
  if(stored) return;

  const lang = document.documentElement.lang || 'en';
  const policyLabel = lang.startsWith('de') ? 'Datenschutzerklärung' : 'Privacy Policy';

  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML = `
    <p>We use cookies to improve your experience.</p>
    <div class="cookie-actions">
      <button class="btn primary" data-action="accept">Accept</button>
      <button class="btn" data-action="reject">Reject</button>
      <button class="btn" data-action="settings">Cookie Settings</button>
    </div>
  `;
  document.body.appendChild(banner);

  const modal = document.createElement('div');
  modal.className = 'cookie-modal hidden';
  modal.innerHTML = `
    <div class="cookie-modal-content">
      <h2>Cookie Preferences</h2>
      <p><a href="impressum.html" target="_blank" rel="noopener">${policyLabel}</a></p>
      <div class="cookie-actions">
        <button class="btn primary" data-action="accept">Accept</button>
        <button class="btn" data-action="reject">Reject</button>
      </div>
      <button class="cookie-close" aria-label="Close">×</button>
    </div>
  `;
  document.body.appendChild(modal);

  function setConsent(value){
    localStorage.setItem('cookie-consent', value);
    banner.remove();
    modal.remove();
  }

  banner.addEventListener('click', e => {
    const action = e.target.getAttribute('data-action');
    if(!action) return;
    if(action === 'settings'){
      banner.style.display = 'none';
      modal.classList.remove('hidden');
    }
    if(action === 'accept') setConsent('accepted');
    if(action === 'reject') setConsent('rejected');
  });

  modal.addEventListener('click', e => {
    const action = e.target.getAttribute('data-action');
    if(action === 'accept') setConsent('accepted');
    if(action === 'reject') setConsent('rejected');
    if(e.target.classList.contains('cookie-close')){
      modal.classList.add('hidden');
      banner.style.display = '';
    }
  });
}
