import React, { Component } from 'react';
import Nav from '../Nav';
import Progress from '../Progress';
import Title from '../Title';
import './App.scss';
import '../../styles/_shared.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default class App extends Component {

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

	state = {
		scrollPosition: 0
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
			<div className="App">
				<Nav />
				<Progress scroll={this.state.scrollPosition + "%"} />
				<div className="section home"></div>

				<div className="section about-me">
					<Title text="about me" />
				</div>

				<div className="section projects">
					<Title text="projects" />
				</div>

				<div className="skills skills">
					<Title text="skills" />
				</div>

				<div className="section experiences">
					<Title text="experiences" />
				</div>

				<div className="section contact-me">
					<Title text="contact me" />
					<div className="contact-me__container">
						<div className="contact-me__container-item">
							<FontAwesomeIcon icon={faGithubAlt} />
							<span><a className="contact-me__link" href="#">DanHiggins23</a></span>
						</div>
						<div className="contact-me__container-item">
							<FontAwesomeIcon icon={faEnvelope} />
							<span><a className="contact-me__link" href="#">danhiggins23@outlook.com</a></span>
						</div>
						<div className="contact-me__container-item">
							<FontAwesomeIcon icon={faLinkedinIn} />
							<span><a className="contact-me__link" href="#">Dan Higgins</a></span>
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
