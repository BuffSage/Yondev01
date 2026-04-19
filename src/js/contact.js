import { mountFrame } from './common.js';

// Web3Forms Endpoint
const FORM_ENDPOINT = "https://api.web3forms.com/submit";

// Clean Mail Icon (matching services page)
const mailIcon = `<svg class="contact-icon-svg" viewBox="0 0 24 24"><path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4M20 18H4V8L12 13L20 8V18M12 11L4 6H20L12 11Z" /></svg>`;

const whatsappIcon = `<svg class="contact-icon-svg" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.37 17.04 14.27C16.97 14.17 16.81 14.1 16.56 13.98C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.31C14.22 13.43 13.92 13.79 13.73 14.01C13.58 14.18 13.43 14.21 13.21 14.1C12.96 13.98 12.18 13.72 11.25 12.89C10.54 12.24 10.07 11.46 9.93 11.21C9.82 11 9.93 10.87 10.04 10.76C10.15 10.65 10.28 10.47 10.41 10.32C10.54 10.17 10.59 10.06 10.68 9.88C10.77 9.7 10.73 9.54 10.66 9.42C10.59 9.3 10.12 8.07 9.91 7.58C9.71 7.09 9.5 7.16 9.34 7.15L8.53 7.33Z" /></svg>`;

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
<section class="section contact-section" style="padding-top:40px;">
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
          <div class="contact-info-row">
             <div class="contact-icon-box">
               ${mailIcon}
             </div>
             <div>
               <span class="contact-info-label">Email</span>
               <div class="contact-info-value">info@yondev.com</div>
             </div>
          </div>
          <div class="contact-info-row">
             <div class="contact-icon-box">
               ${whatsappIcon}
             </div>
             <div>
               <span class="contact-info-label">WhatsApp</span>
               <a href="https://wa.me/4915567300852" target="_blank" rel="noopener" class="contact-info-value">+49 155 6730 0852</a>
             </div>
          </div>
        </div>
      </div>

      <!-- Right Form Side -->
      <div class="card contact-form-card" style="padding: 40px; border-radius: 24px; box-shadow: 0 12px 32px rgba(0,0,0,0.06);">
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
