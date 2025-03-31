// Frame animation

const tvWrap = document.querySelector('.frame-tv-trigger');
const moveHereFrame = document.querySelector('.move-here-frame');
const tv1 = document.querySelector('.tv-1');
const tv2 = document.querySelector('.tv-2');

function toggleHiddenAnimation(...elements) {
  elements.forEach(element => {
    element.classList.toggle('hidden');
  });
}

function isMobile() {
  return window.innerWidth < 760;
}

function handleFrameHover() {
  toggleHiddenAnimation(moveHereFrame, tv1, tv2);
}

function handleFrameClick() {
  toggleHiddenAnimation(tv1, tv2);
}

function addFrameListeners() {
  if (!isMobile()) {
    tvWrap.addEventListener('mouseenter', handleFrameHover);
    tvWrap.addEventListener('mouseleave', handleFrameHover);
    moveHereFrame.addEventListener('mouseenter', handleFrameHover);
    moveHereFrame.addEventListener('mouseleave', handleFrameHover);
  } else {
    tvWrap.addEventListener('click', handleFrameClick);
    moveHereFrame.addEventListener('click', handleFrameClick);
  }
}

function removeFrameListeners() {
  tvWrap.removeEventListener('mouseenter', handleFrameHover);
  tvWrap.removeEventListener('mouseleave', handleFrameHover);
  moveHereFrame.removeEventListener('mouseenter', handleFrameHover);
  moveHereFrame.removeEventListener('mouseleave', handleFrameHover);

  tvWrap.removeEventListener('click', handleFrameClick);
  moveHereFrame.removeEventListener('click', handleFrameClick);
}

// Night animation

const moveHereNight = document.querySelector('.move-here-night');
const nightLightImg = document.querySelector('.night-light-img-second');
const nightLightTrigger = document.querySelector('.night-light-trigger');

function handleNightHover() {
  toggleHiddenAnimation(moveHereNight, nightLightImg);
}

function handleNightClick() {
  toggleHiddenAnimation(nightLightImg);
}

function addNightListeners() {
  if (!isMobile()) {
    nightLightTrigger.addEventListener('mouseenter', handleNightHover);
    nightLightTrigger.addEventListener('mouseleave', handleNightHover);
    moveHereNight.addEventListener('mouseenter', handleNightHover);
    moveHereNight.addEventListener('mouseleave', handleNightHover);
  } else {
    nightLightTrigger.addEventListener('click', handleNightClick);
    moveHereNight.addEventListener('click', handleNightClick);
  }
}

function removeNightListeners() {
  nightLightTrigger.removeEventListener('mouseenter', handleNightHover);
  nightLightTrigger.removeEventListener('mouseleave', handleNightHover);
  moveHereNight.removeEventListener('mouseenter', handleNightHover);
  moveHereNight.removeEventListener('mouseleave', handleNightHover);

  nightLightTrigger.removeEventListener('click', handleNightClick);
  moveHereNight.removeEventListener('click', handleNightClick);
}

function updateListeners() {
  removeFrameListeners();
  addFrameListeners();
  removeNightListeners();
  addNightListeners();
}

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);

  resizeTimeout = setTimeout(updateListeners, 200);
});

updateListeners();
