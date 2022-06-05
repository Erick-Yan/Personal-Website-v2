import React, {useEffect, useState} from "react";
import { useTransition, animated, config } from "react-spring";
// import {Fade} from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";

import "./Slideshow.css";
import StudentImage from '../../assets/Student.jpeg';
import LeaderImage from "../../assets/Leader.jpg";
import ExplorerImage from "../../assets/Explorer.jpg";
import Header from "./Header";

const Slideshow = () => {
    const [position, setPosition] = useState(0);
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
        {id: 0, url: StudentImage}, 
        {id: 1, url: LeaderImage}, 
        {id: 2, url: ExplorerImage}
    ]

    const transitions = useTransition(position, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    })

    useEffect(() => void setInterval(() => setPosition(index => (index + 1) % images.length), 4000), [])

    return (
        <div className="slideshow">
            <div className={`header fade-wrapper ${fadeState.fadeState}`}
                style={{ transitionDuration: `${FADE_DURATION}ms` }}>
                <Header introOpen={introOpen} toggleDrawer={toggleDrawer} />
            </div>
            {transitions((style, index) => (
                <animated.div
                    class="bg"
                    style={{
                        ...style,
                        backgroundImage: `url(${images[index].url})`
                    }}
                />
            ))}
        </div>
    );
};

export default Slideshow;