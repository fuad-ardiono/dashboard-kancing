import Repository from './Repository';

export default {
  login(payload) {
    return Repository.post('/users/login', payload);
  },
  createUser(payload) {
    return Repository.post('/users', payload);
  },
};
