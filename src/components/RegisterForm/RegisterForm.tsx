import React, { useState } from 'react';
import styled from 'styled-components';

import { WHITE, STEEL_GRAY } from '../../consts/colors';
import authApi from '../../api/auth';
import Input from '../Input';
import { AxiosError } from 'axios';
import { IRegistration } from '../../interfaces/IRegistration';

type Error = {
  errors: {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
  }
};

const getInitialState = (): any =>  {
  return {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };
};

const StyledForm = styled.form`
  min-height: 230px;
  width: 300px;
  background: ${WHITE};
  border: 1px solid ${STEEL_GRAY};
  box-sizing: border-box;
  padding: 20px;
`;

const RegisterForm = (props: any) => {
  const [registerData, setRegisterData] = useState<IRegistration>(getInitialState());
  const [errors, setError] = useState<Error | null>(null);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await authApi.register({ ...registerData });
      setRegisterData(getInitialState());
      props.closeForm();
    } catch (res) {
      const event = res as AxiosError;
      if (event.response) {
        setError(event.response.data.errors);
      }
    }
  };

  return (
      <StyledForm onSubmit={onSubmit}>
            <Input
              label="First name"
              value={registerData.firstName}
              placeholder="Enter your first name"
              onChange={(e: any) => { setRegisterData({ ...registerData, firstName: e.target.value }); }}
            />
            <Input
              label="Last name"
              placeholder="Enter your last name"
              value={registerData.lastName}
              onChange={(e: any) => { setRegisterData({ ...registerData, lastName: e.target.value }); }}
            />
            <Input
              label="E-mail"
              value={registerData.email}
              placeholder="Enter your e-mail"
              onChange={(e: any) => { setRegisterData({ ...registerData, email: e.target.value }); }}
            />
            <Input
              label="Password"
              value={registerData.password}
              placeholder="Enter your password"
              onChange={(e: any) => { setRegisterData({ ...registerData, password: e.target.value }); }}
            />
        <div>
          <button type="submit">Register</button>
          <p style={{ color: 'red' }}>{errors && Object.values(errors).map((errorMessage, i) => <p key={i}>{errorMessage}</p>)}</p>
        </div>
      </StyledForm>
  );      
};

export default React.memo(RegisterForm);