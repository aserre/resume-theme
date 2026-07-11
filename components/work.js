import html from '../utils/html.js'
import markdown from '../utils/markdown.js'
import Duration from './duration.js'
import Link from './link.js'

/** @typedef {NonNullable<import('../schema.d.ts').ResumeSchema['work']>[number]} Work */
/** @typedef {Pick<Work, 'highlights' | 'location' | 'position' | 'startDate' | 'endDate' | 'summary'>} NestedWorkItem */
/** @typedef {Pick<Work, 'description' | 'name' | 'url'> & { items: NestedWorkItem[] }} NestedWork */

/**
 * @param {import('../schema.d.ts').ResumeSchema['work']} work
 * @returns {string | false}
 */
export default function Work(work = []) {
  const nestedWork = work.reduce((acc, { description, name, url, ...rest }) => {
    const prev = acc[acc.length - 1]
    if (prev && prev.name === name) prev.items.push(rest)
    else acc.push({ description, name, url, items: [rest] })
    return acc
  }, /** @type {NestedWork[]} */ ([]))

  return (
    work.length > 0 &&
    html`
      <section id="work">
        <h3>Work Experience</h3>
        <div class="stack">
          ${nestedWork.map(
            ({ description, name, url, items = [] }) => html`
              <article>
                <header>
                  <h4>${Link(url, name)}</h4>
                  <div>${description && html`<div>${description}</div>`}</div>
                </header>
                <div class="timeline">
                  ${items.map(
                    ({ highlights = [], location, position, startDate, endDate, summary }) => html`
                      <div>
                        <div class="title">
                          <h5>${position}</h5>
                          ${startDate && html`${Duration(startDate, endDate)}`}
                          ${location && html`<div class="tag">${location}</div>`}
                        </div>
                        <div class="meta">${summary && markdown(summary)}</div>
                        ${highlights.length > 0 &&
                        html`
                          <ul class="highlights">
                            ${highlights.map(highlight => html`<li>${markdown(highlight)}</li>`)}
                          </ul>
                        `}
                      </div>
                    `,
                  )}
                </div>
              </article>
            `,
          )}
        </div>
      </section>
    `
  )
}
