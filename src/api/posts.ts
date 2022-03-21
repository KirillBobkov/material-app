import { IPost } from '../interfaces/IPost';

import axiosInstance from './axiosInstance';

class Posts {
  private baseURL = 'https://jsonplaceholder.typicode.com/posts';

  public getPosts(): Promise<IPost> {
    return axiosInstance.get(`${this.baseURL}`);
  }

  public updatePost(id: string, data: IPost) {
    return axiosInstance.put(`${this.baseURL}/${id}`, data);
  }

  public deletePost(id: string) {
    return axiosInstance.delete(`${this.baseURL}/${id}`);
  }
}

export default new Posts();