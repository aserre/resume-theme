import Awards from './components/awards.js'
import Certificates from './components/certificates.js'
import Education from './components/education.js'
import Header from './components/header.js'
import Interests from './components/interests.js'
import Languages from './components/languages.js'
import Meta from './components/meta.js'
import Projects from './components/projects.js'
import Publications from './components/publications.js'
import References from './components/references.js'
import Skills from './components/skills.js'
import Volunteer from './components/volunteer.js'
import Work from './components/work.js'
import colors from './utils/colors.js'
import html from './utils/html.js'

/**
 * @param {import('./schema.d.ts').ResumeSchema} resume
 * @param {string} css
 * @returns
 */
export default function Resume(resume, css) {
  return html`<!doctype html>
    <html lang="en" style="${colors(resume.meta)}">
      <head>
        <meta charset="utf-8" />
        ${Meta(resume.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Google+Sans:400,600&display=swap" />
        <link
          href="favicons/light-16.png"
          sizes="16x16"
          type="image/png"
          rel="shortcut icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="favicons/light-32.png"
          sizes="32x32"
          type="image/png"
          rel="shortcut icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="favicons/light-96.png"
          sizes="96x96"
          type="image/png"
          rel="shortcut icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="favicons/dark-16.png"
          sizes="16x16"
          type="image/png"
          rel="shortcut icon"
          media="(prefers-color-scheme: dark)"
        />
        <link
          href="favicons/dark-32.png"
          sizes="32x32"
          type="image/png"
          rel="shortcut icon"
          media="(prefers-color-scheme: dark)"
        />
        <link
          href="favicons/dark-96.png"
          sizes="96x96"
          type="image/png"
          rel="shortcut icon"
          media="(prefers-color-scheme: dark)"
        />
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${Header(resume.basics)}
        <div class="content">
          <div class="main">${Work(resume.work)}</div>
          <div class="side">
            ${Volunteer(resume.volunteer)} ${Education(resume.education)} ${Projects(resume.projects)}
            ${Awards(resume.awards)} ${Certificates(resume.certificates)} ${Publications(resume.publications)}
            ${Skills(resume.skills)} ${Languages(resume.languages)} ${Interests(resume.interests)}
            ${References(resume.references)}
          </div>
        </div>
      </body>
    </html>`
}
