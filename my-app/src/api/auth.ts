import axiosInstance from './axiosInstance';

class Auth {
  private baseURL = "http://nestjs-boilerplate-test.herokuapp.com/api";

  public register(data: any) {
      return axiosInstance.post(`${this.baseURL}/v1/auth/email/register`, data);
  }

  public login(data: any) {
    return axiosInstance.post(`${this.baseURL}/v1/auth/email/login`, data);
  } 

  public getProfile() {
    return axiosInstance.get(`${this.baseURL}/v1/auth/me`);
  } 
}

export default new Auth();
