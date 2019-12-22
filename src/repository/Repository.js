/* eslint-disable prefer-arrow-callback,arrow-body-style */
import axios from 'axios';

const axiosInstance = axios.create(
  {
    baseURL: process.env.VUE_APP_API_BASE_URL,
  },
);

// eslint-disable-next-line func-names,no-sequences,no-unused-expressions
axiosInstance.interceptors.response.use((response) => {
  return response;
// eslint-disable-next-line func-names
}, function (error) {
  return Promise.reject(error.response);
});

export default axiosInstance;
