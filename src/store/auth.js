import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';
import { RepositoryFactory } from '../repository/RepositoryFactory';

const AuthRepo = RepositoryFactory.get('auth');

export default {
  state: {
    currentJwt: '',
    currentJwtData: {},
  },
  getters: {
    jwt: state => state.currentJwt,
    jwtData: state => state.currentJwtData,
  },
  mutations: {
    setJwt(state, jwt) {
      state.currentJwt = jwt;
    },
    setJwtData(state, data) {
      state.currentJwtData = data;
    },
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const { username, password } = payload;
        const { data } = await AuthRepo.login(username, password);
        console.log('data', data);

        // commit('setJwt', await data.result.data.token);
        // commit('setJwtData', JSON.parse(atob(data.result.data.token.split('.')[1])));
        // commit('setRefreshToken', await data.result.data.refreshToken);
        // commit('setExpiredTime', await data.result.data.expiredIn);

        return { success: true };
      } catch (error) {
        return { success: false, error };
      }
    },
  },
  plugins: [createPersistedState({
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
      removeItem: key => Cookies.remove(key),
    },
  })],
};
