let scrollPosition = window.scrollY;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  scrollPosition = window.scrollY;
  if (scrollPosition >= 10) {
    header.classList.add('shadow');
  } else {
    header.classList.remove('shadow');
  }
});