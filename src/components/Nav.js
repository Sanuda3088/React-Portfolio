import React from 'react';
import './Nav.css'; // Import the CSS file
import { Bars3Icon } from '@heroicons/react/20/solid';
import { Link } from 'react-scroll';

const Nav = ({ openNav }) => {
    return (
        <div className='nav-container'>
            <div className='nav-inner'>
                <h1 className='logo'>
                    HI <span className='highlight'>Everyone</span>
                </h1>
                <div className='nav-links'>
                    <Link to="about" smooth={true} className='nav-link'>About</Link>
                    <Link to="services" smooth={true} className='nav-link'>Services</Link>
                    <Link to="projects" smooth={true} className='nav-link'>Projects</Link>
                    <Link to="blog" smooth={true} className='nav-link'>Blog</Link>
                    <Link to="contact" smooth={true} className='nav-link'>Contact</Link>
                </div>
                <div onClick={openNav} className='nav-icon'>
                    <span><Bars3Icon className='bars-icon' /></span>
                </div>
            </div>
        </div>
    );
}

export default Nav;
