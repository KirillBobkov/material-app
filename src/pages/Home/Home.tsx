import React, { useEffect } from 'react';
import { AboutBlock } from '../../components/AboutBlock';
import Bestsellers from '../../components/Bestsellers';

import Quote from '../../components/Quote';
import SquareImagesCarousel from '../../components/SquareImagesCarousel';

import { bestsellers, bidImages } from '../../consts/images';

const Home = (): JSX.Element => {
  useEffect((): void => { 
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutBlock 
        text="See images"
        scrollToDirection="bottom"
        title="Welcome" 
        description="Good time to you! This is a demo project for testing some technologies, 
        different approaches and other intresting features of frontend development." 
      />
      <Bestsellers cards={bestsellers} />
      <Quote />
      <SquareImagesCarousel cards={bidImages} />
      <AboutBlock 
        text="Go to the top"
        scrollToDirection="top"
      />
    </>
  );
};

export default Home;
