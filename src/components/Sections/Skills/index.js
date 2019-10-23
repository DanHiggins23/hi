import React from 'react';
import Title from '../../Title';
import './Skills.scss';

export default function Skills(props) {
    return (
        <div className="section skills">
            <Title text="What can I do?" />
            <h4 className="skills__intro">I'm always learning to expand my skills further. Here's a few examples of what I've been doing recently in the project I've currently been working on.</h4>

            <div className="skills__container">
                <div className="skills__container-item">
                    <img className="skills__icon" src={require('../../../utils/images/skills/java.png')} />
                    <span className="skills__link"><a href="#">Java</a></span>
                    <p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="skills__container-item">
                    <img className="skills__icon" src={require('../../../utils/images/skills/java.png')} />
                    <span className="skills__link"><a href="#">Java</a></span>
                    <p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="skills__container-item">
                    <img className="skills__icon" src={require('../../../utils/images/skills/java.png')} />
                    <span className="skills__link"><a href="#">Java</a></span>
                    <p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
            </div>
            <div className="skills__container">
                <div className="skills__container-item">
                    <img className="skills__icon" src={require('../../../utils/images/skills/java.png')} />
                    <span className="skills__link"><a href="#">Java</a></span>
                    <p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="skills__container-item">
                    <img className="skills__icon" src={require('../../../utils/images/skills/java.png')} />
                    <span className="skills__link"><a href="#">Java</a></span>
                    <p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="skills__container-item">
                    <img className="skills__icon" src={require('../../../utils/images/skills/java.png')} />
                    <span className="skills__link"><a href="#">Java</a></span>
                    <p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
            </div>
        </div>
    );
}