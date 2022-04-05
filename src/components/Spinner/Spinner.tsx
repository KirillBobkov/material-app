import React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  size: number;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div<Props>`
  &, &::before, &::after {
    content:'';
    display: block;
    border: 4px solid transparent;
    border-radius: 50%;
    animation: ${rotate} infinite linear 1s;
    position: absolute;
  }

  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-top-color: #D5000B;
  top: calc(50% - 25px);
  left: calc(50% - ${props => props.size * 0.5}px);

  &::before {
    border-top-color: #D5000B;
    animation-duration: 4s;
    top: 2px;
    bottom: 2px;
    left: 2px;
    right: 2px;
  }
`;

const Spinner = ({ size }: Props): JSX.Element => {
  return <StyledSpinner size={size} />;
};

export default Spinner;