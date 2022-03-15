import React from 'react';
import styled from 'styled-components';
import { BLUE, STEEL_GRAY } from '../../consts/colors';

const StyledH1 = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 30vw;
  color: ${BLUE};
`;

const StyledP = styled.h2`
  text-align: center;
  margin: 0;
  margin-bottom: 40px;
  padding: 0 20px;
  font-size: 3vw;
  color: ${BLUE}
`;

const NotFound = (): JSX.Element => {
  return <>
        <StyledH1>404</StyledH1>
        <StyledP>Looks like the page you were looking for is no longer here or you are not auth.</StyledP>
  </>;
};

export default NotFound;


