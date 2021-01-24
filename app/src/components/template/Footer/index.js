import React from 'react';
import { FaHeart } from 'react-icons/fa';

import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <span>
        Desenvolvido com {<FaHeart />} por <strong>Dailton Bastos</strong>
      </span>
    </footer>
  );
};

export default Footer;
