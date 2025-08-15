export function mountFrame(content, active = "home"){
  document.body.innerHTML = `
<header class="site-header">
  <nav class="container nav">
    <a href="index.html" class="brand" aria-label="Go to homepage">
      <span class="dot"></span> Yondev
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
  </div>
</footer>
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
}
