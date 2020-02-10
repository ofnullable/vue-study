import axios from 'axios';

import { BASE_API_URL } from '../common/consts';

export default axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});
