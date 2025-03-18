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

if (moveHereFrame && tvWrap) {
  tvWrap.addEventListener('mouseenter', () =>
    toggleHiddenAnimation(moveHereFrame, tv1, tv2)
  );
  tvWrap.addEventListener('mouseleave', () =>
    toggleHiddenAnimation(moveHereFrame, tv1, tv2)
  );
  moveHereFrame.addEventListener('mouseenter', () =>
    toggleHiddenAnimation(moveHereFrame, tv1, tv2)
  );
  moveHereFrame.addEventListener('mouseleave', () =>
    toggleHiddenAnimation(moveHereFrame, tv1, tv2)
  );

  tvWrap.addEventListener('click', () => {
    if (isMobile()) {
      toggleHiddenAnimation(moveHereFrame, tv1, tv2);
    }
  });

  moveHereFrame.addEventListener('click', () => {
    if (isMobile()) {
      toggleHiddenAnimation(moveHereFrame, tv1, tv2);
    }
  });
}

// Night animation

const moveHereNight = document.querySelector('.move-here-night');
const nightLightImg = document.querySelector('.night-light-img-second');
const nightLightTrigger = document.querySelector('.night-light-trigger');

if (moveHereNight && nightLightImg) {
  moveHereNight.addEventListener('mouseenter', () =>
    toggleHiddenAnimation(moveHereNight, nightLightImg)
  );
  moveHereNight.addEventListener('mouseleave', () =>
    toggleHiddenAnimation(moveHereNight, nightLightImg)
  );
  nightLightTrigger.addEventListener('mouseenter', () =>
    toggleHiddenAnimation(moveHereNight, nightLightImg)
  );
  nightLightTrigger.addEventListener('mouseleave', () =>
    toggleHiddenAnimation(moveHereNight, nightLightImg)
  );

  moveHereNight.addEventListener('click', () => {
    if (isMobile()) {
      toggleHiddenAnimation(moveHereNight, nightLightImg);
    }
  });
  nightLightTrigger.addEventListener('click', () => {
    if (isMobile()) {
      toggleHiddenAnimation(moveHereNight, nightLightImg);
    }
  });
}
