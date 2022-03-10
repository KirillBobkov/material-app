import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { IPost } from '../../interfaces';
import PostsStore from '../../state/PostsStore';

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

const Post = ({ post }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentPost, setCurrentPost] = useState<IPost>(getInitialState());
  const { deletePost, updatePost } = PostsStore;

  useEffect((): void => setCurrentPost({ ...post }), [post]);

  const onSaveChanges = async () => {
    await updatePost(post.id, currentPost);
    setIsEditing(!isEditing);
  };

  const onEditPost = (): void => {
    setIsEditing(!isEditing);
  };

  const onCancelEditing = () => {
    setIsEditing(!isEditing);
    setCurrentPost({ ...currentPost, title: post.title, body: post.body });
  };

  return (
      <li style={{ marginBottom: '30px', padding: '10px', backgroundColor: '#ffffff' }}>
        {isEditing ? 
          <>
            <textarea
              value={currentPost.title}
              onChange={(e: any) => {  setCurrentPost({ ...currentPost, title: e.target.value }); }}
            />
            <textarea
              value={currentPost.body}
              onChange={(e: any) => { setCurrentPost({ ...currentPost, body: e.target.value }); }}
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
          <button onClick={() => deletePost(post.id)}>Delete post</button>
          {!isEditing && <button onClick={onEditPost}>Edit post</button>}
          {isEditing && <button onClick={onSaveChanges}>Save changes</button>}
          {isEditing && <button  onClick={onCancelEditing}>Cancel changes</button>}
        </div>
      </li>
  );
};


export default observer(Post);