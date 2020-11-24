import { audio, poster, artists, seekTo, dir, playList, title, extension, agent, seeking } from './assets/modules/variables.js';

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

console.log(playButton);
