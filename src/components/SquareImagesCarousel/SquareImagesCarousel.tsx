import React from 'react';
import styled from 'styled-components';

import { ImageCard } from '../../interfaces/ImageCard';
import { Carousel } from '../Carousel';

interface CarouselProps {
  cards: ImageCard[];
}

const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  box-sizing: content-box;
  margin: 40px auto;
  overflow: hidden;
`;

const Card = styled.img`
  height: 440px;
  width: 100%;
  overflow: hidden;
  object-fit: cover;

  &:last-child {
    margin-right: 0;
  }
`;

export default function SquareImagesCarousel({ cards }: CarouselProps) {
  return (
    <StyledSection>
      <Carousel 
        data={cards}
        renderItem={(card: ImageCard): JSX.Element => (
          <Card 
            key={card.id}
            src={card.background} 
          />
        )}
      />
    </StyledSection>
  );
}
