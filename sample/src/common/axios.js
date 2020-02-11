import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

export const setAuthHeader = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common['Authorization'] = undefined;
};

// if need axios interceptors, write here

export default instance;
