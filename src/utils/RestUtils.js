import axios from 'axios';

const RestUtils = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default RestUtils;
