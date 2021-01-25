import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from '../../routes';

import Logo from '../../components/template/Logo';
import Nav from '../../components/template/Nav';
import Footer from '../../components/template/Footer';

import './style.css';

const App = () => {
  return (
    <HashRouter>
      <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
