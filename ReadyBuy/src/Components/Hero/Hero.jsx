import React from 'react'
import './Hero.css'

import arrow from '../assets/arrow.png';
import hand_icon from '../assets/hand_icon.png';
import hero_image from '../assets/hero-image.jpg';

const Hero = () => {
    const scrollToCollection = () => {
        const section = document.getElementById('collection');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div>
            <div className="hero">
                <div className="hero-left">
                    <h1 className='hello'>NEW ARRIVALS ONLY</h1>
                    <div className="hero-hand-icon">
                        <p></p> 
                        {/* <img src={hand_icon} alt="" /> */}
                    </div>
                    <p>New Season Collections</p>
                    <p>Understated Style, Elevated</p>
                    <div 
                    className="hero-latest-btn"
                    onClick={scrollToCollection}
                    style={{ cursor: "pointer" }}
                >
                    <div>Explore Collection</div>
                </div>
                </div>
                <div className="hero-right">
                    <img src={hero_image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero



