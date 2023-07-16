const themeToggle = document.getElementById('theme_checkbox');
const body = document.body;

themeToggle.addEventListener('change', function () {
  if (this.checked) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
});
