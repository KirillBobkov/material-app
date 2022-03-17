
import React, { useState, useContext, ChangeEvent } from 'react';
import styled from 'styled-components';

import { WHITE, STEEL_GRAY } from '../../consts/colors';
import { AuthContext } from '../../context/Auth';
import authApi from '../../api/auth';
import Input from '../Input';
import SimpleButton from '../SimpleButton';
import { AxiosError } from 'axios';

const getInitialState = (): any =>  {
  return {
    email: '',
    password: '',
  };
};

const StyledForm = styled.form`
  min-height: 230px;
  width: 300px;
  background: ${WHITE};
  border: 1px solid ${STEEL_GRAY};
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
`;

const LoginForm = (props: any): JSX.Element => {
  const [loginData, setLoginData] = useState<any>(getInitialState());
  const auth = useContext(AuthContext);
  const [errors, setError] = useState<Error | null>(null);

  const onSubmit = async (e: any) => {
    e.preventDefault();
  
    try {
      const res = await authApi.login({ ...loginData });
      setLoginData(getInitialState());
      auth.setTokenToStorage(res.data.token);
      auth.setProfile(res.data.user);
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
          label="E-mail"
          placeholder="Enter your e-mail"
          value={loginData.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => { setLoginData({ ...loginData, email: e.target.value }); }}
        />
        <Input
          label="Password"
          placeholder="Enter password"
          value={loginData.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => { setLoginData({ ...loginData, password: e.target.value }); }}
        />
        <div>
          <SimpleButton capture="Sign In" type="submit" onClick={() => {}}/>
          <p style={{ color: 'red' }}>{errors && Object.values(errors).map((errorMessage, i) => <p key={i}>{errorMessage}</p>)}</p>
        </div>
      </StyledForm>
  );      
};

export default React.memo(LoginForm);