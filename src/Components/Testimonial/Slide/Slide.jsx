import React from 'react';
import "./Slide.css";
const Slide = (props) => {
    return (
        <div className='slide'>
            <img src={props.img} alt='profile-photo'/>
            <span>{props.review}</span>
        </div>
    );
}

export default Slide;
