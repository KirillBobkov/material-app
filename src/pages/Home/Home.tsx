import React, { useEffect } from 'react';
import { AboutBlock } from '../../components/AboutBlock';

import Quote from '../../components/Quote';
import SquareImagesCarousel from '../../components/SquareImagesCarousel';

import { bidImages, smallImages } from '../../consts/images';

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
      <SquareImagesCarousel cards={bidImages} />
      <Quote />
      <SquareImagesCarousel cards={smallImages} />
      <AboutBlock 
        text="Go to the top"
        scrollToDirection="top"
        title="Finish" 
        description="That's all for this page. Let's go to the top?" 
      />
    </>
  );
};

export default Home;
