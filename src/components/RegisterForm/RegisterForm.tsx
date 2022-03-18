import React, { useState } from 'react';
import styled from 'styled-components';

import authApi from '../../api/auth';
import Input from '../Input';
import { AxiosError } from 'axios';
import { IRegistration } from '../../interfaces/IRegistration';
import Button from '../Button';
import Spinner from '../Spinner';

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
  background: #ffffff;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
`;

const RegisterForm = (props: any ): JSX.Element  => {
  const [registerData, setRegisterData] = useState<IRegistration>(getInitialState());
  const [errors, setError] = useState<Error | null>(null);
  const [isFetching, setFetching] = useState<boolean>(false);

  const onSubmit = async (e: any ): Promise<any> => {
    e.preventDefault();
    setFetching(true);

    try {
      await authApi.register({ ...registerData });
      setRegisterData(getInitialState());
      props.closeForm();
    } catch (res) {
      const event = res as AxiosError;
      if (event.response) {
        setError(event.response.data.errors);
      }
    } finally {
      setFetching(false);
    }
  };

  return (
      <StyledForm onSubmit={onSubmit}>
            <Input
              label="First name"
              value={registerData.firstName}
              placeholder="Enter your first name"
              onChange={(e: any ): void => { setRegisterData({ ...registerData, firstName: e.target.value }); }}
            />
            <Input
              label="Last name"
              placeholder="Enter your last name"
              value={registerData.lastName}
              onChange={(e: any ): void => { setRegisterData({ ...registerData, lastName: e.target.value }); }}
            />
            <Input
              label="E-mail"
              value={registerData.email}
              placeholder="Enter your e-mail"
              onChange={(e: any ): void => { setRegisterData({ ...registerData, email: e.target.value }); }}
            />
            <Input
              label="Password"
              value={registerData.password}
              placeholder="Enter your password"
              onChange={(e: any ): void => { setRegisterData({ ...registerData, password: e.target.value }); }}
            />
        <div>
          <Button>Sign up</Button>
          <p style={{ color: 'red' }}>{errors && Object.values(errors).map((errorMessage, i ): JSX.Element => <p key={i}>{errorMessage}</p>)}</p>
        </div>
        {isFetching && <Spinner size={50} />}
      </StyledForm>
  );      
};

export default React.memo(RegisterForm);