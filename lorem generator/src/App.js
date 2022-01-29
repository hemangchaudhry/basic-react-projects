import React, { useState } from "react"
import data from "./data"
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  const handlesubmit = (e) => {
    e.preventDefault()
    setText(data.slice(0, count))
  }
  return (
    <section className="section-center">
      <h3>tired for boring lorem ipsum</h3>
      <form onSubmit={handlesubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => {
            setCount(e.target.value)
          }}
        />
        <button type="submit" className="btn">
          genarate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App
