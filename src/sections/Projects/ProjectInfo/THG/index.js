import React from 'react';
import '../ProjectInfo.scss';
import Fade from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faAngular } from '@fortawesome/free-brands-svg-icons';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import Body from '../../../../components/Text/Body';
import Intro from '../../../../components/Text/Intro';
import Back from '../../../../components/Navigation/Back';

export default function THG() {
  return (
    <div className="section projectInfo">
      <Fade>
        <Intro
          title="Overview"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />

        <div className="projectInfo__line" />
      </Fade>

      <Back />
    </div>
  );
}
