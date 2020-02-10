import axios from 'axios';

import { BASE_API_URL } from '../common/consts';

const instance = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});

// if need axios interceptors, write here

export default instance;
