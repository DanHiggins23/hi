import React from 'react';
import './NavOverlay.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function NavOverlay(props) {
    return (
        <div className={props.className}>
            <FontAwesomeIcon className="overlay__close" icon={faTimes} onClick={props.buttonClick} />
            <div className="overlay__content">
                <h1 className="overlay__logo">DH</h1>
                <ul className="overlay__nav">
                    <li className="overlay__nav-item">
                        <a className="overlay__nav-link" href="#">ABOUT</a>
                    </li>
                    <li className="overlay__nav-item">
                        <a className="overlay__nav-link" href="#">PROJECTS</a>
                    </li>
                    <li className="overlay__nav-item">
                        <a className="overlay__nav-link" href="#">SKILLS</a>
                    </li>
                    <li className="overlay__nav-item">
                        <a className="overlay__nav-link" href="#">EXPERIENCES</a>
                    </li>
                    <li className="overlay__nav-item">
                        <a className="overlay__nav-link" href="#">CONTACT</a>
                    </li>
                </ul>
                <div className="overlay__socials">
                    <FontAwesomeIcon className="overlay__socials-icon" icon={faGithub} />
                    <FontAwesomeIcon className="overlay__socials-icon" icon={faEnvelope} />
                    <FontAwesomeIcon className="overlay__socials-icon" icon={faLinkedinIn} />
                </div>
            </div>
        </div>
    )
}
