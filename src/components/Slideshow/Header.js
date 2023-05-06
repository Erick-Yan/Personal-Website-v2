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
                        Welcome to My Portfolio! I'm a 3rd year Systems Design Engineering Student at the University 
                        of Waterloo with a passion for using technology to solve the most pressing issues facing our world.
                        My experiences have spanned across multiple sectors while taking on the role of a 
                        full-stack engineer, data engineer, and data scientist just to name a few!
                        From improving the livelihood of COPD patients to enabling access to credit and lending benefits for 
                        everyone, I've been fortunate enough to have seen the impact my work has had on all scales! 
                        Want to learn more about me? Feel free to reach out and connect!
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