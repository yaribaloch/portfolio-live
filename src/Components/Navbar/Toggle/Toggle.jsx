import React, {useState} from 'react';
import "./Toggle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
const Toggle = () => {
const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="toggle">
            <Sun />
            <Moon />
            <div style={darkMode? {right: "0px"}:{left: "0px"}} className='t-button'></div>
        </div>
    );
}

export default Toggle;
