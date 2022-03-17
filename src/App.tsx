import React from 'react';
import  { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main/Main';
import pathRoutes from './consts/pathRoutes';
import Spinner from './components/Spinner';
import SquareImagesCarousel from './components/SquareImagesCarousel';
import Quote from './components/Quote';
import { observer } from 'mobx-react-lite';
import AuthStore from './state/AuthStore';

const NotFound = React.lazy(() => import('./pages/NotFound'));
const Posts = React.lazy(() => import('./components/Posts'));
const NotAuthorized = React.lazy(() => import('./pages/NotAuthorized'));

const WithFallback = ({ children }: any): JSX.Element => {
  return <React.Suspense fallback={<Spinner size={50} />}>{children}</React.Suspense>;
};

const App = (): JSX.Element => {

  return (
    <>
      <Header />
      
      <Main>
        <Routes>
          <Route path='/' element={
          <>
            <Quote author='May Robins' quote='Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur' />
            <SquareImagesCarousel 
              cardSize={400}
              cards={[
                { background: 'https://picsum.photos/id/232/400/400' },
                { background: 'https://picsum.photos/id/233/400/400' },
                { background: 'https://picsum.photos/id/234/400/400' },
                { background: 'https://picsum.photos/id/235/400/400' },
                { background: 'https://picsum.photos/id/237/400/400' },
                { background: 'https://picsum.photos/id/238/400/400' },
                { background: 'https://picsum.photos/id/239/400/400' },
                { background: 'https://picsum.photos/id/240/400/400' },
                { background: 'https://picsum.photos/id/241/400/400' },
                { background: 'https://picsum.photos/id/242/400/400' },
                { background: 'https://picsum.photos/id/243/400/400' },
                { background: 'https://picsum.photos/id/244/400/400' },
                { background: 'https://picsum.photos/id/236/400/400' },
              ]}
            />
            <Quote author='May Robins' quote='Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur' />
            <SquareImagesCarousel 
              cardSize={200}
              cards={[
                { background: 'https://picsum.photos/id/233/200/200' },
                { background: 'https://picsum.photos/id/232/200/200' },
                { background: 'https://picsum.photos/id/234/200/200' },
                { background: 'https://picsum.photos/id/235/200/200' },
                { background: 'https://picsum.photos/id/237/200/200' },
                { background: 'https://picsum.photos/id/238/200/200' },
                { background: 'https://picsum.photos/id/239/200/200' },
                { background: 'https://picsum.photos/id/240/200/200' },
                { background: 'https://picsum.photos/id/241/200/200' },
                { background: 'https://picsum.photos/id/242/200/200' },
                { background: 'https://picsum.photos/id/243/200/200' },
                { background: 'https://picsum.photos/id/244/200/200' },
                { background: 'https://picsum.photos/id/236/200/200' },
              ]}
            />
            <Quote author='May Robins' quote='Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur' />
          </>
        }/>
          <Route path={pathRoutes.posts} element={AuthStore.profile ? <WithFallback><Posts /></WithFallback> : <WithFallback><NotAuthorized /></WithFallback>} />
          <Route path='*' element={<WithFallback><NotFound /></WithFallback>} />
        </Routes>
      </Main>
    </>
  );
};

export default observer(App);
