import getYoutubePoster from './getYoutubePoster';
import getVimeoData from './getVimeoData';

let map = {
  youtube: [
    {
      "name": "poster",
      "func": getYoutubePoster
    }
  ],
  vimeo: [
    {
      "name": "data",
      "func": getVimeoData
    }
  ]
};

export default function getVideoMeta(type, id) {
  let result = false;
  if(map[type]) {
    result = {};
    map[type].forEach(function(item){
      result[item.name] = item.func(id);
    });
  }
  return result;
}
