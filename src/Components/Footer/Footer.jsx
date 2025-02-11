import React from 'react';
import "./Footer.css";
import Wave from "../../img/wave.png";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
const Footer = () => {
    return (
        <div className='footer'>
            <img src={Wave} alter="wave"/>
            <div className="f-content">
                <span>myarikhan555@gmail.com</span>
                <div className="f-icons">
                <Instagram color={"white"} size={"3rem"}/>
                <Facebook color={"white"} size={"3rem"}/>
                <Github color={"white"} size={"3rem"}/>
                </div>
                
            </div>
        </div>
    );
}

export default Footer;
