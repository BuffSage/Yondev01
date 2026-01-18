import { mountFrame } from './common.js';

const FORM_ENDPOINT = "https://formspree.io/f/manbkaka"; // <-- replace this

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
             <div style="width:48px; height:48px; background:var(--surface); border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:20px;">📧</div>
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
          <!-- Honeypot -->
          <input type="text" name="website" tabindex="-1" autocomplete="off"
                 style="position:absolute;left:-9999px;height:0;width:0;border:0;padding:0;margin:0">

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

// Client-side submission to Formspree
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fd = new FormData(form);

    // Honeypot: if filled, likely a bot -> pretend success and stop
    if (fd.get("website")) {
      if (statusEl) statusEl.textContent = "Thanks! We'll be in touch.";
      form.reset();
      return;
    }

    // Optional: add a subject line
    fd.append("_subject", "New message from Yondev site");

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
          if (data && data.errors && data.errors[0] && data.errors[0].message) {
            msg = data.errors[0].message;
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
