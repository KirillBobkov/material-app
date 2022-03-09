import { Button, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { IPost } from '../../interfaces';
import PostsStore from '../../state/PostsStore';

type Props = {
    post: IPost;
}

const getInitialState = (): IPost =>  {
  return {
    userId: 0,
    id:   '',
    title: '',
    body: ''
  }
}

const Post = ({ post }: Props) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [currentPost, setCurrentPost] = useState<IPost>(getInitialState());
    const { deletePost, updatePost } = PostsStore;

    useEffect((): void => setCurrentPost({ ...post }), [post])

    const onSaveChanges = async () => {
      await updatePost(post.id, currentPost);
      setIsEditing(!isEditing);
    }

    const onEditPost = (): void => {
      setIsEditing(!isEditing)
    }

    const onCancelEditing = () => {
      setIsEditing(!isEditing)
      setCurrentPost({ ...currentPost, title: post.title, body: post.body });
    }

    return (
      <li style={{ marginBottom: '30px', padding: '10px', backgroundColor: '#ffffff' }}>
        {isEditing ? 
          <>
            <TextField
              id="outlined-multiline-static"
              label="Title"
              multiline
              fullWidth
              sx={{ marginBottom: '20px', backgroundColor: '#ffffff' }}
              value={currentPost.title}
              onChange={(e: any) => {  setCurrentPost({ ...currentPost, title: e.target.value}) }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Content"
              multiline
              sx={{ marginBottom: '20px', backgroundColor: '#ffffff' }}
              fullWidth
              value={currentPost.body}
              onChange={(e: any) => { setCurrentPost({ ...currentPost, body: e.target.value }) }}
            />
          </>
          :
          <>
            <TextField
              label="Title"
              fullWidth
              multiline
              sx={{ marginBottom: '20px', backgroundColor: '#ffffff' }}
              value={currentPost.title}
              disabled
            />
            <TextField
              label="Content"
              fullWidth
              multiline
              sx={{ marginBottom: '20px', backgroundColor: '#ffffff' }}
              value={currentPost.body}
              disabled
            />
          </>
        }
        <div>
          <Button variant="contained" sx={{ marginRight: '10px' }}  color="warning"  onClick={() => deletePost(post.id)}>Delete post</Button>
          {!isEditing && <Button variant="contained" onClick={onEditPost}>Edit post</Button>}
          {isEditing && <Button variant="contained"  color="success" sx={{ marginRight: '10px' }} onClick={onSaveChanges}>Save changes</Button>}
          {isEditing && <Button variant="contained" color="error" onClick={onCancelEditing}>Cancel changes</Button>}
        </div>
      </li>
    )
}


export default observer(Post);