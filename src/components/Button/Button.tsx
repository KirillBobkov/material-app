import React, { HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = {
  color?: string;
} & HTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<Props>`
  max-width: 90%;
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-family: Poppins-Regular;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.1em;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: white;
  background: ${(props) => props.color || '#000000'};
  cursor: pointer;
  border: none;
  overflow: hidden;
  transition: opacity .5s;
  
  &:focus {  
    outline: 1px solid transparent;
  }

  &:disabled {
    pointer-events: none;
    background: gray;
  }

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 450px) and (pointer:coarse) {
    padding: 0 10px;

    &:hover {
      opacity: 1;
    }
  }
`;

const Button = ({ color, children, ...attrs }: PropsWithChildren<Props> ): JSX.Element => {
  return (
    <StyledButton color={color} {...attrs}>{children}</StyledButton>
  );
};

export default Button;