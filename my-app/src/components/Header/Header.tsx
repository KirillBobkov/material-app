import styled from 'styled-components';
import { STEEL_GRAY, BLUE } from '../../consts/colors';
import React, { useContext } from 'react';
import  { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import PagesIcon from '@mui/icons-material/Pages';
import HomeIcon from '@mui/icons-material/Home';

import { WHITE } from '../../consts/colors';
import { AuthContext } from '../../context/Auth';
import NavLink from '../NavLink';
import pathRoutes from '../../consts/pathRoutes';
import RegisterForm from '../RegisterForm';

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

const Header = ({ children }: any): JSX.Element => {
    const [authState, setAuthState] = React.useState({ login: false, register: false });
    const auth = useContext(AuthContext);
  return (
      <StyledHeader>
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
      </StyledHeader>
  );
};

export default Header;
