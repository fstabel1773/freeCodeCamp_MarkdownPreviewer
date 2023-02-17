import { useState } from 'react'

import Editor from "./Components/Editor.jsx"
import Previewer from "./Components/Previewer.jsx"

import defaultText from './assets/defaultText.js'

import "./index.css"


function App() {
  const [text, setText] = useState(defaultText)
  const [display, setDisplay] = useState("main")

  function handleInput(event) {
    const {value} = event.target;
    setText(value)
  }

  function handleDisplay(name) {
    name === display ? setDisplay("main") : setDisplay(name)
    console.log(name)
  }

  function handleClear() {
    setText("")
  }

  return (
    <div id="app-wrapper">
      {(display === "main" || display === "editor") 
        && <Editor 
          content={text}
          handleInput={handleInput} 
          display={display}
          handleDisplay={handleDisplay}
          handleClear={handleClear} />
      }
      {(display === "main" || display === "previewer") 
        && <Previewer 
          content={text}
          display={display}
          handleDisplay={handleDisplay} />
      }
    </div>
  )
}

export default App
