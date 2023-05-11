import React, { useEffect, useState } from 'react';
import NavBar from '../Navigation/NavBar';
import Contact from '../Sections/Contact';
import './App.scss';
import '../../styles/_shared.scss';
import NavOverlay from '../Navigation/NavOverlay';
import classnames from 'classnames';
import DownloadCV from '../Sections/DownloadCV';
import About from '../Sections/About';
import Clients from '../Sections/Clients';
import Projects from '../Sections/Projects';
import Skills from '../Sections/Skills';
import Qualifications from '../Sections/Qualifications';
import { Route, Switch } from 'react-router-dom';
import BT from '../Sections/Projects/ProjectInfo/BT';
import Santander from '../Sections/Projects/ProjectInfo/Santander';
import Ford from '../Sections/Projects/ProjectInfo/Ford';
import ScrollUp from '../Navigation/ScrollUp';

export default function App() {
	const [visible, setVisible] = useState(false);
	const [showScrollToTop, setShowScrollToTop] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 1000) {
            setShowScrollToTop(true)
        } else setShowScrollToTop(false);
    }

	const handleOverlay = () => {
		setVisible(previousValue => !previousValue, () => {
			if (visible) {
				document.getElementsByTagName("html")[0].style.overflowY = "hidden";
			} else {
				document.getElementsByTagName("html")[0].style.overflowY = "auto";
			}
		})
	}

	const scrollUp = () => {
		window.scrollTo(0, 0);
	}

	useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, [])

	return (
		<div className="App">
			<NavOverlay className={classnames(visible ? 'overlay slideIn' : 'overlay slideOut')} buttonClick={handleOverlay} />
			<NavBar buttonClick={handleOverlay} />

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
					<BT />
				</Route>

				<Route path="/santander">
					<Santander />
				</Route>

				<Route path="/ford">
					<Ford />
				</Route>
			</Switch>

			{showScrollToTop && <ScrollUp buttonClick={scrollUp} />}

			<div className="footer">
				<h4>&copy; Dan Higgins 2020</h4>
			</div>
		</div>
	);
}
