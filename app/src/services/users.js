import api from './api';

const UsersService = {
  save: (params) => {
    const { id } = params;
    const method = id ? 'put' : 'post';
    const url = id ? `/users${id}` : '/users/';
    return api[method](url, params);
  },
};

export default UsersService;
