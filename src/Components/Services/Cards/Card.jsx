import React from 'react';
import "./Card.css";
const Card = (props) => {
    return (
        <div style={props.style} className='card'>
            <img src={props.imoji} alt="imoji" />
            <span>{props.heading}</span>
            <span>{props.detail}</span>
            <button className='c-button'>LEARN MORE</button>
        </div>
    );
}

export default Card;
