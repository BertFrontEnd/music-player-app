import {
  audio,
  playButton,
  nextButton,
  prevButton,
  muteButton,
  seekSlider,
  seekTo,
  volumesSlider,
  currentTimeText,
  durationTimeText,
  playListStatus,
  playListArtist,
  title,
  repeat,
  random,
  randomSong,
  seeking,
} from './variables.js';

playButton = document.getElementById('play-pause');
nextButton = document.getElementById('next-btn');
prevButton = document.getElementById('prev-btn');
prevButton = document.getElementById('prev-btn');
muteButton = document.getElementById('mute-btn');
seekSlider = document.getElementById('seek-slider');
volumesSlider = document.getElementById('volume-slider');
currentTimeText = document.getElementById('cur-time-text');
durationTimeText = document.getElementById('dur-time-text');
playListStatus = document.getElementById('play-list-status');
playListArtist = document.getElementById('play-list-artist');
repeat = document.getElementById('repeat');
randomSong = document.getElementById('random');

export {
  playButton,
  nextButton,
  prevButton,
  muteButton,
  seekSlider,
  volumesSlider,
  currentTimeText,
  durationTimeText,
  playListStatus,
  playListArtist,
  repeat,
  randomSong,
};
