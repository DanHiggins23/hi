import React from 'react';
import Intro from '../../Text/Intro';
import { faJava, faReact, faSass, faJenkins } from '@fortawesome/free-brands-svg-icons'
import { faCode, faBug } from '@fortawesome/free-solid-svg-icons';
import './Skills.scss';
import SkillsItem from './SkillsItem';
import Fade from 'react-reveal/Fade';

export default function Skills(props) {
    return (
        <div className="section skills" >
            <Fade bottom>
                <Intro title="What can I do? 💻"
                    description="I'm always learning to expand my skills further. Here's a few examples of what I've been doing recently in the projects I've currently been working on." />
                <div>
                    <div className="skills__container">
                        <SkillsItem icon={faReact}
                            title="React"
                            text="I've spent the last 6 months working with an AEM React implementation creating functional and stateful components that are unit tested, documented and example files created. I also created this portfolio in React!" />
                        <SkillsItem icon={faJava}
                            title="Java"
                            text="I've been using Java recently to create sling models for the AEM React components. I've also produced many projects, such as a bank GUI application and a text-based adventure game." />
                        <SkillsItem icon={faBug}
                            title="Testing"
                            text="I have experience using Selenium and Chrome web driver with JUnit to automate processes, as well as using JEST with sinon, React Test and DOM rendered in order to unit test components. More recently, I have also been using Cypress to test an internal node project at Santander efficiently." />
                        <SkillsItem icon={faCode}
                            title="HTML &amp; CSS"
                            text="I've been doing HTML and CSS for a long time now, with knowledge in HTML5 and CSS3, where I've created multiple websites and Javascript projects. I now continue to use it with JSX in React components." />
                        <SkillsItem icon={faSass}
                            title="SASS"
                            text="I've been using SASS as my primary css pre-processor using the BEM notation. I've got very comfortable with this procedure and utlised it in the project I was involved with at BT as well as this portfolio." />
                        <SkillsItem icon={faJenkins}
                            title="Jenkins"
                            text="During my time at Santander I gained a far clearer understanding of Continuous Integration with gitlab and Jenkins, ensuring pipelines passed before deployments and creating new pipelines within Jenkins." />   
                    </div>
                </div>
            </Fade>
        </div>
    );
}