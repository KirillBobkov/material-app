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

const NotFound = (): JSX.Element => {
  return <>
    <StyledH1>Ohh!</StyledH1>
    <StyledP>Page could have been deleted or never have existed.</StyledP>
    <StyledP> But you always can go to the home page.</StyledP>
  </>;
};

export default NotFound;


