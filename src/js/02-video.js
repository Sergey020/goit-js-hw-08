import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', throttle(getCurrentTime, 1000));

function getCurrentTime(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

const currentTime = localStorage.getItem('videoplayer-current-time')
  ? localStorage.getItem('videoplayer-current-time')
  : 0;

player.setCurrentTime(currentTime);
