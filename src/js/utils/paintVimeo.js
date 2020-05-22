import addPoster from './addPoster'

export default function paintVimeo(el, video) {
  video.meta.data
    .catch((err) => {
      console.error && console.error(err);
    })
    .then((res) => res.json())
    .then((json) => {
      addPoster(el, json[0].thumbnail_large);
      el.defaultInnerHTML = el.innerHTML;
    })
  ;
}
