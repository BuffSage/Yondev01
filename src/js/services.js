
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
      <li data-icon="🚀"><span><strong>Landing Pages</strong> High-converting, fast-loading pages with clear messaging.</span></li>
      <li data-icon="💻"><span><strong>Dynamic Sites</strong> Multi-page experiences that grow with your business.</span></li>
      <li data-icon="📬"><span><strong>Outreach Forms</strong> Simple forms that feed inquiries straight to your inbox.</span></li>
    </ul>
  </div>
</section>
<section class="service-block blobbed" data-blob="top bottom" data-intensity="1" data-tilt="0.05" data-skew="0" data-speed="0.6">
  <div class="container">
    <h2>Social Media Presence</h2>
    <ul>
      <li data-icon="📱"><span><strong>Social Media</strong> Consistent content and scheduling that keeps your brand visible.</span></li>
      <li data-icon="📍"><span><strong>Google Business Profile</strong> Optimised listings that help local customers find you.</span></li>
    </ul>
  </div>
</section>
<section class="service-block blobbed" data-blob="top" data-intensity="1" data-tilt="0" data-skew="0" data-speed="0.6">
  <div class="container">
    <h2>Digital Marketing</h2>
    <ul>
      <li data-icon="🔍"><span><strong>SEO</strong> Keyword-focused content that climbs search rankings.</span></li>
      <li data-icon="✉️"><span><strong>Emails</strong> Targeted campaigns that turn subscribers into clients.</span></li>
    </ul>
  </div>
</section>
`;

mountFrame(content, "services");
initBubblesBackground();
initBlobSections();
