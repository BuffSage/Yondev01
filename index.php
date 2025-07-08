<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Yondev: Build better</title>

  <!-- Your CSS files -->
  <link rel="stylesheet" href="assets/css/style.css" />

  <!-- Other head includes -->
</head>
<?php include 'includes/header.php'; ?>
<body>
<!-- Hero Section -->
<section class="hero">

  <img src="assets/images/ProustFP.jpg" alt="Hero image" class="hero-img" />

  <div class="hero-content">
    <h1><b>Reclaim Your Time with YonDev<b></h1>
    <a href="services.php" class="btn-tertiary">Explore Services</a>
  </div>
</section>

<main class="container py-4">
  <!-- Rest of your page content -->
</main>


<!-- Section 1: Save Time Through Business Organisation -->
<section class="container py-5 bg-secondary-custom">
  <h3 class="mb-4 border-bottom border-3 border-warning pb-2">Curate A Better Workflow </h3>
  <div class="row align-items-center">
    <div class="col-md-6">
      <p class="text-secondary-custom fs-5">
        At YonDev, we streamline your business operations with smart organisation tools that save time and reduce stress. 
        
        Focus on your mission. We'll handle the digital housekeeping.
      </p>

    </div>
    <div class="col-md-4">
      <img src="assets/images/TimeFrontKennyEliason-min.jpg" alt="Business Rewind" class="img-fluid rounded shadow" />
    </div>
  </div>
</section>

<!-- Section 2: Past Projects -->
<section class="py-5 section-tertiary">
  <div class="container">
    <h3 class="mb-4 border-bottom border-3 border-warning pb-2">Past Projects</h3>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="assets/images/project1.jpg" class="card-img-top" alt="Project 1" />
          <div class="card-body">
            <h5 class="card-title">Project Alpha</h5>
            <p class="card-text text-secondary-custom">A full-stack web app that boosted client productivity by 30%.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="assets/images/project2.jpg" class="card-img-top" alt="Project 2" />
          <div class="card-body">
            <h5 class="card-title">Project Beta</h5>
            <p class="card-text text-secondary-custom">E-commerce platform built with scalability and security in mind.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="assets/images/project3.jpg" class="card-img-top" alt="Project 3" />
          <div class="card-body">
            <h5 class="card-title">Project Gamma</h5>
            <p class="card-text text-secondary-custom">Custom CRM tool tailored for small businesses.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Section 3: Call to Action -->
<section class="container py-5 bg-secondary-custom text-center">
  <h3 class="mb-4 border-bottom border-3 border-warning pb-2">Ready to Bridge Better?</h3>
  <p class="text-secondary-custom fs-5 mb-4">
    Contact us today to learn how YonDev can transform your business operations and save you time.
  </p>
  <a href="contact.php" class="btn btn-tertiary">Get in Touch</a>
</section>

<main class="container py-4">

<?php include 'includes/footer.php'; ?>

</body>
</html>
