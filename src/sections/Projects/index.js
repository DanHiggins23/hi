import React from 'react';
import './Projects.scss';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Intro from '../../components/Text/Intro';

export default function Projects() {
  return (
    <div className="section projects">
      <Fade bottom>
        <Intro
          title="What have I been doing? 👨‍💻"
          description="Want to see what I've been up to? Click any tile to have a look at what I've been up to."
        />
        <div className="projects__tile-container">
          <Link className="projects__tile projects__tile--kitman" to="/kitman">
            <div className="projects__tile-image">
              <img
                className="projects__tile-image--kitman"
                src="/images/clients/kitman-logo.png"
                alt="Kitman Labs Logo"
                loading="lazy"
              />
            </div>
          </Link>
          <Link className="projects__tile projects__tile--thg" to="/thg">
            <div className="projects__tile-image">
              <img
                className="projects__tile-image projects__tile-image--thg"
                src="/images/clients/thg-logo.png"
                alt="THG Logo"
                loading="lazy"
              />
            </div>
          </Link>
          <Link
            className="projects__tile projects__tile--santander"
            to="/santander"
          >
            <div className="projects__tile-image">
              <img
                className="projects__tile-image--santander"
                src="/images/clients/santander-logo.png"
                alt="Santander Logo"
                loading="lazy"
              />
            </div>
          </Link>
          <Link className="projects__tile projects__tile--bt" to="/bt">
            <div className="projects__tile-image">
              <img
                className="projects__tile-image projects__tile-image--bt"
                src="/images/clients/bt-logo.png"
                alt="BT Logo"
                loading="lazy"
              />
            </div>
          </Link>
        </div>
      </Fade>
    </div>
  );
}
