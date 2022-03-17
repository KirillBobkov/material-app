import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';

import { IPost } from '../../interfaces';

import PostsStore from '../../state/PostsStore';

import Button from '../Button';

interface Props {
  post: IPost;
}

const getInitialState = (): IPost =>  {
  return {
    userId: 0,
    id:   '',
    title: '',
    body: '',
  };
};

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
      <li style={{ marginBottom: '30px', padding: '10px', backgroundColor: '#ffffff' }}>
        {isEditing ? 
          <>
            <textarea
              value={currentPost.title}
              onChange={(e: any ): void => {  setCurrentPost({ ...currentPost, title: e.target.value }); }}
            />
            <textarea
              value={currentPost.body}
              onChange={(e: any ): void => { setCurrentPost({ ...currentPost, body: e.target.value }); }}
            />
          </>
          :
          <>
            <textarea
              value={currentPost.title}
              disabled
            />
            <textarea
              value={currentPost.body}
              disabled
            />
          </>
        }
        <div>
          <Button onClick={() => deletePost(post.id)}>Delete post</Button>
          {!isEditing && <Button onClick={onEditPost}>Edit post</Button>}
          {isEditing && <Button onClick={onSaveChanges}>Save post</Button>}
          {isEditing && <Button onClick={onCancelEditing}>Cancel changes</Button>}
        </div>
      </li>
  );
};


export default observer(Post);