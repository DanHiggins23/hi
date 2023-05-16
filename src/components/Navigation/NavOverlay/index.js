import React from "react";
import "./NavOverlay.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function NavOverlay(props) {
  return (
    <div className={props.className}>
      <FontAwesomeIcon
        className="overlay__close"
        icon={faTimes}
        onClick={props.buttonClick}
      />
      <div className="overlay__content">
        <h1 className="overlay__logo">DH</h1>
        <ul className="overlay__nav">
          <li className="overlay__nav-item">
            <Link
              className="overlay__nav-link"
              to="/bt"
              onClick={props.buttonClick}
            >
              BT
            </Link>
          </li>
          <li className="overlay__nav-item">
            <Link
              className="overlay__nav-link"
              to="/ford"
              onClick={props.buttonClick}
            >
              FORD
            </Link>
          </li>
          <li className="overlay__nav-item">
            <Link
              className="overlay__nav-link"
              to="/santander"
              onClick={props.buttonClick}
            >
              SANTANDER
            </Link>
          </li>
        </ul>
        <div className="overlay__socials">
          <a href="https://www.linkedin.com/in/danhiggins23">
            <FontAwesomeIcon
              className="overlay__socials-icon"
              icon={faLinkedinIn}
            />
          </a>
          <a href="https://github.com/DanHiggins23">
            <FontAwesomeIcon
              className="overlay__socials-icon"
              icon={faGithub}
            />
          </a>
          <a href="mailto:danhiggins23@outlook.com">
            <FontAwesomeIcon
              className="overlay__socials-icon"
              icon={faEnvelope}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
