import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const saveToLocalStorage = throttle((time) => {
  localStorage.setItem('videoplayer-current-time', time);
}, 1000);

const loadFromLocalStorage = () => {
  return parseFloat(localStorage.getItem('videoplayer-current-time')) || 0;
};

const initPlayer = () => {
  const iframe = document.getElementById('vimeo-player');
  const player = new Player(iframe);

  player.on('timeupdate', (data) => {
    const currentTime = data.seconds;
    saveToLocalStorage(currentTime);
  });

  player.setCurrentTime(loadFromLocalStorage());
};

window.onload = initPlayer;