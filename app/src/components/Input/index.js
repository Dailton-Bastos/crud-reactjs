import React from 'react';
import './style.css';

const Input = ({ id, label, type, setValue, ...props }) => {
  return (
    <div className="input-control">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </div>
  );
};

export default Input;
