import { makeAutoObservable, onBecomeObserved } from "mobx";
import api from "../api";
import { IPost } from '../interfaces/Post';

class PostsStore {
    public posts: IPost[] = [];
    public error: string = '';

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
        })

        onBecomeObserved(this, 'posts', this.fetchPosts)
    }

    *fetchPosts() {
        try {
            const response: IPost[] = yield api.getPosts();
            this.posts = response;
        } catch (e: any) {
            this.error = e.message;
        }
    }


    *deletePost(id: string) {
        try {
            yield api.deletePosts(id);

            const postIndex = this.posts.findIndex((post: IPost): boolean => post.id === id);
    
            this.posts.splice(postIndex, 1);
        } catch (e: any) {
            this.error = e.message;
        }
    }  
    
    *updatePost(id: string, data: any) {
        try {
            const response: IPost = yield api.updatePosts(id, data);
            
            const postIndex = this.posts.findIndex((post: IPost): boolean => post.id === id);
    
            this.posts[postIndex] = response;
        } catch (e: any) {
            this.error = e.message;
        }
    }   
}

export default new PostsStore();