const moveHereProtective = document.querySelector('.move-here-protective');
const protectiveTrigger = document.querySelector('.protective-trigger');
const protectiveVideoWrap = document.querySelector('.protective-video');
const protectiveVideo = document.querySelector('.protective-video video');

function isMobile() {
  return window.innerWidth < 760;
}

function playVideo() {
  if (protectiveVideo.readyState >= 2 && protectiveVideo.paused) {
    protectiveVideo.play();
  }
}

function stopVideo() {
  if (
    !moveHereProtective.matches(':hover') &&
    !protectiveTrigger.matches(':hover')
  ) {
    protectiveVideo.pause();
    protectiveVideo.currentTime = 0;
  }
}

function toggleHiddenVideo() {
  moveHereProtective.classList.toggle('hidden');
  protectiveVideoWrap.classList.toggle('hidden');
}

moveHereProtective.addEventListener('mouseenter', () => {
  toggleHiddenVideo();
  playVideo();
});

moveHereProtective.addEventListener('mouseleave', () => {
  stopVideo();
  toggleHiddenVideo();
});

protectiveTrigger.addEventListener('mouseenter', () => {
  toggleHiddenVideo();
  playVideo();
});

protectiveTrigger.addEventListener('mouseleave', () => {
  stopVideo();
  toggleHiddenVideo();
});

moveHereProtective.addEventListener('click', () => {
  if (isMobile()) {
    if (protectiveVideo.paused) {
      toggleHiddenVideo();
      playVideo();
    } else {
      stopVideo();
      toggleHiddenVideo();
    }
  }
});
protectiveTrigger.addEventListener('click', () => {
  if (isMobile()) {
    if (protectiveVideo.paused) {
      toggleHiddenVideo();
      playVideo();
    } else {
      stopVideo();
      toggleHiddenVideo();
    }
  }
});
