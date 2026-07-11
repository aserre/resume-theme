import html from '../utils/html.js'
import markdown from '../utils/markdown.js'
import Duration from './duration.js'
import Link from './link.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema['education']} education
 * @returns {string | false}
 */
export default function Education(education = []) {
  return (
    education.length > 0 &&
    html`
      <section id="education">
        <h3>Education</h3>
        <div class="stack">
          ${education.map(
            ({ area, courses = [], institution, startDate, endDate, studyType, url }) => html`
              <article>
                <header class="title">
                  <h4>${Link(url, institution)}</h4>
                  ${startDate && html`${Duration(startDate, endDate, true)}`}
                </header>
                <div class="title">
                  <h5>${area}</h5>
                </div>
                ${studyType && markdown(studyType)}
                ${courses.length > 0 &&
                html`
                  <h5>Courses</h5>
                  <ul>
                    ${courses.map(course => html`<li>${markdown(course)}</li>`)}
                  </ul>
                `}
              </article>
            `,
          )}
        </div>
      </section>
    `
  )
}
