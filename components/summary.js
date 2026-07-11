import html from '../utils/html.js'
import markdown from '../utils/markdown.js'

/**
 * @param {string} summary
 * @returns {string | false}
 */
export default function Summary(summary = '') {
  return (
    summary &&
    html`
      <section id="summary">
        <h3>Summary</h3>
        <article class="summary">${markdown(summary)}</article>
      </section>
    `
  )
}
