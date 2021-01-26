import React from 'react';
import Main from '../template/Main';
import Form from './Form';

import { FaUser } from 'react-icons/fa';

const headerProps = {
  icon: <FaUser />,
  title: 'Usuários',
  subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!',
};

const UserCrud = () => {
  return (
    <Main {...headerProps}>
      <Form />
    </Main>
  );
};

export default UserCrud;
