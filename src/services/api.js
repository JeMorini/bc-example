// Aqui irão as configurações do Axios

import axios from 'axios';

export const tokenAuth =
  'IaUqWMozCH2E1kJssZ5GkjYw5FIWsBTCMunG6Isp3x7sROSTwJfflM458mQuOEYWfydEI3UrRWRYJRpDBoz5uATmmKuzGSgebAvd';

const api = axios.create({
  baseURL: 'https://dev-api.kuppi.com.br',
  headers: {
    'auth-token':
      'IaUqWMozCH2E1kJssZ5GkjYw5FIWsBTCMunG6Isp3x7sROSTwJfflM458mQuOEYWfydEI3UrRWRYJRpDBoz5uATmmKuzGSgebAvd',
  },
});

export default api;
