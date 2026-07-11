import html from '../utils/html.js'
import DurationDate from './date.js'

/**
 * @param {string} startDate
 * @param {string} [endDate]
 * @param {boolean} [yearOnly]
 * @returns {string}
 */
export default function Duration(startDate, endDate, yearOnly) {
  return html` <div class="duration">
    ${endDate && yearOnly && new Date(startDate).getFullYear() == new Date(endDate).getFullYear()
      ? DurationDate(startDate, yearOnly)
      : html`${DurationDate(startDate, yearOnly)} – ${endDate ? DurationDate(endDate, yearOnly) : 'Present'}`}
  </div>`
}
