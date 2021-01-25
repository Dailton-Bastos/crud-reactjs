import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ url, title, icon }) => {
  return (
    <Link to={url} replace>
      {icon}
      {title}
    </Link>
  );
};

export default NavItem;
