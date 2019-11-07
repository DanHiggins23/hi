import React from 'react';
import Intro from '../../Intro';
import './About.scss';

export default function About(props) {
    return (
        <div className="section about-me">
            <Intro title="Hi, I'm Dan Higgins 👋"
                description="I'm a full-stack software developer, focusing primarily in React. I've been working on projects with companies such as Ford and BT for the last few years expanding my skillset." />
            <img className="about-me__image" src={require('../../../utils/images/graduation.jpg')}  />
        </div>
    );
}