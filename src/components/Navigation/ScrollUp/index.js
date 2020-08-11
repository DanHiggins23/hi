import React from 'react';
import './ScrollUp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

export default function ScrollUp(props) {
    return (
        <button className="scroll-up hvr-icon-wobble-vertical">
            <FontAwesomeIcon className="scroll-up__icon hvr-icon" icon={faChevronCircleUp} onClick={props.buttonClick} />
        </button>
    )
}