import React, { HTMLAttributes, HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
  value: string;
  placeholder: string;
  invalidMessage?: string;
  type?: HTMLInputTypeAttribute; 
} & HTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input<{ isInvalid: boolean }>`
  width: 100%;
  padding: 10px;
  border: 1px solid #7b7b7b;
  background: #7b7b7b; 
  font-size: 14px;
  border-radius: 10px;
  ${props => props.isInvalid ? 'border: 1px solid red;' : ''}
  color: #ffffff;

  &:focus {
    border: 1px solid #7b7b7b;
    outline: 1px solid transparent;
  }

  &::placeholder {
    font-size: 14px;
    color: #b0b0b0;
  }
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  line-height: 12px;
  color: red;
`;

const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 15px;
  width: 100%;
`;

const LabelMessage = styled.span`
  color: #ffffff;
  font-size: 14px;
`;

const Input = ({ type = 'text', invalidMessage = '', label, placeholder, ...attrs }: Props): JSX.Element => {
  return (
    <StyledLabel>
      <LabelMessage>{label}</LabelMessage>
      <StyledInput type={type} isInvalid={!!invalidMessage} placeholder={placeholder} {...attrs} />
      <ErrorMessage>{invalidMessage}</ErrorMessage>
    </StyledLabel>
  );
};

export default Input;