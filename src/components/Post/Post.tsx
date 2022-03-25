import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { IPost } from '../../interfaces/IPost';

import PostsStore from '../../state/PostsStore';

import Button from '../Button';
import Spinner from '../Spinner';


const StyledLi = styled.li<{ isFetching: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
  background-color: #f1f1f1;
  box-sizing: border-box;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  ${props => props.isFetching ? 'filter: brightness(90%);' : ''}
`;

const ButtonContainer = styled.div`
  padding: 20px;
  text-align: left;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 200px;
  padding: 20px;
  font-family: Poppins-Regular;
  font-size: 14px;
  resize: none;
  border: none;
  color: #000000;
  background-color: #f1f1f1;

  &:focus {
    outline: 1px solid transparent;
  }

  &:disabled {
    color: #000000;
    background-color: #f1f1f1;
  }
`;

const TextAreaTitle = styled(TextArea)`
  height: 65px;
  color: #000000;
  background-color: #f1f1f1;
  font-size: 30px;
  font-family: Poppins-Regular;

  &:disabled {
    color: #000000;
    background-color: #f1f1f1;
  }
`;

const PostTitle = styled.h3`
  padding: 20px;
  margin: 0;
  color: #000000;
  background-color: #f1f1f1;
  font-family: Poppins-Regular;
  font-size: 30px;
`;

const PostContent = styled.p`
  padding: 20px;
  margin: 0;
  color: #000000;
  background-color: #f1f1f1;
  font-family: Poppins-Regular;
  font-size: 14px;
`;

interface Props {
  post: IPost;
}

const getInitialState = (): IPost => ({
  userId: 0,
  id:   '',
  title: '',
  body: '',
});

const Post = ({ post }: Props ): JSX.Element => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentPost, setCurrentPost] = useState<IPost>(getInitialState());
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const { deletePost, updatePost } = PostsStore;

  useEffect((): void => setCurrentPost({ ...post }), [post]);

  const onSaveChanges = async (): Promise<any> => {
    setIsFetching(true);
    await updatePost(post.id, currentPost);
    setIsEditing(!isEditing);
    setIsFetching(false);
  };

  const onEditPost = (): void => {
    setIsEditing(!isEditing);
  };

  const onCancelEditing = (): void => {
    setIsEditing(!isEditing);
    setCurrentPost({ ...currentPost, title: post.title, body: post.body });
  };

  return (
    <StyledLi isFetching={isFetching}>
      {isEditing ? 
        <div>
          <TextAreaTitle
            value={currentPost.title}
            onChange={(e: any): void => { if (e.target.value.length < 30 ) setCurrentPost({ ...currentPost, title: e.target.value }); }}
          />
          <TextArea
            value={currentPost.body}
            onChange={(e: any): void => { if (e.target.value.length < 400 ) setCurrentPost({ ...currentPost, body: e.target.value }); }}
          />
        </div>
        :
        <div>
          <PostTitle>{currentPost.title}</PostTitle>
          <PostContent>{currentPost.body}</PostContent>
        </div>
      }
      <ButtonContainer>
        {!isEditing && <Button color="#7a7a7a" onClick={onEditPost}>Edit post</Button>}
        {isEditing && <Button color="#7a7a7a" onClick={onSaveChanges}>Save post</Button>}
        {isEditing && <Button color="#afafaf" onClick={onCancelEditing}>Cancel changes</Button>}
        <Button onClick={() => deletePost(post.id)}>Delete post</Button>
      </ButtonContainer>
      {isFetching && <Spinner size={50} />}
    </StyledLi>
  );
};

export default observer(Post);