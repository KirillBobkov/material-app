import React from 'react';
import styled from 'styled-components';

import { WHITE } from '../../consts/colors';

interface Props {
  capture: string;
  onClick: () => void;
}

const StyledHeaderButton  = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  flex: 1 1 auto;
  cursor: pointer;
  color: ${WHITE};
  height: 100%;
  transition: opacity .5s;

  &:hover {
    opacity: 0.5;
  }

  span {
    text-decoration: none;
    color: inherit;
  }
`;

const HeaderButton = ({ capture, onClick = () => {} }: Props) => (
  <StyledHeaderButton onClick={onClick}>
    <span>{capture}</span>
 </StyledHeaderButton>
);

export default React.memo(HeaderButton);
