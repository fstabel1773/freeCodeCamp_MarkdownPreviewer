import React from "react"

function Header(props) {

    const {title, name, display, handleDisplay, handleClear} = props

    const screenMode = display === name
        ? <i
            className="fa-solid fa-down-left-and-up-right-to-center right btn"
            onClick={() => handleDisplay(name)}>
        </i>
        : <i
            className="fa-solid fa-maximize right btn"
            onClick={() => handleDisplay(name)}>
        </i>

    return (
        <div className="header">
            <i className="fa-brands fa-free-code-camp"></i>
            {title}
            {name === "editor" 
                && <i 
                    className="fa-solid fa-delete-left right btn"
                    onClick={handleClear}
                ></i>}
            {screenMode}
        </div>
    )
}

export default Header