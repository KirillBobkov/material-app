
import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { AxiosError } from 'axios';
import { observer } from 'mobx-react-lite';

import authApi from '../../api/auth';

import Input from '../Input';
import Button from '../Button';
import Spinner from '../Spinner';

import AuthStore from '../../state/AuthStore';

import { ILogin } from '../../interfaces/ILogin';

interface Props {
  closeForm: (e?: any) => void;
}


const getInitialState = (): ILogin =>  ({
  email: '',
  password: '',
});

const StyledForm = styled.form<{ isFetching: boolean }>`
  min-height: 230px;
  width: 310px;
  padding: 20px;
  background: #444444;
  box-sizing: border-box;
  box-shadow: -5px 5px 23px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  ${props => props.isFetching ? 'filter: brightness(90%);' : ''}
`;

const FormFooter = styled.div`
  margin-top: 10px;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin: 0;
  margin-bottom: 15px;
  color: #ffffff;
`;

const LoginForm = ({ closeForm }: Props): JSX.Element => {
  const [loginData, setLoginData] = useState<ILogin>(getInitialState());
  const [errors, setError] = useState<ILogin | null>(null);
  const [isFetching, setFetching] = useState<boolean>(false);
  const { setTokenToStorage, setProfile } = AuthStore;

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => { setLoginData({ ...loginData, email: e.target.value }); };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>): void => { setLoginData({ ...loginData, password: e.target.value }); };

  const onSubmit = async (e: any): Promise<any> => {
    e.preventDefault();
    setFetching(true);

    try {
      const res = await authApi.login({ ...loginData });
      setLoginData(getInitialState());
      setTokenToStorage(res.data.token);
      setProfile(res.data.user);
      closeForm();
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
    <StyledForm isFetching={isFetching} onSubmit={onSubmit}>
      <FormTitle>Login</FormTitle>
      <Input
        label="E-mail"
        placeholder="Enter your e-mail"
        value={loginData.email}
        invalidMessage={errors?.email || ''}
        onChange={handleChangeEmail}
      />
      <Input
        type='password'
        label="Password"
        placeholder="Enter password"
        invalidMessage={errors?.password || ''}
        value={loginData.password}
        onChange={handleChangePassword}
      />
      <FormFooter>
        <Button color='#d5000b'>Sign In</Button>
      </FormFooter>
      {isFetching && <Spinner size={50} />}
    </StyledForm>
  );      
};

export default observer(LoginForm);