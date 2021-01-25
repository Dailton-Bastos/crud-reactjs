import React from 'react';
import Main from '../template/Main';

import { FaUser } from 'react-icons/fa';

const headerProps = {
  icon: <FaUser />,
  title: 'Usuários',
  subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!',
};

const UserCrud = () => {
  return <Main {...headerProps}>Cadastro de Usuário</Main>;
};

export default UserCrud;
