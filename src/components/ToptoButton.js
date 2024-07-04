import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './ToptoButton.css';

const ToptoButton = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 3000) {
            setVisible(true);
        }
        else if (scrolled <= 3000) {
            setVisible(false);
        }
    }

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(()=>{
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    },[]);


    return (
        <div className="button">
            <FaArrowCircleUp onClick={scrollTop}
                style={{ display: visible ? 'inline' : 'none' }} />
        </div>
    )
}

export default ToptoButton