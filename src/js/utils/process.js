import each from './each';
import ifNotProcessed from './ifNotProcessed';
import resolveVideoUrl from './resolveVideoUrl';
import paintVideo from './paintVideo';
import addListeners from './addListeners';

/**
 * Process
 */

export default function process() {

  each('.o-video-player', function (el) {
    if(ifNotProcessed(el)) {

      // Gotta encode the untrusted value
      // https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#rule-2---attribute-escape-before-inserting-untrusted-data-into-html-common-attributes
      let url = encodeURI(el.getAttribute('data-url'));

      let video = resolveVideoUrl(url);
      if(video) {
        window[video.type] = video;
        console.log(video);
        paintVideo(el, video);
        addListeners(el, video);
      }
    }
  });

}
