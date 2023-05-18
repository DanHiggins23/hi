import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/Navigation/NavBar';
import Contact from './sections/Contact';
import './App.scss';
import './styles/_shared.scss';
import NavOverlay from './components/Navigation/NavOverlay';
import DownloadCV from './sections/DownloadCV';
import About from './sections/About';
import Clients from './sections/Clients';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Qualifications from './sections/Qualifications';
import BT from './sections/Projects/ProjectInfo/BT';
import Santander from './sections/Projects/ProjectInfo/Santander';
import Ford from './sections/Projects/ProjectInfo/Ford';
import THG from './sections/Projects/ProjectInfo/THG';
import ScrollUp from './components/Navigation/ScrollUp';

export default function App() {
  const [visible, setVisible] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset <= 1000) {
      document.getElementsByClassName('about-me__image')[0].style.borderRadius = `${window.pageYOffset / 5}%`;
    } if (window.pageYOffset > 1000) {
      setShowScrollToTop(true);
    } else setShowScrollToTop(false);
  };

  const handleOverlay = () => {
    setVisible(
      previousValue => !previousValue,
      () => {
        if (visible) {
          document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
        } else {
          document.getElementsByTagName('html')[0].style.overflowY = 'auto';
        }
      },
    );
  };

  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <NavOverlay
        className={classnames(visible ? 'overlay slideIn' : 'overlay slideOut')}
        buttonClick={handleOverlay}
      />
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

        <Route path="/thg">
          <THG />
        </Route>
      </Switch>

      <ScrollUp buttonClick={scrollUp} show={showScrollToTop} />

      <div className="footer">
        <h4>&copy; Dan Higgins 2023</h4>
      </div>
    </div>
  );
}
