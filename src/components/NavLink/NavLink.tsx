import React from 'react';
import styled from 'styled-components';
import { WHITE } from '../../consts/colors';

const StyledLink = styled.li`
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

  a, span {
    text-decoration: none;
    color: inherit;
    margin-right: 5px;
  }
`;

const NavLink = ({ children, onClick = () => {} }: any): JSX.Element => {
  return (
      <StyledLink onClick={onClick}>
        {children}
      </StyledLink>
  );
};

export default NavLink;
