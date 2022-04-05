
import React from 'react';
import styled from 'styled-components';

export interface Card3 {
  background: string;
  title: string;
  description: string;
  price: string;
  link: string;
}

interface Props {
  card: Card3;
  className?: string;
}

const OrderCard3 = styled.div`
  display: flex;
  height: 100%;
  height: 440px;
  width: 700px;
  border-radius: 10px;
  color: white;
  box-shadow: 0px 4px 18px 0px rgba(34, 60, 80, 0.2);

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    width: auto;
    flex: 0 0 900px;
  }
`;

const OrderCard3Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 40px;
  border-radius: 10px 0 0 10px;
  background-color: #f1f1f1;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 20px;
    border-radius: 0 0 10px 10px;
  }
`;

const OrderCard3Title = styled.h2`
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

const OrderCard3Description = styled.p`
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

const OrderCard3Price = styled.p`
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

const OrderCard3Image = styled.img`
  width: 50%;
  border-radius: 0 10px 10px 0;
  background-size: cover;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
  }
`;

export function OrderCard3Component({ card }: Props) {
  return (
    <OrderCard3>
      <OrderCard3Content>
        <OrderCard3Title>{card.title}</OrderCard3Title>
        <OrderCard3Description>{card.description}</OrderCard3Description>
        <OrderCard3Price>{card.price}</OrderCard3Price>
      </OrderCard3Content>
      <OrderCard3Image style={{ backgroundImage: `url(${card.background})` }} />
    </OrderCard3>
  );
}
