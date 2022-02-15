import { flow, makeAutoObservable, onBecomeObserved } from "mobx";
import api from "../api";
import { Post } from '../types/Post';

class PostsStore {
    public posts: Post[] = [];
    public error = '';

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
        })

        onBecomeObserved(this, 'posts', this.fetchPosts)
    }

    *fetchPosts() {
        try {
            const response: Post[] = yield api.getPosts();
            this.posts = response;
        } catch (e: any) {
            this.error = e.message;
        }
    }
}

export default new PostsStore();