import React from 'react';
import  "./FloatingDiv.css";
const FloatingDiv = (props) => {
    return (
       <div className='floatingdiv'>
        <img src={props.image} alt="" />
        <span>{props.text}</span>
       </div>
       
    );
}

export default FloatingDiv;
