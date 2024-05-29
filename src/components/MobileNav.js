import React from 'react';
import './MobileNav.css'; // Import the CSS file

const MobileNav = ({ nav, closeNav }) => {
    const navAnimation = nav ? 'translate-x-0' : 'translate-x-full';

    return (
        <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-10000 bg-[#09101a]`}>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className='nav-link-mobile'>Home</div>
                <div className='nav-link-mobile'>Services</div>
                <div className='nav-link-mobile'>About</div>
                <div className='nav-link-mobile'>Blog</div>
                <div className='nav-link-mobile'>Contact</div>
            </div>
            <div onClick={closeNav} className='absolute cursor-pointer top-8 right-8 w-8 h-8 text-yellow-400'>
                <span>X</span>
            </div>
        </div>
    );
}

export default MobileNav;
