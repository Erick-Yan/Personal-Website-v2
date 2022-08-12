import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';

import "./Contacts.css";

const Contacts = props => {
    const buttonStyle = {
        borderColor: "rgba(0,0,0,0.25)",
        backgroundColor: "aliceblue",
        margin: 5
    };

    return (
        <section className='contactSection'>
            <div className='contactButtons'>
                <div className="contactButton" >
                <SocialMediaIconsReact {...buttonStyle} icon="youtube" iconColor="#00538C" size="48" url="https://www.youtube.com/channel/UC8qwhJMsUPR1s34QI3a7sFQ"/>
                </div>
                <div className="contactButton" >
                <SocialMediaIconsReact {...buttonStyle} icon="github" iconColor="#00538C" size="48" url="https://github.com/Erick-Yan"/>
                </div>
                <div className="contactButton" >
                <SocialMediaIconsReact {...buttonStyle} icon="linkedin" iconColor="#00538C" size="48" url="https://www.linkedin.com/in/erick-yan/"/>
                </div>
            </div>
            <h6>&copy; Erick Yan 2022</h6>
        </section>
    );
};

export default Contacts;