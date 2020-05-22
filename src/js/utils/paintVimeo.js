import addPoster from './addPoster'
export default function paintVimeo(el, video) {
  video.meta.data(
    {
      success: function (res) {
        addPoster(el, res[0].thumbnail_large);
        el.defaultInnerHTML = el.innerHTML;
      },
      error: function (res) {
        console.error && console.error(res);
      }
    }
  );
}
