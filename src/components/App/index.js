import React, { Component } from 'react';
import Nav from '../Nav';
import Contact from '../Sections/Contact';
import './App.scss';
import '../../styles/_shared.scss';
import NavOverlay from '../NavOverlay';
import classnames from 'classnames';
import DownloadCV from '../Sections/DownloadCV';
import About from '../Sections/About';
import Clients from '../Sections/Clients';
import Projects from '../Sections/Projects';
import Skills from '../Sections/Skills';
import Qualifications from '../Sections/Qualifications';
import ProjectInfo from '../ProjectInfo';
import { Route, Switch } from 'react-router-dom';

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

				<Switch>
					<Route exact path="/">
						<About />

						<Clients />

						<Skills />

						<Projects />

						<Qualifications />

						<DownloadCV />

						<Contact />
					</Route>

					<Route path="/bt">
						<ProjectInfo />
					</Route>
				</Switch>

				<div className="footer">
					<h4>&copy; Dan Higgins 2020</h4>
				</div>
			</div>
		);
	}
}
