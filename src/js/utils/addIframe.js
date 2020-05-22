import removeClass from './removeClass';
import getIframe from './getIframe';
import loadYoutubeAPI from './loadYoutubeAPI';
import addYoutubeVideo from './addYoutubeVideo';

let playerTargetHolder = 'videoPlayerVideos';
window[playerTargetHolder] = {};

let map = {
  youtube: {
    muted: 'mute',
    url: 'https://www.youtube.com/embed/{id}?autoplay=1{params}'
  },
  vimeo: {
    muted: 'muted',
    url: 'https://player.vimeo.com/video/{id}?autoplay=1{params}'
  }
};

export default function addIframe(el, video) {
  if (map[video.type]) {

    if(video.type === 'youtube') {
      loadYoutubeAPI(function(){
        let playerHolder = document.createElement('div');
        playerHolder.setAttribute('class', 'o-video-player__video');
        el.appendChild(playerHolder);
        addYoutubeVideo(
          playerHolder,
          video.id,
          function (player, event) {
            removeClass(el, 'is-loading');
          },
          function () {
            // video complete
          },
          playerTargetHolder
        );
      });
    } else {
      let params = '';

      if (video.muted) {
        params += '&'+map[video.type].muted+'=1';
      }

      if (video.mutedAtMobile) {
        if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 767) {
          params += '&'+map[video.type].muted+'=1';
        }
      }

      el.appendChild(getIframe(map[video.type].url.replace('{id}', video.id).replace('{params}', params)));
    }

  }
}
