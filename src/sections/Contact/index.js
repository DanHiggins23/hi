import React from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';
import Intro from '../../components/Text/Intro';

export default function Contact() {
  return (
    <div className="section contact-me">
      <Fade bottom>
        <Intro
          title="Want to get in touch? &#128222;"
          description="Want to say Hello? Check out what I've been up to on LinkedIn or GitHub. Otherwise just drop me an email!"
        />

        <div className="contact-me__container">
          <div className="contact-me__container-item">
            <a
              className="contact-me__icon"
              href="https://www.linkedin.com/in/danhiggins23"
              aria-label="View my LinkedIn profile"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <div className="contact-me__container-item">
            <a
              className="contact-me__icon"
              href="https://github.com/DanHiggins23"
              aria-label="View my GitHub profile"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="contact-me__container-item">
            <a
              className="contact-me__icon"
              href="mailto:danhiggins23@outlook.com"
              aria-label="Email me"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}
