import { html } from './htm+preact.js'

export const Article =
({ domain, points, title, url, time_ago: timeAgo, ...restOfprops }) => {
    const handlefav = () => {
        console.log('fav')
    }
    return html`<article>
    <a alt='${title}' href='${url}' target='_blank'>
    <h3>${title}</h3>
    <strong>${timeAgo}</strong>
    <strong> ${points}</strong>
    <span>${domain}</span>
    </a>
    <button onClick=${() => handlefav()}>click</button>
</article>`}
