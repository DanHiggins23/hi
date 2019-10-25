import React from 'react';
import Intro from '../../Intro';
import './Clients.scss';

export default function Clients(props) {
    return (
        <div className="section clients">
            <Intro title="Who've I been working with? 🤝" description="Here's a few of the companies I've been working with over the last few years. My roles have ranged from project management to back-end, front-end and full-stack developer." />
            <div className="clients__container">
                <img className="clients__image" height="100px" src={require('../../../utils/images/clients/bt-logo.png')} />
                <img className="clients__image" height="50px" src={require('../../../utils/images/clients/nb-logo.png')} />
                <img className="clients__image" height="80px" src={require('../../../utils/images/clients/QA-logo.png')} />
                <img className="clients__image" height="60px" src={require('../../../utils/images/clients/ford-logo.png')} />
            </div>
        </div>
    );
}