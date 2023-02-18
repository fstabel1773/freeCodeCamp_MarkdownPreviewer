import React, {useRef} from "react" 
import Header from "./Header.jsx"

function Editor(props) {
    const {content, handleInput, display, handleDisplay, handleClear} = props
    
    const textAreaRef = useRef(null);
    const textAreaScrollHeight = textAreaRef.current 
        ? textAreaRef.current.scrollHeight + 5
        : 0 

    let stylesContainer = {
        width: "90%",
        margin: "0 auto 2em",
    }
    let stylesEditor = {
        overflowY: "scroll",
        height: "16em"
    }
    if (display === "editor") {
        stylesContainer = {
            width: "100%",
            margin: "0 auto"
        }
        stylesEditor = {
            overflowY: "unset",
            height: textAreaScrollHeight,
        }
    }

    return (
        <div className="container" style={stylesContainer}>
            <Header 
                title="Editor" 
                name="editor" 
                display={display} 
                handleDisplay={handleDisplay} 
                handleClear={handleClear}
            />
            <textarea 
                id="editor"
                name="editor"
                ref={textAreaRef}
                value={content}
                onChange={handleInput}
                spellCheck={true}
                disabled={false}
                placeholder={"Enter markdown text here..."}
                style={stylesEditor}
            />
        </div>
    )
}

export default Editor