import React from 'react';
import Card from './Cards/Card';
import "./Services.css";
import Heartimoji from "../../img/heartemoji.png";
import Glassesimoji from "../../img/glasses.png";
import Humbleimoji from "../../img/humble.png";
import Description from './Description/Description';
const Services = () => {
    return (
        <div className='services'>
            <Description hasButton="true" title1={"My Awesome"} title2={"services"} detail={"Lorem epsum is simplary dummy text of printing of printing lorem epsum.<br />Lorem epsum lorem epsum lorem epsum lorem epsum."}/>
            <div className="cards">
                <Card style={{left: "14rem"}} imoji={Heartimoji} heading={"Design"} detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe Xd"}/>
                <Card style={{left: "-4rem", top: "12rem"}} imoji={Glassesimoji} heading={"Developer"} detail={"HTML, CSS, JavaScript, React, NodeJS, Express"}/>
                <Card style={{left: "12rem", top: "19rem"}} imoji={Humbleimoji} heading={"UI/UX"} detail={"Figma, Canva, Photoshop, Adobe Illustrator"}/>

            </div>
        </div>
    );
}

export default Services;
