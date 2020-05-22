export default function getIframe(src) {
  let iframe = document.createElement('iframe');
  iframe.setAttribute('class', 'o-video-player__video');
  iframe.setAttribute('width', '560');
  iframe.setAttribute('height', '315');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
  iframe.setAttribute('allowfullscreen', 'allowfullscreen');
  iframe.setAttribute('src', src);
  return iframe;
}
