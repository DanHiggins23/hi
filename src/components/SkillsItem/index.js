import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import './SkillsItems.scss';

export default class SkillsItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showText: false,
            aniamte: false
        }
    }

    handleClick = () => {
        this.setState({
            showText: !this.state.showText,
            animate: !this.state.animate
        })
    }

    getStringLength(text) {
        if (this.state.showText) {
            return text;
        }
        return text.slice(0, 115) + "...";
    }

    render() {
        return (
            <div className="skills__container-item">
                <FontAwesomeIcon icon={this.props.icon} />
                <span className="skills__link">{this.props.title}</span>
                <p onClick={this.handleClick} className={this.state.showText ? "skills__description skills__test hvr-icon-up" : "skills__description hvr-icon-down"}>{this.getStringLength(this.props.text)}<FontAwesomeIcon icon={this.state.showText ? faArrowAltCircleUp : faArrowAltCircleDown} className="skills__more hvr-icon" onClick={this.handleClick} /></p>
            </div>
        );
    }
}