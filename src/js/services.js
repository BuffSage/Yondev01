
import { mountFrame } from './common.js';
import { initBubblesBackground } from './bubbles.js';

const content = `
<section class="page-header blobbed" data-blob="bottom" data-intensity="1" data-tilt="0" data-skew="0" data-speed="0.8" data-bubbles data-density="48" data-min-radius="4" data-max-radius="12">
  <div class="container">
    <h1 class="page-title">Services</h1>
  </div>
</section>
<section class="service-block blobbed" data-blob="top bottom" data-intensity="1" data-tilt="0" data-skew="0" data-speed="0.6">
  <div class="container">
    <h2>Business Websites</h2>
    <ul>
      <li data-icon="🚀"><strong>Landing Pages</strong> High-converting, fast-loading pages with clear messaging.</li>
      <li data-icon="💻"><strong>Dynamic Sites</strong> Multi-page experiences that grow with your business.</li>
      <li data-icon="📬"><strong>Outreach Forms</strong> Simple forms that feed inquiries straight to your inbox.</li>
    </ul>
  </div>
</section>
<section class="service-block blobbed" data-blob="top bottom" data-intensity="1" data-tilt="0.05" data-skew="0" data-speed="0.6">
  <div class="container">
    <h2>Social Media Presence</h2>
    <ul>
      <li data-icon="📱"><strong>Social Media</strong> Consistent content and scheduling that keeps your brand visible.</li>
      <li data-icon="📍"><strong>Google Business Profile</strong> Optimised listings that help local customers find you.</li>
    </ul>
  </div>
</section>
<section class="service-block blobbed" data-blob="top" data-intensity="1" data-tilt="0" data-skew="0" data-speed="0.6">
  <div class="container">
    <h2>Digital Marketing</h2>
    <ul>
      <li data-icon="🔍"><strong>SEO</strong> Keyword-focused content that climbs search rankings.</li>
      <li data-icon="✉️"><strong>Emails</strong> Targeted campaigns that turn subscribers into clients.</li>
    </ul>
  </div>
</section>
`;

mountFrame(content, "services");
initBubblesBackground();
initBlobSections();
