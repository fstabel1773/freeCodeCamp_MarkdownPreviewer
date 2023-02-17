import React from "react"
import Header from "./Header.jsx"
import Markdown from 'marked-react';

function Previewer(props) {

    const {content, display, handleDisplay} = props

    return (
        <div className="container container--previewer">
            <Header title="Previewer" name="previewer" display={display} handleDisplay={handleDisplay} />
            <div id="preview">
                <Markdown 
                    value={content}
                    openLinksInNewTab={true}
                    breaks={true}
                    gfm={true} 
                    isInline={false}   
                ></Markdown>
            </div>
        </div>
    )
}

export default Previewer