import React from 'react';
import Title from '../../Title';
import './About.scss';

export default function About(props) {
    return (
        <div className="section about-me">
            <Title text="About me" />
            <img className="about-me__image" src={require('../../../utils/images/graduation.jpg')} />
        </div>
    );
}