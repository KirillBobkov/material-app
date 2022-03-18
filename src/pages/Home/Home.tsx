import React, { useEffect } from 'react';

import Quote from '../../components/Quote';
import SquareImagesCarousel from '../../components/SquareImagesCarousel';
import { bidImages, smallImages } from '../../consts/images';

const Home = (): JSX.Element => {
  useEffect((): void => { 
    window.scrollTo(0, 0);
  }, []);

  return <>
    <Quote />
    <SquareImagesCarousel cardSize={400} gap={40} cards={bidImages} />
    <Quote />
    <SquareImagesCarousel cardSize={200} gap={20} cards={smallImages} />
    <Quote />
  </>;
};

export default Home;
