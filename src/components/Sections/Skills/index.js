import React from 'react';
import Intro from '../../Intro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact, faCss3Alt, faHtml5, faSass, faAdobe, faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faCodeBranch, faCode, faBug } from '@fortawesome/free-solid-svg-icons';
import './Skills.scss';

export default function Skills(props) {

    function getStringLength(text) {
        console.log(text.length)
        if (text.length > 120) {
            return (
                text.slice(0, 120) + "..."
            ) 
        } return text;
    }

    return (
        <div className="section skills">
            <Intro title="What can I do? 💻" description="I'm gay, i'm always learning to expand my skills further. Here's a few examples of what I've been doing recently in the projects I've currently been working on." />

            <div className="skills__container">
                <div className="skills__container-item">
                    <FontAwesomeIcon icon={faReact} />
                    <span className="skills__link"><a href="#">React JS</a></span>
                    <p className="skills__description">{getStringLength("I've spent the last 6 months working with an AEM React implementation creating functional and stateful components that are unit tested, documented and example files created. I also created this portfolio in React!")}</p><span><a href="#" className="skills__more">...</a></span>
                </div>
                <div className="skills__container-item">
                    <FontAwesomeIcon icon={faJava} />
                    <span className="skills__link"><a href="#">Java</a></span>
                    <p className="skills__description">{getStringLength("I've been using Java recently to create sling models for the AEM React components. I've also produced many projects, such as a bank GUI application and a text-based adventure game.")}</p>
                </div>
                <div className="skills__container-item">
                    <FontAwesomeIcon icon={faBug} />
                    <span className="skills__link"><a href="#">Testing</a></span>
                    <p className="skills__description">{getStringLength("I have experience using Selenium and Chrome web driver with JUnit to automate processes, as well as using JEST with sinon, React Test and DOM rendered in order to unit test components.")}</p>
                </div>
            </div>
            <div className="skills__container">
                <div className="skills__container-item">
                    <FontAwesomeIcon icon={faAdobe} />
                    <span className="skills__link"><a href="#">AEM</a></span>
                    <p className="skills__description">{getStringLength("I've recently been using AEM 6.2-6.5 and creating Angular and React components end-to-end. The majority of my time was spent using an AEM React SPA implementation of AEM.")}</p>
                </div>
                <div className="skills__container-item">
                    <FontAwesomeIcon icon={faCode} />
                    <span className="skills__link"><a href="#">HTML &amp; CSS</a></span>
                    <p className="skills__description">{getStringLength("I've been doing HTML and CSS for a long time now, with knowledge in HTML5 and CSS3, where I've created multiple websites and Javascript projects. I now continue to use it with JSX in React components.")}</p>
                </div>
                <div className="skills__container-item">
                    <FontAwesomeIcon icon={faSass} />
                    <span className="skills__link"><a href="#">SASS</a></span>
                    <p className="skills__description">{getStringLength("I've been using SASS as my primary css pre-processor using the BEM notation. I've got very comfortable with this procedure and utlised it in the project I was involved with at BT as well as this portfoilio.")}</p>
                </div>
            </div>
        </div>
    );
}