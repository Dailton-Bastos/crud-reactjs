import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../../assets/images/logo.svg';
import './style.css';

const Logo = () => {
  return (
    <aside className="logo">
      <Link to="/" replace className="logo">
        <img src={LogoImg} alt="Logo" />
      </Link>
    </aside>
  );
};

export default Logo;
