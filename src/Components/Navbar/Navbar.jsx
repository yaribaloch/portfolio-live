import React from 'react';
import "./Navbar.css";
import Toggle from "./Toggle/Toggle.jsx";
import { Link } from 'react-scroll';
const Navbar = () => {
    return (
        <div className="n-wrapper" id='Navbar'>
        <div className="n-left">
            <div className="n-name">Yasir</div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                <Link spy={true} to="Navbar" smooth={true} activeClass='activeClass'>
                    <li className='l-item'>Home</li>
                    </Link>
                    <Link spy={true} to="Services" smooth={true} activeClass='activeClass'>
                    <li className='l-item'>Services</li>
                    </Link>
                    <Link spy={true} to="Experience" smooth={true} activeClass='activeClass'>
                    <li className='l-item'>Experience</li>
                    </Link>
                    <Link spy={true} to="Portfolio" smooth={true} activeClass='activeClass'>
                    <li className='l-item'>Portfolio</li>
                    </Link>
                    <Link spy={true} to="Testimonial" smooth={true} activeClass='activeClass'>
                    <li className='l-item'>Testimonial</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} to="Contact" smooth={true} activeClass='activeClass'>
            <button className="button n-button">Contact</button>
            </Link>
        </div> 
        </div>
    );
}

export default Navbar;
