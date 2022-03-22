import React, { useRef } from 'react';
import styled from 'styled-components';

import { ImageCard } from '../../interfaces/ImageCard';

interface CarouselProps {
  cards: ImageCard[];
  cardSize: number;
  gap: number;
}

const Sqimс = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  box-sizing: content-box;
  margin: 40px auto;
  background: #ffffff;
  overflow: hidden;
`;

const RowContainer = styled.div`
  max-width: 100%;
  flex: 1 1 0px;
  height: 100%;
`;

const Row = styled.div<{ gap: number; }>`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 0 ${(props) => props.gap}px;
  overflow: auto;
  scrollbar-width: none;
  scroll-behavior: smooth;
  gap: ${(props) => props.gap}px;
  grid-gap: ${(props) => props.gap}px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.img`
  max-width: 90%;
  flex: 0 0 auto;
`;

const Actions = styled.div`
  width: 1px;
`;

const ArrowLeft = styled.div`
  position: absolute;
  content: "";
  width: 30px;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  left: 0;
  transition: opacity .5s;

  &:hover {
    opacity: 0.5;
  }

  &::before {
    position: absolute;
    content: "";
    top: 50%;
    width: 15px;
    height: 15px;
    border-right: 3px solid #000000;
    border-bottom: 3px solid #000000;
    left: 20px;
    transform: rotate(135deg);
    cursor: pointer;
  }
`;

const ArrowRight = styled.div`
  position: absolute;
  content: "";
  width: 5em;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  right: 0;
  transition: opacity .5s;

  &:hover {
    opacity: 0.5;
  }

   &::before {
    position: absolute;
    content: "";
    top: 50%;
    width: 15px;
    height: 15px;
    border-right: 3px solid  #000000;
    border-bottom: 3px solid  #000000;
    right: 20px;
    transform: rotate(-45deg);
    cursor: pointer;
   }
`;

export default function SquareImagesCarousel({ cards, cardSize, gap }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const makeScroll = (direction: number ): void => {
    if (carouselRef.current) {
      const { scrollLeft, offsetWidth,  scrollWidth } = carouselRef.current;
      const cardWidth = cardSize + gap;
      const visibleCards = Math.abs(Math.floor(offsetWidth / cardWidth));
      const visibleCardsWidth = cardWidth * visibleCards;
      const scrollStart = scrollLeft === 0;
      const scrollEnd = offsetWidth + scrollLeft === scrollWidth;

      if (scrollStart || scrollEnd) {
        carouselRef.current.scrollLeft += direction * (cardWidth - ((offsetWidth - visibleCardsWidth - gap) * 0.5));
        return;
      }
  
      carouselRef.current.scrollLeft += direction * visibleCardsWidth;
    }
  };

  return (
    <Sqimс>
      <RowContainer>
        <Row ref={carouselRef} gap={gap}>
          {cards.map((card: ImageCard): JSX.Element => (
            <Card 
              width={cardSize} 
              key={card.id} 
              src={card.background} 
            />
          ))}
        </Row>
      </RowContainer>
      <Actions>
        <ArrowLeft onClick={(): void => makeScroll(-1)} />
        <ArrowRight onClick={(): void => makeScroll(1)} />
      </Actions>
    </Sqimс>
  );
}
