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
  background-color: #000000;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: -5px 5px 23px rgba(0, 0, 0, 0.5);
  font-weight: 700;
  font-size: 20px;
  font-family: Poppins-Regular;
  color: #ffffff;
`;

const Counter = ({ count }: Props): JSX.Element => (
  <StyledCounter>
    <span>TOTAL POSTS</span>
    <span>{`${count}`}</span>
  </StyledCounter>
);

export default observer(Counter);
