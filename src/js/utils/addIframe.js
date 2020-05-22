import getIframe from './getIframe';

let map = {
  youtube: 'https://www.youtube.com/embed/{id}?autoplay=1{params}',
  vimeo: 'https://player.vimeo.com/video/{id}?autoplay=1{params}'
};

export default function addIframe(el, video) {
  if(map[video.type]) {
    let params = '';
    if(video.muted) {
      params += '&muted=1';
    }
    el.appendChild(getIframe(map[video.type].replace('{id}', video.id).replace('{params}', params)));
    el.iframedInnerHTML = el.innerHTML;
  }
}
