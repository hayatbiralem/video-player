import process from './utils/process';
import '../scss/demo.scss';
import '../scss/video-player.scss';
import '../scss/youtube-play.scss';
import '../scss/vimeo-play.scss';

window.processVideoPlayer = process;

export default function init(){
  process();
}
