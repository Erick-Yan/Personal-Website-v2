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
                        date="January 2023 - April 2023"
                        dateClassName='experienceDate'
                        iconStyle={{ background: "#00308F", color: "aliceblue"}}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Software Engineering Intern
                        </h3>
                        <h6 className="vertical-timeline-element-subtitle">Super | Monetization Team</h6>
                        <p>
                            <span className="button is-rounded is-small is-static">Flask</span>{" "}
                            <span className="button is-rounded is-small is-static">React</span>{" "}
                            <span className="button is-rounded is-small is-static">Airflow</span>{" "}
                            <span className="button is-rounded is-small is-static">dbt</span>{" "}
                            <span className="button is-rounded is-small is-static">Snowflake</span>{" "}
                            <span className="button is-rounded is-small is-static">SQLAlchemy</span>{" "}
                            <span className="button is-rounded is-small is-static">Amplitude</span>{" "}
                            <span className="button is-rounded is-small is-static">Datadog</span>{" "}
                        </p>
                        <p style={{marginTop: 10}}>
                            Joining the Monetization team, I worked in a small team of 5 engineers focused on 
                            building money transfer, repayment, and wallet funding features for the{" "}
                            <a target="_blank" 
                               href="https://www.super.com/cash" 
                               style={{
                                   color: '#00308F'}}>
                                       SuperCash App
                            </a>. 
                            I was able to lead several initiatives that supported our team in pushing out new 
                            features and improving the overall user experience. This included expediting 
                            the cash advance decision process, improving the e-transfer and loan repayment flow, 
                            as well as expanding our services' monitoring/tracking capabilities.
                        </p>
                        <br />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="May 2022 - August 2022"
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
                            <span className="button is-rounded is-small is-static">Node</span>{" "}
                            <span className="button is-rounded is-small is-static">Cypress</span>{" "}
                            <span className="button is-rounded is-small is-static">Kubernetes</span>{" "}
                            <span className="button is-rounded is-small is-static">Azure</span>{" "}
                        </p>
                        <p style={{marginTop: 10}}>
                            As a member of the Carequality team, we were responsible for the agile development of  
                            application features to maintain and improve the data-sharing network known as the{" "}
                            <a target="_blank" 
                               href="https://pointclickcare.com/products/connect/" 
                               style={{
                                   color: '#00308F'}}>
                                       Carequality Framework
                            </a>. 
                            Our efforts directly support healthcare centres in managing the flow of patient 
                            data between acute and post-acute organizations across Canada and the US. I was 
                            largely involved in improving the resiliency of existing microservice infrastructure, 
                            optimizing the efficiency of our application start-up times, and increasing our unit and 
                            integration test coverage.
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
                            <span className="button is-rounded is-small is-static">WebSockets</span>{" "}
                        </p>
                        <p style={{marginTop: 10}}>
                            At KPMG's Lighthouse Division, I led multiple 
                            client projects involving Big Data and Cloud Development. 
                            Exposure to the consulting industry helped accelerate my 
                            ability to recognize and deliver on client needs while building strong client relationships. 
                            On the tech side, I was able to touch multiple software engineering facets by building 
                            machine learning solutions, leveraging automation to accelerate existing consultancy 
                            workflows, creating scripts to support financial statement analysis, and more!

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