import React from 'react';
import LogoImg from '../../../assets/images/logo.svg';
import './style.css';

const Logo = () => {
  return (
    <aside className="logo">
      <a href="/" className="logo">
        <img src={LogoImg} alt="Logo" />
      </a>
    </aside>
  );
};

export default Logo;
