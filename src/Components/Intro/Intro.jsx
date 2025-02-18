import React from 'react';
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Boy from "../../img/boy.png";
import Crown from "../../img/crown.png";
import Glasseseimoji from "../../img/glassesimoji.png";
import Thumbup from "../../img/thumbup.png";
import Bluevector from "../../img/Vector1.png";
import OrangeVector from "../../img/Vector2.png";
import FloatingDiv from './FloatingDiv/FloatingDiv';
const Intro = () => {
    return (
        <div className='intro'>             
            <div className="i-left">
            <div className='i-name'>
                <span>Hy! I Am</span>
                <span>Yasir Tufail</span>
                <span>Frontend Developer with high level of experience in web desigsning and development, producing the quality work.</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-social">
                <img src={Github} alt="githubicon" />
                <img src={Linkedin} alt="githubicon" />
                <img src={Instagram} alt="githubicon" />
            </div>
            </div>
            <div className="i-right">
                <img src={Bluevector} alt="Bluevector" />
                <img src={OrangeVector} alt="OrangeVector" />
                <img src={Boy} alt="boy" />
                <img src={Glasseseimoji} alt="Glasseseimoji" />
                <div style={{top: '-2%', right:'4%' }}>
                <FloatingDiv image={Crown} text={"Web Developer"} />
                </div>
                <div style={{bottom: '-7%', left:'4%' }}>
                <FloatingDiv image={Thumbup} text={"Graphics Design"} />
                </div>
                <div className="blurDiv" style={{background: "var(--purple)", top: "-18%", left: "56%"}}></div>
                <div className="blurDiv" style={{background: " var(--blueCard)", top: "17rem", left: "-9rem"}}></div>
            </div>
        </div>
    );
}

export default Intro;
