import React from 'react';
import './Contact.scss';
import Title from '../../Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Contact(props) {
    return (
        <div className="section contact-me">
            <Title text="Contact me" />
            <div className="contact-me__container">
                <div className="contact-me__container-item">
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="contact-me__link"><a href="#">DanHiggins23</a></span>
                </div>
                <div className="contact-me__container-item">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="contact-me__link"><a href="#">danhiggins23@outlook.com</a></span>
                </div>
                <div className="contact-me__container-item">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    <span className="contact-me__link"><a href="#">Dan Higgins</a></span>
                </div>
            </div>
        </div>
    );
}