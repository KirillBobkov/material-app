import axios from 'axios';

const axiosInstance = axios.create();
  
axiosInstance.interceptors.request.use(
    (config: any) => {
      const authToken = localStorage.getItem("token");
  
      if (authToken) {
        config.headers.authorization = `Bearer ${authToken}`;
      }
  
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (config: any) => {
      if (config.data.token) {
        localStorage.setItem("token", config.data.token);
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  export default axiosInstance;

 
