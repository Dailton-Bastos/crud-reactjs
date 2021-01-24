import React from 'react';
import Logo from '../../components/template/Logo';
import Nav from '../../components/template/Nav';
import Home from '../../components/Home';
import Footer from '../../components/template/Footer';

import './style.css';

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Nav />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
