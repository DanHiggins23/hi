import React from 'react';
import Intro from '../../Text/Intro';
import './Clients.scss';
import Fade from 'react-reveal/Fade';

export default function Clients(props) {
    return (
        <div className="section clients">
            <Fade bottom>
                <Intro title="Who've I been working with? 🤝"
                    description="Here's a few of the companies I've been working with over the last few years. My roles have ranged from project management to back-end, front-end and full-stack developer. I'm currently employed by QA as a Consultant, deployed at Santander as a Back-end Developer." />

                <div className="clients__container">
                    <img className="clients__image clients__image--santander" src={require('../../../utils/images/clients/santander-logo.png')} alt="Santander Logo" />
                    <img className="clients__image clients__image--bt" src={require('../../../utils/images/clients/bt-logo.png')} alt="BT Logo" />
                    <img className="clients__image clients__image--nb" src={require('../../../utils/images/clients/nb-logo.png')} alt="NETbuilder Logo" />
                    <img className="clients__image clients__image--qa" src={require('../../../utils/images/clients/QA-logo.png')} alt="QA Logo" />
                    <img className="clients__image clients__image--ford" src={require('../../../utils/images/clients/ford-logo.png')} alt="Ford Logo" />
                </div>
            </Fade>
        </div>
    );
}