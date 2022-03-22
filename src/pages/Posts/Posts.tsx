import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import Counter from '../../components/Counter';
import Post from '../../components/Post';
import Spinner from '../../components/Spinner';
import Quote from '../../components/Quote';

import PostsStore from '../../state/PostsStore';

import { IPost } from '../../interfaces/IPost';

const StyledUl = styled.ul`
  display: flex;
  box-sizing: border-box;
  list-style: none;
  padding: 0 10px;
  margin-bottom: 80px;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;

const Posts = (): JSX.Element => {
  const { fetchPosts, postsLength, posts } = PostsStore;
  
  useEffect((): void => { 
    window.scrollTo(0, 0);
    fetchPosts(); 
  }, []);
  
  return (
    <div>
      <Quote />
      {!!postsLength && <Counter count={postsLength} />}
      {posts.length 
        ?  <StyledUl>{posts.map((post: IPost): JSX.Element => <Post key={post.id} post={post} />)}</StyledUl>
        :  <Spinner size={50}/>}
      <Quote />
    </div>
  );
};
  
export default observer(Posts);