import React from "react";
import {FaAlignJustify} from 'react-icons/fa'
function NavBar () {
    const [state, setstate] = React.useState(true);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <div className="navbar__left-logo">
                            <h1>Portfolio</h1>
                            <img src="" alt="" />
                        </div>
                    </ul>
                    {state ? (
                        <ul className="navbar__right">
                            <li><a href="Home">Home</a></li>
                            <li><a href="#About">About</a></li>
                            <li><a href="#Skills">Skills</a></li>
                            <li><a href="#Services">Services</a></li>
                            <li><a href="#Projects">Projects</a></li>
                            <li><a href="#Contact">Contact</a></li>
                        </ul>
                    ): (
                        ""
                    )}
                </div>
            </div>
            <div className="toggle" onClick={() => setstate(!state)}>
                <FaAlignJustify />
            </div>
        </nav>
    )
}

export default NavBar;