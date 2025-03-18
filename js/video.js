const moveHereProtective = document.querySelector('.move-here-protective');
const protectiveTrigger = document.querySelector('.protective-trigger');
const protectiveVideoWrap = document.querySelector('.protective-video');
const protectiveVideo = document.querySelector('.protective-video video');

const moveHereStand = document.querySelector('.move-here-stand');
const standTrigger = document.querySelector('.stand-trigger');
const standVideoWrap = document.querySelector('.stand-video');
const standVideo = document.querySelector('.stand-video video');

function isMobile() {
  return window.innerWidth < 760;
}

function playVideo(video) {
  if (video.readyState >= 2 && video.paused) {
    video.play();
  }
}

function stopVideo(moveHere, trigger, video) {
  if (!moveHere.matches(':hover') && !trigger.matches(':hover')) {
    video.pause();
    video.currentTime = 0;
  }
}

function toggleHiddenVideo(moveHere, wrap) {
  moveHere.classList.toggle('hidden');
  wrap.classList.toggle('hidden');
}

function mouseEnterVideo(moveHere, videoWrap, video) {
  toggleHiddenVideo(moveHere, videoWrap);
  playVideo(video);
}

function mouseLeaveVideo(moveHere, trigger, video, videoWrap) {
  stopVideo(moveHere, trigger, video);
  toggleHiddenVideo(moveHere, videoWrap);
}

function mouseClickVideo(video, moveHere, videoWrap, trigger) {
  if (isMobile()) {
    if (video.paused) {
      toggleHiddenVideo(moveHere, videoWrap);
      playVideo(video);
    } else {
      stopVideo(moveHere, trigger, video);
      toggleHiddenVideo(moveHere, videoWrap);
    }
  }
}

// Protective video

moveHereProtective.addEventListener('mouseenter', () =>
  mouseEnterVideo(moveHereProtective, protectiveVideoWrap, protectiveVideo)
);
moveHereProtective.addEventListener('mouseleave', () =>
  mouseLeaveVideo(
    moveHereProtective,
    protectiveTrigger,
    protectiveVideo,
    protectiveVideoWrap
  )
);
protectiveTrigger.addEventListener('mouseenter', () =>
  mouseEnterVideo(moveHereProtective, protectiveVideoWrap, protectiveVideo)
);
protectiveTrigger.addEventListener('mouseleave', () =>
  mouseLeaveVideo(
    moveHereProtective,
    protectiveTrigger,
    protectiveVideo,
    protectiveVideoWrap
  )
);
moveHereProtective.addEventListener('click', () =>
  mouseClickVideo(
    protectiveVideo,
    moveHereProtective,
    protectiveVideoWrap,
    protectiveTrigger
  )
);
protectiveTrigger.addEventListener('click', () =>
  mouseClickVideo(
    protectiveVideo,
    moveHereProtective,
    protectiveVideoWrap,
    protectiveTrigger
  )
);

// Stand video

moveHereStand.addEventListener('mouseenter', () =>
  mouseEnterVideo(moveHereStand, standVideoWrap, standVideo)
);
moveHereStand.addEventListener('mouseleave', () =>
  mouseLeaveVideo(moveHereStand, standTrigger, standVideo, standVideoWrap)
);
standTrigger.addEventListener('mouseenter', () =>
  mouseEnterVideo(moveHereStand, standVideoWrap, standVideo)
);
standTrigger.addEventListener('mouseleave', () =>
  mouseLeaveVideo(moveHereStand, standTrigger, standVideo, standVideoWrap)
);
moveHereStand.addEventListener('click', () =>
  mouseClickVideo(standVideo, moveHereStand, standVideoWrap, standTrigger)
);
standTrigger.addEventListener('click', () =>
  mouseClickVideo(standVideo, moveHereStand, standVideoWrap, standTrigger)
);
