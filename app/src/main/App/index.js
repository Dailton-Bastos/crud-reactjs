import React from 'react';
import Logo from '../../components/template/Logo';
import Nav from '../../components/template/Nav';
import Main from '../../components/template/Main';
import Footer from '../../components/template/Footer';

import { FaHome } from 'react-icons/fa';

import './style.css';

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Nav />
      <Main icon={<FaHome />} title="Alacritech" subtitle="Feito Para Você." />
      <Footer />
    </div>
  );
};

export default App;
