import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

interface Props {
  count: number;
}

const StyledCounter  = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;

  h6, h1 {
    margin: 0;
  }

  h6 {
    margin-bottom: 20px;
  }
`;

const Counter = ({ count }: Props): JSX.Element => (
  <StyledCounter>
    <h6>TOTAL POSTS</h6>
    <h1>{`${count}`}</h1>
  </StyledCounter>
);

export default observer(Counter);
