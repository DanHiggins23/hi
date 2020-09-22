import React from 'react';
import Intro from '../../Text/Intro';
import './Qualifications.scss';
import Fade from 'react-reveal/Fade';
import SkillsItem from '../Skills/SkillsItem';

export default function Qualifications(props) {
    return (
        <div className="section qualifications">
            <Fade bottom>
                <Intro title="My qualifcations 🏆"
                    description="Below are the qualifications I've earnt to date. I'm very keen to delve more into Cloud and Cyber Security, so expect more qualifications soon.." />

                <div className="qualifications__container">
                    <SkillsItem
                        imagePath={require("../../../utils/images/clients/teesside-uni.png")}
                        altText="Teesside Logo"
                        title="BSc Computer &amp; Digital Forensics" />
                    <SkillsItem
                        imagePath={require("../../../utils/images/clients/open-university.png")}
                        altText="Open University Logo"
                        title="Introduction to Cyber Security" />
                </div>
            </Fade>
        </div>
    );
}