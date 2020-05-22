import '../scss/demo.scss';
import '../scss/video-player.scss';
import '../scss/youtube-play.scss';
import '../scss/vimeo-play.scss';

import process from './utils/process';
import ready from './utils/ready';

window.processVideoPlayer = process;

export default function init(){
  ready(function(){
    process();
  });
}
