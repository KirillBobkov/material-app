import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { AxiosError } from 'axios';

import Input from '../Input';
import Button from '../Button';
import Spinner from '../Spinner';

import * as api from '../../api';

import { IRegistration } from '../../interfaces/IRegistration';

interface Props {
  closeForm: () => void;
}

const getInitialState = (): IRegistration =>  ({
  email: '',
  password: '',
  firstName: '',
  lastName: '',
});

const StyledForm = styled.form<{ isFetching: boolean }>`
  min-height: 230px;
  width: 300px;
  background: #444444;
  box-sizing: border-box;
  padding: 20px;
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

const RegisterForm = ({ closeForm }: Props): JSX.Element  => {
  const [registerData, setRegisterData] = useState<IRegistration>(getInitialState());
  const [errors, setError] = useState<IRegistration | null>(null);
  const [isFetching, setFetching] = useState<boolean>(false);
  
  const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>): void => { 
    setRegisterData({ ...registerData, firstName: e.target.value }); 
  };

  const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>): void => { 
    setRegisterData({ ...registerData, lastName: e.target.value }); 
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => { 
    setRegisterData({ ...registerData, email: e.target.value });
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>): void => { 
    setRegisterData({ ...registerData, password: e.target.value });
  };

  const onSubmit = async (e: FormEvent): Promise<any> => {
    e.preventDefault();
    setFetching(true);

    try {
      await api.auth.register({ ...registerData });
      setRegisterData(getInitialState());
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
      <FormTitle>Register</FormTitle>
      <Input
        label="First name"
        invalidMessage={errors?.firstName || ''}
        value={registerData.firstName}
        placeholder="Enter your first name"
        onChange={handleChangeFirstName}
      />
      <Input
        label="Last name"
        placeholder="Enter your last name"
        invalidMessage={errors?.lastName || ''}
        value={registerData.lastName}
        onChange={handleChangeLastName}
      />
      <Input
        label="E-mail"
        value={registerData.email}
        invalidMessage={errors?.email || ''}
        placeholder="Enter your e-mail"
        onChange={handleChangeEmail}
      />
      <Input
        label="Password"
        type='password'
        value={registerData.password}
        invalidMessage={errors?.password || ''}
        placeholder="Enter your password"
        onChange={handleChangePassword}
      />
      <FormFooter><Button color='#d5000b'>Sign up</Button></FormFooter>
      {isFetching && <Spinner size={50} />}
    </StyledForm>
  );      
};

export default React.memo(RegisterForm);