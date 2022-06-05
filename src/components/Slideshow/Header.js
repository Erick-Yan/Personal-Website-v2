import React from 'react';
import { useSpring, animated } from 'react-spring';

import "./Header.css";

const Header = props => {
    const fadeIn_h1 = useSpring({
        from: {opacity: 0, marginTop: 50},
        to: {opacity: 1, marginTop: 100},
        config: {duration: 1000}
    });

    const fadeIn_h3 = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: {delay: 5000, duration: 2000}
    });

    return (
        <div className='header'>
            {!props.introOpen && (
                <div>
                    <animated.h1 style={{...fadeIn_h1}}>Erick Yan</animated.h1>
                    <animated.h3 style={{...fadeIn_h3}}>My Portfolio.</animated.h3>
                </div>
            )}
            {props.introOpen && (
                <div>
                    <h2>Introduction</h2>
                    <p>
                        Welcome to My Portfolio! I'm a 2nd year Systems Design Engineering Student at the University 
                        of Waterloo with a passion for learning new things and tackling challenging problems. Being in a coop program 
                        has propelled me towards various exciting opportunities and experiences. I 
                        have been fortunate enough to have worked in both the consulting and healthcare industries as a Software Engineering Intern.
                        All in all, I'm glad that you've decided to peer into my work in progress which I hope to one day call my career. Want to learn more about me? Feel free to reach out 
                        and connect, and maybe we can share some of our experiences with each another!
                    </p>
                </div>
            )}
            <div className="about-button">
                <button onClick={props.toggleDrawer}>
                    INTRO
                </button>
            </div>
        </div>
    )
}

export default Header;