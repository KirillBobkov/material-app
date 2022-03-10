import React, { RefObject, useContext, useRef } from 'react';
import  {  useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LogoutIcon from '@mui/icons-material/Logout';
import PagesIcon from '@mui/icons-material/Pages';
import HomeIcon from '@mui/icons-material/Home';

import { AuthContext } from '../../context/Auth';

import pathRoutes from '../../consts/pathRoutes';
import { STEEL_GRAY, BLUE, WHITE } from '../../consts/colors';

import RegisterForm from '../RegisterForm';
import HeaderButton from '../HeaderButton';
import LoginForm from '../LoginForm';

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
`;

const FlexContainerSpaced = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const StyledLoginContainer = styled.div`
  position: relative;
  color: ${WHITE};
  height: 100%;

  & > div {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;

const StyledLoginFloatContainer = styled.div`
  position: absolute;
  top: 59px;
  right: 0;
`;

const StyledHeader = styled.header`
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 20px;
  background-color: ${BLUE};
  border-bottom: 1px solid ${STEEL_GRAY};
  z-index: 100;
`;

const Header = (): JSX.Element => {
  const [authState, setAuthState] = React.useState({ login: false, register: false });
  const auth = useContext(AuthContext);
  const loginFormRef: RefObject<HTMLDivElement> = useRef(null);
  const registerFormRef: RefObject<HTMLDivElement>  = useRef(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    setAuthState({ login: true, register: false });
    if (loginFormRef && loginFormRef.current) loginFormRef.current.focus();
  };

  const handleLogout = () => {
    setAuthState({ login: false, register: false }); 
    auth.logOut(); 
  };

  const handleRegister = () => {
    setAuthState({ login: false, register: true }); 
    if (registerFormRef && registerFormRef.current) registerFormRef.current.focus();
  };

  const onBlurLoginForm = (e: any) => {
    if (!e || !e.relatedTarget) {
      setAuthState({ login: false, register: false });
    }
  };

  const onBlurRegisterForm = (e: any) => {
    if (!e || !e.relatedTarget) {
      setAuthState({ login: false, register: false });
    }
  };

  return (
      <StyledHeader>
        <FlexContainerSpaced>
          <Navigation>
            <HeaderButton onClick={() => navigate(pathRoutes.home)} capture="Home" icon={<HomeIcon />}/>
            <HeaderButton onClick={() => navigate(pathRoutes.posts)} capture="Posts" icon={ <PagesIcon />}/>
          </Navigation>
          <StyledLoginContainer>
            <Navigation>
              {!auth.profile 
                ? <>
                    <HeaderButton  onClick={handleLogin} capture="Login" icon={<AccountCircleIcon />}/>
                    <HeaderButton onClick={handleRegister} capture="Register" icon={<AppRegistrationIcon />}/>
                  </>
                : <HeaderButton  onClick={handleLogout} capture="Logout" icon={<LogoutIcon />}/>
              } 
            </Navigation>
            {!auth.profile && (
              <>
                <StyledLoginFloatContainer onBlur={onBlurLoginForm} tabIndex={1} ref={loginFormRef as RefObject<HTMLDivElement> } >
                  {authState.login && <LoginForm closeForm={onBlurRegisterForm}/>}
                </StyledLoginFloatContainer>
                <StyledLoginFloatContainer onBlur={onBlurRegisterForm} tabIndex={2} ref={registerFormRef as RefObject<HTMLDivElement>}>
                  {authState.register && <RegisterForm closeForm={onBlurRegisterForm} />}
                </StyledLoginFloatContainer>
              </>
            )}
          </StyledLoginContainer>
        </FlexContainerSpaced>
      </StyledHeader>
  );
};

export default Header;
