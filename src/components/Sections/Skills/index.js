import React from 'react';
import Intro from '../../Intro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact, faCss3Alt, faHtml5, faSass } from '@fortawesome/free-brands-svg-icons'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import './Skills.scss';

export default function Skills(props) {
    return (
        <div className="section skills">
            <Intro title="What can I do? 💻" description="I'm always learning to expand my skills further. Here's a few examples of what I've been doing recently in the projects I've currently been working on." />

            <div className="skills__container">
                <div className="skills__container-item">
                    <FontAwesomeIcon icon={faReact} />
                    <span className="skills__link"><a href="#">React JS</a></span>
                    <p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="skills__container-item">
                    <FontAwesomeIcon icon={faJava} />
                    <span className="skills__link"><a href="#">Java</a></span>
                    <p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="skills__container-item">
                    <FontAwesomeIcon icon={faCodeBranch} />
                    <span className="skills__link"><a href="#">Git</a></span>
                    <p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
            </div>
            <div className="skills__container">
                <div className="skills__container-item">
                    <FontAwesomeIcon icon={faHtml5} />
                    <span className="skills__link"><a href="#">HTML</a></span>
                    <p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="skills__container-item">
                    <FontAwesomeIcon icon={faCss3Alt} />
                    <span className="skills__link"><a href="#">CSS</a></span>
                    <p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="skills__container-item">
                    <FontAwesomeIcon icon={faSass} />
                    <span className="skills__link"><a href="#">SASS</a></span>
                    <p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
            </div>
        </div>
    );
}