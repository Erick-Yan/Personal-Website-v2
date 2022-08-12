import React, {useState} from 'react';

import './ProjectBox.css';

const ProjectBox = props => {

    return (
        <a href={props.link} target="_blank" >
            <div className='projectBox'>
                <img className="background" src={props.image} />
                <div className='projectContext'>
                    <h3>{props.title}</h3>
                    <div className='stacks'>
                        {props.stack.map((fw, index) => {
                            return <p>{fw}</p>
                        })}
                    </div>
                    <p className='description'>{props.description}</p>
                </div>
            </div>
        </a>
    )
};

export default ProjectBox;