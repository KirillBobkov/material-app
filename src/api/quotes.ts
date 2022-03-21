import axiosInstance from './axiosInstance';

class Quote {
  private baseURL = 'https://private-anon-60f43e9cd0-goquotes.apiary-proxy.com/api/v1/random?count=1';

  public getRandomQuote(): Promise<any> {
    return axiosInstance.get(`${this.baseURL}`);
  }
}

export default new Quote();