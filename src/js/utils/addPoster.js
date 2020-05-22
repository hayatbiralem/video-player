export default function addPoster(el, url) {
  let poster = document.createElement('div');
  poster.setAttribute('class', 'o-video-player__poster');
  poster.setAttribute('style', 'background-image: url('+url+');');
  el.appendChild(poster);
}
