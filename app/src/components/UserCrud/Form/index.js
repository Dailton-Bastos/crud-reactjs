import React from 'react';
import Input from '../../Input';
import Button from '../../Button';

import UserServices from '../../../services/users';

import './style.css';

const Form = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [list, setList] = React.useState([]);

  function handleClearForm() {
    setName('');
    setEmail('');
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await UserServices.save({ name, email });
      setName('');
      setEmail('');
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <form className="crud-form" onSubmit={handleSubmit}>
      <Input
        id="name"
        label="Nome"
        type="text"
        value={name}
        setValue={setName}
        placeholder="Digite seu nome"
        required
      />

      <Input
        id="email"
        label="E-mail"
        type="email"
        value={email}
        setValue={setEmail}
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
