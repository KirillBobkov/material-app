import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import PostsStore from '../../state/PostsStore';
import { IPost } from '../../interfaces';

import Counter from '../Counter';
import Post from '../Post';
import Spinner from '../Spinner';

const Posts = (): JSX.Element => {
  const { 
    fetchPosts,
    postsLength,
    error,
    posts,
  } = PostsStore;
  
  useEffect((): void => { 
    fetchPosts(); 
  }, []);
  
  return (
    <div style={{ padding: '20px', maxWidth: '1300px' }}>
      {!!postsLength && <Counter count={postsLength} />}
      {error && <div>{JSON.stringify(error)}</div>}
      {posts.length 
        ? 
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {posts.map((post: IPost ): JSX.Element => <Post key={post.id} post={post} />)}
          </ul>
        :  <Spinner size={50} /> 
      }
    </div>
  );
};
  
export default observer(Posts);