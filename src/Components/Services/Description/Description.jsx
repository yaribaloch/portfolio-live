import React from 'react';
import "./Description.css";
import Resume from "../resume.pdf";
const Description = (props) => {
    return (
        <div className='description'>
                <span>{props.title1}</span> 
                <span>{props.title2}</span>
                <span>{props.detail}</span>
                {props.hasButton=="true"?  <a style={{textDecoration: "none"}} href={Resume} download><div className="button s-button">Download CV</div></a> : null}
                
                <div className='blur c-blur' style={{background:"var(--yellow)"}}></div>
        </div>
    );
}

export default Description;
