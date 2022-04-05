import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
  margin: 0;
  margin-top: 10vh;
  font-size: 10vh;
  color: #436e9d;
`;

const StyledDescription = styled.h2`
  text-align: center;
  margin: 0;
  margin-bottom: 40px;
  padding: 0 20px;
  font-size: 2vh;
  color: #436e9d;
`;

const NotFound = (): JSX.Element => (
  <>
    <StyledTitle>Ohh!</StyledTitle>
    <StyledDescription>Page could have been deleted or never have existed.</StyledDescription>
    <StyledDescription> But you always can go to the home page.</StyledDescription>
  </>
);

export default NotFound;
