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
  background-color: #fffcf3;
  box-sizing: border-box;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  ${props => props.isFetching ? 'filter: brightness(90%);' : ''}
`;

const ButtonContainer = styled.div`
  padding: 20px;
  text-align: right;

  & button {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 20px;
  font-family: Poppins-Regular;
  font-size: 14px;
  resize: none;
  border: none;
  color: #000000;
  background-color: #fffcf3;

  &:focus {
    outline: 1px solid transparent;
  }

  &:disabled {
    color: #000000;
    background-color: #fffcf3;
  }
`;

const TextAreaTitle = styled(TextArea)`
  color: #000000;
  background-color: #fffcf3;
  font-size: 30px;
  font-family: Poppins-Regular;

  &:disabled {
    color: #000000;
    background-color: #fffcf3;
  }
`;

const PostTitle = styled.div`
  display: block;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  color: #000000;
  background-color: #fffcf3;
  font-size: 30px;
  font-family: Poppins-Regular;
`;

const PostContent = styled.div`
  display: block;
  width: 100%;
  padding: 20px;
  color: #000000;
  background-color: #fffcf3;
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

  const onDeletePost = (): void => { deletePost(post.id); };

  const onHandleChangeTitle = (e: any): void => { 
    if (e.target.value.length < 30 ) setCurrentPost({ ...currentPost, title: e.target.value }); 
  };

  const onHandleChangeBody = (e: any): void => { 
    if (e.target.value.length < 400 ) setCurrentPost({ ...currentPost, body: e.target.value }); 
  };

  return (
    <StyledLi isFetching={isFetching}>
      <div>
        {isEditing ?
          <>
            <TextAreaTitle rows={2} disabled={!isEditing} value={currentPost.title} onChange={onHandleChangeTitle} />
            <TextArea rows={5} disabled={!isEditing} value={currentPost.body} onChange={onHandleChangeBody} />
          </>
          :
          <>
            <PostTitle>{currentPost.title}</PostTitle>
            <PostContent>{currentPost.body}</PostContent>
          </>}
       
      </div>
      <ButtonContainer>
        <Button color="#f35656" onClick={onDeletePost}>Delete post</Button>
        {!isEditing && <Button onClick={onEditPost}>Edit post</Button>}
        {isEditing && <Button color="#a3a3a3" onClick={onCancelEditing}>Cancel changes</Button>}
        {isEditing && <Button color="#70c970" onClick={onSaveChanges}>Save post</Button>}
      </ButtonContainer>
      {isFetching && <Spinner size={50} />}
    </StyledLi>
  );
};

export default observer(Post);