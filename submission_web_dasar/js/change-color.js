let activeColor = 'yellow';
const yellowBtn = document.querySelector('#yellow');
const redBtn = document.querySelector('#red');
const greenBtn = document.querySelector('#green');
const purpleBtn = document.querySelector('#purple');
const interactiveText = document.querySelector('#interactive-text');
const contactSection = document.querySelector('#contact');

yellowBtn.addEventListener('click', function(){ changeColor('yellow') });
redBtn.addEventListener('click', function() { changeColor('red') });
greenBtn.addEventListener('click', function() { changeColor('green') });
purpleBtn.addEventListener('click', function() { changeColor('purple') });

function changeColor(color) {
  if (color !== activeColor) {
    removeActiveColor();
    switch (color) {
      case 'yellow':
        interactiveText.style.color = '#facc15';
        contactSection.style.backgroundColor = '#facc15';
        yellowBtn.classList.add('active');
        break;
    
      case 'red':
        interactiveText.style.color = '#f87171';
        contactSection.style.backgroundColor = '#f87171';
        redBtn.classList.add('active');
        break;
    
      case 'green':
        interactiveText.style.color = '#4ade80';
        contactSection.style.backgroundColor = '#4ade80';
        greenBtn.classList.add('active');
        break;
    
      case 'purple':
        interactiveText.style.color = '#a78bfa';
        contactSection.style.backgroundColor = '#a78bfa';
        purpleBtn.classList.add('active');
        break;
    
      default:
        break;
    }

    activeColor = color;
  }
  
}

function removeActiveColor() {
  switch (activeColor) {
      case 'yellow':
        yellowBtn.classList.remove('active');
        break;
    
      case 'red':
        redBtn.classList.remove('active');
        break;
    
      case 'green':
        greenBtn.classList.remove('active');
        break;
    
      case 'purple':
        purpleBtn.classList.remove('active');
        break;
    
      default:
        break;
    }
}