import React from 'react';
import styled from 'styled-components';
import { STEEL_GRAY, BLUE } from '../../consts/colors';

const StyledHeader = styled.header`
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 20px;
  background-color: ${BLUE};
  border-bottom: 1px solid ${STEEL_GRAY};
  z-index: 100;
`;

const Header = ({ children }: any): JSX.Element => {
  return (
      <StyledHeader>
        {children}
      </StyledHeader>
  );
};

export default Header;
