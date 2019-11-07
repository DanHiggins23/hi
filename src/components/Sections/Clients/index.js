import React from 'react';
import Intro from '../../Intro';
import './Clients.scss';

export default function Clients(props) {
    return (
        <div className="section clients">
            <Intro title="Who've I been working with? 🤝" description="Here's a few of the companies I've been working with over the last few years. My roles have ranged from project management to back-end, front-end and full-stack developer." />
            <div className="clients__container">
                <img className="clients__image clients__image--bt" src={require('../../../utils/images/clients/bt-logo.png')} alt="BT Logo" />
                <img className="clients__image clients__image--nb" src={require('../../../utils/images/clients/nb-logo.png')} alt="NETbuilder Logo" />
                <img className="clients__image clients__image--qa" src={require('../../../utils/images/clients/QA-logo.png')} alt="QA Logo" />
                <img className="clients__image clients__image--ford" src={require('../../../utils/images/clients/ford-logo.png')} alt="Ford Logo" />
            </div>
        </div>
    );
}