import React from 'react';
import Card from './Cards/Card';
import "./Services.css";
import Heartimoji from "../../img/heartemoji.png";
import Glassesimoji from "../../img/glasses.png";
import Humbleimoji from "../../img/humble.png";
import Description from './Description/Description';
const Services = () => {
    return (
        <div className='services' id='Services'>
            <Description hasButton="true" title1={"My Awesome"} title2={"services"} detail={"I provide awsome services including Web Design, Web Frontend Development, Responsive Frontend, UI and UX Design."}/>
            <div className="cards">
                <Card style={{left: "14rem"}} imoji={Heartimoji} heading={"Design"} detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe Xd"}/>
                <Card style={{left: "-4rem", top: "12rem"}} imoji={Glassesimoji} heading={"Developer"} detail={"HTML, CSS, JavaScript, React, NodeJS, Express"}/>
                <Card style={{left: "12rem", top: "19rem"}} imoji={Humbleimoji} heading={"UI/UX"} detail={"Figma, Canva, Photoshop, Adobe Illustrator"}/>

            </div>
        </div>
    );
}

export default Services;
