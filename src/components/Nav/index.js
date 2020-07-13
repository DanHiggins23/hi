import React, { Component } from 'react';
import Progress from '../Progress';
import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: false,
            scrollPosition: 0
        }
    }

    handleClick = () => {
        this.setState({
            display: !this.state.display
        });
    }

    listenToScrollEvent = () => {
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
                this.calculateScrollDistance();
            });
        });
    };

    componentDidMount() {
        this.listenToScrollEvent();
    }

    calculateScrollDistance = () => {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = this.getDocHeight();

        const totalDocScrollLength = docHeight - windowHeight;
        const scrollPosition = Math.ceil(scrollTop / totalDocScrollLength * 100)

        this.setState({
            scrollPosition,
        });
    }

    getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }

    render() {
        return (
            <div>
                <div className="nav">
                    <h1 className="nav__logo">Dan Higgins</h1>
                    <h1 className="nav__logo--mobile">DH</h1>
                    {/* <ul className="nav__list">
                        <li className="nav__list-items nav__list-items--desktop">
                            <a className="nav__list-items-link" href="#test">ABOUT</a>
                        </li>
                        <li className="nav__list-items nav__list-items--desktop">
                            <a className="nav__list-items-link" href="#">CLIENTS</a>
                        </li>
                        <li className="nav__list-items nav__list-items--desktop">
                            <a className="nav__list-items-link" href="#">SKILLS</a>
                        </li>
                        <li className="nav__list-items nav__list-items--desktop">
                            <a className="nav__list-items-link" href="#">PROJECTS</a>
                        </li>
                        <li className="nav__list-items nav__list-items--desktop">
                            <a className="nav__list-items-link" href="#">QUALIFICATIONS</a>
                        </li>
                        <li className="nav__list-items nav__list-items--desktop">
                            <a className="nav__list-items-link" href="#">CONTACT</a>
                        </li>
                    </ul>
                    <FontAwesomeIcon onClick={this.props.buttonClick} className="nav__hamburger" icon={faBars} /> */}
                </div>
                <Progress scroll={this.state.scrollPosition + "%"} />
            </div>
        );
    };
}