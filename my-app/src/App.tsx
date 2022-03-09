import React, { useContext } from 'react';
import  { Link, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import PagesIcon from '@mui/icons-material/Pages';
import HomeIcon from '@mui/icons-material/Home';

import styled from 'styled-components';
import { WEAK_BLUE, WHITE } from './consts/colors';
import Header from './components/Header';
import { AuthContext } from './context/Auth';
import NavLink from './components/NavLink';
import Posts from './components/Posts';
import Main from './components/Main/Main';
import pathRoutes from './consts/pathRoutes';
import RegisterForm from './components/RegisterForm';

const Footer = styled.footer`
  height: 60px;
  overflow: hidden;
  background-color: ${WEAK_BLUE};
  z-index: 100;
`;

const NavLinks = styled.ul`
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
`

const StyledLoginContainer = styled.div`
  position: relative;
  color: ${WHITE};
  height: 100%;

  & > div {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`

const StyledLoginFloatContainer = styled.div`
  position: absolute;
  top: 59px;
  right: 0;
`

const App = (): JSX.Element => {
  const auth = useContext(AuthContext);
  const [authState, setAuthState] = React.useState({ login: false, register: false });

  return (
    <>
      <Header>
        <FlexContainerSpaced>
          <NavLinks>
            <NavLink>
              <Link to={pathRoutes.home}>Home</Link>
              <HomeIcon />
            </NavLink>
            <NavLink>
              <Link to={pathRoutes.posts}>Posts</Link>
              <PagesIcon />
            </NavLink>
          </NavLinks>
          <StyledLoginContainer>
            <NavLinks>
            {!auth.user 
              ? <>
                  <NavLink onClick={() => { setAuthState({ login: true, register: false }); }}>
                    <span>Login</span>
                    <AccountCircleIcon />
                  </NavLink>
                  <NavLink onClick={() => { setAuthState({ login: false, register: true }); }}>
                    <span>Register</span>
                    <AccountCircleIcon />
                  </NavLink>
                </>
              : <NavLink onClick={() => { setAuthState({ login: false, register: false }); auth.logOut(); }}>
                  <span>Logout</span>
                  <LogoutIcon />
                </NavLink>
            } 
            </NavLinks>
            {authState.login && !auth.user && (
              <StyledLoginFloatContainer>
                <LoginForm />
              </StyledLoginFloatContainer>
            )}
            {authState.register && !auth.user && (
              <StyledLoginFloatContainer>
                <RegisterForm />
              </StyledLoginFloatContainer>
            )}
          </StyledLoginContainer>
        </FlexContainerSpaced>
      </Header>
      <Main>
        <Routes>
          <Route path={pathRoutes.posts} element={<Posts />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default App;
