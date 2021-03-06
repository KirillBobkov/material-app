import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
  margin: 0;
  margin-top: 10vh;
  font-size: 10vh;
  color: #ffffff;
`;

const StyledDescription = styled.h2`
  text-align: center;
  margin: 0;
  padding: 0 20px;
  font-size: 2vh;
  color: #929292;
`;

const NotAuthorized = (): JSX.Element => (
  <>
    <StyledTitle>Hey!</StyledTitle>
    <StyledDescription>Sorry, you currently don&apos;t have permission to access this page.</StyledDescription>
    <StyledDescription>Please, sign in or sign up to get an access.</StyledDescription>
  </>
);

export default NotAuthorized;


