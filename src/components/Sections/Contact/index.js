import React from "react";
import "./Contact.scss";
import Intro from "../../Text/Intro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import Fade from "react-reveal/Fade";

export default function Contact(props) {
  return (
    <div className="section contact-me">
      <Fade bottom>
        <Intro
          title="Want to get in touch? &#128222;"
          description="Want to say Hello? Check out what I've been up to on Linked In or GitHub. Otherwise just drop me an email!"
        />

        <div className="contact-me__container">
          <div className="contact-me__container-item">
            <a
              className="contact-me__icon"
              href="https://www.linkedin.com/in/danhiggins23"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <div className="contact-me__container-item">
            <a
              className="contact-me__icon"
              href="https://github.com/DanHiggins23"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="contact-me__container-item">
            <a
              className="contact-me__icon"
              href="mailto:danhiggins23@outlook.com"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}
