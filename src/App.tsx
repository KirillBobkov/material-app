import React, { LazyExoticComponent, Suspense } from 'react';
import  { Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import Header from './components/Header';
import Main from './components/Main/Main';
import Spinner from './components/Spinner';
import pathRoutes from './consts/pathRoutes';
import AuthStore from './state/AuthStore';

const Home = React.lazy(() => import('./pages/Home'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const NotAuthorized = React.lazy(() => import('./pages/NotAuthorized'));
const Posts = React.lazy(() => import('./pages/Posts'));

const App = (): JSX.Element => {
  const getSuspendedElement = (Element: LazyExoticComponent<() => JSX.Element>) => {
    return (
      <Suspense fallback={<Spinner size={50} />}>
        <Element />
      </Suspense>
    );
  };

  return (
    <>
      <Header />
      <Main>
        <Routes>
            <Route path='/' element={getSuspendedElement(Home)} />
            <Route path={pathRoutes.posts} element={getSuspendedElement(AuthStore.profile ? Posts : NotAuthorized)} />
            <Route path='*' element={getSuspendedElement(NotFound)} />
        </Routes>
      </Main>
    </>
  );
};

export default observer(App);
