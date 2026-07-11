import html from '../utils/html.js'

/**
 * @param {string} dateString
 * @param {boolean} [yearOnly]
 * @returns {string}
 */
const formatDate = (dateString, yearOnly) =>
  new Date(dateString).toLocaleDateString('en', {
    month: yearOnly ? undefined : 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })

/**
 * @param {string} date
 * @param {boolean} [yearOnly]
 * @returns {string}
 */
export default function Duration(date, yearOnly) {
  return html`${formatDate(date, yearOnly)}`
}
