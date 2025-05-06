import axios from 'axios';

const api = axios.create({
  baseURL: 'https://seal-app-rqsih.ondigitalocean.app/', // backend Spring API
});

export default api;
