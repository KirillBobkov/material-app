import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import PostsStore from './state/PostsStore';
import { IPost } from './interfaces';
import Post from './components/Post';

import './App.css';

const App = observer((): JSX.Element => {
  const handleDeletePost = useCallback((id) => {
    PostsStore.deletePost(id);
  }, [])

  const handleUpdatePost = useCallback((id, data): Generator<Promise<any>, void, IPost> => {
    return PostsStore.updatePost(id, data);
  }, [])

  return (
    <div className="App">
      {PostsStore.error && <div>{PostsStore.error}</div>}
      <ul>
        {PostsStore.posts
          .map((post: IPost) => <Post key={post.id} post={post} onUpdatePost={handleUpdatePost} onDeletePost={handleDeletePost} />)}
      </ul>
    </div>
  );
});

export default App;
