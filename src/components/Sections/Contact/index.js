import React from 'react';
import './Contact.scss';
import Intro from '../../Intro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Contact(props) {
    return (
        <div className="section contact-me">
            <Intro title="Want to get in touch? &#128222;" description="Want to say Hello? Check out what I've been up to on Linked In or GitHub. Otherwise just drop me an email!" />
            <div className="contact-me__container">
                <div className="contact-me__container-item">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    <span className="contact-me__link"><a href="#">Dan Higgins</a></span>
                </div>
                <div className="contact-me__container-item">
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="contact-me__link"><a href="#">DanHiggins23</a></span>
                </div>
                <div className="contact-me__container-item">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="contact-me__link"><a href="#">danhiggins23@outlook.com</a></span>
                </div>
            </div>
        </div>
    );
}