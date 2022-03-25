import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyledMain = styled.main`
  flex: 1;
  width: 100%;
  margin: 60px auto 0;
`;

const Main = ({ children }: Props): JSX.Element => {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  );
};

export default Main;
