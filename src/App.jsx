// import { useState } from 'react'
import Editor from "./Components/Editor.jsx"
import Previewer from "./Components/Previewer.jsx"

function App() {
  // const [text, setText] = useState("default")

  return (
    <div className="App">
      <Editor />
      <Previewer />
    </div>
  )
}

export default App
