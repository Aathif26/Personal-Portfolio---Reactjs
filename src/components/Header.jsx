import React from "react";

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header-section">
                                <h2>Hello, I Am</h2>
                                <h1>Aathif</h1>
                                <p>An Artificial Intelligence Enthusiast in <br />eager to learn and grow</p>
                                <div className="header__buttons">
                                    <a href="header" className="btn btn-outline">
                                        Hire Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src="./images/pic_1.png" alt="" className="image"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;