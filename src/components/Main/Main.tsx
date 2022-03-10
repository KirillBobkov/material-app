import React from 'react';
import styled from 'styled-components';

import { WEAK_BLUE } from '../../consts/colors';

interface Props {
  children: React.ReactNode;
}

const StyledMain = styled.main`
  flex: 1;
  background-color: ${WEAK_BLUE};

  & > div {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 60px;
  }
`;

const Main = ({ children }: Props): JSX.Element => {
  return (
      <StyledMain>
        <div>
          {children}
        </div>
      </StyledMain>
  );
};

export default Main;
