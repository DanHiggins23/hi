import React from 'react';
import Fade from 'react-reveal/Fade';
import Intro from '../../components/Text/Intro';
import './Qualifications.scss';
import SkillsItem from '../../components/SkillsItem';

export default function Qualifications() {
  return (
    <div className="section qualifications">
      <Fade bottom>
        <Intro
          title="My qualifcations 🏆"
          description="Below are the qualifications I've earnt to date. I'm very keen to delve more into Cloud and Cyber Security, so expect more qualifications soon.."
        />

        <div className="qualifications__container">
          <SkillsItem
            imagePath="/images/clients/teesside-uni.png"
            altText="Teesside Logo"
            title="BSc Computer &amp; Digital Forensics"
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
