
import React, { useState, useContext, ChangeEvent } from 'react';
import styled from 'styled-components';

import { WHITE, STEEL_GRAY } from '../../consts/colors';
import { AuthContext } from '../../context/Auth';
import authApi from '../../api/auth';
import Input from '../Input';

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
`;

const LoginForm = (): JSX.Element => {
  const [loginData, setLoginData] = useState<any>(getInitialState());
  const auth = useContext(AuthContext);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const res = await authApi.login({ ...loginData });
    setLoginData(getInitialState());
    auth.setTokenToStorage(res.data.token);
    auth.setProfile(res.data.user);
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
          <button type="submit">Login</button>
        </div>
      </StyledForm>
  );      
};

export default React.memo(LoginForm);