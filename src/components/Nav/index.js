import React from 'react';
import './Nav.scss';

export default function Nav(props) {
    return (
        <div className="nav">
            <h1 className="nav__logo">DH</h1>
            <ul className="nav__list">
                <li className="nav__list-items"><a className="nav__list-items-link" href="#">About</a></li>
                <li className="nav__list-items"><a className="nav__list-items-link" href="#">Projects</a></li>
                <li className="nav__list-items"><a className="nav__list-items-link" href="#">Skills</a></li>
                <li className="nav__list-items"><a className="nav__list-items-link" href="#">Experiences</a></li>
                <li className="nav__list-items"><a className="nav__list-items-link" href="#">Contact</a></li>
            </ul>
        </div>
    )
}