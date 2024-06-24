import React from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import './MobileNav.css'; // Import the CSS file
import { Link } from 'react-scroll';

const MobileNav = ({ nav, closeNav }) => {
    const navAnimation = nav ? 'translate-x-0' : 'translate-x-full';
    const handleLinkClick = () => {
        closeNav();
    };

    return (
        <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-10000 bg-[#09101a]`}>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <Link to="home" smooth={true} onClick={handleLinkClick} className='nav-link-mobile'>Home</Link>
                <Link to="services" smooth={true} onClick={handleLinkClick} className='nav-link-mobile'>Services</Link>
                <Link to="projects" smooth={true} onClick={handleLinkClick} className='nav-link-mobile'>Projects</Link>
                <Link to="blog" smooth={true} onClick={handleLinkClick} className='nav-link-mobile'>Blog</Link>
                <Link to="contact" smooth={true} onClick={handleLinkClick} className='nav-link-mobile'>Contact</Link>
            </div>
            <div><span><Bars3Icon className='bars-icon' /></span></div>
            <div onClick={closeNav} className='absolute cursor-pointer top-8 right-8 w-8 h-8 text-yellow-400'>
                <span>X</span>
            </div>
        </div>
    );
}

export default MobileNav;
