import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  text-align: center;
  margin: 0;
  margin-top: 10vh;
  font-size: 10vh;
  color: black;
`;

const StyledP = styled.h2`
  text-align: center;
  margin: 0;
  margin-bottom: 40px;
  padding: 0 20px;
  font-size: 2vh;
  color: black;
`;

const NotAuthorized = (): JSX.Element => {
  return <>
        <StyledH1>403 Forbidden</StyledH1>
        <StyledP>Sorry, you currently don&apos;t have permission to access this page.</StyledP>
        <StyledP>Please, sign in or sing up to get an access.</StyledP>

  </>;
};

export default NotAuthorized;


