import React from 'react';
import '../ProjectInfo.scss';
import Fade from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faInfinity, faCode } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Intro from '../../../../components/Text/Intro';
import Body from '../../../../components/Text/Body';
import Back from '../../../../components/Navigation/Back';

export default function Kitman() {
  return (
    <div className="section projectInfo">
      <Fade>
        <Intro
          title="Overview"
          description="During my time at Kitman, I've worked on multiple projects with high profile clients, such as Premier League and NFL, and been fully involved in the full lifecycle of a feature, from concept to roll-out. Daily, I build features using a tech stack of React, FLowJS, RTK, RTL & Jest, along with MUI. I play an Integral role in key initiatives including integrating
playwright into our workflow, converting our architecture
over to SPA, and implementing analytical tools such as
Mixpanel and Google Tag Manager. I've really been enjoying the more leadership role I've taken here, where I take ownership of major epics, and also review CV’s, interview candidates, buddy-ing new
starters and mentoring colleagues. Additionally, after achieving my Professional Scrum Master I certification, I also took on the responsibility of Scrum master within the squad, facilitating ceremonies,
and constantly adapting and implementing changes to
increase story point output, whilst becoming more
accurate on estimations and reducing pain points."
        />

        <div className="projectInfo__tile projectInfo__tile--kitman">
          <img
            className="projectInfo__tile-image projectInfo__tile-image--kitman"
            src="/images/clients/kitman-logo.png"
            alt="Kitman Labs Logo"
            loading="lazy"
          />
        </div>

        <Body
          title="What technologies did I use?"
          description="Continuing from my expertise within React, I picked up new skills with previously unused technologies, such as as Emotion, Redux Toolkit, and CircleCi. I really got into the weeds with the full archetecture of the system, and would consider myself a key knowledge asset in many key aspects of the application."
        />

        <div className="projectInfo__tech-container">
          <FontAwesomeIcon className="projectInfo__tech-icon" icon={faReact} />
          <FontAwesomeIcon
            className="projectInfo__tech-icon"
            icon={faInfinity}
          />
          <FontAwesomeIcon className="projectInfo__tech-icon" icon={faCode} />
          <FontAwesomeIcon className="projectInfo__tech-icon" icon={faBug} />
        </div>

        <Body
          title="What did I learn?"
          description="Throughout my time at Kitman Labs, I continuously learnt and grew within my knowledge, picking up industry experience of multiple new technologies, as listed above, as well as picking up completely new skills and qualifications such as Professional Scrum Master I. I've found I really love the people side of the role, mentoring colleagues and new-starters, and constantly adapting teams to improve for success."
        />

        <div className="projectInfo__line" />
      </Fade>

      <Back />
    </div>
  );
}
