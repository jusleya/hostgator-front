import axios from 'axios';
import { baseURL } from '../constants/endpoints';

const API = axios.create({
  baseURL,
});
API.interceptors.response.use(
  (response) => response,
  (error) => (error.response.status === 401
    ? console.log(error)
    : Promise.reject(error)),
);
export default API;
