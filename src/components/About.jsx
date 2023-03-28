import React from "react";

function About () {
    return(
        <div id="#about" className="about">
            <div className="container">

                <div className="common">
                    <h1 className="about-title">About Me</h1>
                    <div className="underline-border"></div>
                </div>
                <div className="row h-650 alignCenter">
                    <div className="col-6">
                        <div className="about__img">
                            <img src="./images/about.png" alt="" />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="about__info">
                            <h1>Data Analyst & AI Developer <br /> based in Tamilnadu, India</h1>
                            <div className="about__info">
                                <p>
                                    I am an Data Analyst and AI Developer, and I'm very passionate and dedicated to <br /> my work.
                                    As a AI Developer, I have acquired the skills and knowledge necessary to make your project a success.
                                    <br />I enjoy and very focussed in the every step of process from the projects and collaboration.
                                </p>
                                <div className="about__buttons">
                                    <a href="./resume.pdf" download className="btn btn-outline">
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;