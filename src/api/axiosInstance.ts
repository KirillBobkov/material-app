import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const axiosInstance = axios.create();
  
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig ): AxiosRequestConfig => {
    const authToken = localStorage.getItem('token');
  
    if (authToken && config.headers) {
      config.headers.authorization = `Bearer ${authToken}`;
    }
  
    return config;
  },
  (error: any ): Promise<AxiosError> => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (config: AxiosResponse): AxiosResponse => {
    if (config.data.token) {
      localStorage.setItem('token', config.data.token);
    }

    return config;
  },
  (error: any ): Promise<AxiosError> => {
    return Promise.reject(error);
  },
);
  
export default axiosInstance;

 
