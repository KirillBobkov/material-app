import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 20vh;
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
        <StyledH1>402</StyledH1>
        <StyledP>Sorry, you currently don&apos;t have permission to access this page.</StyledP>
        <StyledP>Please, authorize of register to get an access.</StyledP>

  </>;
};

export default NotAuthorized;


