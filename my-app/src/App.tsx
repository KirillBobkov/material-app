import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import PostsStore from './state/PostsStore';
import { IPost } from './interfaces';
import Post from './components/Post';
import Container from '@mui/material/Container';
import CreatePostForm from './components/CreatePostForm';
import PostsCounter from './components/PostsCounter';
import { LinearProgress } from '@mui/material';

const App = (): JSX.Element => {
  const { 
    deletePost,
    updatePost,
    createPost,
    postsLength,
    error,
    posts } = PostsStore;

  const handleDeletePost = useCallback((id) => {
    deletePost(id);
  }, [])

  const handleUpdatePost = useCallback((id, data): Generator<Promise<any>, void, IPost> => {
    return updatePost(id, data);
  }, [])

  const handleCreatePost = useCallback((data): Generator<Promise<any>, void, IPost> => {
    return createPost(data);
  }, [])

  return (
    <Container sx={{ padding: '20px' }} maxWidth="lg">
      <PostsCounter postsLength={postsLength} />
      {PostsStore.error && <div>{error}</div>}
      <CreatePostForm onCreatePost={handleCreatePost} />
      {posts.length 
        ? 
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {posts
              .map((post: IPost) => <Post key={post.id} post={post} onUpdatePost={handleUpdatePost} onDeletePost={handleDeletePost} />)}
          </ul>
        : <LinearProgress />      
      }
    </Container>
  );
};

export default observer(App);
