import { useState } from 'react'
import Editor from "./Components/Editor.jsx"
import Previewer from "./Components/Previewer.jsx"
import "./index.css"
import defaultText from './assets/defaultText.js'

function App() {
  const [text, setText] = useState(defaultText)

  function handleInput(event) {
    const {value} = event.target;
    setText(value)
  }

  return (
    <div id="app-wrapper">
      <Editor content={text} handleInput={handleInput} />
      <Previewer content={text} />
    </div>
  )
}

export default App
