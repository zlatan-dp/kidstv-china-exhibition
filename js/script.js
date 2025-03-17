// Frame animation

const tvWrap = document.querySelector('.tv-wrap');
const moveHereFrame = document.querySelector('.move-here-frame');
const tv1 = document.querySelector('.tv-1');
const tv2 = document.querySelector('.tv-2');

function toggleHidden(...elements) {
  elements.forEach(element => {
    element.classList.toggle('hidden');
  });
}

function isMobile() {
  return window.innerWidth < 760;
}

if (moveHereFrame && tvWrap) {
  tvWrap.addEventListener('mouseenter', () =>
    toggleHidden(moveHereFrame, tv1, tv2)
  );
  tvWrap.addEventListener('mouseleave', () =>
    toggleHidden(moveHereFrame, tv1, tv2)
  );
  moveHereFrame.addEventListener('mouseenter', () =>
    toggleHidden(moveHereFrame, tv1, tv2)
  );
  moveHereFrame.addEventListener('mouseleave', () =>
    toggleHidden(moveHereFrame, tv1, tv2)
  );

  tvWrap.addEventListener('click', () => {
    if (isMobile()) {
      toggleHidden(moveHereFrame, tv1, tv2);
    }
  });

  moveHereFrame.addEventListener('click', () => {
    if (isMobile()) {
      toggleHidden(moveHereFrame, tv1, tv2);
    }
  });
}

// Night animation

const moveHereNight = document.querySelector('.move-here-night');
const nightLightImg = document.querySelector('.night-light-img-second');
const nightLightTrigger = document.querySelector('.night-light-trigger');

if (moveHereNight && nightLightImg) {
  moveHereNight.addEventListener('mouseenter', () =>
    toggleHidden(moveHereNight, nightLightImg)
  );
  moveHereNight.addEventListener('mouseleave', () =>
    toggleHidden(moveHereNight, nightLightImg)
  );
  nightLightTrigger.addEventListener('mouseenter', () =>
    toggleHidden(moveHereNight, nightLightImg)
  );
  nightLightTrigger.addEventListener('mouseleave', () =>
    toggleHidden(moveHereNight, nightLightImg)
  );

  moveHereNight.addEventListener('click', () => {
    if (isMobile()) {
      toggleHidden(moveHereNight, nightLightImg);
    }
  });
  nightLightTrigger.addEventListener('click', () => {
    if (isMobile()) {
      toggleHidden(moveHereNight, nightLightImg);
    }
  });
}
