import getIframe from './getIframe';

let map = {
  youtube: {
    muted: mute,
    url: 'https://www.youtube.com/embed/{id}?autoplay=1{params}'
  },
  vimeo: {
    muted: muted,
    url: 'https://player.vimeo.com/video/{id}?autoplay=1{params}'
  }
};

export default function addIframe(el, video) {
  if (map[video.type]) {
    let params = '';

    if (video.muted) {
      params += '&'+map[video.type].muted+'=1';
    }

    if (video.mutedAtMobile) {
      if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 767) {
        params += '&muted=1';
      }
    }


    el.appendChild(getIframe(map[video.type].url.replace('{id}', video.id).replace('{params}', params)));
    el.iframedInnerHTML = el.innerHTML;
  }
}
