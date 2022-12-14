import { getApiBaseUrl, getLoginApiBaseUrl } from './utils';

import axios from 'axios';

const api = axios.create({
  baseURL: getApiBaseUrl(),
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Accept: '*/*',
  },
});

export const apiLogin = axios.create({
  baseURL: getLoginApiBaseUrl(),
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Accept: '*/*',
  },
});

export default api;
