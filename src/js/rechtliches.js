import { mountFrame } from './common.js';

const texts = {
  de: {
    tabs: {
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      agb: "AGB"
    },
    impressum: {
      heading: "Impressum",
      tmgTitle: "Angaben gemäß § 5 TMG",
      owner: "Lukas Henderson-Konduschek",
      company: "Yondev (Einzelunternehmen)",
      country: "Deutschland",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      respTitle: "Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)",
      respText: "Lukas Henderson-Konduschek, Anschrift wie oben.",
      jobTitle: "Berufsbezeichnung",
      jobText: "Yondev erbringt Dienstleistungen in den Bereichen Webentwicklung, Webdesign und digitales Marketing als Einzelunternehmen (freiberufliche Tätigkeit).",
      contentLiabilityTitle: "Haftung für Inhalte",
      contentLiabilityText: "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.",
      linkLiabilityTitle: "Haftung für Links",
      linkLiabilityText: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
      copyrightTitle: "Urheberrecht",
      copyrightText: "Die durch den Seitenbetreiber erstellten Inhalte unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung oder Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung. Downloads und Kopien sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
      stand: "Stand: April 2026"
    },
    datenschutz: {
      heading: "Datenschutzerklärung",
      s1Title: "1. Verantwortliche Stelle",
      s1Company: "Yondev (Einzelunternehmen)",
      s2Title: "2. Cookies und lokale Speicherung",
      s2Text1: "Wir verwenden auf dieser Website nur technisch notwendige Cookies und lokalen Browserspeicher (Local Storage). Diese dienen ausschließlich dazu, grundlegende Einstellungen wie Ihre bevorzugte Sprache und Ihr gewähltes Farbschema (Hell- oder Dunkelmodus) auf Ihrem Gerät zu sichern.",
      s2Text2: "Für die Verwaltung Ihrer Cookie-Einstellungen nutzen wir das Consent-Tool Klaro. Ihre Auswahl wird lokal auf Ihrem Gerät gespeichert, damit Sie nicht bei jedem Aufruf erneut gefragt werden. Es werden keine Werbecookies, keine Tracking-Tools und keine Analyse-Dienste ohne Ihre ausdrückliche Zustimmung eingesetzt.",
      s2Text3: "Sie können Ihre gespeicherten Einstellungen jederzeit über folgenden Link anpassen oder widerrufen:",
      s2Link: "Cookie-Einstellungen ändern",
      s3Title: "3. Hosting (Krystal.io)",
      s3Text: "Diese Website wird über Krystal.io (Krystal Hosting Ltd., UK) gehostet. Beim Aufruf der Website verarbeitet Krystal technische Zugriffsdaten wie IP-Adresse, Browsertyp und aufgerufene URL in Server-Log-Dateien. Diese Daten sind für den sicheren Betrieb der Website erforderlich und werden nicht für andere Zwecke verwendet. Weitere Informationen: <a href=\"https://krystal.io/privacy\" target=\"_blank\" rel=\"noopener\">krystal.io/privacy</a>.",
      s4Title: "4. Kontaktformular",
      s4Text: "Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben (Name, E-Mail, Nachricht) über den Dienst Web3Forms an uns weitergeleitet. Die Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet. Weitere Informationen: <a href=\"https://web3forms.com/privacy\" target=\"_blank\" rel=\"noopener\">web3forms.com/privacy</a>.",
      s5Title: "5. WhatsApp-Kontakt",
      s5Text: "Wenn Sie uns über WhatsApp kontaktieren, verarbeitet WhatsApp Ireland Limited Ihre Nachricht gemäß deren eigenen Datenschutzrichtlinien. Weitere Informationen: <a href=\"https://www.whatsapp.com/legal/privacy-policy\" target=\"_blank\" rel=\"noopener\">whatsapp.com/legal/privacy-policy</a>.",
      s6Title: "6. Ihre Rechte",
      s6Text: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit (Art. 15-20 DSGVO) sowie das Widerspruchsrecht (Art. 21 DSGVO). Kontakt: <span class=\"obf-email\" aria-label=\"E-Mail-Adresse\"><!-- mail --></span>. Sie können sich zudem bei der zuständigen Datenschutzaufsichtsbehörde beschweren.",
      s7Title: "7. SSL-Verschlüsselung",
      s7Text: "Die Verbindung zu dieser Website ist SSL-verschlüsselt. Sie erkennen das an dem Schloss-Symbol und https:// in der Adressleiste.",
      stand: "Stand: April 2026"
    },
    agb: {
      heading: "Allgemeine Geschäftsbedingungen",
      p1Title: "§ 1 Geltungsbereich",
      p1Text: "Diese AGB gelten für alle Verträge zwischen Yondev (Lukas Henderson-Konduschek, Einzelunternehmen, nachfolgend „Auftragnehmer“) und dem Auftraggeber. Abweichende Bedingungen gelten nur bei ausdrücklicher schriftlicher Zustimmung.",
      p2Title: "§ 2 Leistungen und Vertragsschluss",
      p2Text: "Der Leistungsumfang ergibt sich aus dem individuellen Angebot. Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung zustande. Änderungen bedürfen der Schriftform.",
      p3Title: "§ 3 Mitwirkung des Auftraggebers",
      p3Text: "Der Auftraggeber stellt alle erforderlichen Inhalte, Zugangsdaten und Informationen rechtzeitig bereit. Verzögerungen durch fehlende Mitwirkung gehen nicht zu Lasten des Auftragnehmers.",
      p4Title: "§ 4 Vergütung und Zahlung",
      p4Text: "Rechnungen sind innerhalb von 14 Tagen fällig. Ab einem Projektvolumen von 500 EUR wird eine Anzahlung von 50 % bei Auftragserteilung fällig. Bei Zahlungsverzug gelten die gesetzlichen Verzugszinsen (§ 288 BGB).",
      p5Title: "§ 5 Abnahme",
      p5Text: "Der Auftraggeber hat 7 Werktage zur Prüfung und Abnahme. Ohne Rückmeldung gilt die Leistung als abgenommen. Festgestellte Mängel werden in angemessener Frist behoben.",
      p6Title: "§ 6 Nutzungsrechte",
      p6Text: "Alle erstellten Werke bleiben bis zur vollständigen Bezahlung Eigentum des Auftragnehmers. Nach vollständiger Zahlung erhält der Auftraggeber das einfache Nutzungsrecht für den vereinbarten Zweck. Der Auftragnehmer darf Arbeiten im eigenen Portfolio zeigen.",
      p7Title: "§ 7 Haftung",
      p7Text: "Der Auftragnehmer haftet nur bei Vorsatz oder grober Fahrlässigkeit, begrenzt auf den Auftragswert. Für vom Auftraggeber gelieferte Inhalte übernimmt der Auftragnehmer keine Haftung.",
      p8Title: "§ 8 Schlussbestimmungen",
      p8Text: "Es gilt deutsches Recht. Gerichtsstand ist der Sitz des Auftragnehmers. Unwirksame Einzelbestimmungen lassen die Wirksamkeit der übrigen Regelungen unberührt.",
      stand: "Stand: April 2026"
    }
  },
  en: {
    tabs: {
      impressum: "Imprint",
      datenschutz: "Privacy Policy",
      agb: "Terms of Service"
    },
    impressum: {
      heading: "Imprint",
      tmgTitle: "Information pursuant to § 5 TMG",
      owner: "Lukas Henderson-Konduschek",
      company: "Yondev (Sole Proprietorship)",
      country: "Germany",
      phoneLabel: "Phone",
      emailLabel: "Email",
      respTitle: "Responsible for Content (§ 18 Para. 2 MStV)",
      respText: "Lukas Henderson-Konduschek, address as above.",
      jobTitle: "Business Activity",
      jobText: "Yondev provides professional services in web development, web design, and digital marketing as a sole proprietorship.",
      contentLiabilityTitle: "Liability for Content",
      contentLiabilityText: "As a service provider, we are responsible for our own content on these pages under general laws pursuant to § 7 Para. 1 TMG. According to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored external information. Obligations to remove or block the use of information under general laws remain unaffected.",
      linkLiabilityTitle: "Liability for Links",
      linkLiabilityText: "Our website contains links to external websites of third parties over whose content we have no influence. The respective provider is always responsible for the contents of linked pages. Upon notification of legal violations, we will remove such links immediately.",
      copyrightTitle: "Copyright",
      copyrightText: "The content created on these pages is subject to German copyright law. Duplication, processing, or distribution outside the limits of copyright law requires written consent. Downloads and copies are permitted solely for private, non-commercial use.",
      stand: "As of: April 2026"
    },
    datenschutz: {
      heading: "Privacy Policy",
      s1Title: "1. Data Controller",
      s1Company: "Yondev (Sole Proprietorship)",
      s2Title: "2. Cookies and Local Storage",
      s2Text1: "We only use technically necessary cookies and browser Local Storage on this website. These are solely used to preserve essential preferences such as your language choice and preferred display theme (Light or Dark mode) on your device.",
      s2Text2: "To manage your cookie preferences, we use the Klaro consent tool. Your choices are stored locally on your device so you are not prompted on every visit. No advertising cookies, tracking tools, or analytics are used without your explicit consent.",
      s2Text3: "You can review or change your saved preferences at any time using the following link:",
      s2Link: "Change Cookie Settings",
      s3Title: "3. Hosting (Krystal.io)",
      s3Text: "This website is hosted via Krystal.io (Krystal Hosting Ltd., UK). When accessing the site, Krystal processes technical access data such as IP address, browser type, and requested URL in server log files. This data is required for secure operation and is not used for any other purposes. Further information: <a href=\"https://krystal.io/privacy\" target=\"_blank\" rel=\"noopener\">krystal.io/privacy</a>.",
      s4Title: "4. Contact Form",
      s4Text: "When you use the contact form, your details (name, email, message) are transmitted to us via Web3Forms. The data is solely used to respond to your inquiry. Further information: <a href=\"https://web3forms.com/privacy\" target=\"_blank\" rel=\"noopener\">web3forms.com/privacy</a>.",
      s5Title: "5. WhatsApp Inquiries",
      s5Text: "If you contact us via WhatsApp, WhatsApp Ireland Limited processes your message in accordance with their privacy policy. Further information: <a href=\"https://www.whatsapp.com/legal/privacy-policy\" target=\"_blank\" rel=\"noopener\">whatsapp.com/legal/privacy-policy</a>.",
      s6Title: "6. Your Rights",
      s6Text: "You have the right to information, rectification, deletion, restriction of processing, and data portability (Art. 15-20 GDPR), as well as the right to object (Art. 21 GDPR). Contact: <span class=\"obf-email\" aria-label=\"E-Mail-Adresse\"><!-- mail --></span>. You may also lodge a complaint with the competent data protection authority.",
      s7Title: "7. SSL Encryption",
      s7Text: "The connection to this website is SSL encrypted. You can recognize this by the padlock icon and https:// in the address bar.",
      stand: "As of: April 2026"
    },
    agb: {
      heading: "Terms of Service",
      p1Title: "§ 1 Scope of Application",
      p1Text: "These Terms and Conditions apply to all contracts between Yondev (Lukas Henderson-Konduschek, sole proprietorship, hereinafter 'Contractor') and the client. Differing conditions only apply with express written confirmation.",
      p2Title: "§ 2 Services and Contract Conclusion",
      p2Text: "The scope of services is determined by the individual offer. A contract is concluded upon written order confirmation. Amendments require written form.",
      p3Title: "§ 3 Client Cooperation",
      p3Text: "The client provides all necessary content, credentials, and information in a timely manner. Delays resulting from missing client cooperation are not the responsibility of the Contractor.",
      p4Title: "§ 4 Remuneration and Payment",
      p4Text: "Invoices are payable within 14 days. For project volumes of 500 EUR or more, an initial deposit of 50% is due upon order confirmation. Statutory default interest applies in the event of late payment (§ 288 BGB).",
      p5Title: "§ 5 Acceptance",
      p5Text: "The client has 7 business days to inspect and state acceptance. In the absence of feedback, the work is deemed accepted. Identified defects will be remedied within a reasonable period.",
      p6Title: "§ 6 Rights of Use",
      p6Text: "All created deliverables remain the property of the Contractor until full payment is made. Following complete payment, the client receives a simple license for the agreed purpose. The Contractor may showcase deliverables in their portfolio.",
      p7Title: "§ 7 Liability",
      p7Text: "The Contractor is liable only for intent or gross negligence, limited to the contract value. The Contractor assumes no liability for content supplied by the client.",
      p8Title: "§ 8 Final Provisions",
      p8Text: "German law applies. Place of jurisdiction is the Contractor's registered seat. Invalidity of individual provisions does not affect the validity of the remaining provisions.",
      stand: "As of: April 2026"
    }
  }
};

const getContent = (lang = 'de') => {
  const currentTexts = texts[lang] || texts.de;
  const { tabs, impressum, datenschutz, agb } = currentTexts;

  return `
<section class="section legal-section">
  <div class="container" style="max-width: 820px; margin: 0 auto;">

    <div class="legal-card-wrapper">

      <!-- Tab Navigation -->
      <div class="legal-tabs" role="tablist" aria-label="Rechtliche Informationen">
        <button class="legal-tab active" role="tab" aria-selected="true" data-panel="impressum">${tabs.impressum}</button>
        <button class="legal-tab" role="tab" aria-selected="false" data-panel="datenschutz">${tabs.datenschutz}</button>
        <button class="legal-tab" role="tab" aria-selected="false" data-panel="agb">${tabs.agb}</button>
      </div>

      <!-- Impressum Panel -->
      <div class="legal-panel" id="panel-impressum">
        <h2 class="legal-heading">${impressum.heading}</h2>

        <h3>${impressum.tmgTitle}</h3>
        <p>
          <strong>${impressum.owner}</strong><br>
          ${impressum.company}<br>
          ${impressum.country}
        </p>
        <p>
          ${impressum.phoneLabel}: <span class="obf-phone" aria-label="Telefonnummer"><!-- phone --></span><br>
          ${impressum.emailLabel}: <span class="obf-email" aria-label="E-Mail-Adresse"><!-- mail --></span>
        </p>

        <h3>${impressum.respTitle}</h3>
        <p>${impressum.respText}</p>

        <h3>${impressum.jobTitle}</h3>
        <p>${impressum.jobText}</p>

        <h3>${impressum.contentLiabilityTitle}</h3>
        <p>${impressum.contentLiabilityText}</p>

        <h3>${impressum.linkLiabilityTitle}</h3>
        <p>${impressum.linkLiabilityText}</p>

        <h3>${impressum.copyrightTitle}</h3>
        <p>${impressum.copyrightText}</p>

        <p class="legal-footer-note">${impressum.stand}</p>
      </div>

      <!-- Datenschutz Panel -->
      <div class="legal-panel" id="panel-datenschutz" hidden>
        <h2 class="legal-heading">${datenschutz.heading}</h2>

        <h3>${datenschutz.s1Title}</h3>
        <p>
          <strong>${impressum.owner}</strong><br>
          ${datenschutz.s1Company}<br>
          ${impressum.country}<br>
          ${impressum.emailLabel}: <span class="obf-email" aria-label="E-Mail-Adresse"><!-- mail --></span>
        </p>

        <h3>${datenschutz.s2Title}</h3>
        <p>${datenschutz.s2Text1}</p>
        <p>${datenschutz.s2Text2}</p>
        <p>${datenschutz.s2Text3} <a href="#" class="cookie-settings-link open-cookie-settings-link">${datenschutz.s2Link}</a>.</p>

        <h3>${datenschutz.s3Title}</h3>
        <p>${datenschutz.s3Text}</p>

        <h3>${datenschutz.s4Title}</h3>
        <p>${datenschutz.s4Text}</p>

        <h3>${datenschutz.s5Title}</h3>
        <p>${datenschutz.s5Text}</p>

        <h3>${datenschutz.s6Title}</h3>
        <p>${datenschutz.s6Text}</p>

        <h3>${datenschutz.s7Title}</h3>
        <p>${datenschutz.s7Text}</p>

        <p class="legal-footer-note">${datenschutz.stand}</p>
      </div>

      <!-- AGB Panel -->
      <div class="legal-panel" id="panel-agb" hidden>
        <h2 class="legal-heading">${agb.heading}</h2>

        <h3>${agb.p1Title}</h3>
        <p>${agb.p1Text}</p>

        <h3>${agb.p2Title}</h3>
        <p>${agb.p2Text}</p>

        <h3>${agb.p3Title}</h3>
        <p>${agb.p3Text}</p>

        <h3>${agb.p4Title}</h3>
        <p>${agb.p4Text}</p>

        <h3>${agb.p5Title}</h3>
        <p>${agb.p5Text}</p>

        <h3>${agb.p6Title}</h3>
        <p>${agb.p6Text}</p>

        <h3>${agb.p7Title}</h3>
        <p>${agb.p7Text}</p>

        <h3>${agb.p8Title}</h3>
        <p>${agb.p8Text}</p>

        <p class="legal-footer-note">${agb.stand}</p>
      </div>

    </div><!-- /.legal-card-wrapper -->
  </div>
</section>
`;
};

mountFrame(getContent, "impressum");

// Tab switching, obfuscation, and Klaro consent triggers
requestAnimationFrame(() => {
  // Obfuscate contact details to prevent scraping
  document.querySelectorAll('.obf-phone').forEach(el => {
    el.textContent = ['+49', '155', '6730', '0852'].join('\u00a0');
  });
  document.querySelectorAll('.obf-email').forEach(el => {
    const parts = ['info', 'yondev.com'];
    const a = document.createElement('a');
    a.href = 'mai' + 'lto:' + parts[0] + '@' + parts[1];
    a.textContent = parts[0] + '@' + parts[1];
    el.replaceWith(a);
  });

  // Switch tabs function
  function switchTab(target) {
    const validTargets = ['impressum', 'datenschutz', 'agb'];
    if (!validTargets.includes(target)) return;

    document.querySelectorAll('.legal-tab').forEach(t => {
      const isTarget = t.dataset.panel === target;
      t.classList.toggle('active', isTarget);
      t.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    document.querySelectorAll('.legal-panel').forEach(p => {
      p.hidden = p.id !== `panel-${target}`;
    });
  }

  // Handle tab button clicks
  document.querySelectorAll('.legal-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.panel;
      switchTab(target);
      if (history.replaceState) {
        history.replaceState(null, '', `#${target}`);
      }
    });
  });

  // Check URL hash on page load and hash change
  function checkHash() {
    const hash = window.location.hash.toLowerCase().replace('#', '');
    if (hash === 'datenschutz' || hash === 'privacy' || hash === 'cookies' || hash === 'cookie') {
      switchTab('datenschutz');
    } else if (hash === 'agb' || hash === 'terms') {
      switchTab('agb');
    } else if (hash === 'impressum' || hash === 'imprint') {
      switchTab('impressum');
    }
  }

  checkHash();
  window.addEventListener('hashchange', checkHash);

  // Bind Klaro cookie preference opening links inside Rechtliches
  document.querySelectorAll('.open-cookie-settings-link, .cookie-settings-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.klaro) {
        window.klaro.show(undefined, true);
      }
    });
  });
});
