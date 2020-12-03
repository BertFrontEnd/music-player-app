import {
  playButton,
  nextButton,
  prevButton,
  muteButton,
  seekSlider,
  volumeSlider,
  currentTimeText,
  durationTimeText,
  playListStatus,
  playListArtist,
  repeat,
  randomSong,
} from './assets/modules/elements.js';

import { getRandomNumber, setAccessibility } from './assets/modules/utilities.js';

import { dir, playList, title, artists, poster } from './assets/modules/dockets.js';

// Audio Object
const audio = new Audio();
audio.src = dir + playList[0] + setAccessibility();
audio.loop = false;

// First Song Title and Artist
let playListIndex = 0;

playListStatus.innerHTML = title[playListIndex];
playListArtist.innerHTML = artists[playListIndex];

// Functions
const fetchMusicDetails = () => {
  // Poster Image, Pause/Play Image
  document.querySelector('#play-pause > img').setAttribute('src', './assets/img/pause-red.png');
  document.querySelector('#bg-image > img').setAttribute('src', poster[playListIndex]);
  document.querySelector('#circle-image > img').setAttribute('src', poster[playListIndex]);

  // Title and Artist
  playListStatus.innerHTML = title[playListIndex];
  playListArtist.innerHTML = artists[playListIndex];

  // Audio
  audio.src = dir + playList[playListIndex] + setAccessibility();
  audio.play();
};

const pressPlayPause = () => {
  if (audio.paused) {
    audio.play();
    document.querySelector('#play-pause > img').setAttribute('src', './assets/img/pause-red.png');
  } else {
    audio.pause();
    document.querySelector('#play-pause > img').setAttribute('src', './assets/img/play-red.png');
  }
};

const nextSong = () => {
  playListIndex++;

  if (playListIndex > playList.length - 1) {
    playListIndex = 0;
  }

  fetchMusicDetails();
};

const prevSong = () => {
  playListIndex--;

  if (playListIndex < 0) {
    playListIndex = playList - 1;
  }

  fetchMusicDetails();
};

const pressMute = () => {
  if (audio.muted) {
    audio.muted = false;
    document.querySelector('#mute-btn > img').setAttribute('src', './assets/img/speaker.png');
  } else {
    audio.muted = true;
    document.querySelector('#mute-btn > img').setAttribute('src', './assets/img/mute.png');
  }
};

let seeking = false;

const seek = (e) => {
  if (audio.duration == 0) {
    null;
  } else {
    if (seeking) {
      seekSlider.value = e.clientX - seekSlider.offsetLeft;
      let seekTo = audio.duration * (seekSlider.value / 100);
      audio.currentTime = seekTo;
    }
  }
};

const setVolume = () => {
  audio.volume = volumeSlider.value / 100;
};

const seekTimeUpdate = () => {
  if (audio.duration) {
    let nt = audio.currentTime * (100 / audio.duration);
    seekSlider.value = nt;
    let currentMinutes = Math.floor(audio.currentTime / 60);
    let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(audio.duration / 60);
    let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);

    if (currentMinutes < 10) {
      currentMinutes = '0' + currentMinutes;
    }
    if (currentSeconds < 10) {
      currentSeconds = '0' + currentSeconds;
    }
    if (durationMinutes < 10) {
      durationMinutes = '0' + durationMinutes;
    }
    if (durationSeconds < 10) {
      durationSeconds = '0' + durationSeconds;
    }

    currentTimeText.innerHTML = `${currentMinutes}:${currentSeconds}`;
    durationTimeText.innerHTML = `${durationMinutes}:${durationSeconds}`;
  } else {
    currentTimeText.innerHTML = `--:--`;
    durationTimeText.innerHTML = `--:--`;
  }
};

const switchTrack = () => {
  if (playListIndex == playList.length - 1) {
    playListIndex = 0;
  } else {
    playListIndex++;
  }

  fetchMusicDetails();
};

const setLoop = () => {
  if (audio.loop) {
    audio.loop = false;
    document.querySelector('#repeat > img').setAttribute('src', './assets/img/rep.png');
  } else {
    audio.loop = true;
    document.querySelector('#repeat > img').setAttribute('src', './assets/img/rep1.png');
  }
};

const setRandomSong = () => {
  let randomIndex = getRandomNumber(0, playList.length - 1);
  playListIndex = randomIndex;

  fetchMusicDetails();
};

//  Handlers
playButton.addEventListener('click', pressPlayPause);
nextButton.addEventListener('click', nextSong);
prevButton.addEventListener('click', prevSong);
muteButton.addEventListener('click', pressMute);

seekSlider.addEventListener('mousedown', (e) => {
  seeking = true;
  seek(e);
});
seekSlider.addEventListener('mousemove', (e) => {
  seek(e);
});
seekSlider.addEventListener('mouseup', (e) => {
  seeking = false;
});

volumeSlider.addEventListener('mousemove', setVolume);

audio.addEventListener('timeupdate', (e) => {
  seekTimeUpdate();
});

audio.addEventListener('ended', (e) => {
  switchTrack();
});

repeat.addEventListener('click', setLoop);
randomSong.addEventListener('click', setRandomSong);
