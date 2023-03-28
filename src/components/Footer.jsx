import React from "react";
import { FaLinkedinIn, FaMedium, FaMailBulk } from "react-icons/fa";
function Footer () {
    return (
        <div className="footer">
            <div className="container">
                <div className="footerSection">
                    <div className="row justifyConter">
                        <div className="footer-content">
                            <div className="footer-section-logo">
                                <img src="" alt="" />
                                <h1>Portfolio</h1>
                            </div>
                            <ul className="footerCircles">
                                <li><a href="https://www.linkedin.com/in/aathif-b-99b8b2225/"><FaLinkedinIn className="footerIcon"/></a></li>
                                <li><a href="https://medium.com/@aathif"><FaMedium className="footerIcon"/></a></li>
                                <li><a href="mailto:aathif0710@gmail.com"><FaMailBulk className="footerIcon"/></a></li>

                            </ul>
                            <div className="copy-right-content">
                                <p className="copyright">Copyright {new Date().getFullYear()} All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Footer;