import paintYoutube from './paintYoutube';
import paintVimeo from './paintVimeo';

let map = {
  youtube: paintYoutube,
  vimeo: paintVimeo
};

export default function paintVideo(el, video) {
  if(map[video.type]) {
    map[video.type](el, video);
  }
}
