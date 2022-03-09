import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import PostsStore from '../../state/PostsStore';
import { IPost } from '../../interfaces';
import Post from '../../components/Post';
import Container from '@mui/material/Container';
import { LinearProgress } from '@mui/material';
import { AuthContext } from '../../context/Auth';
import Counter from '../Counter';

const Posts = () => {
    const auth = useContext(AuthContext);
    const { 
      fetchPosts,
      postsLength,
      error,
      posts
    } = PostsStore;
  
    useEffect(() => { fetchPosts(); }, []);
  
    return (
        <>
          <Container sx={{ padding: '20px' }} maxWidth="lg">
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
                      : <LinearProgress />      
                    }
                </>
              : <div>You need to auth</div>}
            </Container>
        </>
    )
  }
  
  export default observer(Posts);