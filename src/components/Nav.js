import React from 'react';
import './Nav.css'; // Import the CSS file
import { Bars3Icon } from '@heroicons/react/20/solid';

const Nav = ({ openNav }) => {
    return (
        <div className='nav-container'>
            <div className='nav-inner'>
                <h1 className='logo'>
                    HI <span className='highlight'>Everyone</span>
                </h1>
                <div className='nav-links'>
                    <div className='nav-link'>Home</div>
                    <div className='nav-link'>Services</div>
                    <div className='nav-link'>About</div>
                    <div className='nav-link'>Blog</div>
                    <div className='nav-link'>Contact</div>
                </div>
                <div onClick={openNav} className='nav-icon'>
                    <span><Bars3Icon className='bars-icon' /></span>
                </div>
            </div>
        </div>
    );
}

export default Nav;
