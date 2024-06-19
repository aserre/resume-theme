/**
 * @param {string} value
 * @returns
 */
export default function nl2br(value) {
  return (value || '').replace(/\n/g, '<br>')
}
