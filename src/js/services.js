
import { mountFrame } from './common.js';

const content = `
<section class="service-block">
  <div class="container">
    <h2>Business Websites</h2>
    <ul>
      <li><strong>Landing Pages</strong> High-converting, fast-loading pages with clear messaging.</li>
      <li><strong>Dynamic Sites</strong> Multi-page experiences that grow with your business.</li>
      <li><strong>Outreach Forms</strong> Simple forms that feed inquiries straight to your inbox.</li>
    </ul>
  </div>
</section>
<section class="service-block">
  <div class="container">
    <h2>Social Media Presence</h2>
    <ul>
      <li><strong>Social Media</strong> Consistent content and scheduling that keeps your brand visible.</li>
      <li><strong>Google Business Profile</strong> Optimised listings that help local customers find you.</li>
    </ul>
  </div>
</section>
<section class="service-block">
  <div class="container">
    <h2>Digital Marketing</h2>
    <ul>
      <li><strong>SEO</strong> Keyword-focused content that climbs search rankings.</li>
      <li><strong>Emails</strong> Targeted campaigns that turn subscribers into clients.</li>
    </ul>
  </div>
</section>
`;

mountFrame(content, "services");
