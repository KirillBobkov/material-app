import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

type Props = {
    onCreatePost: (arg: string) => any;
}

const getInitialState = (): any =>  {
  return {
    title: '',
    body: ''
  }
}

const CreatePostForm = ({ onCreatePost }: Props) => {
    const [currentPost, setCurrentPost] = useState<any>(getInitialState());

    const onSubmit = (e: any) => {
        e.preventDefault();
        onCreatePost({ ...currentPost, id: Math.ceil(Math.random() * 10000), userId: Math.ceil(Math.random() * 10000) })
        .then(() => setCurrentPost(getInitialState()));
    }

    return (
      <form onSubmit={onSubmit} style={{ marginBottom: '30px', padding: '10px', backgroundColor: '#F0F7FF' }}>
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
        <div>
          <Button type="submit" variant="contained">Create post</Button>
        </div>
      </form>
    )
}


export default React.memo(CreatePostForm);