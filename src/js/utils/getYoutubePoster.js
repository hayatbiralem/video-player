/**
 * Get Youtube Poster
 *
 * See available sizes from https://stackoverflow.com/a/2068371/1227926
 *
 * @param id
 * @param size
 * @returns {string}
 */
export default function getYoutubePoster(id, size) {
  size = size || 'sddefault';
  return 'https://i.ytimg.com/vi/'+id+'/'+size+'.jpg';
}
