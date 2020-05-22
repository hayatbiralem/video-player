import getIframe from './getIframe';

let map = {
  youtube: 'https://www.youtube-nocookie.com/embed/{id}?autoplay=1&playsinline=1',
  vimeo: 'https://player.vimeo.com/video/{id}?autoplay=1&playsinline=true'
};

export default function addIframe(el, video) {
  if(map[video.type]) {
    el.appendChild(getIframe(map[video.type].replace('{id}', video.id)));
    el.iframedInnerHTML = el.innerHTML;
  }
}
