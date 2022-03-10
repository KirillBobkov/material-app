
import React, { useState, useContext } from 'react';

import styled from 'styled-components';
import { WHITE, STEEL_GRAY } from '../../consts/colors';
import authApi from '../../api/auth';
import { AuthContext } from '../../context/Auth';
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

const LoginForm = () => {
  const [loginData, setLoginData] = useState<any>(getInitialState());
  const auth = useContext(AuthContext);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const res = await authApi.login({ ...loginData });
    setLoginData(getInitialState());
    auth.setToken(res.data.token);
    auth.setUser(res.data.user);
  };

  return (
      <StyledForm onSubmit={onSubmit}>
            <Input
              label="E-mail"
              placeholder="Enter your e-mail"
              value={loginData.email}
              onChange={(e: any) => { setLoginData({ ...loginData, email: e.target.value }); }}
            />
            <Input
              label="Password"
              placeholder="Enter password"
              value={loginData.password}
              onChange={(e: any) => { setLoginData({ ...loginData, password: e.target.value }); }}
            />
        <div>
          <button type="submit">Login</button>
        </div>
      </StyledForm>
  );      
};

export default React.memo(LoginForm);