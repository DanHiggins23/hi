import React from 'react';
import './Projects.scss';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Intro from '../../../components/Text/Intro';

export default function Projects() {
  return (
    <div className="section projects">
      <Fade bottom>
        <Intro
          title="What have I been doing? 👨‍💻"
          description="Want to see what I've been up to? Click any tile to have a look at the projects I've been involved in with my biggest clients."
        />
        <div className="projects__tile-container">
          <div className="projects__tile projects__tile--santander">
            <Link className="projects__tile-image" to="/santander">
              <img
                className="projects__tile-image projects__tile-image--santander"
                src="/images/clients/santander-logo.png"
                alt="Santander Logo"
              />
            </Link>
          </div>
          <div className="projects__tile projects__tile--ford">
            <Link className="projects__tile-image" to="/ford">
              <img
                className="projects__tile-image projects__tile-image--ford"
                src="/images/clients/ford-logo-trans.png"
                alt="BT Logo"
              />
            </Link>
          </div>
          <div className="projects__tile projects__tile--bt">
            <Link className="projects__tile-image" to="/bt">
              <img
                className="projects__tile-image--bt"
                src="/images/clients/bt-logo.png"
                alt="BT Logo"
              />
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
}
