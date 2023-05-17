import React from 'react';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faBug, faInfinity, faCode } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import Intro from '../../Text/Intro';
import Body from '../../Text/Body';
import './Skills.scss';
import SkillsItem from './SkillsItem';

export default function Skills() {
  return (
    <div className="section skills">
      <Fade bottom>
        <Intro
          title="What can I do? 💻"
          description="My passion is within front-end development, and has been the focus for the majority of my career, I love the creativity aspect of it. Here's some examples of what I can do..."
        />
        <div className="skills__container">
          <SkillsItem
            icon={faReact}
            title="React"
            text="I've been using React for ~4 years now, across a mixture of proffesional and personal projects. Daily I use hooks, context, Redux and Flow JS and also use Axios & Fetch for network requests."
          />
          <SkillsItem
            icon={faBug}
            title="Testing"
            text="I've recently been using a combination of React Testing Library & Jest for unit tests. In previous projects, I've used Enzyme, Cypress, JUnit and Selenium."
          />
          <SkillsItem
            icon={faCode}
            title="Styling"
            text="Recently, I've mainly been using Javascript style systems, where I've been using Emotion and JSS. I've also developed with MaterialUI components, and extensively used SASS & LESS."
          />
          <SkillsItem
            icon={faInfinity}
            title="CI/CD"
            text="Over the past few years I've started to get more involved in CI/CD processes, using CircleCI and Jenkins for release & build processes, as well as integrations with Github & Jira."
          />
        </div>

        <Body description="And here's what tech I'm currently using..." />
        <div className="skills__tech-stack">
          <img
            className="skills__icon"
            src="/images/skills/react.png"
            alt="React Logo"
          />
          <img
            className="skills__icon"
            src="/images/skills/redux.png"
            alt="Redux Logo"
          />
          <img
            className="skills__icon"
            src="/images/skills/rtl.png"
            alt="React Testing Library Logo"
          />
          <img
            className="skills__icon"
            src="/images/skills/jest.png"
            alt="Jest Logo"
          />
          <img
            className="skills__icon"
            src="/images/skills/emotion.png"
            alt="Emotion Logo"
          />
          <img
            className="skills__icon--lrg"
            src="/images/skills/storybook.png"
            alt="Storybook Logo"
          />
          <img
            className="skills__icon--lrg"
            src="/images/skills/flow.png"
            alt="Flow Logo"
          />
          <img
            className="skills__icon--xtra-lrg"
            src="/images/skills/axios.png"
            alt="Axios Logo"
          />
          <img
            className="skills__icon--lrg"
            src="/images/skills/circle-ci.png"
            alt="Circle CI Logo"
          />
        </div>
      </Fade>
    </div>
  );
}
