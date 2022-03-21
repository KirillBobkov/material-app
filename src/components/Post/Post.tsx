import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { IPost } from '../../interfaces/IPost';

import PostsStore from '../../state/PostsStore';

import Button from '../Button';


const StyledLi = styled.li<{ isFetching: boolean }>`
  width: 500px;
  background-color: #ffffff;
  box-sizing: border-box;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  ${props => props.isFetching ? 'filter: blur(2px);' : ''}
`;

const ButtonContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 200px;
  padding: 10px;
  font-family: Poppins-Regular;
  font-size: 14px;
  resize: none;
  border: none;
  background-color: #e1e1e1;
  color: #000000;

  &:focus {
    outline: 1px solid transparent;
  }
`;

const TextAreaBlack = styled(TextArea)`
  height: 65px;
  background-color: #000000;
  color: #ffffff;
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