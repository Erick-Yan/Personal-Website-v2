import React from 'react';
// import { useSpring, animated } from 'react-spring';

import "./Header.css";

const Header = props => {
    // const fadeIn_h1 = useSpring({
    //     from: {opacity: 0, marginTop: 50},
    //     to: {opacity: 1, marginTop: 100},
    //     config: {duration: 1000}
    // });

    // const fadeIn_h3 = useSpring({
    //     from: {opacity: 0},
    //     to: {opacity: 1},
    //     config: {delay: 5000, duration: 2000}
    // });

    return (
        <div className='header'>
            {!props.introOpen && (
                <div>
                    <h1>Erick Yan</h1>
                    <h3>My Portfolio.</h3>
                </div>
            )}
            {props.introOpen && (
                <div>
                    <h2>Introduction</h2>
                    <p>
                        Welcome to My Portfolio! I'm a 2nd year Systems Design Engineering Student at the University 
                        of Waterloo with a passion for all things technology and tackling new challenges. 
                        Want to learn more about me? Feel free to reach out 
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