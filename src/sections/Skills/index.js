import React from 'react';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faBug, faInfinity, faCode } from '@fortawesome/free-solid-svg-icons';
import useLocalStorage from 'use-local-storage';
import Fade from 'react-reveal/Fade';
import Intro from '../../components/Text/Intro';
import Body from '../../components/Text/Body';
import './Skills.scss';
import SkillsItem from '../../components/SkillsItem';

export default function Skills() {
  const [theme] = useLocalStorage('theme');
  const isDarkMode = theme === 'dark';

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
            loading="lazy"
          />
          <img
            className="skills__icon"
            src="/images/skills/redux.png"
            alt="Redux Logo"
            loading="lazy"
          />
          <img
            className="skills__icon"
            src="/images/skills/rtl.png"
            alt="React Testing Library Logo"
            loading="lazy"
          />
          <img
            className="skills__icon"
            src="/images/skills/jest.png"
            alt="Jest Logo"
            loading="lazy"
          />
          <img
            className="skills__icon"
            src="/images/skills/emotion.png"
            alt="Emotion Logo"
            loading="lazy"
          />
          <img
            className="skills__icon--lrg"
            src={!isDarkMode ? '/images/skills/storybook.png' : '/images/skills/storybook-light.png'}
            alt="Storybook Logo"
            loading="lazy"
          />
          <img
            className="skills__icon--lrg"
            src={!isDarkMode ? '/images/skills/flow.png' : '/images/skills/flow-light.png'}
            alt="Flow Logo"
            loading="lazy"
          />
          <img
            className="skills__icon--xtra-lrg"
            src="/images/skills/axios.png"
            alt="Axios Logo"
            loading="lazy"
          />
          <img
            className={`skills__icon--lrger ${isDarkMode && 'skills__icon--white'}`}
            src="/images/skills/circle-ci.png"
            alt="Circle CI Logo"
            loading="lazy"
          />
        </div>
      </Fade>
    </div>
  );
}
