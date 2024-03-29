import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Skills.css';

const Skills = () => {
    const skills = [
        {
            title: "Application Development",
            stacks: [
                {framework: "Flask", value: 30, color: "primary"}, 
                {framework:"React", value: 20, color: "secondary"}, 
                {framework:"Vue", value: 15, color: "success"}, 
                {framework:"Node", value: 15, color: "info"}, 
                {framework:"Spring", value: 10, color: "warning"}, 
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
            title: "Data Engineering & Database Design",
            stacks: [
                {framework:"Azure ML", value: 20, color: "primary"}, 
                {framework:"Airflow", value: 20, color: "secondary"}, 
                {framework:"Snowflake", value: 20, color: "success"}, 
                {framework:"SQLAlchemy", value: 20, color: "danger"}, 
                {framework:"PostgreSQL", value: 15, color: "warning"},
                {framework:"dbt", value: 5, color: "dark"}
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