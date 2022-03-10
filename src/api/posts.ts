import axiosInstance from './axiosInstance';

class Posts {
  private baseURL = 'https://jsonplaceholder.typicode.com/posts';

  public getPosts(): Promise<any> {
    return axiosInstance.get(`${this.baseURL}`);
  }

  public updatePost(id: string, data: any) {
    return axiosInstance.put(`${this.baseURL}/${id}`, data);
  }

  public deletePost(id: string) {
    return axiosInstance.delete(`${this.baseURL}/${id}`);
  }
}

export default new Posts();