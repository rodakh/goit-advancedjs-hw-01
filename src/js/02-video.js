import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const onTimeUpdate = throttle((data) => {
  console.log('Time update data:', data);
  if (data && data.seconds !== undefined) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
  }
}, 1000);

player.on('timeupdate', onTimeUpdate);

const savedTime = localStorage.getItem(STORAGE_KEY);
if (savedTime) {
  (async () => {
    try {
      await player.setCurrentTime(parseFloat(savedTime));
      console.log(`Resumed from ${savedTime} seconds`);
    } catch (error) {
      console.error('Error setting current time:', error);
    }
  })();
}
