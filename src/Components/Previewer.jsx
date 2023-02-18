import React from "react"
import Header from "./Header.jsx"
import DOMPurify from "dompurify";
import { marked } from "marked"
import hljs from 'highlight.js';

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
      },
    langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: true,
    smartLists: true,
    sanitize: false,
    smartypants: false,
    xhtml: false
  });
  

function Previewer(props) {

    const {content, display, handleDisplay} = props

    const markdown = marked.parse(content)
    console.log(markdown)

    return (
        <div className="container">
            <Header title="Previewer" name="previewer" display={display} handleDisplay={handleDisplay} />
            <div id="preview" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(markdown) }}>
            </div>
        </div>
    )
}

export default Previewer