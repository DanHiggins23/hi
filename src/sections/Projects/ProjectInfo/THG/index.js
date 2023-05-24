import React from 'react';
import '../ProjectInfo.scss';
import Fade from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJava, faReact, faJenkins,
} from '@fortawesome/free-brands-svg-icons';
import Body from '../../../../components/Text/Body';
import Intro from '../../../../components/Text/Intro';
import Back from '../../../../components/Navigation/Back';

export default function THG() {
  return (
    <div className="section projectInfo">
      <Fade>
        <Intro
          title="Overview"
          description="During my time at THG, I sat within the features team of checkout, working on a mixture of new features and BAU using a tech stack of primarily React, Redux, JSS & Java. I worked on multiple large projects, which we all all live across the portfolio of sites, and were used by thousands of customers daily. As for the majority of my time checkout was a very small time, I took on a lot of responsibility including; Taking leadership of projects, end-to-end, from business requirement, to full rollout of feature, Leading workshops to the wider team showcasing features, new technology and possible codebase improvements and Conducting interviews for future candidates and mentoring new starters in the team. I was also part of the out of hours team, debugging and resolving live issues."
        />

        <div className="projectInfo__tile projectInfo__tile--thg">
          <img
            className="projectInfo__tile-image projectInfo__tile-image--thg"
            src="/images/clients/thg-logo.png"
            alt="THG Logo"
          />
        </div>

        <Body
          title="What technologies did I use?"
          description="I really honed-in my skills at THG, and began to specialise within front-end development. The main technologies I used included; React, JSS, Redux, Jest, Java, Jenkins."
        />

        <div className="projectInfo__tech-container">
          <FontAwesomeIcon className="projectInfo__tech-icon" icon={faReact} />
          <FontAwesomeIcon className="projectInfo__tech-icon" icon={faJava} />
          <FontAwesomeIcon className="projectInfo__tech-icon" icon={faJenkins} />
        </div>

        <Body
          title="What did I learn?"
          description="I initially joined THG to specialise further within the front-end, and I did exactly that. My knowledge of React, testing frameworks, and styling systems improved massively, but also that my comfortability with the full stack massively imporved, through full-stack changes, code analysis software and CI/CD processes. I also lead multiple large scale projects, end-to-end, and interviewed future candiates which was a great oppurtunity for me to begin fit into a leadership role."
        />

        <div className="projectInfo__line" />
      </Fade>

      <Back />
    </div>
  );
}
