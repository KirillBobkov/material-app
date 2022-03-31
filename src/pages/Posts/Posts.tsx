import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import Counter from '../../components/Counter';
import Post from '../../components/Post';
import Spinner from '../../components/Spinner';
import Quote from '../../components/Quote';

import PostsStore from '../../state/PostsStore';

import { IPost } from '../../interfaces/IPost';
import { AboutBlock } from '../../components/AboutBlock';

const StyledUl = styled.ul`
  position: relative; 
  display: flex;
  box-sizing: border-box;
  list-style: none;
  padding: 0 25px;
  margin: 0 auto;
  margin-bottom: 80px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
`;

const Posts = (): JSX.Element => {
  const { fetchPosts, postsLength, posts } = PostsStore;
  
  useEffect((): void => { 
    window.scrollTo(0, 0);
    fetchPosts(); 
  }, []);
  
  return (
    <div>
      <AboutBlock
        text="Read posts"
        scrollToDirection="bottom"
        title="Let's see posts!" 
        description="This is a page where you could edit, delete or iupdate posts." 
      />
      {!!postsLength && <Counter count={postsLength} />}
      {posts.length 
        ?  <StyledUl>{posts.map((post: IPost): JSX.Element => <Post key={post.id} post={post} />)}</StyledUl>
        :  <Spinner size={50}/>}
      <Quote />
    </div>
  );
};
  
export default observer(Posts);