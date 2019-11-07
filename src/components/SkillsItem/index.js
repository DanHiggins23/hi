import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

export default class SkillsItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showText: false
        }
    }

    handleClick = () => {
        this.setState({
            showText: !this.state.showText
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
                <span className="skills__link"><a href="#">{this.props.title}</a></span>
                <p className="skills__description">{this.getStringLength(this.props.text)}<FontAwesomeIcon icon={this.state.showText ? faArrowAltCircleUp : faArrowAltCircleDown} className="skills__more" onClick={this.handleClick} /></p>
            </div>
        );
    }
}