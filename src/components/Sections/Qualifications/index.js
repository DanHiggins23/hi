import React from 'react';
import Intro from '../../Text/Intro';
import './Qualifications.scss';
import Fade from 'react-reveal/Fade';

export default function Qualifications(props) {
    return (
        <div className="section qualifications">
            <Fade bottom>
                <Intro title="My qualifcations 🏆"
                    description="Below are the qualifications I've earnt to date. I'm very keen to delve more into Cloud and Cyber Security, so expect more qualifications soon.." />

                <div className="qualifications__container">
                    <div className="qualifications__container-item">
                        <img className="qualifications__image qualifications__image--teesside" src={require('../../../utils/images/clients/teesside-uni.png')} alt="Santander Logo" />
                        <span className="skills__link">BSc Computer &amp; Digital Forensics</span>
                        <p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="qualifications__container-item">
                        <img className="qualifications__image qualifications__image--ou" src={require('../../../utils/images/clients/open-university.png')} alt="Santander Logo" />
                        <span className="skills__link">Introduction to Cyber Security</span>
                        <p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
}