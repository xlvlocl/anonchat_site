const toggleButton = document.getElementById('toggleButton');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', function() {
  if (menu.classList.contains('menu-open')) {
    menu.classList.remove('menu-open');
  } else {
    menu.classList.add('menu-open');
  }
});