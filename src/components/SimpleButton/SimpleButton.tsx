import React from 'react';
import styled from 'styled-components';
import { BLUE, WEAK_BLUE, STEEL_GRAY } from '../../consts/colors';

interface Props {
  capture: string;
  isDisabled?: boolean;
  onClick: (arg: React.MouseEvent) => void;
  type: 'button' | 'submit';
}

const StyledButton = styled.button`
  max-width: 90%;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.1em;
  color: white;
  background: ${BLUE};
  cursor: pointer;
  border: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 10px;

  &:active {
    background: ${BLUE};
  }

  &:focus {  
    background: ${BLUE};
    outline: 1px solid transparent;
  }

  &:disabled {
    pointer-events: none;
    background: ${STEEL_GRAY};
  }
`;

const SimpleButton = ({ capture, type, isDisabled, onClick }: Props) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
			disabled={isDisabled}
    >
      {capture}
    </StyledButton>
  );
};

export default SimpleButton;