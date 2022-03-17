import React, { HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = PropsWithChildren<HTMLAttributes<HTMLButtonElement>>;

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
    background: gray;
  }
`;

const Button = ({ children, ...attrs }: Props ): JSX.Element => {
  return (
    <StyledButton {...attrs}>{children}</StyledButton>
  );
};

export default Button;