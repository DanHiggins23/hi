import React, { useState, useEffect } from 'react';
import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Progress from '../Progress';
import DarkModeToggle from '../../DarkModeToggle';

export default function NavBar(props) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const getDocHeight = () => Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight,
  );

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - windowHeight;
    const scrollPositionCalc = Math.ceil(
      (scrollTop / totalDocScrollLength) * 100,
    );

    setScrollPosition(scrollPositionCalc);
  };

  const listenToScrollEvent = () => {
    document.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  };

  useEffect(() => {
    listenToScrollEvent();
  }, []);

  return (
    <>
      <div className="nav">
        <Link className="nav__logo" to="/">
          <h1>Dan Higgins</h1>
        </Link>
        <Link className="nav__logo--mobile" to="/">
          <h1>DH</h1>
        </Link>

        <ul className="nav__list">
          <DarkModeToggle />
          <FontAwesomeIcon
            onClick={props.buttonClick}
            className="nav__hamburger"
            icon={faBars}
          />

          <li className="nav__list-items nav__list-items--desktop">
            <a
              className="nav__list-items-link"
              href="https://www.linkedin.com/in/danhiggins23"
            >
              LinkedIn
            </a>
          </li>
          <li className="nav__list-items nav__list-items--desktop">
            <a
              className="nav__list-items-link"
              href="https://github.com/DanHiggins23"
            >
              GitHub
            </a>
          </li>
          <li className="nav__list-items nav__list-items--desktop">
            <a
              className="nav__list-items-link"
              href="mailto:danhiggins23@outlook.com"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>
      <Progress scroll={`${scrollPosition}%`} />
    </>
  );
}
