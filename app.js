const fire = document.querySelector('.fire .fa-fire');
const fireText = document.querySelector('#fire-text');
var counter = fireText.innerHTML;
fireText.innerHTML = localStorage.getItem('clickcount');

// Mouse Down
fire.addEventListener('mousedown', () => {
  fire.style.transform = 'scale(1.1)';
  fire.style.transition = '0.5s ease';
});

// Mouse Release
fire.addEventListener('mouseup', () => {
  fire.style.transform = 'scale(1)';
  fire.style.transition = '0.5s ease';
});

// Store in local storage
function clickCounter() {
  if (typeof Storage !== 'undefined') {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    counter = localStorage.clickcount;
    fireText.innerHTML = counter;
  } else {
    console.log('Browser does not support local storage');
  }
}
