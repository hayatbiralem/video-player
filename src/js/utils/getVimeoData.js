import fetch from 'node-fetch';
export default function getVimeoData(id) {
  return fetch('//vimeo.com/api/v2/video/'+id+'.json');
}
