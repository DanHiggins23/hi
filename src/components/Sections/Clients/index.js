import React from 'react';
import Title from '../../Title';
import './Clients.scss';

export default function Clients(props) {
    return (
        <div className="section clients">
            <Title text="Who've I been working with?" />
            <h4 className="clients__description">Here's a few of the companies I've been working with over the last few years. My roles have ranged from project management to back-end, front-end and full-stack developer.</h4>
            <div className="clients__container">
                <img className="clients__image" height="100px" src={require('../../../utils/images/clients/bt-logo.png')} />
                <img className="clients__image" height="50px" src={require('../../../utils/images/clients/nb-logo.png')} />
                <img className="clients__image" height="80px" src={require('../../../utils/images/clients/QA-logo.png')} />
                <img className="clients__image" height="60px" src={require('../../../utils/images/clients/ford-logo.png')} />
            </div>
        </div>
    );
}