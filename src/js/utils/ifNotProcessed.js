/**
 * If Not Processed
 *
 * @param el
 * @param attrName
 * @returns {boolean}
 */
export default function ifNotProcessed(el, dataAttrName) {
  dataAttrName = dataAttrName || 'processed';
  dataAttrName = 'data-' + dataAttrName;

  if (el.getAttribute(dataAttrName) !== '1') {
    el.setAttribute(dataAttrName, '1');
    return true;
  }

  return false;
}
