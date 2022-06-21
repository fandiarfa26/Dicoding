const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener('click', toggleMenu);

function toggleMenu() {
  navMenu.classList.toggle('active');
}