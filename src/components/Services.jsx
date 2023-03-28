import React from "react";

function Services () {

    const header = {
        mainHeader: "Services",
        subHeading: "Works which I Provide",
    };

    const state = [
        {
            id: 1,
            icon:'./images/service_icon-1.png',
            heading:"Article Writing",
        },
        {
            id: 2,
            icon: './images/service_icon-2.png',
            heading:"Web Design",
        },
        {
            id: 3,
            icon: './images/service_icon-3.png',
            heading:"Web Development",
        },
        {
            id: 4,
            icon: './images/service_icon-4.png',
            heading:"Video Editing",
        },
    ]
    return (
        <div id="Services" className="services">
            <div className="container">
                <div className="services__header">
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

export default Services;