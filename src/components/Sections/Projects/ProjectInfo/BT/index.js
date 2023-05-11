import React from 'react';
import '../ProjectInfo.scss';
import Fade from 'react-reveal';
import Intro from '../../../../Text/Intro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Body from '../../../../Text/Body';
import { faJava, faReact } from '@fortawesome/free-brands-svg-icons';
import Back from '../../../../Navigation/Back';

export default function BT(props) {
    return (
        <div className="section projectInfo">
            <Fade>
                <Intro title="Overview"
                    description="After learning AEM in my first month at NETbuilder, I put the skills into practise in 2 projects across BT developing components for the support & mobile feature management/usage section of the BT Business site. I began developing components in Angular JS using HTL and then shortly moved to a react implementation. I was personally the first individual to use this implementation across the company and learnt a lot in the process. I then moved onto a single page application implementation within React, where I was producing components end-to-end, documenting each component utilising styleguidist and ensuring high test coverage by writing unit tests for each component using jest. I was also following agile methodologies and ceremonies daily and became very familiar with this process." />

                <div className="projectInfo__tile projectInfo__tile--bt">
                    <img className="projectInfo__tile-image projectInfo__tile-image--bt" src={require('../../../../../utils/images/clients/bt-logo.png')} alt="BT Logo" />
                </div>

                <Body title="What technologies did I use?"
                    description="I used range of technologies at my time with BT, including; Adobe Experience Manager, React JS, Angular JS, Java, JUnit, React Test Utils, React Test Rendered, Styleguidist and SASS." />

                <div className="projectInfo__tech-container">
                    <FontAwesomeIcon className="projectInfo__tech-icon" icon={faReact} />
                    <FontAwesomeIcon className="projectInfo__tech-icon" icon={faJava} />
                </div>

                <Body title="What did I learn?"
                    description="At this point, the majority of technologies were fairly new to me. I’d begun to learn them all during my training at QA, but had no real-life experience with them. I feel like my skills in multiple technologies really developed throughout my time at BT. Working with a full-stack technology helped me understand how all the “pieces” go together. In Addition to this, working very closely with other members in my team, I was heavily involved in the process from conception to UX, to UI, to development. This I really enjoyed." />

                <div className="projectInfo__line"></div>
            </Fade>

            <Back />
        </div>
    );
}