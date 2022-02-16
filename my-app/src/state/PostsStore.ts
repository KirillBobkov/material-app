import { makeAutoObservable, onBecomeObserved } from "mobx";
import api from "../api";
import { IPost } from '../interfaces/IPost';

class PostsStore {
    public posts: IPost[] = [];
    public error: string = '';

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
        })

        onBecomeObserved(this, 'posts', this.fetchPosts)
    }

    *fetchPosts () {
        try {
            const response: IPost[] = yield api.getPosts();

            this.posts = response.slice(0, 10);
        } catch (e: any) {
            this.error = 'error'
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
            const response: IPost = yield api.updatePost(id, data);
            
            const postIndex = this.posts.findIndex((post: IPost): boolean => post.id === id);
    
            this.posts[postIndex] = response;
        } catch (e: any) {
            this.error = e.message;
        }
    }   

    *createPost(data: Partial<IPost>) {
        try {
            const response: IPost = yield api.createPost({ title: data.title, body: data.body });
            
            this.posts.unshift(response);
        } catch (e: any) {
            this.error = e.message;
        }
    } 

    get postsLength() {
        return this.posts.length;
    }
}

export default new PostsStore();
