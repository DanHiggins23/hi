import React from 'react';
import './About.scss';
import TextLoop from "react-text-loop";
import Fade from "react-reveal/Fade";
import { Link } from 'react-router-dom';

export default function About(props) {
    return (
        <div className="section about-me">
            <div className="about-me">
                <div className="about-me__title">
                    <Fade bottom>
                        <div>
                            <span>Hi, I'm</span>
                            <TextLoop delay="1000" interval="2000">
                                <span>&nbsp;Dan Higgins</span>
                                <span>&nbsp;a Developer</span>
                                <span>&nbsp;a Consultant</span>
                            </TextLoop>
                            <span role="img" aria-label="jsx-a11y/aria-proptypes">&nbsp;👋</span>
                        </div>
                    </Fade>
                </div>
                <Fade bottom delay={500}>
                    <h3 className="about-me__description">
                        I've been working on a range of projects with companies such as <span className="ford-underline"><Link to="/ford">Ford</Link></span>, <span className="bt-underline"><Link to="/bt">BT</Link></span> and <span className="santander-underline"><Link to="/santander">Santander</Link></span> for the last few years. Have a look what I've been up to!
                    </h3>
                </Fade>
            </div>
            <Fade bottom delay={500}>
                <img className="about-me__image" src={require('../../../utils/images/me-lisbon.jpg')} alt="Me in Lisbon" />
            </Fade>
        </div>
    );
}