
import React, { useRef } from 'react';
import styled from 'styled-components';

import Button from '../Button';

const AboutBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 60px 25px;
  gap: 40px;
  background: linear-gradient(90deg, #538ac6 0%, #9bd0ea 100%);

  @media (max-width: 600px) {
    min-height: 338px;
    padding: 40px 25px;
    gap: 20px;
    justify-content: space-between;
  }
`;

const AboutBlockTitle = styled.div`
  font-family: Poppins-Regular;
  font-size: 40px;
  line-height: 52px;
  text-align: center;
  text-transform: uppercase;
  color: white;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 30px;
    line-height: 39px;
  }
`;

const AboutBlockDescription = styled.div`
    max-width: 670px;
    font-family: Poppins-Regular;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: white;
    margin: 0 auto;

    @media (max-width: 600px) {
      margin-bottom: 20px;
      font-size: 16px;
      line-height: 21px;
    }
`;

interface Props {
  title?: string
  description?: string;
  scrollToDirection: 'top' | 'bottom';
  text: string;
}

export const AboutBlock = ({ title, description, scrollToDirection, text }: Props) => {
  const blockRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = () => {
    if (scrollToDirection === 'top') {
      window.scrollTo(0, 0);
      return;
    } 

    if (blockRef.current) {
      window.scrollTo(0, window.scrollY + blockRef.current.clientHeight);
    }
  };
  
  return (
    <AboutBlockWrapper ref={blockRef}>
      {title && <AboutBlockTitle>{title}</AboutBlockTitle>}
      {description && <AboutBlockDescription>{description}</AboutBlockDescription>}
      <Button color="#f7b32b" onClick={scrollTo}>{text}</Button>
    </AboutBlockWrapper>
  );
};
