import React from 'react';
import styled from 'styled-components';

import { WHITE } from '../../consts/colors';

interface Props {
  capture: string;
  onClick: () => void;
  icon: any;
}

const StyledHeaderButton  = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  color: ${WHITE};
  transition: background-color .15s ease-in-out;
  height: 100%;

  &:hover {
      background-color: #1a77c9;
  }

  span {
    text-decoration: none;
    color: inherit;
    margin-right: 5px;
  }
`;

const HeaderButton = ({ capture, icon, onClick = () => {} }: Props) => (
  <StyledHeaderButton onClick={onClick}>
    <span>{capture}</span>
    {icon ?? null}
 </StyledHeaderButton>
);

export default React.memo(HeaderButton);
