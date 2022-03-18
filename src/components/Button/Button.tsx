import React, { HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = {
  color?: string;
} & HTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<Props>`
  max-width: 90%;
  padding: 10px 20px;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.1em;
  color: white;
  background: ${(props) => props.color || '#000'};
  cursor: pointer;
  border: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 10px;
  margin-bottom: 10px;
  font-family: Poppins-Regular;

  &:focus {  
    outline: 1px solid transparent;
  }

  &:disabled {
    pointer-events: none;
    background: gray;
  }
`;

const Button = ({ color, children, ...attrs }: PropsWithChildren<Props> ): JSX.Element => {
  return (
    <StyledButton color={color} {...attrs}>{children}</StyledButton>
  );
};

export default Button;