import { mountFrame } from './common.js';

// 1) Make a free Formspree form and paste the endpoint here.
//    Example: https://formspree.io/f/abcde123
const FORM_ENDPOINT = "https://formspree.io/f/your_form_id"; // <-- replace this

const content = `
<section class="section">
  <div class="container">
    <h2>Contact</h2>
    <div class="card" style="max-width:560px;margin:0 auto;">
      <form id="contactForm" novalidate>
        <!-- Honeypot (spam trap) -->
        <input type="text" name="website" tabindex="-1" autocomplete="off"
               style="position:absolute;left:-9999px;height:0;width:0;border:0;padding:0;margin:0">

        <div style="display:grid;gap:12px">
          <label>
            Name<br>
            <input type="text" name="name" required
                   style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--line)">
          </label>
          <label>
            Email<br>
            <input type="email" name="email" required
                   style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--line)">
          </label>
          <label>
            Message<br>
            <textarea name="message" rows="5" required
                      style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--line)"></textarea>
          </label>

          <button class="btn primary" type="submit">Send</button>
          <div id="formStatus" aria-live="polite" style="font-size:14px;color:var(--muted)"></div>
        </div>
      </form>
    </div>
  </div>
</section>
`;

mountFrame(content, "contact");

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
        } catch (_) {}
        if (statusEl) statusEl.textContent = msg;
      }
    } catch (_) {
      if (statusEl) statusEl.textContent =
        "Network error — please check your connection and try again.";
    }
  });
}
