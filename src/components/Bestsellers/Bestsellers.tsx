import React from 'react';
import styled from 'styled-components';

import { Carousel } from '../Carousel';
import { Card3, OrderCard3Component } from '../OrderCard3';

interface CarouselProps {
  cards: Card3[];
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
        renderItem={(card: Card3): JSX.Element => (
          <OrderCard3Component 
            key={card.background}
            card={card} 
          />
        )}
      />
    </StyledSection>
  );
}
