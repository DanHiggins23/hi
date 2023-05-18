import React from 'react';
import './About.scss';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="section about-me">
      <div className="about-me">
        <div className="about-me__title">
          <Fade bottom>
            <div>
              <span>Hi, I&apos;m Dan Higgins</span>
              <span
                role="img"
                aria-label="jsx-a11y/aria-proptypes"
                className="wave"
              >
                &nbsp;👋
              </span>
            </div>
          </Fade>
        </div>
        <Fade bottom delay={500}>
          <h3 className="about-me__description">
            I&apos;ve been working on a range of projects with companies such as
            {' '}
            <span className="ford-underline">
              <Link to="/ford">Ford</Link>
            </span>
            ,
            {' '}
            <span className="bt-underline">
              <Link to="/bt">BT</Link>
            </span>
            {' '}
            and
            {' '}
            <span className="santander-underline">
              <Link to="/santander">Santander</Link>
            </span>
            {' '}
            over the last few years. Have a look what I&apos;ve been up to!
          </h3>
        </Fade>
      </div>
      <Fade bottom delay={500}>
        <img
          className="about-me__image"
          src="/images/me-lisbon.jpg"
          alt="Me in Lisbon"
        />
      </Fade>
    </div>
  );
}
