import React from 'react';
import './Title.scss';

export default function Title(props) {
    return (
        <div className="title">
            <h1>{props.text}</h1>
            <div className="title__border"></div>
        </div>
    )
}