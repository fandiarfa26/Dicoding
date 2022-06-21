const backToTop = document.querySelector('#back-to-top');
const heroSection = document.querySelector('#hero');

backToTop.addEventListener('click', function() {
  heroSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

function scrollToElement(el) {
  document.getElementById(el).scrollIntoView({ behavior: 'smooth', block: 'center' });
}