import React from 'react';
import Fade from 'react-reveal/Fade';
import Intro from '../../Text/Intro';
import './Clients.scss';

export default function Clients() {
  return (
    <div className="section clients">
      <Fade bottom>
        <Intro
          title="Who've I been working with? 🤝"
          description="Here's a few of the companies I've been working with over the last few years. My roles have ranged from project management to back-end, front-end and full-stack developer. I'm currently employed by Kitman Labs as a Front-end developer."
        />

        <div className="clients__container--top">
          <img
            className="clients__image clients__image--kitman"
            src="/images/clients/kitman-logo.png"
            alt="Kitman Labs Logo"
          />
          <img
            className="clients__image clients__image--thg"
            src="/images/clients/thg-logo.png"
            alt="THG Logo"
          />
        </div>

        <div className="clients__container">
          <img
            className="clients__image clients__image--santander"
            src="/images/clients/santander-logo.png"
            alt="Santander Logo"
          />
          <img
            className="clients__image clients__image--bt"
            src="/images/clients/bt-logo.png"
            alt="BT Logo"
          />
          <img
            className="clients__image clients__image--ford"
            src="/images/clients/ford-logo.png"
            alt="Ford Logo"
          />
        </div>
      </Fade>
    </div>
  );
}
