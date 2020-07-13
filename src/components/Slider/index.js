import React, { Component } from "react";
import './Slider.scss';
import Slider from "react-slick";

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img className="clients__image clients__image--santander" src={require('../../utils/images/clients/santander-logo.png')} alt="Santander Logo" />
                    </div>
                    <div>
                        <img className="clients__image clients__image--bt" src={require('../../utils/images/clients/bt-logo.png')} alt="BT Logo" />
                    </div>
                    <div>
                        <img className="clients__image clients__image--nb" src={require('../../utils/images/clients/nb-logo.png')} alt="NETbuilder Logo" />
                    </div>
                    <div>
                        <img className="clients__image clients__image--qa" src={require('../../utils/images/clients/QA-logo.png')} alt="QA Logo" />
                    </div>
                    <div>
                        <img className="clients__image clients__image--ford" src={require('../../utils/images/clients/ford-logo.png')} alt="Ford Logo" />
                    </div>
                </Slider>
            </div>
        );
    }
}