import { Chip } from '@mui/material';
import { observer } from 'mobx-react-lite';

const PostsCounter = observer(({ postsLength }: { postsLength: number }) => (
  <Chip sx={{ marginBottom: '20px' }} label={`Total posts: ${postsLength}`} />
))

export default PostsCounter;
