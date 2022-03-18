
import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

import authApi from '../../api/auth';
import Input from '../Input';
import Button from '../Button';
import { AxiosError } from 'axios';
import { observer } from 'mobx-react-lite';
import AuthStore from '../../state/AuthStore';
import Spinner from '../Spinner';

const getInitialState = (): any =>  {
  return {
    email: '',
    password: '',
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

const LoginForm = (props: any): JSX.Element => {
  const [loginData, setLoginData] = useState<any>(getInitialState());
  const [errors, setError] = useState<Error | null>(null);
  const [isFetching, setFetching] = useState<boolean>(false);

  const onSubmit = async (e: any ): Promise<any> => {
    e.preventDefault();
    setFetching(true);

    try {
      const res = await authApi.login({ ...loginData });
      setLoginData(getInitialState());
      AuthStore.setTokenToStorage(res.data.token);
      AuthStore.setProfile(res.data.user);
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
          label="E-mail"
          placeholder="Enter your e-mail"
          value={loginData.email}
          onChange={(e: ChangeEvent<HTMLInputElement> ): void => { setLoginData({ ...loginData, email: e.target.value }); }}
        />
        <Input
          label="Password"
          placeholder="Enter password"
          value={loginData.password}
          onChange={(e: ChangeEvent<HTMLInputElement> ): void => { setLoginData({ ...loginData, password: e.target.value }); }}
        />
        <div>
          <Button>Sign In </Button>
          <p style={{ color: 'red' }}>{errors && Object.values(errors).map((errorMessage, i ): JSX.Element => <p key={i}>{errorMessage}</p>)}</p>
        </div>
        {isFetching && <Spinner size={50} />}
      </StyledForm>
  );      
};

export default observer(LoginForm);