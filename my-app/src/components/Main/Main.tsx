import React from 'react';
import styled from 'styled-components';
import { WEAK_BLUE } from '../../consts/colors';

const StyledMain = styled.main`
  flex: 1;
  background-color: ${WEAK_BLUE};
  margin-top: 60px;
`;

const Main = ({ children }: any): JSX.Element => {
  return (
      <StyledMain>
        {children}
      </StyledMain>
  );
};

export default Main;
