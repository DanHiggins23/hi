import React from 'react';
import '../ProjectInfo.scss';
import Fade from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact } from '@fortawesome/free-brands-svg-icons';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import Intro from '../../../../components/Text/Intro';
import Body from '../../../../components/Text/Body';
import Back from '../../../../components/Navigation/Back';

export default function BT() {
  return (
    <div className="section projectInfo">
      <Fade>
        <Intro
          title="Overview"
          description="After learning AEM in my first month at NETbuilder, I put the skills into practise across 2 projects within BT, developing components for the support & mobile feature management/usage section of the BT Business site. I began developing components in Angular JS using HTL and then shortly moved to a React implementation. I was personally the first individual to use this implementation across the company and learnt a lot in the process. I then moved onto a single page application implementation within React, where I was producing components end-to-end, documenting each component utilising Styleguidist and ensuring high test coverage by writing unit tests for each component using Jest. I was also following agile methodologies and ceremonies daily and became very familiar with this process."
        />

        <div className="projectInfo__tile projectInfo__tile--bt">
          <img
            className="projectInfo__tile-image projectInfo__tile-image--bt"
            src="/images/clients/bt-logo.png"
            alt="BT Logo"
            loading="lazy"
          />
        </div>

        <Body
          title="What technologies did I use?"
          description="I used a range of technologies at my time with BT, including; Adobe Experience Manager, React JS, Angular JS, Java, JUnit, React Test Utils, React Test Renderer, Styleguidist and SASS."
        />

        <div className="projectInfo__tech-container">
          <FontAwesomeIcon className="projectInfo__tech-icon" icon={faReact} />
          <FontAwesomeIcon className="projectInfo__tech-icon" icon={faJava} />
          <FontAwesomeIcon className="projectInfo__tech-icon" icon={faBug} />
        </div>

        <Body
          title="What did I learn?"
          description="At this point, the majority of technologies were fairly new to me. I’d begun to learn them all during my training at QA, but had no real-life experience with them, so it was great to put these into practise. Working with a full-stack technology helped me understand how all the “pieces” go together. In Addition to this, working very closely with other members in my team, I was heavily involved in the process from conception to UX, to UI, to development. This I really enjoyed."
        />

        <div className="projectInfo__line" />
      </Fade>

      <Back />
    </div>
  );
}
