import { STEEL_GRAY, BLUE } from '../../consts/colors';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid ${STEEL_GRAY};
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;

  &:focus {
    outline: 1px solid ${BLUE};
  }
`;

const StyledLabel = styled.label`
  span {
    display: inline-block;
    margin-bottom: 5px;
    color: ${BLUE};
  }
`;

const Input = ({ label, value, onChange, placeholder }: any) => {
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
  )
}

export default Input;