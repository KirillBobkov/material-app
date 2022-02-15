import React, { useEffect, useState } from 'react';
import { IPost } from '../../interfaces';

type Props = {
    post: IPost;
    onDeletePost: (arg: string) => void;
    onUpdatePost: (arg: string, arg2: IPost) => any;
}

const Post = ({ post, onDeletePost, onUpdatePost }: Props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newPost, setNewPost] = useState<IPost>({
        userId: 0,
        id:   '',
        title: '',
        body: ''
    });

    useEffect(() => {
        setNewPost(post);
    }, [post])

    return (
      <li>
        {isEditing ? 
        <>
            <textarea value={newPost.title} onChange={(e: any) => {  setNewPost({ ...newPost, title: e.target.value}) }}/>
            <textarea value={newPost.body} onChange={(e: any) => { setNewPost({ ...newPost, body: e.target.value }) }} />
        </>
        :
        <>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
        </>}
        <button type='button' onClick={() => onDeletePost(post.id)}>Delete post</button>
        {!isEditing && <button type='button' onClick={() => setIsEditing(!isEditing)}>Update post</button>}
        {isEditing && <button type='button' onClick={() => {
            onUpdatePost(post.id, newPost)
            .then(() => setIsEditing(!isEditing))
        }}>Save changes</button>}
      </li>
    )
}


export default React.memo(Post);