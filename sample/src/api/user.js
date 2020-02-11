import axios from '../common/axios';

export const authRequest = data => {
  return axios.post('/auth/signin', data);
};

export const getUser = () => {
  return axios.get(`/user`);
};