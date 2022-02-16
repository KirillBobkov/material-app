class Api {
  url = 'https://jsonplaceholder.typicode.com/posts';

  performFetch(url: string, method: string = 'GET', body?: any) {
    return fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json());
  }

  getPosts(): Promise<any> {
    return this.performFetch(this.url);
  }

  updatePosts(id: string, data: any) {
    return this.performFetch(`${this.url}/${id}`, 'PUT', data);
  }

  deletePosts(id: string) {
    return this.performFetch(`${this.url}/${id}`, 'DELETE');
  }
}

export default new Api();
