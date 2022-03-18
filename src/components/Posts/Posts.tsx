import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import PostsStore from '../../state/PostsStore';
import { IPost } from '../../interfaces';

import Counter from '../Counter';
import Post from '../Post';
import Spinner from '../Spinner';
import Quote from '../Quote';


const StyledUl = styled.ul`
  box-sizing: border-box;
  list-style: none;
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;


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
    <div>
      <Quote author='May Robins' quote='Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur' />
      {!!postsLength && <Counter count={postsLength} />}
      {error && <div>{JSON.stringify(error)}</div>}
      {posts.length 
        ? 
          <StyledUl>
            {posts.map((post: IPost, i: number): JSX.Element => <Post num={i} key={post.id} post={post} />)}
          </StyledUl>
        :  <Spinner size={50} /> 
      }
    </div>
  );
};
  
export default observer(Posts);