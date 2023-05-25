import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from '@fortawesome/free-solid-svg-icons';
import './SkillsItems.scss';

export default function SkillsItem(props) {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(prev => !prev);
  };

  const getStringLength = text => {
    if (showText) {
      return text;
    }
    return `${text.slice(0, 100)}...`;
  };

  return (
    <div className="skills__container-item">
      {props.icon && <FontAwesomeIcon icon={props.icon} />}
      {props.imagePath && (
        <img
          className="qualifications__image qualifications__image"
          src={props.imagePath}
          alt={props.altText}
          loading="lazy"
        />
      )}
      <span className="skills__link">{props.titleLink ? <a className="skills__link-a" href={props.titleLink}>{props.title}</a> : props.title}</span>
      {props.text && (
        <button onClick={handleClick} type="button" className="skills__button">
          <p
            className={
            showText
              ? 'skills__description skills__test hvr-icon-up'
              : 'skills__description hvr-icon-down'
          }
          >
            {getStringLength(props.text)}
            <FontAwesomeIcon
              icon={showText ? faArrowAltCircleUp : faArrowAltCircleDown}
              className="skills__more hvr-icon"
              onClick={handleClick}
            />
          </p>
        </button>
      )}
    </div>
  );
}
