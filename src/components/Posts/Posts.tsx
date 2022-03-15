import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import PostsStore from '../../state/PostsStore';
import { IPost } from '../../interfaces';

import Counter from '../Counter';
import Post from '../Post';

const Posts = () => {
  const { 
    fetchPosts,
    postsLength,
    error,
    posts,
  } = PostsStore;
  
  useEffect(() => { fetchPosts(); }, []);
  
  return (
    <div style={{ padding: '20px', maxWidth: '1300px' }}>
      {!!postsLength && <Counter count={postsLength} />}
      {error && <div>{JSON.stringify(error)}</div>}
      {posts.length 
        ? 
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {posts.map((post: IPost) => <Post key={post.id} post={post} />)}
          </ul>
        : <div>loading</div>  
      }
    </div>
  );
};
  
export default observer(Posts);