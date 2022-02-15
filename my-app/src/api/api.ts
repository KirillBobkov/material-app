class Api {
    url = 'https://jsonplaceholder.typicode.com/posts';

    performFetch(url: string, method = 'GET', body?: any) {
        return fetch(url, {
            method,
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((response) => response.json());
    }

    getPosts(): Promise<any> {
        return this.performFetch(this.url);
    }

    updatePosts() {
        
    }

    deletePosts() {
        
    }
}

export default new Api();