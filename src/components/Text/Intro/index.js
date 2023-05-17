import React from 'react';
import './Intro.scss';

export default function Intro(props) {
  return (
    <div className="intro">
      <h1 className="intro__title">{props.title}</h1>
      {props.description ? (
        <h4 className="intro__description">{props.description}</h4>
      ) : null}
    </div>
  );
}
