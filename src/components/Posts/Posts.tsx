import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import PostsStore from '../../state/PostsStore';
import { IPost } from '../../interfaces';
import Post from '../../components/Post';
import { AuthContext } from '../../context/Auth';
import Counter from '../Counter';

const Posts = () => {
  const auth = useContext(AuthContext);
  const { 
    fetchPosts,
    postsLength,
    error,
    posts,
  } = PostsStore;
  
  useEffect(() => { fetchPosts(); }, []);
  
  return (
          <div style={{ padding: '20px', maxWidth: '1300px' }}>
            {auth.user 
              ?
                <>
                  <Counter postsLength={postsLength} />
                    {error && <div>{JSON.stringify(error)}</div>}
                    {posts.length 
                      ? 
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {posts.map((post: IPost) => <Post key={post.id} post={post} />)}
                        </ul>
                      : <div>loading</div>  
                    }
                </>
              : <div>You need to auth</div>}
            </div>
  );
};
  
export default observer(Posts);