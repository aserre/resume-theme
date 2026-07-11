import html from '../utils/html.js'
import Icon from './icon.js'
import Link from './link.js'
import Summary from './summary.js'

/**
 * @param {string} countryCode
 * @returns {string | undefined}
 */
const formatCountry = countryCode =>
  Intl.DisplayNames ? new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode) : countryCode

/**
 * @param {import('../schema.d.ts').ResumeSchema['basics']} basics
 * @returns {string}
 */
export default function Header(basics = {}) {
  const { email, image, label, location, name, phone, profiles = [], summary, url } = basics

  return html`
    <header class="header">
      ${image && html`<img src="${image}" alt="" />`}
      <div class="main">${Summary(summary)}</div>
      <div class="${summary ? 'side' : 'main'}">
        <section id="identity">
          ${name && html`<h1>${Link(url, name)}</h1>`} ${label && html`<h2>${label}</h2>`}
          <ul class="icon-list">
            ${location?.city &&
            html`
              <li class="title tag">
                ${Icon('compass')}
                <div>${location.city}${location.countryCode && html`, ${formatCountry(location.countryCode)}`}</div>
              </li>
            `}
            ${email &&
            html`
              <li class="title tag">
                ${Icon('mail')}
                <a href="mailto:${email}">${email}</a>
              </li>
            `}
            ${phone &&
            html`
              <li class="title">
                ${Icon('phone')}
                <a href="tel:${phone.replace(/\s/g, '')}">${phone}</a>
              </li>
            `}
            ${profiles.map(
              ({ network, url, username }) => html`
                <li class="title">
                  ${network && Icon(network, 'user')} ${Link(url, username)}
                  ${network && html`<span class="network">(${network})</span>`}
                </li>
              `,
            )}
          </ul>
        </section>
      </div>
    </header>
  `
}
