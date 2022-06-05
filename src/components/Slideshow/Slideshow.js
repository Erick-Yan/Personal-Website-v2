import React, {useState} from "react";
import {Fade} from "react-slideshow-image";
import {Spring, useSpring, animated} from 'react-spring/';
import {CSSTransition} from 'react-transition-group';
import "react-slideshow-image/dist/styles.css";

import "./Slideshow.css";
import StudentImage from '../../assets/Student.jpeg';
import LeaderImage from "../../assets/Leader.jpg";
import ExplorerImage from "../../assets/Explorer.jpg";
import Header from "./Header";

const Slideshow = () => {
    const [introOpen, isIntroOpen] = useState(false);
    const [fadeState, toggleFadeState] = useState({
        fadeTransition: null,
        fadeState: "fade-in"
    })

    const FADE_DURATION = 1000;
    const toggleDrawer = () => {
        const timeout = setTimeout(() => {
            isIntroOpen(!introOpen);
            toggleFadeState({
                fadeTransition: null,
                fadeState: "fade-in"
            });
        }, FADE_DURATION);
        clearTimeout(fadeState.fadeTransition);
        toggleFadeState({
            fadeState: "fade-out",
            fadeTransition: timeout
        });
    }

    const images = [
        {
            url: StudentImage,
            caption: "Student"
        },
        {
            url: LeaderImage,
            caption: "Leader"
        },
        {
            url: ExplorerImage,
            caption: "Explorer"
        }
    ]

    const properties = {
        duration: 2000,
        transitionDuration: 500,
        infinite: true,
        indicators: false,
        arrows: false,
    }

    return (
        <div className="slideshow">
            <div className={`header fade-wrapper ${fadeState.fadeState}`}
                style={{ transitionDuration: `${FADE_DURATION}ms` }}>
                <Header introOpen={introOpen} toggleDrawer={toggleDrawer} />
            </div>
            <Fade {...properties}>
                {images.map((image, index) => (
                <div className="each-fade" key={index}>
                    <img src={image.url} />
                </div>
                ))}
            </Fade>
        </div>
    );
};

export default Slideshow;