import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experiences.css";

const Experiences = props => {
    return (
        <div>
            <section id="Experiences" className="ExperiencesSection section">
                <h1 className="title">Experience.</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="May 2022 - PRESENT"
                        dateClassName='experienceDate'
                        iconStyle={{ background: "#00308F", color: "aliceblue"}}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Software Engineering Intern
                        </h3>
                        <h6 className="vertical-timeline-element-subtitle">PointClickCare | Carequality Team</h6>
                        <p>
                            <span className="button is-rounded is-small is-static">Vue</span>{" "}
                            <span className="button is-rounded is-small is-static">Spring</span>{" "}
                            <span className="button is-rounded is-small is-static">Cypress</span>{" "}
                            <span className="button is-rounded is-small is-static">Kubernetes</span>{" "}
                            <span className="button is-rounded is-small is-static">Azure</span>{" "}
                        </p>
                        <p style={{marginTop: 10}}>
                            As a member of the Carequality team, we are responsible for the agile development of  
                            application features to maintain and improve the data-sharing network known as the{" "}
                            <a target="_blank" 
                               href="https://pointclickcare.com/products/connect/" 
                               style={{
                                   color: '#00308F'}}>
                                       Carequality Framework
                            </a>. 
                            Our efforts directly support healthcare centres in managing the flow of patient 
                            data between acute and post-acute organizations across Canada and the US.
                        </p>
                        <br />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="September 2021 - December 2021"
                        dateClassName='experienceDate'
                        iconStyle={{ background: "#00308F", color: "aliceblue"}}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Data Engineering Intern
                        </h3>
                        <h6 className="vertical-timeline-element-subtitle">KPMG | Lighthouse Team</h6>
                        <p>
                            <span className="button is-rounded is-small is-static">Azure</span>{" "}
                            <span className="button is-rounded is-small is-static">Scikit-Learn</span>{" "}
                            <span className="button is-rounded is-small is-static">Scrapy</span>{" "}
                            <span className="button is-rounded is-small is-static">Pandas</span>{" "}
                        </p>
                        <p style={{marginTop: 10}}>
                            At KPMG's Lighthouse Division, I was able to lead multiple 
                            client projects involving the development of robust Machine Learning Models, Data Analysis Tools, 
                            and Cloud-driven solutions. Exposure to the consulting industry also helped accelerate my 
                            ability to recognize and deliver on client needs while building strong client relationships.
                        </p>
                        <br />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="January 2021 - April 2021"
                        dateClassName='experienceDate'
                        iconStyle={{ background: "#00308F", color: "aliceblue"}}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Medical Application Developer Intern
                        </h3>
                        <h6 className="vertical-timeline-element-subtitle">Unity Health Toronto | COPD Team</h6>
                        <p>
                            <span className="button is-rounded is-small is-static">Flask</span>{" "}
                            <span className="button is-rounded is-small is-static">Selenium</span>{" "}
                            <span className="button is-rounded is-small is-static">Pandas</span>{" "}
                            <span className="button is-rounded is-small is-static">Eclipse</span>{" "}
                        </p>
                        <p style={{marginTop: 10}}>
                            Working under renowned respirologist and researcher Samir Gupta, I was given the 
                            opportunity to pilot and develop various applications involving patient health 
                            forecasts/predictions and personalized treatment solutions. One of the many products 
                            I worked on was the{" "}
                            <a target="_blank" 
                               href="https://www.easthma.ca/" 
                               style={{
                                   color: '#00308F'}}>
                                       Electronic Asthma Management System
                            </a>
                            , which provides an end-to-end, digitized treatment approach for asthma patients 
                            through personalized action plans and symptom monitoring.
                        </p>
                        <br />
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </section>
        </div>
    );
};

export default Experiences;