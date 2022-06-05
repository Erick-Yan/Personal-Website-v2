import React from 'react';
import ProjectBox from './ProjectBox';
import projectNostalgia from "../../assets/project-nostalgia.png";
import bobaEats from "../../assets/boba-eats.png";
import nbaAnalysis from "../../assets/nba-data-analysis.png";
import amazonAnalysis from "../../assets/amazon-review-analysis.png";
import flask from "../../assets/flask.png";
import javascript from "../../assets/javascript.png";
import sql from "../../assets/sql.png";
import react from "../../assets/react.png";
import express from "../../assets/express.png";
import node from "../../assets/node.png";
import python from "../../assets/python.png";
import matplotlib from "../../assets/matplotlib.png";
import pandas from "../../assets/pandas.png";
import scikitlearn from "../../assets/scikit-learn.png";
import spacy from "../../assets/spacy.png";
import seaborn from "../../assets/seaborn.png";



import './ProjectBoxes.css';

const ProjectBoxes = props => {
    const projects = [
        {
            title: "Project Nostalgia",
            stack: [flask, javascript, sql],
            description: "Project Nostalgia provides a modern journaling experience by integrating nostalgic elements such as Music and Photo Galleries within each user's timeline of entries.",
            image: projectNostalgia,
            link: "https://github.com/Erick-Yan/Project-Nostalgia"
        },
        {
            title: "BOBA EATS",
            stack: [react, express, node],
            description: "BOBA EATZ is a food-social app that allows users to share Boba Drink Reviews and Recommendations at various Boba Shops across Canada.",
            image: bobaEats,
            link: "https://github.com/Erick-Yan/BOBA-EATZ"
        },
        {
            title: "NBA Compatibility Analysis",
            stack: [python, pandas, matplotlib, seaborn],
            description: "Inspired by Chris Paul (NBA Point Guard), this study seeks to confirm his impact on his teammates by performing various statistical and correlational analyses",
            image: nbaAnalysis,
            link: "https://github.com/Erick-Yan/NBA-Data-Analytics"
        },
        {
            title: "Amazon Product Sentiment Analysis",
            stack: [python, pandas, scikitlearn, spacy],
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
                <ProjectBox className='box' {...projects[1]} />
            </div>
            <div className='projectBoxes'>
                <ProjectBox className='box' {...projects[2]} />
                <ProjectBox className='box' {...projects[3]} />
            </div>
        </div>
    )
};

export default ProjectBoxes;