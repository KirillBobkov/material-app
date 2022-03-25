import axiosInstance from './axiosInstance';

class Quote {
  private baseURL = 'https://jsonplaceholder.typicode.com/posts';

  public getQuote(postNumber: number): Promise<any> {
    return axiosInstance.get(`${this.baseURL}/${postNumber}`);
  }
}

export default new Quote();