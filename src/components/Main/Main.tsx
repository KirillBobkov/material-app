import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyledMain = styled.main`
  flex: 1;
  margin-top: 60px;

  & > div {
    width: 100%;
    margin: 0 auto;
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
