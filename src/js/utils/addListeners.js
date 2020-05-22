import hasClass from './hasClass';
import toggleClass from './toggleClass';
import addIframe from './addIframe';
import PubSub from 'pubsub-js';

let toggle = function (el, video) {
  let isActivated = !hasClass(el, 'is-activated');
  toggleClass(el, 'is-activated', isActivated);

  if (isActivated) {
    addIframe(el, video);
    PubSub.publish('video-player-played', {el: el, video: video});
  } else {
    el.innerHTML = el.defaultInnerHTML;
  }
};

let onClick = function (e, el, video) {
  if (!hasClass(el, 'is-activated')) {
    toggle(el, video);
  }
};

let onPlayed = function (msg, data, el, video) {
  if (data.el !== el) {
    let isActivated = hasClass(el, 'is-activated');
    if (isActivated) {
      console.log('isActivated', isActivated);
      toggle(el, video);
    }
  }
};

export default function addListeners(el, video) {
  el.addEventListener('click', function (e) {
    onClick(e, el, video);
  });
  PubSub.subscribe('video-player-played', function (msg, data) {
    onPlayed(msg, data, el, video);
  });
}
