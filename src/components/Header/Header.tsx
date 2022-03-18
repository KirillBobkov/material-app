import React, { RefObject, useRef } from 'react';
import  {  useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import pathRoutes from '../../consts/pathRoutes';

import RegisterForm from '../RegisterForm';
import LoginForm from '../LoginForm';
import { observer } from 'mobx-react-lite';
import AuthStore from '../../state/AuthStore';

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
`;

const FlexContainerSpaced = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const RelativeContainer = styled.div`
  position: relative;
`;

const AbsoluteContainer = styled.div`
  position: absolute;
  top: 55px;
  right: 0px;
  
  &:focus {
    outline: 1px solid transparent;
  }
`;

const StyledHeader = styled.header`
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 20px;
  z-index: 100;
  background: #000000;
`;

const StyledHeaderButton  = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  flex: 1 1 auto;
  cursor: pointer;
  color: #ffffff;
  height: 100%;
  transition: opacity .5s;

  &:hover {
    opacity: 0.5;
  }

  span {
    text-decoration: none;
    color: inherit;
  }
`;

type AuthState = { login: boolean; register: boolean };

const Header = (): JSX.Element => {
  const [authState, setAuthState] = React.useState<AuthState>({ login: false, register: false });
  const loginFormRef: RefObject<HTMLDivElement> = useRef(null);
  const registerFormRef: RefObject<HTMLDivElement>  = useRef(null);
  const navigate = useNavigate();

  const handleLogin = (): void => {
    setAuthState({ login: true, register: false });
    if (loginFormRef && loginFormRef.current) loginFormRef.current.focus();
  };

  const handleLogout = (): void => {
    setAuthState({ login: false, register: false }); 
    AuthStore.logOut(); 
  };

  const handleRegister = (): void => {
    setAuthState({ login: false, register: true }); 
    if (registerFormRef && registerFormRef.current) registerFormRef.current.focus();
  };

  const onBlurLoginForm = (e: any ): void => {
    if (!e || !e.relatedTarget) {
      setAuthState({ login: false, register: false });
    }
  };

  const onBlurRegisterForm = (e: any ): void => {
    if (!e || !e.relatedTarget) {
      setAuthState({ login: false, register: false });
    }
  };

  return (
      <StyledHeader>
        <FlexContainerSpaced>
          <Navigation>
            <StyledHeaderButton onClick={(): void => navigate(pathRoutes.home)}>Home</StyledHeaderButton>
            <StyledHeaderButton onClick={(): void => navigate(pathRoutes.posts)}>Posts</StyledHeaderButton>
          </Navigation>
          <Navigation>
              {!AuthStore.profile 
                ? <>
                    <RelativeContainer>
                      <StyledHeaderButton onClick={handleLogin}>Sign In</StyledHeaderButton>
                      <AbsoluteContainer 
                        onBlur={onBlurLoginForm} 
                        tabIndex={1} 
                        ref={loginFormRef as RefObject<HTMLDivElement>} 
                      >
                        {authState.login && <LoginForm closeForm={onBlurRegisterForm}/>}
                      </AbsoluteContainer>
                    </RelativeContainer>
                    <RelativeContainer>
                    <StyledHeaderButton onClick={handleRegister}>Sign Up</StyledHeaderButton>
                      <AbsoluteContainer 
                        onBlur={onBlurRegisterForm} 
                        tabIndex={2} 
                        ref={registerFormRef as RefObject<HTMLDivElement>}
                      >
                        {authState.register && <RegisterForm closeForm={onBlurRegisterForm} />}
                      </AbsoluteContainer>
                    </RelativeContainer>
                  </>
                : <StyledHeaderButton onClick={handleLogout}>Logout</StyledHeaderButton>
              } 
          </Navigation>
        </FlexContainerSpaced>
      </StyledHeader>
  );
};

export default observer(Header);
