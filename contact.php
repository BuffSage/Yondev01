<?php include 'includes/header.php'; ?>

<h2 class="mb-4 border-bottom border-3 border-tertiary pb-2" style="border-color:#ffcf40 !important;">Contact Us</h2>

<p>If you have any questions or want to get in touch, please fill out the form below.</p>

<form action="contact.php" method="post" class="mb-5" style="max-width:500px;">
  <div class="mb-3">
    <label for="name" class="form-label" style="color:#000;">Name</label>
    <input type="text" class="form-control" id="name" name="name" required />
  </div>
  <div class="mb-3">
    <label for="email" class="form-label" style="color:#000;">Email</label>
    <input type="email" class="form-control" id="email" name="email" required />
  </div>
  <div class="mb-3">
    <label for="message" class="form-label" style="color:#000;">Message</label>
    <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
  </div>
  <button type="submit" class="btn btn-tertiary">Send</button>
</form>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));
    $to = 'info@yondev.com';  
    $subject = 'Contact Form Submission - YonDev';
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    if (mail($to, $subject, $body)) {
        echo '<div class="alert alert-success">Thank you for your message! We will get back to you shortly.</div>';
    } else {
        echo '<div class="alert alert-danger">Sorry, there was a problem sending your message.</div>';
    }
}
?>

<?php include 'includes/footer.php'; ?>
