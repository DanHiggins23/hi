import React from 'react';
import './ProjectInfo.scss';
import Fade from 'react-reveal';
import Intro from '../Text/Intro';
import { faJava, faReact, faAdobe } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Body from '../Text/Body';

export default function ProjectInfo(props) {
    return (
        <div className="section projectInfo">
            <Fade >
                <Intro title="Overview"
                    description="After learning AEM in my first month at NETbuilder, I put the skills into practise in 2 projects across BT developing components for the support & mobile feature management/usage section of the BT Business site. I began developing components in Angular JS using HTL and then shortly moved to a react implementation. I was personally the first individual to use this implementation across the company and learnt a lot in the process. I then moved onto a single page application implementation within React, where I was producing components end-to-end, documenting each component utilising styleguidist and ensuring high test coverage by writing unit tests for each component using jest. I was also following agile methodologies and ceremonies daily and became very familiar with this process." />

                <div className="projectInfo__tile projectInfo__tile--bt">
                    <img className="projectInfo__tile-image projectInfo__tile-image--bt" src={require('../../utils/images/clients/bt-logo.png')} alt="BT Logo" />
                </div>

                <Body title="What technologies did I use?"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />

                <div className="projectInfo__tech-container">
                    <FontAwesomeIcon className="projectInfo__tech-icon" icon={faAdobe} />
                    <FontAwesomeIcon className="projectInfo__tech-icon" icon={faReact} />
                    <FontAwesomeIcon className="projectInfo__tech-icon" icon={faJava} />
                </div>

                <Body title="What did I learn?"
                    description="At this point, the majority of technologies were fairly new to me. I’d begun to learn them all during my training at QA, but had no real-life experience with them. I feel like my skills in multiple technologies really developed throughout my time at BT. Working with a full-stack technology helped me understand how all the “pieces” go together. In Addition to this, working very closely with other members in my team, I was heavily involved in the process from conception to UX, to UI, to development. This I really enjoyed." />

                <div className="projectInfo__line"></div>
            </Fade>
        </div>
    );
}