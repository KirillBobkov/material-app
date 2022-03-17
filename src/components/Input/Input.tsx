import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
  value: string;
  placeholder: string;
} & HTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input`
  border: 1px solid gray;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  font-size: 14px;

  &:focus {
    outline: 1px solid #000000;
  }
`;

const StyledLabel = styled.label`
  span {
    display: inline-block;
    margin-bottom: 5px;
    color: #000000;
    font-size: 14px;
  }
`;

const Input = ({ label, placeholder, ...attrs }: Props): JSX.Element => {
  return (
    <StyledLabel>
      <span>{label}</span>
      <StyledInput placeholder={placeholder} {...attrs} />
    </StyledLabel>
  );
};

export default Input;