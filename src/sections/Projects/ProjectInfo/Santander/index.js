import React from 'react';
import '../ProjectInfo.scss';
import Fade from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faAngular } from '@fortawesome/free-brands-svg-icons';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import Body from '../../../../components/Text/Body';
import Intro from '../../../../components/Text/Intro';
import Back from '../../../../components/Navigation/Back';

export default function Santander() {
  return (
    <div className="section projectInfo">
      <Fade>
        <Intro
          title="Overview"
          description="During my time at Santander, I was situated in an agile squad working within the fraud prevention department within Santech UK, as a Full Stack Developer. My initial responsibility was to test an internal rule engine node project, end-to-end. I did this using Cypress and integrated it headlessly into a Jenkins pipeline. I was also involved in creating micro-services to manipulate payloads and add business logic to allow/prevent/challenge transactions, as well as creating additional operators and end points within the internal rule engine project to allow internal memebers to create more accurate rules."
        />

        <div className="projectInfo__tile projectInfo__tile--santander">
          <img
            className="projectInfo__tile-image projectInfo__tile-image--santander"
            src="/images/clients/santander-logo.png"
            alt="Santander Logo"
            loading="lazy"
          />
        </div>

        <Body
          title="What technologies did I use?"
          description="I used range of technologies at my time with Santander, including; Cypress, Node, Angular JS, Java, JUnit, Jenkins and SQL."
        />

        <div className="projectInfo__tech-container">
          <FontAwesomeIcon
            className="projectInfo__tech-icon"
            icon={faAngular}
          />
          <FontAwesomeIcon className="projectInfo__tech-icon" icon={faJava} />
          <FontAwesomeIcon className="projectInfo__tech-icon" icon={faBug} />
        </div>

        <Body
          title="What did I learn?"
          description="Although I had already had become very familiar with the Agile way of working, it was great to gain further experience and adapt to a new, more structured enviroment and way of working at a Bank. I really enjoyed learning Cypress and thought it was a great way to really understand the details of the internal project that I was to working on. Although I used Java within AEM at BT, it was also great to gain further knowledge of creating micro-services and testing them with Postman, which I had little prior experience with."
        />

        <div className="projectInfo__line" />
      </Fade>

      <Back />
    </div>
  );
}
