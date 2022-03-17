import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import { STEEL_GRAY, BLUE } from '../../consts/colors';

interface Props {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const StyledInput = styled.input`
  border: 1px solid ${STEEL_GRAY};
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

const Input = ({ label, value, onChange, placeholder }: Props): JSX.Element => {
  return (
    <StyledLabel>
      <span>{label}</span>
      <StyledInput 
        placeholder={placeholder}
        type="text"  
        value={value}
        onChange={onChange} 
      />
    </StyledLabel>
  );
};

export default Input;