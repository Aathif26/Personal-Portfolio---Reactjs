import React from "react";

function Skills () {

    const header = {
        mainHeader: "Skills",
        subHeading: "Skills What I Acquired",
    };

    const state = [
        {
            id: 1,
            heading:"Programming Skills",
            text:<ul><li>Python</li>
                     <li>C</li>
                     <li>R</li>
                     <li>HTML</li>
                     <li>CSS</li>
                     <li>SQL</li></ul>
        },
        {
            id: 2,
            heading:"Professional Skills",
            text:<ul><li>Data Visualization</li>
                     <li>DataBase Management System</li>
                     <li>Machine Learning</li>
                     <li>Deep Learning</li>
                     <li>Computer Vision</li>
                     <li>Natural Language Processing</li></ul>
        },
        {
            id: 3,
            heading:"Tools",
            text:<ul><li>Tableau</li>
                     <li>Power BI</li>
                     <li>R studio</li>
                     <li>Google Colab</li>
                     <li>Excel</li>
                     <li>VS Code</li></ul>

        },
    ]

    return (
        <div id="Skills" className="skills">
            <div className="container">
                <div className="skills__header">
                    <div className="common">
                        <h6 className="heading">{header.mainHeader}</h6>
                        <h2 className="subheading">{header.subHeading}</h2>
                        <div className="commonBorder"></div>
                    </div>
                    <div className="row bgMain">
                        {state.map((info) => (
                            <div className="col-4 bgMain">
                                <div className="services__box">
                                    <img src={info.icon} alt="" className="commonIcons" />
                                    <h4 className="services__box-header">{info.heading}</h4>
                                    <p className="services__box-p">{info.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;