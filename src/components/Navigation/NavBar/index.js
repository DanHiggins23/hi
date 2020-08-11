import React, { Component } from 'react';
import Progress from '../Progress';
import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {

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
                    <Link className="nav__logo" to="/">
                        <h1>Dan Higgins</h1>
                    </Link>
                    <Link className="nav__logo--mobile" to="/">
                        <h1>DH</h1>
                    </Link>

                    <ul className="nav__list">
                        <li className="nav__list-items nav__list-items--desktop">
                            <a className="nav__list-items-link" href="https://www.linkedin.com/in/danhiggins23">Linked In</a>
                        </li>
                        <li className="nav__list-items nav__list-items--desktop">
                            <a className="nav__list-items-link" href="https://github.com/DanHiggins23">GitHub</a>
                        </li>
                        <li className="nav__list-items nav__list-items--desktop">
                            <a className="nav__list-items-link" href="mailto:danhiggins23@outlook.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                        </li>
                    </ul>
                    <FontAwesomeIcon onClick={this.props.buttonClick} className="nav__hamburger" icon={faBars} />
                </div>
                <Progress scroll={this.state.scrollPosition + "%"} />
            </div>
        );
    };
}