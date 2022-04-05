
import React from 'react';
import styled from 'styled-components';

import { IBestsellerCard } from '../../interfaces/IBestsellerCard';

interface Props {
  card: IBestsellerCard;
  className?: string;
}

const OrderCard = styled.div`
  display: flex;
  height: 100%;
  height: 440px;
  width: 700px;
  border-radius: 10px;
  color: white;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    width: auto;
    flex: 0 0 900px;
  }
`;

const OrderCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 40px;
  border-radius: 10px 0 0 10px;
  background-color: #e5ffe2;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 20px;
    border-radius: 0 0 10px 10px;
  }
`;

const OrderCardTitle = styled.h2`
  font-size: 30px;
  line-height: 39px;
  text-transform: uppercase;
  color: #000000;
  margin: 0;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    margin-bottom: 10px;
    font-size: 20px;
    line-height: 26px;
  }
`;

const OrderCardDescription = styled.p`
  width: 100%;
  max-width: 240px;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #929292;
  margin: 0;
  margin-bottom: 50px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 1024px) {
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 21px;
  }
`;

const OrderCardPrice = styled.p`
  margin: 0;
  font-size: 30px;
  line-height: 39px;
  font-weight: 700;
  text-transform: uppercase;
  color: #5acb8c;

  @media (max-width: 1024px) {
    margin-bottom: 30px;
    font-size: 20px;
    line-height: 26px;
  }
`;

const OrderCardImage = styled.img`
  width: 50%;
  border-radius: 0 10px 10px 0;
  background-size: cover;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
  }
`;

export function BestsellerCard({ card }: Props) {
  return (
    <OrderCard>
      <OrderCardContent>
        <OrderCardTitle>{card.title}</OrderCardTitle>
        <OrderCardDescription>{card.description}</OrderCardDescription>
        <OrderCardPrice>{card.price}</OrderCardPrice>
      </OrderCardContent>
      <OrderCardImage style={{ backgroundImage: `url(${card.background})` }} />
    </OrderCard>
  );
}
