import React from 'react';

import './style.css';

const Header = ({ icon, title, subtitle }) => {
  return (
    <header className="header">
      <h1>
        {icon}
        {title}
      </h1>
      <p>{subtitle}</p>
    </header>
  );
};

export default Header;
