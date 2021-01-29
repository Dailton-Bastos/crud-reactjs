import React from 'react';
import './style.css';

const Button = ({ type, name, color, handleClick, ...props }) => {
  return (
    <button
      className={`btn btn-${color}`}
      {...props}
      type={type}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
