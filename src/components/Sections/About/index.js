import React from 'react';
import './About.scss';
import TextLoop from "react-text-loop";

export default function About(props) {
    return (
        <div className="section about-me">
            <div className="about-me">
                <div className="about-me__title">
                    <span>Hi, I'm</span>
                    <TextLoop delay="1000" interval="2000">
                        <span>&nbsp;Dan Higgins</span>
                        <span>&nbsp;a Developer</span>
                        <span>&nbsp;a Consultant</span>
                    </TextLoop>
                    <span>&nbsp;👋</span>
                </div>
                <h3 className="about-me__description">
                    I've been working on a range of projects with companies such as <span className="ford-underline">Ford</span>, <span className="bt-underline">BT</span> and <span className="santander-underline">Santander</span> for the last few years. Have a look what I've been up to!
                    </h3>
            </div>
            <img className="about-me__image" src={require('../../../utils/images/amsterdam.jpg')} />
        </div>
    );
}