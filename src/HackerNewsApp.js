import { html, useState, useEffect } from './htm+preact.js'
import { Article } from './Article.js'

export default function HackerNewsApp () {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  useEffect(function () {
    setLoading(true)
    fetch('https://api.hnpwa.com/v0/news/1.json')
      .then((res) => res.json())
      .then((response) => {
        console.log(response)
        setLoading(false)
        setData(response)
      })
  }, []) 
  return html`<main>
    ${loading && html`<h1>Cargando...</h1>`}
    ${loading === false &&
    data.map((article) => html`<${Article} ...${article} />`)}
  </main>`
}
