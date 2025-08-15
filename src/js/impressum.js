import { mountFrame } from './common.js';

const content = `
<section class="section">
  <div class="container">
    <h1>Impressum</h1>

    <div class="card" style="max-width: 900px; margin: 16px 0;">
      <h2 style="margin-top:0;">Datenschutzerklärung</h2>

      <p>Wir freuen uns über Ihr Interesse an unserer Homepage und unserem Unternehmen. Für externe Links zu fremden Inhalten können wir dabei trotz sorgfältiger inhaltlicher Kontrolle keine Haftung übernehmen. Der Schutz Ihrer personenbezogenen Daten bei der Erhebung, Verarbeitung und Nutzung anlässlich Ihres Besuchs auf unserer Homepage ist uns ein wichtiges Anliegen. Ihre Daten werden im Rahmen der gesetzlichen Vorschriften geschützt. Nachfolgend finden Sie Informationen, welche Daten während Ihres Besuchs auf der Homepage erfasst und wie diese genutzt werden:</p>

      <h3>Erhebung und Verarbeitung von Daten</h3>
      <p>Jeder Zugriff auf unsere Homepage und jeder Abruf einer auf der Homepage hinterlegten Datei werden protokolliert. Die Speicherung dient internen systembezogenen und statistischen Zwecken. Protokolliert werden: Name der abgerufenen Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf, Webbrowser und anfragende Domain. Zusätzlich werden die IP Adressen der anfragenden Rechner protokolliert. Hierbei handelt es sich ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre Person zulassen. Weitergehende personenbezogene Daten werden nur erfasst, wenn Sie diese Angaben freiwillig, etwa im Rahmen einer Anfrage oder Registrierung, machen.</p>

      <h3>Nutzung und Weitergabe personenbezogener Daten</h3>
      <p>Soweit Sie uns personenbezogene Daten zur Verfügung gestellt haben, verwenden wir diese nur zur Beantwortung Ihrer Anfragen, zur Abwicklung mit Ihnen geschlossener Verträge und für die technische Administration. Ihre personenbezogenen Daten werden an Dritte nur weitergegeben oder sonst übermittelt, wenn dies zum Zwecke der Vertragsabwicklung – insbesondere Weitergabe von Bestelldaten an Lieferanten – erforderlich ist, dies zu Abrechnungszwecken erforderlich ist oder Sie zuvor eingewilligt haben.</p>

      <h3>Löschung bzw. Sperrung der Daten</h3>
      <p>Wir halten uns an die Grundsätze der Datenvermeidung und Datensparsamkeit. Wir speichern Ihre personenbezogenen Daten daher nur so lange, wie dies zur Erreichung der hier genannten Zwecke erforderlich ist oder wie es die vom Gesetzgeber vorgesehenen vielfältigen Speicherfristen vorsehen. Nach Fortfall des jeweiligen Zweckes bzw. Ablauf dieser Fristen werden die entsprechenden Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.</p>

      <h3>Ihre Rechte</h3>
      <p>Unter den angegebenen Kontaktdaten können Sie jederzeit folgende Rechte ausüben:</p>
      <ul>
        <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung,</li>
        <li>Berichtigung unrichtiger personenbezogener Daten,</li>
        <li>Löschung Ihrer bei uns gespeicherten Daten,</li>
        <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen,</li>
        <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns und</li>
        <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben.</li>
      </ul>
      <p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>

      <h3>SSL-Verschlüsselung</h3>
      <p>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</p>

      <h3>Kontaktformular</h3>
      <p>Treten Sie bzgl. Fragen jeglicher Art per E-Mail oder Kontaktformular mit uns in Kontakt, erteilen Sie uns zum Zwecke der Kontaktaufnahme Ihre freiwillige Einwilligung. Hierfür ist die Angabe einer gültigen E-Mail-Adresse erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die von Ihnen gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert. Nach Erledigung der von Ihnen gestellten Anfrage werden personenbezogene Daten automatisch gelöscht.</p>

      <h3>Sicherheitshinweis</h3>
      <p>Wir sind bemüht, Ihre personenbezogenen Daten durch Ergreifung aller technischen und organisatorischen Möglichkeiten so zu speichern, dass sie für Dritte nicht zugänglich sind. Bei der Kommunikation per E-Mail kann die vollständige Datensicherheit von uns nicht gewährleistet werden, so dass wir Ihnen bei vertraulichen Informationen den Postweg empfehlen.</p>
    </div>
  </div>
</section>
`;

mountFrame(content, "impressum");
