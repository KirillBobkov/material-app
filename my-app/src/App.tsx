import { observer } from 'mobx-react-lite';
import './App.css';
import postsStore from './state/state';
import { Post } from './types';

function App(): JSX.Element {
  return (
    <div className="App">
      {postsStore.posts && postsStore.posts.map((post: Post) => {
        return <div key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </div>
      })}
    </div>
  );
}

export default observer(App);
