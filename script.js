<script>
  fetch('header.html')
			.then(response => response.text())
			.then(data => {
			document.getElementById('header-placeholder').innerHTML = data;
			});


  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
</script>
