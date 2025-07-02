</main>

<footer class="bg-primary-custom text-black text-center py-3">
  <p class="mb-0">&copy; <?= date('Y') ?> YonDev. All rights reserved.</p>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script>
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const offcanvasMenu = document.getElementById('offcanvas-menu');

  hamburgerBtn.addEventListener('click', () => {
    offcanvasMenu.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!offcanvasMenu.contains(e.target) && e.target !== hamburgerBtn) {
      offcanvasMenu.classList.remove('show');
    }
  });
</script>

</body>
</html>
