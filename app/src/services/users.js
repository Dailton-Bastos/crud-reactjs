import api from './api';

const UsersService = {
  save: (params) => {
    const { id } = params;
    const method = id ? 'put' : 'post';
    const url = id ? `/users/${id}` : '/users/';
    return api[method](url, params);
  },

  index: () => {
    return api.get('/users');
  },

  remove: (id) => {
    return api.delete(`/users/${id}`);
  },
};

export default UsersService;
