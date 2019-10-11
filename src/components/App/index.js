import React, { Component } from 'react';
import Nav from '../Nav';
import Title from '../Title';
import Contact from '../Sections/Contact';
import './App.scss';
import '../../styles/_shared.scss';
import NavOverlay from '../NavOverlay';
import classnames from 'classnames';
import DownloadCV from '../Sections/DownloadCV';
import About from '../Sections/About';

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
				<NavOverlay className={classnames(this.state.visible ? 'overlay slideIn' : 'overlay slideOut')} buttonClick={this.handleOverlay} />
				<Nav buttonClick={this.handleOverlay} />
				<div className="section home"></div>

				<About />

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

				<DownloadCV />

				<Contact />

				<div className="section footer">
					<h4>&copy; Dan Higgins 2019</h4>
				</div>
			</div>
		);
	}
}
