import {
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
} from './assets/modules/elements.js';

let audio = '';
let poster = [];
let artists = [];
let seekTo = '';
let dir = '';
let playList = [];
let title = [];
let extension = '';
let agent = '';
let random = '';
let seeking = false;

console.log(playButton);
console.log(nextButton);
console.log(prevButton);
console.log(muteButton);
console.log(seekSlider);
console.log(volumesSlider);
console.log(currentTimeText);
console.log(durationTimeText);
console.log(playListStatus);
console.log(playListArtist);
console.log(repeat);
console.log(randomSong);

// Arrays

dir = './assets/music/';
playList = ['Cartoon-On-&-ON', 'Elektronomia', 'Johnning', 'Popsicle', 'Fearless'];
title = [('Cartoon - On & On', 'Elektronomia', 'Janji-Heroes Tonight', 'Popsicle', 'Lost Sky-Fearless')];

artists = [
  ('(feat. Daniel Levi) [NCS Release]',
  'Elektronomia-Sky High [NCS Release]',
  '(feat. Johnning) [NCS Release]',
  'LFZ - [NCS Release]',
  '(feat. Chris Linton) [NCS Release]'),
];

poster = ['./assets/images/ncs1.jpeg', './assets/images/ncs2.jpeg', './assets/images/ncs2.jpeg', './assets/images/ncs2.jpeg', './assets/images/ncs2.jpeg'];

// Accessibility

extension = '.mp3';
agent = navigator.userAgent.toLowerCase();

if (agent.includes('firefox') || agent.includes('opera')) {
  extension = '.ogg';
}
