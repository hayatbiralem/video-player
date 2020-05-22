/**
 * Get Vimeo ID
 *
 * @source https://stackoverflow.com/a/11660798/1227926
 * @param url
 * @returns {*}
 */
export default function getVimeoId(url) {
  let match = url.match(/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/);

  if (match && match[5]) {
    return match[5];
  }

  return 0;
}
