import { IPost } from './../interfaces/IPost';

class Api {
  url = 'https://jsonplaceholder.typicode.com/posts';

  private performFetch(url: string, method: string = 'GET', body?: any) {
    return fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json());
  }

  public getPosts(): Promise<any> {
    return this.performFetch(this.url);
  }

  public updatePost(id: string, data: any) {
    return this.performFetch(`${this.url}/${id}`, 'PUT', data);
  }

  public deletePost(id: string) {
    return this.performFetch(`${this.url}/${id}`, 'DELETE');
  }

  public createPost(data: Partial<IPost>) {
    return this.performFetch(`${this.url}`, 'POST', data);
  }
}

export default new Api();
