import React, { useRef } from 'react';
import styled from 'styled-components';

interface Props<T> {
  data: T[];
  renderItem: (item: T) => JSX.Element;
}

const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  overflow-x: hidden;
`;

const CarouselRowContainer = styled.div`
  flex: 1 1 0px;
  height: 100%;
  max-width: 100%;
`;

const CarouselRow = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-x: auto;
  overflow-y: visible;
  scrollbar-width: none;
  scroll-behavior: smooth;
  padding: 0 25px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CarouselCard = styled.div`
  max-width: 90%;
  flex: 0 0 auto;
  margin-right: 25px;

  &:last-child {
    margin-right: 0;
  }
`;

const CarouselActions = styled.div`
  width: 1px;
`;

const CarouselArrowButtonLeft = styled.div`
  position: absolute;
  content: "";
  width: 5em;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  left: 0;

  &:before {
    position: absolute;
    content: "";
    top: 50%;
    width: 15px;
    height: 15px;
    border-right: 3px solid #ffffff;
    border-bottom: 3px solid #ffffff;
    left: 49px;
    transform: rotate(135deg);
  }

  @media (pointer:coarse) and (max-width: 600px) {
    display: none;
  }
`;

const CarouselArrowButtonRight = styled.div`
  position: absolute;
  content: "";
  width: 5em;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  right: 0;

  &:before {
    position: absolute;
    content: "";
    top: 50%;
    width: 15px;
    height: 15px;
    border-right: 3px solid #ffffff;
    border-bottom: 3px solid #ffffff;
    right: 49px;
    transform: rotate(-45deg);
  }

  @media (pointer:coarse) and (max-width: 600px) {
    display: none;
  }
`;

export function Carousel<T>({ data, renderItem }: Props<T>) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const GAP = 25;

  const makeScroll = (direction: number) => {
    if (carouselRef.current && cardRef.current) {
      const { scrollLeft, offsetWidth,  scrollWidth } = carouselRef.current;
      const cardWidth = cardRef.current.offsetWidth + GAP;
      const visibleCards = Math.abs(Math.floor(offsetWidth / cardWidth));
      const visibleCardsWidth = cardWidth * visibleCards;
      const scrollStart = scrollLeft === 0;
      const scrollEnd = offsetWidth + scrollLeft === scrollWidth;

      if (scrollStart || scrollEnd) {
        carouselRef.current.scrollLeft += direction * (cardWidth - (offsetWidth - visibleCardsWidth - GAP) * 0.5);
        return;
      }

      carouselRef.current.scrollLeft += direction * visibleCardsWidth;
    }
  };

  return (
    <CarouselWrapper>
      <CarouselRowContainer>
        <CarouselRow ref={carouselRef}>
          {data.map((item, i) => (
            <CarouselCard
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              ref={i === 0 ? cardRef : undefined}
            >
              {renderItem(item)}
            </CarouselCard>
          ))}
        </CarouselRow>
      </CarouselRowContainer>
      <CarouselActions>
        <CarouselArrowButtonLeft onClick={() => { makeScroll(-1); }} />
        <CarouselArrowButtonRight onClick={() => { makeScroll(1); }} />
      </CarouselActions>
    </CarouselWrapper>
  );
}
