import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { WHITE } from '../../consts/colors';

interface Props {
  postsLength: number;
}

const StyledCounter  = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${WHITE};
  justify-content: center;
  
  h6, h1 {
    margin: 0;
  }

  h6 {
    margin-bottom: 20px;
  }
`

const Counter = ({ postsLength }: Props) => (
  <StyledCounter>
    <h6>TOTAL POSTS</h6>
    <h1>{`${postsLength}`}</h1>
 </StyledCounter>
);

export default observer(Counter);
