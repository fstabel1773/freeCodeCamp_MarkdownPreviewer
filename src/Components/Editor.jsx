import React from "react"
import Header from "./Header.jsx"

function Editor(props) {

    const {content, handleInput } = props

    return (
        <div className="container container--editor">
            <Header title="Editor" />
            <textarea 
                id="editor"
                name="editor"
                value={content}
                onChange={handleInput}
                spellCheck={true}
                disabled={false}
                placeholder={"Enter markdown text here..."}
                rows={10} />
        </div>
    )

}

export default Editor