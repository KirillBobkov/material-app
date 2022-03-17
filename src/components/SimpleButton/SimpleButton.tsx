import React from 'react';
import styled from 'styled-components';
import { BLUE, WEAK_BLUE, STEEL_GRAY } from '../../consts/colors';

interface Props {
  capture: string;
  isDisabled?: boolean;
  onClick: (arg: React.MouseEvent) => void;
  type: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button`
  max-width: 90%;
  padding: 10px 20px;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.1em;
  color: white;
  background: #000000;
  cursor: pointer;
  border: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 10px;

  &:active {
  }

  &:focus {  
    outline: 1px solid transparent;
  }

  &:disabled {
    pointer-events: none;
    background: ${STEEL_GRAY};
  }
`;

const SimpleButton = ({ capture, type, isDisabled, onClick, ...attrs }: Props) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
			disabled={isDisabled}
      {...attrs}
    >
      {capture}
    </StyledButton>
  );
};

export default SimpleButton;