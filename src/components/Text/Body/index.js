import React from 'react';
import './Body.scss';

export default function Body(props) {
    return (
        <div className="body">
            {props.title && (
                <h2 className="body__title">{props.title}</h2>
            )}
            {props.description && <h4 className="body__description">{props.description}</h4>}
        </div>
    )
}