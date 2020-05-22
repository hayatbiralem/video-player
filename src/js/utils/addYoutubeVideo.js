export default function addYoutubeVideo(el, videoId, onReady, onComplete, playerTargetHolder) {
  let player = new YT.Player(el, {
    videoId: videoId,
    host: 'https://www.youtube.com',
    playerVars: { autoplay: 1, modestbranding: 1, rel: 0, showinfo: 0, controls: 1 },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
    onReady && onReady(player, event);

    if(playerTargetHolder) {
      window[playerTargetHolder][videoId] = event.target;
    }
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  let done = false;
  function onPlayerStateChange(event) {
    if (event.data === 0 && !done) {
      done = true;
      if(onComplete) {
        setTimeout(function () {
          // player.stopVideo();
          onComplete(event);
        }, 500);
      }
    }
  }
}
