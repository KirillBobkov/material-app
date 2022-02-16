import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import PostsStore from './state/PostsStore';
import { IPost } from './interfaces';
import Post from './components/Post';
import Container from '@mui/material/Container';
import CreatePost from './components/CreatePostForm';
import PostsCounter from './components/PostsCounter';

const App = observer((): JSX.Element => {
  const handleDeletePost = useCallback((id) => {
    PostsStore.deletePost(id);
  }, [])

  const handleUpdatePost = useCallback((id, data): Generator<Promise<any>, void, IPost> => {
    return PostsStore.updatePost(id, data);
  }, [])

  const handleCreatePost = useCallback((data): Generator<Promise<any>, void, IPost> => {
    return PostsStore.createPost(data);
  }, [])

  return (
    <Container sx={{ padding: '20px' }} maxWidth="lg">
      <PostsCounter postsLength={PostsStore.postsLength} />
      {PostsStore.error && <div>{PostsStore.error}</div>}
      <CreatePost onCreatePost={handleCreatePost} />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {PostsStore.posts
          .map((post: IPost) => <Post key={post.id} post={post} onUpdatePost={handleUpdatePost} onDeletePost={handleDeletePost} />)}
      </ul>
    </Container>
  );
});

export default App;
