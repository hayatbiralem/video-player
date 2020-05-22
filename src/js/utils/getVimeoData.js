import ajax from 'old-fashioned-ajax';
export default function getVimeoData(id) {
  return ajax('https://vimeo.com/api/v2/video/'+id+'.json');
}
