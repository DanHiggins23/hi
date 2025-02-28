import React, { useEffect } from 'react';
import './About.scss';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

export default function About() {
  const handleScroll = () => {
    if (window.pageYOffset <= 1000) {
      document.getElementsByClassName(
        'about-me__image',
      )[0].style.borderRadius = `${window.pageYOffset / 5}%`;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
            I&apos;ve been working on a range of projects with clients such as
            {' '}
            <span className="premierLeague-underline">Premier League</span>
            ,
            {' '}
            <span className="myProtein-underline">Myprotein</span>
            {' '}
            ,
            {' '}
            <span className="santander-underline">
              <Link to="/santander">Santander</Link>
            </span>
            {' '}
            and
            {' '}
            <span className="ford-underline">
              Ford
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
