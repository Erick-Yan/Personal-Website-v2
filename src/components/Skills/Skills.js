import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Skills.css';

const Skills = () => {
    const skills = [
        {
            title: "Application Development",
            stacks: [
                {framework: "React", value: 20, color: "primary"}, 
                {framework:"Vue", value: 20, color: "secondary"}, 
                {framework:"Flask", value: 25, color: "success"}, 
                {framework:"MongoDB", value: 10, color: "danger"}, 
                {framework:"Spring", value: 10, color: "warning"}, 
                {framework:"Node", value: 5, color: "info"}, 
                {framework:"Express", value: 10, color: "dark"}
            ]
        },
        {
            title: "Data Science & Machine Learning",
            stacks: [
                {framework:"Pandas", value: 30, color: "primary"}, 
                {framework:"Numpy", value: 20, color: "secondary"}, 
                {framework:"Scikit-Learn", value: 20, color: "success"}, 
                {framework:"Spacy", value: 20, color: "danger"}, 
                {framework:"Matplotlib", value: 10, color: "warning"}
            ]
        },
        {
            title: "Cloud Development",
            stacks: [
                {framework:"Azure", value: 75, color: "primary"}, 
                {framework:"AWS", value: 25, color: "secondary"}
            ]
        }
    ];

    return (
        <div className='skillsSection'>
            <h1>My Stack.</h1>
            {skills.map((skill, id) => {
                return (
                    <div className='skillSection'>
                        <h3>{skill.title}</h3>
                        <ProgressBar className="skillBar">
                            {skill.stacks.map((fw, id) => {
                                return (
                                    <ProgressBar animated="true" label={fw.framework} variant={fw.color} now={fw.value} key={id} />
                                )
                            })}
                        </ProgressBar>
                    </div>
                );
            })}
            
        </div>
    );
}

export default Skills;