import React from "react"

function Header(props) {

    const {title} = props

        // <i id="minimizer" className="fa-solid fa-down-left-and-up-right-to-center right"></i>

    return (
        <div className="header">
            <i className="fa-brands fa-free-code-camp"></i>
            {title}
            <i id="maximizer" className="fa-solid fa-maximize right"></i>
        </div>
    )
}

export default Header