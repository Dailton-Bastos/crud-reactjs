import React from 'react';
import Input from '../../Input';
import Button from '../../Button';

import './style.css';

const Form = () => {
  return (
    <form className="crud-form">
      <Input
        id="name"
        label="Nome"
        type="text"
        placeholder="Digite seu nome"
        required
      />

      <Input
        id="email"
        label="E-mail"
        type="email"
        placeholder="Digite seu email"
        required
      />

      <div className="footer-form">
        <Button type="submit" name="Salvar" color="primary" />
        <Button type="button" name="Cancelar" color="secondary" />
      </div>
    </form>
  );
};

export default Form;
