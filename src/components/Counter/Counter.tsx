import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

interface Props {
  count: number;
}

const StyledCounter  = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  margin-bottom: 40px;
  margin-top: 40px;
  background-color: #fff2f2;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 4px 12px rgb(0, 0, 0, 0.12);
  font-weight: 700;
  font-size: 20px;
  font-family: Poppins-Regular;
  color: red;
`;

const Counter = ({ count }: Props): JSX.Element => (
  <StyledCounter>
    <span>TOTAL POSTS</span>
    <span>{`${count}`}</span>
  </StyledCounter>
);

export default observer(Counter);
