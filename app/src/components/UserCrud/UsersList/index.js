import React from 'react';
import Button from '../../Button';
import { FaTrash, FaEdit } from 'react-icons/fa';

const UsersList = ({ usersList, load, remove }) => {
  return (
    <table className="list-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {usersList.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Button
                name={<FaEdit />}
                type="button"
                color="primary"
                handleClick={() => load(user)}
              />
              <Button
                name={<FaTrash />}
                type="button"
                color="secondary"
                handleClick={() => remove(user)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersList;
