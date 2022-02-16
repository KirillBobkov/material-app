import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import PostsStore from './state/PostsStore';
import { IPost } from './interfaces';
import Post from './components/Post';
import Container from '@mui/material/Container';

const App = observer((): JSX.Element => {
  const handleDeletePost = useCallback((id) => {
    PostsStore.deletePost(id);
  }, [])

  const handleUpdatePost = useCallback((id, data): Generator<Promise<any>, void, IPost> => {
    return PostsStore.updatePost(id, data);
  }, [])

  return (
    <Container sx={{ padding: '20px' }} maxWidth="lg">
      {PostsStore.error && <div>{PostsStore.error}</div>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {PostsStore.posts
          .map((post: IPost) => <Post key={post.id} post={post} onUpdatePost={handleUpdatePost} onDeletePost={handleDeletePost} />)}
      </ul>
    </Container>
  );
});

export default App;
