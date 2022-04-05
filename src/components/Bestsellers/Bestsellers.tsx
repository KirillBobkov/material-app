import React from 'react';
import styled from 'styled-components';

import { Carousel } from '../Carousel';
import { BestsellerCard } from '../BestsellerCard';

import { IBestsellerCard } from '../../interfaces/IBestsellerCard';

interface CarouselProps {
  cards: IBestsellerCard[];
}

const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  box-sizing: content-box;
  margin: 40px auto;
  overflow: hidden;
`;

export default function Bestsellers({ cards }: CarouselProps) {
  return (
    <StyledSection>
      <Carousel 
        data={cards}
        renderItem={(card: IBestsellerCard): JSX.Element => (
          <BestsellerCard 
            key={card.background}
            card={card} 
          />
        )}
      />
    </StyledSection>
  );
}
