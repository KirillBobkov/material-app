import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create();
  
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const authToken = localStorage.getItem('token');
  
    if (authToken && config.headers) {
      config.headers.authorization = `Bearer ${authToken}`;
    }
  
    return config;
  },
  (error: any) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (config: AxiosResponse) => {
    if (config.data.token) {
      localStorage.setItem('token', config.data.token);
    }

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);
  
export default axiosInstance;

 
