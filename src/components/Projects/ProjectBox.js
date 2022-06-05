import React, {useState} from 'react';

import './ProjectBox.css';

const ProjectBox = props => {
    const [hoverStyle, setHover] = useState({
        transition: "0.5s filter ease-in",
        visibility: 'hidden'
    });

    const onHover = () => {
        setHover({
            ...hoverStyle,
            visibility: 'visible'
        })
    };

    const onLeave = () => {
        setHover({
            ...hoverStyle,
            visibility: 'hidden'
        });
    };

    return (
        <div onMouseEnter={onHover} onMouseLeave={onLeave} className='projectBox'>
            <a href={props.link} target="_blank" ><img className="background" src={props.image} /></a>
            <h3 style={hoverStyle} >{props.title}</h3>
            <p style={hoverStyle} >{props.description}</p>
            <div className='stacks'>
                {props.stack.map((fw, index) => {
                    return (
                        <div class='stack'><img src={fw} /></div>
                    );
                })}
            </div>
        </div>
    )
};

export default ProjectBox;