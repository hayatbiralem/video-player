import getYoutubeId from "./getYoutubeId";
import getVimeoId from "./getVimeoId";
import getVideoMeta from "./getVideoMeta";

export default function resolveVideoUrl(url) {

  let map = [
    {
      type: 'youtube',
      func: getYoutubeId
    },
    {
      type: 'vimeo',
      func: getVimeoId
    },
  ];

  let type = false;
  let id = false;
  let meta = false;
  map.forEach(function(item){
    if(!id) {
      let subId = item.func(url);
      if(subId) {
        id = subId;
        type = item.type;
        meta = getVideoMeta(type, id);
      }
    }
  });

  if(id) {
    return {
      id: id,
      meta: meta,
      type: type,
      url: url
    }
  } else {
    return false;
  }
}
