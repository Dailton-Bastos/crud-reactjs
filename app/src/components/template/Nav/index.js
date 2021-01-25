import React from 'react';
import NavItem from './NavItem';
import { FaHome } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';

import './style.css';

const Nav = () => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <NavItem url="/" icon={<FaHome />} title="Início" />
        <NavItem url="/users" icon={<FaUsers />} title="Usuários" />
      </nav>
    </aside>
  );
};

export default Nav;
