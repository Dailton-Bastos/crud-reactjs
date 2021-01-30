import React from 'react';
import Main from '../template/Main';
import Form from './Form';
import UsersList from './UsersList';

import UserServices from '../../services/users';

import { FaUser } from 'react-icons/fa';

const headerProps = {
  icon: <FaUser />,
  title: 'Usuários',
  subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!',
};

const UserCrud = () => {
  const [id, setId] = React.useState(null);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [list, setList] = React.useState([]);

  function handleClearForm() {
    setName('');
    setEmail('');
    setId(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await UserServices.save({ id, name, email });
      setName('');
      setEmail('');
      fetchList();
    } catch (error) {
      throw new Error(error);
    }
  }

  async function fetchList() {
    const response = await UserServices.index();
    setList(response.data);
  }

  function load(user) {
    const { id, name, email } = user;
    setName(name);
    setEmail(email);
    setId(id);
  }

  async function remove(user) {
    const { id } = user;

    try {
      await UserServices.remove(id);
      fetchList();
    } catch (error) {
      throw new Error(error);
    }
  }

  React.useEffect(() => {
    fetchList();
  }, []);

  return (
    <Main {...headerProps}>
      <Form
        handleSubmit={handleSubmit}
        handleClearForm={handleClearForm}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
      />
      <UsersList usersList={list} load={load} remove={remove} />
    </Main>
  );
};

export default UserCrud;
