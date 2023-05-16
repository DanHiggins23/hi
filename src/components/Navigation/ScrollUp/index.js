import React from "react";
import "./ScrollUp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

export default function ScrollUp(props) {
  return (
    <Fade top opposite collpase when={props.show}>
      <button className="scroll-up hvr-icon-wobble-vertical">
        <FontAwesomeIcon
          className="scroll-up__icon hvr-icon"
          icon={faChevronCircleUp}
          onClick={props.buttonClick}
        />
      </button>
    </Fade>
  );
}
