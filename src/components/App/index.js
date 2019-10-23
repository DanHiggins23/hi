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
import Clients from '../Sections/Clients';
import Skills from '../Sections/Skills';

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

				<Clients />

				<Skills />

				<DownloadCV />

				<Contact />

				<div className="section footer">
					<h4>&copy; Dan Higgins 2019</h4>
				</div>
			</div>
		);
	}
}
