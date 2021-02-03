const fire = document.querySelector('.fire .fa-fire');
const fireText = document.querySelector('#fire-text');
var counter = 100;

fire.addEventListener('mousedown', () => {
  fire.style.transform = 'scale(1.3)';
  fire.style.transition = '0.5s ease';

  counter++;
  fireText.innerHTML = counter;
});

fire.addEventListener('mouseup', () => {
  fire.style.transform = 'scale(1)';
  fire.style.transition = '0.5s ease';
});
