import React, { useContext } from 'react';
import  { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { WEAK_BLUE } from './consts/colors';
import Header from './components/Header';
import { AuthContext } from './context/Auth';
import Main from './components/Main/Main';
import pathRoutes from './consts/pathRoutes';
import Spinner from './components/Spinner';

const NotFound = React.lazy(() => import('./pages/NotFound'));
const Posts = React.lazy(() => import('./components/Posts'));

const Footer = styled.footer`
  height: 60px;
  overflow: hidden;
  background-color: ${WEAK_BLUE};
  z-index: 100;
`;

const WithFallback = ({ children }: any): JSX.Element => {
  return <React.Suspense fallback={<Spinner />}>{children}</React.Suspense>;
};

const App = (): JSX.Element => {
  const auth = useContext(AuthContext);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          {auth.profile && <Route path={pathRoutes.posts} element={<WithFallback><Posts /></WithFallback>} />}
          <Route path='*' element={<WithFallback><NotFound /></WithFallback>} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default App;
