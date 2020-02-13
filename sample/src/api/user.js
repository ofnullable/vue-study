import axios from '../common/axios';

export const authRequest = data => {
  return axios.post('/auth/signin', data);
};

export const getUser = () => {
  return axios.get(`/user`);
};

export const hackerSignUp = payload => {
  return axios.post('/hacker', payload);
};

export const vendorSignUp = payload => {
  return axios.post('/vendor', payload);
};