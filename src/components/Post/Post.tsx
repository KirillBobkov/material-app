import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { IPost } from '../../interfaces/IPost';

import PostsStore from '../../state/PostsStore';

import Button from '../Button';


const StyledLi = styled.li`
  background-color: #ffffff;
  width: 500px;
  box-sizing: border-box;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
`;

const ButtonContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const TextArea = styled.textarea`
  font-size: 14px;
  resize: none;
  width: 100%;
  height: 200px;
  padding: 10px;
  display: block;
  border: none;
  background-color: #e1e1e1;
  color: #000000;
  font-family: Poppins-Regular;

  &:focus {
    outline: 1px solid transparent;
  }
`;

const TextAreaBlack = styled.textarea`
  font-size: 14px;
  resize: none;
  width: 100%;
  padding: 10px;
  display: block;
  border: none;
  background-color: #000000;
  color: #ffffff;
  height: 65px;
  font-family: Poppins-Regular;

  &:focus {
    outline: 1px solid transparent;
  }
  
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
  const { deletePost, updatePost } = PostsStore;

  useEffect((): void => setCurrentPost({ ...post }), [post]);

  const onSaveChanges = async (): Promise<any> => {
    await updatePost(post.id, currentPost);
    setIsEditing(!isEditing);
  };

  const onEditPost = (): void => {
    setIsEditing(!isEditing);
  };

  const onCancelEditing = (): void => {
    setIsEditing(!isEditing);
    setCurrentPost({ ...currentPost, title: post.title, body: post.body });
  };

  return (
      <StyledLi>
        {isEditing ? 
          <>
            <TextAreaBlack
              value={currentPost.title}
              onChange={(e: any): void => { if (e.target.value.length < 100 ) setCurrentPost({ ...currentPost, title: e.target.value }); }}
            />
            <TextArea
              value={currentPost.body}
              onChange={(e: any): void => { if (e.target.value.length < 400 ) setCurrentPost({ ...currentPost, body: e.target.value }); }}
            />
          </>
          :
          <>
            <TextAreaBlack
              value={currentPost.title}
              disabled
            />
            <TextArea
              value={currentPost.body}
              disabled
            />
          </>
        }
        <ButtonContainer>
          <Button onClick={() => deletePost(post.id)}>Delete post</Button>
          {!isEditing && <Button color="#7a7a7a" onClick={onEditPost}>Edit post</Button>}
          {isEditing && <Button color="#7a7a7a" onClick={onSaveChanges}>Save post</Button>}
          {isEditing && <Button color="#afafaf" onClick={onCancelEditing}>Cancel changes</Button>}
        </ButtonContainer>
      </StyledLi>
  );
};

export default observer(Post);