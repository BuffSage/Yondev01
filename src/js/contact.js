import { mountFrame } from './common.js';

// Web3Forms Endpoint
const FORM_ENDPOINT = "https://api.web3forms.com/submit";

// Clean Mail Icon (matching services page)
const mailIcon = `<svg class="service-icon-svg" viewBox="0 0 24 24"><path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4M20 18H4V8L12 13L20 8V18M12 11L4 6H20L12 11Z" /></svg>`;

const texts = {
  en: {
    title: "Contact",
    name: "Name",
    email: "Email",
    msg: "Message",
    send: "Send",
    placeholder: "Tell us about your project..."
  },
  de: {
    title: "Kontakt",
    name: "Name",
    email: "E-Mail",
    msg: "Nachricht",
    send: "Senden",
    placeholder: "Erzählen Sie uns von Ihrem Projekt..."
  }
};

const getContent = (lang) => {
  const t = texts[lang];
  return `
<section class="section" style="padding-top:40px;">
  <div class="container">
    <div style="
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: start;
        max-width: 1100px;
        margin: 0 auto;
      " class="contact-split">
      
      <!-- Left Info Side -->
      <div>
        <h2 style="font-size: clamp(40px, 6vw, 64px); line-height: 1.1; margin-bottom: 24px;">${t.title}</h2>
        <p style="font-size: 1.2rem; color: var(--muted); margin-bottom: 40px; line-height: 1.6;">
          ${lang === 'de'
      ? 'Bereit, Ihr Projekt zu starten? Schreiben Sie uns eine Nachricht oder rufen Sie uns an. Wir freuen uns darauf, von Ihnen zu hören.'
      : 'Ready to start your project? Drop us a line or give us a call. We look forward to hearing from you.'}
        </p>
        
        <div style="display:flex; flex-direction:column; gap:24px; margin-bottom: 40px;">
          <div style="display:flex; gap:16px; align-items:center;">
             <!-- Icon Container -->
             <div style="width:48px; height:48px; background:var(--surface); border-radius:12px; display:flex; align-items:center; justify-content:center; color:var(--text);">
               ${mailIcon}
             </div>
             <div>
               <small style="text-transform:uppercase; letter-spacing:1px; font-weight:700; color:var(--muted); font-size:12px;">Email</small>
               <div style="font-weight:600; font-size:18px;">info@yondev.com</div>
             </div>
          </div>
          <!-- Add more info/phone if needed -->
        </div>
      </div>

      <!-- Right Form Side -->
      <div class="card" style="padding: 40px; border-radius: 24px; box-shadow: 0 12px 32px rgba(0,0,0,0.06);">
        <form id="contactForm" novalidate>
          <!-- Web3Forms Access Key: 7d1c31f5-0d10-4684-879e-bdd153415ceb -->
          <input type="hidden" name="access_key" value="7d1c31f5-0d10-4684-879e-bdd153415ceb">
          
          <!-- Honeypot -->
          <input type="checkbox" name="botcheck" tabindex="-1" style="display:none;">

          <div style="display:grid;gap:20px">
            <label style="font-weight:600; font-size:14px; text-transform:uppercase; letter-spacing:0.5px;">
              ${t.name}
              <input type="text" name="name" required
                     style="width:100%; padding:14px; border-radius:12px; border:1px solid var(--line); background:var(--bg); color:var(--text); margin-top:8px; font-size:16px; transition:border 0.2s;"
                     onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--line)'">
            </label>
            <label style="font-weight:600; font-size:14px; text-transform:uppercase; letter-spacing:0.5px;">
              ${t.email}
              <input type="email" name="email" required
                     style="width:100%; padding:14px; border-radius:12px; border:1px solid var(--line); background:var(--bg); color:var(--text); margin-top:8px; font-size:16px; transition:border 0.2s;"
                     onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--line)'">
            </label>
            <label style="font-weight:600; font-size:14px; text-transform:uppercase; letter-spacing:0.5px;">
              ${t.msg}
              <textarea name="message" rows="5" required placeholder="${t.placeholder}"
                        style="width:100%; padding:14px; border-radius:12px; border:1px solid var(--line); background:var(--bg); color:var(--text); margin-top:8px; font-size:16px; font-family:inherit; transition:border 0.2s; resize:vertical;"
                        onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--line)'"></textarea>
            </label>

            <button class="btn primary" type="submit" style="width:100%; justify-content:center; margin-top:10px; padding:16px; font-size:16px;">${t.send}</button>
            <div id="formStatus" aria-live="polite" style="font-size:14px;color:var(--muted); text-align:center;"></div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
`;
};

mountFrame(getContent, "contact");

// Client-side submission to Web3Forms
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fd = new FormData(form);

    if (statusEl) statusEl.textContent = "Sending...";

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd
      });

      if (res.ok) {
        form.outerHTML =
          '<div style="padding:16px;">' +
          '<h3 style="margin-top:0;">Thanks!</h3>' +
          "<p>Your message has been sent. We'll get back to you shortly.</p>" +
          "</div>";
      } else {
        let msg = "Something went wrong. Please try again.";
        try {
          const data = await res.json();
          if (data && data.message) {
            msg = data.message;
          }
        } catch (_) { }
        if (statusEl) statusEl.textContent = msg;
      }
    } catch (_) {
      if (statusEl) statusEl.textContent =
        "Network error — please check your connection and try again.";
    }
  });
}
