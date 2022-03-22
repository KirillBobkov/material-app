import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
  value: string;
  placeholder: string;
  invalidMessage?: string;
  type?: string; 
} & HTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input<{ isInvalid: boolean }>`
  width: 100%;
  padding: 10px;
  border: 1px solid gray;
  font-size: 14px;
  border-radius: 0;
  ${props => props.isInvalid ? 'border: 1px solid red;' : ''}

  &:focus {
    outline: 1px solid #000000;
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
  color: #000000;
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