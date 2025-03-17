// Frame animation

const tvWrap = document.querySelector('.tv-wrap');
const moveHere = document.querySelector('.move-here');
const tv1 = document.querySelector('.tv-1');
const tv2 = document.querySelector('.tv-2');

function showFrame() {
  moveHere.classList.toggle('hidden');
  tv1.classList.toggle('hidden');
  tv2.classList.toggle('hidden');
}

function hideFrame() {
  moveHere.classList.toggle('hidden');
  tv1.classList.toggle('hidden');
  tv2.classList.toggle('hidden');
}

if (moveHere && tvWrap) {
  tvWrap.addEventListener('mouseenter', showFrame);
  tvWrap.addEventListener('mouseleave', hideFrame);
  moveHere.addEventListener('mouseenter', showFrame);
  moveHere.addEventListener('mouseleave', hideFrame);

  tvWrap.addEventListener('click', () => {
    tvWrap.classList.toggle('active');
  });

  moveHere.addEventListener('click', () => {
    tvWrap.classList.toggle('active');
  });
}
