import React from 'react';

const NavItem = ({ url, title, icon }) => {
  return (
    <a href={url}>
      {icon}
      {title}
    </a>
  );
};

export default NavItem;
