import html from '../utils/html.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema['languages']} languages
 * @returns {string | false}
 */
export default function Languages(languages = []) {
  return (
    languages.length > 0 &&
    html`
      <section id="languages">
        <h3>Languages</h3>
        <div class="grid-list">
          ${languages.map(
            ({ fluency }) => html`<div class="title">${fluency && html`<div class="tag">${fluency}</div>`}</div>`,
          )}
        </div>
      </section>
    `
  )
}
