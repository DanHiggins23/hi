import React from "react";
import "./Back.scss";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Back(props) {
  let history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <button className="back hvr-icon-wobble-horizontal">
      <FontAwesomeIcon
        className="back__icon hvr-icon"
        icon={faChevronLeft}
        onClick={handleClick}
      />
    </button>
  );
}
