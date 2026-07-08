import { mountFrame } from './common.js';

const getContent = () => `
<section class="section legal-section">
  <div class="container" style="max-width: 820px; margin: 0 auto;">

    <div class="legal-card-wrapper card">

      <!-- Tab Navigation -->
      <div class="legal-tabs" role="tablist" aria-label="Rechtliche Informationen">
        <button class="legal-tab active" role="tab" aria-selected="true" data-panel="impressum">Impressum</button>
        <button class="legal-tab" role="tab" aria-selected="false" data-panel="datenschutz">Datenschutz</button>
        <button class="legal-tab" role="tab" aria-selected="false" data-panel="agb">AGB</button>
      </div>

      <!-- Impressum Panel -->
      <div class="legal-panel" id="panel-impressum">
        <h2 class="legal-heading">Impressum</h2>

        <h3>Angaben gemäß § 5 TMG</h3>
        <p>
          <strong>Lukas Henderson-Konduschek</strong><br>
          Yondev (Einzelunternehmen)<br>
          Deutschland
        </p>
        <p>
          Telefon: <span class="obf-phone" aria-label="Telefonnummer"><!-- phone --></span><br>
          E-Mail: <span class="obf-email" aria-label="E-Mail-Adresse"><!-- mail --></span>
        </p>

        <h3>Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)</h3>
        <p>Lukas Henderson-Konduschek, Anschrift wie oben.</p>

        <h3>Berufsbezeichnung</h3>
        <p>YonDev erbringt Dienstleistungen in den Bereichen Webentwicklung, Webdesign und digitales Marketing als Einzelunternehmen (freiberufliche Tätigkeit).</p>

        <h3>Haftung für Inhalte</h3>
        <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.</p>

        <h3>Haftung für Links</h3>
        <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

        <h3>Urheberrecht</h3>
        <p>Die durch den Seitenbetreiber erstellten Inhalte unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung oder Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung. Downloads und Kopien sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>

        <p class="legal-footer-note">Stand: April 2026</p>
      </div>

      <!-- Datenschutz Panel -->
      <div class="legal-panel" id="panel-datenschutz" hidden>
        <h2 class="legal-heading">Datenschutzerklärung</h2>

        <h3>1. Verantwortliche Stelle</h3>
        <p>
          <strong>Lukas Henderson-Konduschek</strong><br>
          YonDev (Einzelunternehmen)<br>
          E-Mail: <span class="obf-email" aria-label="E-Mail-Adresse"><!-- mail --></span>
        </p>

        <h3>2. Welche Daten wir speichern</h3>
        <p>Wir speichern nur technisch notwendige Cookies und Daten. Es werden keine Tracking-Tools, keine Analyse-Dienste und keine Werbecookies eingesetzt. Das einzige Cookie, das gesetzt wird, dient der Speicherung Ihrer Cookie-Einstellung und Ihrer Sprachpräferenz auf diesem Gerät.</p>

        <h3>3. Hosting (Krystal.io)</h3>
        <p>Diese Website wird über <strong>Krystal.io</strong> (Krystal Hosting Ltd., UK) gehostet. Beim Aufruf der Website verarbeitet Krystal technische Zugriffsdaten wie IP-Adresse, Browsertyp und aufgerufene URL in Server-Log-Dateien. Diese Daten sind für den sicheren Betrieb der Website erforderlich und werden nicht für andere Zwecke verwendet. Weitere Informationen: <a href="https://krystal.io/privacy" target="_blank" rel="noopener">krystal.io/privacy</a>.</p>

        <h3>4. Kontaktformular</h3>
        <p>Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben (Name, E-Mail, Nachricht) über den Dienst <strong>Web3Forms</strong> an uns weitergeleitet. Die Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet. Weitere Informationen: <a href="https://web3forms.com/privacy" target="_blank" rel="noopener">web3forms.com/privacy</a>.</p>

        <h3>5. WhatsApp-Kontakt</h3>
        <p>Wenn Sie uns über WhatsApp kontaktieren, verarbeitet WhatsApp Ireland Limited Ihre Nachricht gemäß deren eigenen Datenschutzrichtlinien. Weitere Informationen: <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener">whatsapp.com/legal/privacy-policy</a>.</p>

        <h3>6. Ihre Rechte</h3>
        <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit (Art. 15–20 DSGVO) sowie das Widerspruchsrecht (Art. 21 DSGVO). Kontakt: <span class="obf-email" aria-label="E-Mail-Adresse"><!-- mail --></span>. Sie können sich zudem bei der zuständigen Datenschutzaufsichtsbehörde beschweren.</p>

        <h3>7. SSL-Verschlüsselung</h3>
        <p>Die Verbindung zu dieser Website ist SSL-verschlüsselt. Sie erkennen das an <code>https://</code> in der Adressleiste.</p>

        <p class="legal-footer-note">Stand: April 2026</p>
      </div>

      <!-- AGB Panel -->
      <div class="legal-panel" id="panel-agb" hidden>
        <h2 class="legal-heading">Allgemeine Geschäftsbedingungen</h2>

        <h3>§ 1 Geltungsbereich</h3>
        <p>Diese AGB gelten für alle Verträge zwischen YonDev (Lukas Henderson-Konduschek, Einzelunternehmen, nachfolgend „Auftragnehmer") und dem Auftraggeber. Abweichende Bedingungen gelten nur bei ausdrücklicher schriftlicher Zustimmung.</p>

        <h3>§ 2 Leistungen und Vertragsschluss</h3>
        <p>Der Leistungsumfang ergibt sich aus dem individuellen Angebot. Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung zustande. Änderungen bedürfen der Schriftform.</p>

        <h3>§ 3 Mitwirkung des Auftraggebers</h3>
        <p>Der Auftraggeber stellt alle erforderlichen Inhalte, Zugangsdaten und Informationen rechtzeitig bereit. Verzögerungen durch fehlende Mitwirkung gehen nicht zu Lasten des Auftragnehmers.</p>

        <h3>§ 4 Vergütung und Zahlung</h3>
        <p>Rechnungen sind innerhalb von 14 Tagen fällig. Ab einem Projektvolumen von 500 EUR wird eine Anzahlung von 50 % bei Auftragserteilung fällig. Bei Zahlungsverzug gelten die gesetzlichen Verzugszinsen (§ 288 BGB).</p>

        <h3>§ 5 Abnahme</h3>
        <p>Der Auftraggeber hat 7 Werktage zur Prüfung und Abnahme. Ohne Rückmeldung gilt die Leistung als abgenommen. Festgestellte Mängel werden in angemessener Frist behoben.</p>

        <h3>§ 6 Nutzungsrechte</h3>
        <p>Alle erstellten Werke bleiben bis zur vollständigen Bezahlung Eigentum des Auftragnehmers. Nach vollständiger Zahlung erhält der Auftraggeber das einfache Nutzungsrecht für den vereinbarten Zweck. Der Auftragnehmer darf Arbeiten im eigenen Portfolio zeigen.</p>

        <h3>§ 7 Haftung</h3>
        <p>Der Auftragnehmer haftet nur bei Vorsatz oder grober Fahrlässigkeit, begrenzt auf den Auftragswert. Für vom Auftraggeber gelieferte Inhalte übernimmt der Auftragnehmer keine Haftung.</p>

        <h3>§ 8 Schlussbestimmungen</h3>
        <p>Es gilt deutsches Recht. Gerichtsstand ist der Sitz des Auftragnehmers. Unwirksame Einzelbestimmungen lassen die Wirksamkeit der übrigen Regelungen unberührt.</p>

        <p class="legal-footer-note">Stand: April 2026</p>
      </div>

    </div><!-- /.legal-card-wrapper -->
  </div>
</section>
`;

mountFrame(getContent, "impressum");

// Tab switching and contact obfuscation
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

  document.querySelectorAll('.legal-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.panel;
      document.querySelectorAll('.legal-tab').forEach(t => {
        t.classList.toggle('active', t === tab);
        t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
      });
      document.querySelectorAll('.legal-panel').forEach(p => {
        p.hidden = p.id !== `panel-${target}`;
      });
    });
  });
});
