import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BLUE } from '../../consts/colors';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  &, &::before, &::after {
    content:'';
    display:block;
    border: 4px solid transparent;
    border-radius: 50%;
    animation: ${rotate} infinite linear 2s;
    position: absolute;
  }

    width:100px;
    height:100px;
    border-top-color: ${BLUE};
    top:calc(50% - 50px);
    left:calc(50% - 50px);

  &::before{
    border-top-color: ${BLUE};
    animation-duration:4s;
    top:2px;
    bottom:2px;
    left:2px;
    right:2px;
  }

  &::after{
    border-top-color: ${BLUE};
    top:8px;
    bottom:8px;
    left:8px;
    right:8px;
  }
`;


const Spinner = (): JSX.Element => {
  return <StyledSpinner className="spinner" />;
};

export default Spinner;