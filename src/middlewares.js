import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import AxiosConfig from './config/axios';

const client = axios.create(AxiosConfig.mainClientOptions);

export default [
  axiosMiddleware(client),
];