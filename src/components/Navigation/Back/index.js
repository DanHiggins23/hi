import React from 'react';
import './Back.scss';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Back() {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <button className="back hvr-icon-wobble-horizontal" type="button">
      <FontAwesomeIcon
        className="back__icon hvr-icon"
        icon={faChevronLeft}
        onClick={handleClick}
      />
    </button>
  );
}
