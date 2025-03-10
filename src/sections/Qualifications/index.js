import React from 'react';
import Fade from 'react-reveal/Fade';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Intro from '../../components/Text/Intro';
import './Qualifications.scss';
import SkillsItem from '../../components/SkillsItem';

export default function Qualifications() {
  return (
    <div className="section qualifications">
      <Fade bottom>
        <Intro
          title="My qualifcations 🏆"
          description="Here's some qualifications & courses I've completed recently. Most recently I've achieved Profesional Scrum Master I, and taken on the responsibility of Scrum Master within my squad."
        />

        <div className="qualifications__container">
          <SkillsItem
            imagePath="/images/clients/teesside-uni.png"
            altText="Teesside Logo"
            title="BSc Computer &amp; Digital Forensics"
          />
          <SkillsItem
            imagePath="/images/clients/scrumorg-1.svg"
            altText="Scrum.org Logo"
            title="Proffesional Scrum Master I"
          />
          <SkillsItem
            icon={faLinkedinIn}
            title="React: Using TypeScript"
            titleLink="https://www.linkedin.com/learning/certificates/f40428704f1ae42a1739acf9b2e6afbe1fdba9e4f7eebffcf28cf53d6c1ee656"
          />
          <SkillsItem
            icon={faLinkedinIn}
            title="Developing for Web Performance"
            titleLink="https://www.linkedin.com/learning/certificates/c851f244ca4e21873b19423d6cc3e601707ee06d81e54551862e06231dae4cfd"
          />
          <SkillsItem
            imagePath="/images/clients/open-university.png"
            altText="Open University Logo"
            title="Introduction to Cyber Security"
          />
        </div>
      </Fade>
    </div>
  );
}
