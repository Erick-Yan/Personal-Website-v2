import React from 'react';
import ProjectBox from './ProjectBox';
import projectNostalgia from "../../assets/project-nostalgia-min.png";
import bobaEats from "../../assets/boba-eats-min.png";
import nbaAnalysis from "../../assets/nba-data-analysis-min.png";
import amazonAnalysis from "../../assets/amazon-review-analysis-min.png";



import './ProjectBoxes.css';

const ProjectBoxes = props => {
    const projects = [
        {
            title: "Project Nostalgia",
            stack: ["Flask", "Javascript", "SQL"],
            description: "Project Nostalgia provides a modern journaling experience by integrating nostalgic elements such as Music and Photo Galleries within each user's timeline of entries.",
            image: projectNostalgia,
            link: "https://github.com/Erick-Yan/Project-Nostalgia"
        },
        {
            title: "BOBA EATS",
            stack: ["React", "Express", "Node", "Selenium", "NLP"],
            description: "BOBA EATZ is a food-social app that allows users to share Boba Drink Reviews and Recommendations at various Boba Shops across Canada.",
            image: bobaEats,
            link: "https://github.com/Erick-Yan/BOBA-EATZ"
        },
        {
            title: "NBA Compatibility Analysis",
            stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
            description: "Inspired by Chris Paul (NBA Point Guard), this study seeks to confirm his impact on his teammates by performing various statistical and correlational analyses",
            image: nbaAnalysis,
            link: "https://github.com/Erick-Yan/NBA-Data-Analytics"
        },
        {
            title: "Amazon Product Sentiment Analysis",
            stack: ["Python", "Pandas", "Scikit-Learn", "Spacy"],
            description: "To facilitate smarter purchasing decisions, this study aims to analyze both the general sentiment towards a product and the most frequently used keywords that appear in user reviews.",
            image: amazonAnalysis,
            link: "https://github.com/Erick-Yan/Amazon-Product-Review-Analysis"
        }
    ];

    return (
        <div className='projectBoxesSection'>
            <h1 className='projectBoxesTitle'>Projects.</h1>
            <div className='projectBoxes'>
                <ProjectBox className='box' {...projects[0]} />
                <br></br>
                <ProjectBox className='box' {...projects[1]} />
            </div>
            <div className='projectBoxes'>
                <ProjectBox className='box' {...projects[2]} />
                <br></br>
                <ProjectBox className='box' {...projects[3]} />
            </div>
        </div>
    )
};

export default ProjectBoxes;