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
  border: 1px solid #e1f4ff;
  background: #e1f4ff; 
  font-size: 14px;
  border-radius: 10px;
  ${props => props.isInvalid ? 'border: 1px solid red;' : ''}
  color: #436e9d;

  &:focus {
    outline: 1px solid #436e9d;
  }

  &::placeholder {
    font-size: 14px;
    color: #436e9d;
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
  color: #436e9d;
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