import Repository from './Repository';

export default {
  login(jwt, payload) {
    Repository.defaults.headers.common['Authorization'] = jwt;

    return Repository.post('/login', payload);
  },
  createUser(payload) {
    Repository.post('/user', payload);
  },
};
