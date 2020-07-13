import React from 'react';
import Intro from '../../Intro';
import './Qualifications.scss';
import Fade from 'react-reveal/Fade';

export default function Qualifications(props) {
    return (
        <div className="section qualifications">
            <Fade bottom>
                <Intro title="My qualifcations 🏆"
                    description="Here's just a quick overview of what I've been working on in the past few years, over multiple different projects expanding my skills where possible!" />

                <div className="qualifications__container">
                    <div className="qualifications__container-item">
                        <img className="qualifications__image qualifications__image--teesside" src={require('../../../utils/images/clients/teesside-uni.png')} alt="Santander Logo" />
                        <span className="skills__link"><a href="#">BSc Computer &amp; Digital Forensics</a></span>
                        <p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="qualifications__container-item">
                        <img className="qualifications__image qualifications__image--ou" src={require('../../../utils/images/clients/open-university.png')} alt="Santander Logo" />
                        <span className="skills__link"><a href="#">Introduction to Cyber Security</a></span>
                        <p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
}