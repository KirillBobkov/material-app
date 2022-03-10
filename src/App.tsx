import React, { useContext } from 'react';
import  { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { WEAK_BLUE } from './consts/colors';
import Header from './components/Header';
import { AuthContext } from './context/Auth';
import Posts from './components/Posts';
import Main from './components/Main/Main';
import pathRoutes from './consts/pathRoutes';

const Footer = styled.footer`
  height: 60px;
  overflow: hidden;
  background-color: ${WEAK_BLUE};
  z-index: 100;
`;

const App = (): JSX.Element => {
  const auth = useContext(AuthContext);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path={pathRoutes.posts} element={auth.user ? <Posts /> : <Navigate to='/authWarning' />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default App;
