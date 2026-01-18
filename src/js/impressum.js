import { mountFrame } from './common.js';

const content = `
<section class="section">
  <div class="container">
    <h1>Impressum</h1>

    <div class="card" style="max-width: 900px; margin: 16px 0;">
      <h2 style="margin-top:0;">Angaben gemäß § 5 TMG</h2>
      <p>
        <strong>Lukas Henderson</strong><br>
        YonDev<br>
      </p>

      <h3>Kontakt</h3>
      <p>
        E-Mail: <a href="mailto:info@yondev.com">info@yondev.com</a>
      </p>

      <h3>Haftung für Inhalte</h3>
      <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
      <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

      <h3>Haftung für Links</h3>
      <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>

      <h2 style="margin-top: 40px;">Datenschutzerklärung</h2>

      <h3>Verantwortliche Stelle</h3>
      <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br>
        <strong>Lukas Henderson</strong><br>
        YonDev
      </p>

      <h3>Allgemeines zur Datenverarbeitung</h3>
      <p>Diese Website erhebt und speichert <strong>keine personenbezogenen Daten</strong>. Es werden keine Cookies verwendet, keine Tracking-Tools eingesetzt und keine Nutzerprofile erstellt.</p>

      <h3>Server-Log-Dateien</h3>
      <p>Der Hosting-Provider erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:</p>
      <ul>
        <li>Browsertyp und Browserversion</li>
        <li>Verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse</li>
      </ul>
      <p>Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und dienen ausschließlich der Systemsicherheit und statistischen Auswertung. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>

      <h3>SSL-Verschlüsselung</h3>
      <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>

      <h3>Ihre Rechte</h3>
      <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Da diese Website jedoch keine personenbezogenen Daten erhebt oder speichert, entfällt die Notwendigkeit dieser Maßnahmen in der Regel.</p>

      <h3>Kontaktaufnahme</h3>
      <p>Bei Fragen zum Datenschutz oder zu diesem Impressum wenden Sie sich bitte per E-Mail an: <a href="mailto:info@yondev.com">info@yondev.com</a></p>
    </div>
  </div>
</section>
`;

mountFrame(content, "impressum");
