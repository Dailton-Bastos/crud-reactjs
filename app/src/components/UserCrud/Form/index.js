import React from 'react';
import Input from '../../Input';
import Button from '../../Button';

import './style.css';

const Form = ({ handleSubmit, handleClearForm, ...props }) => {
  return (
    <form className="crud-form" onSubmit={handleSubmit}>
      <Input
        id="name"
        label="Nome"
        type="text"
        value={props.name}
        setValue={props.setName}
        placeholder="Digite seu nome"
        required
      />

      <Input
        id="email"
        label="E-mail"
        type="email"
        value={props.email}
        setValue={props.setEmail}
        placeholder="Digite seu email"
        required
      />

      <div className="footer-form">
        <Button type="submit" name="Salvar" color="primary" />
        <Button
          type="button"
          name="Cancelar"
          color="secondary"
          handleClick={handleClearForm}
        />
      </div>
    </form>
  );
};

export default Form;
