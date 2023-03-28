import React, { useState } from "react";
import './projects.css';
import data from './data';

function Projects () {
    const [item, setItem] = useState(data);
    const filterItem = (cateItem) => {
        const updateItem = data.filter((curElem) => {
            return curElem.category === cateItem
        })
        setItem(updateItem)
    }
    return(
        <section id="Projects" className="portfolio mtop">
            <div className="container">

                <div className="head flexSB">
                    <div className="left">
                        <h6>Projects</h6>
                        <h2>What I have done in my academic career</h2>
                    </div>
                </div>
                <div className="links">
                    <ul className="flexSB">
                        <li className="active" onClick={()=> setItem(data)}>All</li>
                        <li onClick={()=> filterItem("Computer Vision")}>Computer Vision</li>
                        <li onClick={()=> filterItem("Machine Learning")}>Machine Learning</li>
                        <li onClick={()=> filterItem("Data Visualization")}>Data Visualization</li>
                        <li onClick={()=> filterItem("Mern Stack")}>Mern Stack</li>
                    </ul>
                </div>
                <div className="content grid mtop">
                    {item.map((elem) => {
                        const {cover, title} = elem;
                        return(
                            <div className="box">
                                <div className="img">
                                    <img src={cover} alt="" />
                                </div>
                                <div className="overlay">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects;