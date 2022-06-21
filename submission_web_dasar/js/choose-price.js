const buttonMonth = document.querySelector('#choose-month');
const buttonYear = document.querySelector('#choose-year');
const buttonPro = document.querySelector('#button-pro');
const buttonMaster = document.querySelector('#button-master');

buttonMonth.addEventListener('click', function() {
  buttonMonth.classList.add('active');
  buttonYear.classList.remove('active');
  choosePrice('month');
});

buttonYear.addEventListener('click', function() {
  buttonMonth.classList.remove('active');
  buttonYear.classList.add('active');
  choosePrice('year');
});

function choosePrice (value) {
  if (value === 'month') {
    buttonPro.innerHTML = "Rp 50.000/bulan";
    buttonMaster.innerHTML = "Rp 100.000/bulan";
  } else {
    buttonPro.innerHTML = "Rp 500.000/tahun";
    buttonMaster.innerHTML = "Rp 1.000.000/tahun";
  }
}