import AppConfig from './app';

const AxiosConfig = {
  /**
   * Config object to init axios client
   * @type {{}}
   */
  mainClientOptions: {
    baseURL: AppConfig.apiUrl,
    responseType: 'json'
  }
};

export default AxiosConfig;