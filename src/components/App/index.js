import React, { Component } from 'react';
import Nav from '../Nav';
import Title from '../Title';
import './App.scss';
import '../../styles/_shared.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
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
