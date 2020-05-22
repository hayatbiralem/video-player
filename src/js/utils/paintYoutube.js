import addPoster from './addPoster'

export default function paintYoutube(el, video) {
  addPoster(el, video.meta.poster);
  el.defaultInnerHTML = el.innerHTML;
}
