import React from 'react';
import Fade from 'react-reveal/Fade';
import useLocalStorage from 'use-local-storage';
import Intro from '../../components/Text/Intro';
import './Clients.scss';

export default function Clients() {
  const [theme] = useLocalStorage('theme');
  const isDarkMode = theme === 'dark';

  return (
    <div className="section clients">
      <Fade bottom>
        <Intro
          title="Who've I been working with? 🤝"
          description="I've worked in industries such as sports tech, e-commerce and banking, and have worked on a wide range of applications, used by thousands of customers daily. I'm currently at Kitman Labs, as a Senior Frontend Engineer."
        />

        <div className="clients__container--top">
          <img
            className="clients__image clients__image--kitman"
            src="/images/clients/kitman-logo.png"
            alt="Kitman Labs Logo"
            loading="lazy"
          />
          <img
            className="clients__image clients__image--thg"
            src="/images/clients/thg-logo.png"
            alt="THG Logo"
            loading="lazy"
          />
        </div>

        <div className="clients__container">
          <img
            className="clients__image clients__image--santander"
            src="/images/clients/santander-logo.png"
            alt="Santander Logo"
            loading="lazy"
          />
          <img
            className="clients__image clients__image--bt"
            src="/images/clients/bt-logo.png"
            alt="BT Logo"
            loading="lazy"
          />
          <img
            className={`clients__image ${
              !isDarkMode
                ? 'clients__image--ford'
                : 'clients__image--ford-light'
            }`}
            src={
              !isDarkMode
                ? '/images/clients/ford-logo.png'
                : '/images/clients/ford-logo-light.png'
            }
            alt="Ford Logo"
            loading="lazy"
          />
        </div>
      </Fade>
    </div>
  );
}
