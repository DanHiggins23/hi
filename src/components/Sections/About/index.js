import React from 'react';
import Title from '../../Title';
import './About.scss';

export default function About(props) {
    return (
        <div className="section about-me">
            <Title text="Hi, I'm Dan Higgins 👋" />
            <p className="about-me__description">
                I'm a full-stack software developer, focusing primarily in React. I've been working on projects with companies such as Ford and BT for the last few years expanding my skillset.
            </p>
            <img className="about-me__image" src={require('../../../utils/images/graduation.jpg')} />
        </div>
    );
}