import React, { Component } from 'react';
import Nav from '../Nav';
import Title from '../Title';
import './App.scss';
import '../../styles/_shared.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faWindowClose, faTimes } from '@fortawesome/free-solid-svg-icons';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		}
	}

	handleOverlay = () => {
		this.setState({
			visible: !this.state.visible,
		}, () => {
			if (this.state.visible === true) {
				document.getElementsByTagName("html")[0].style.overflowY = "hidden";
			} else {
				document.getElementsByTagName("html")[0].style.overflowY = "auto";
			}
		});

	}

	render() {
		return (
			<div className="App">
				<div className={this.state.visible ? 'overlay slideIn' : 'overlay slideOut'}>
					<FontAwesomeIcon className="overlay__close" icon={faTimes} onClick={this.handleOverlay} />
					<div className="overlay__content">
						<h1 className="overlay__logo">DH</h1>
						<ul className="overlay__nav">
							<li className="overlay__nav-item">
								<a className="overlay__nav-link" href="#">ABOUT</a>
							</li>
							<li className="overlay__nav-item">
								<a className="overlay__nav-link" href="#">PROJECTS</a>
							</li>
							<li className="overlay__nav-item">
								<a className="overlay__nav-link" href="#">SKILLS</a>
							</li>
							<li className="overlay__nav-item">
								<a className="overlay__nav-link" href="#">EXPERIENCES</a>
							</li>
							<li className="overlay__nav-item">
								<a className="overlay__nav-link" href="#">CONTACT</a>
							</li>
						</ul>
						<div className="overlay__socials">
							<FontAwesomeIcon className="overlay__socials-icon" icon={faGithub} />
							<FontAwesomeIcon className="overlay__socials-icon" icon={faEnvelope} />
							<FontAwesomeIcon className="overlay__socials-icon" icon={faLinkedinIn} />
						</div>
					</div>
				</div>
				<Nav buttonClick={this.handleOverlay} />
				<div className="section home"></div>

				<div className="section about-me">
					<Title text="About me" />
				</div>

				<div className="section projects">
					<Title text="Projects" />
				</div>

				<div className="section skills">
					<Title text="My skills" />
					<div className="skills__container">
						<div className="skills__container-item">
							<img className="skills__icon" src={require('../../utils/images/skills/java.png')} />
							<span className="skills__link"><a href="#">Java</a></span>
							<p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
						</div>
						<div className="skills__container-item">
							<img className="skills__icon" src={require('../../utils/images/skills/java.png')} />
							<span className="skills__link"><a href="#">Java</a></span>
							<p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
						</div>
						<div className="skills__container-item">
							<img className="skills__icon" src={require('../../utils/images/skills/java.png')} />
							<span className="skills__link"><a href="#">Java</a></span>
							<p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
						</div>
					</div>
					<div className="skills__container">
						<div className="skills__container-item">
							<img className="skills__icon" src={require('../../utils/images/skills/java.png')} />
							<span className="skills__link"><a href="#">Java</a></span>
							<p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
						</div>
						<div className="skills__container-item">
							<img className="skills__icon" src={require('../../utils/images/skills/java.png')} />
							<span className="skills__link"><a href="#">Java</a></span>
							<p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
						</div>
						<div className="skills__container-item">
							<img className="skills__icon" src={require('../../utils/images/skills/java.png')} />
							<span className="skills__link"><a href="#">Java</a></span>
							<p className="skills__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
						</div>
					</div>
				</div>

				<div className="section experiences">
					<Title text="Experiences" />
				</div>

				<div className="section contact-me">
					<Title text="Contact me" />
					<div className="contact-me__container">
						<div className="contact-me__container-item">
							<FontAwesomeIcon icon={faGithub} />
							<span className="contact-me__link"><a href="#">DanHiggins23</a></span>
						</div>
						<div className="contact-me__container-item">
							<FontAwesomeIcon icon={faEnvelope} />
							<span className="contact-me__link"><a href="#">danhiggins23@outlook.com</a></span>
						</div>
						<div className="contact-me__container-item">
							<FontAwesomeIcon icon={faLinkedinIn} />
							<span className="contact-me__link"><a href="#">Dan Higgins</a></span>
						</div>
					</div>
				</div>

				<div className="section footer">
					<h4>&copy; Dan Higgins 2019</h4>
				</div>
			</div>
		);
	}
}
