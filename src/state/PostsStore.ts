import { computed, flow, makeObservable, observable } from 'mobx';
import api from '../api/posts';
import { IPost } from '../interfaces/IPost';

class PostsStore {
  public posts: IPost[] = [];

  public error = '';

  constructor() {
    makeObservable(this, {
      posts: observable,
      error: observable,
      postsLength: computed,
      fetchPosts: flow.bound,
      deletePost: flow.bound,
      updatePost: flow.bound,
    });
  }

  *fetchPosts() {
    try {
      const { data }: { data: IPost[] } = yield api.getPosts();
      this.posts = data.slice(0, 10);
    } catch (e: any) {
      this.error = e;
    }
  }

  *deletePost(id: string) {
    try {
      yield api.deletePost(id);

      const postIndex = this.posts.findIndex((post: IPost): boolean => post.id === id);
    
      this.posts.splice(postIndex, 1);
    } catch (e: any) {
      this.error = e.message;
    }
  }  
    
  *updatePost(id: string, data: any) {
    try {
      const { data: newData }: { data: IPost } = yield api.updatePost(id, data);
            
      const postIndex = this.posts.findIndex((post: IPost): boolean => post.id === id);
    
      this.posts[postIndex] = newData;
    } catch (e: any) {
      this.error = e.message;
    }
  }   

  get postsLength() {
    return this.posts.length;
  }
}

export default new PostsStore();
