import React from 'react';
import './style.css';

const Button = ({ type, name, color, ...props }) => {
  return (
    <button className={`btn btn-${color}`} {...props} type={type}>
      {name}
    </button>
  );
};

export default Button;
