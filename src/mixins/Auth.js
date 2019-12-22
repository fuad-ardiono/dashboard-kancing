export default {
  methods: {
    jwtToken() {
      return localStorage.getItem('token');
    },
    isLoggedIn() {
      const token = localStorage.getItem('token');

      if (token !== null) {
        return true;
      }
      return false;
    },
    authLogout() {
      localStorage.removeItem('token');
    },
  },
};
