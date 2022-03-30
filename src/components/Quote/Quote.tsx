import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AxiosResponse } from 'axios';

import * as api from '../../api';

import { IQuote } from '../../interfaces/IQuote';
import Spinner from '../Spinner';

type StyledSectionType = {
  isVisible: boolean;
};

const StyledSection  = styled.section<StyledSectionType>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  margin: 0 auto;
  width: 100%;
  min-height: 250px;
   ${props => props.isVisible ? 'background-color: #4d4d4d;' : ''}
  text-align: center;
`;

const BorderContainer = styled.div`
  border: 3px solid white;
  padding: 40px;
  color: white;
  background-color: inherit;
  width: 100%;

  &:before {
    padding: 10px;
    position: absolute;
    top: 30px;
    left: 20px;
    content: '❝';
    background-color: inherit;
    font-size: 50px;
  }

  &:after {
    padding: 10px;
    position: absolute;
    bottom: 10px;
    right: 20px;
    content: '❜❜';
    background-color: inherit;
    font-size: 50px;
  }
`;

const StyledParagraph = styled.p`
  text-align: center;
  margin-bottom: 40px;
  font-size: 16px;
  color: white;
  margin: 0;
  margin-bottom: 20px;
`;

const StyledSpan  = styled.span`
  font-size: 12px;
  color: white;
  font-weight: 700;
  text-align: center;
`;

const getInitialState = (): IQuote =>  ({
  userId: 0,
  id:   '',
  title: '',
  body: '',
});

const Quote = (): JSX.Element => {
  const [quote, setQuote] = useState<IQuote>(getInitialState());

  useEffect(() => {
    const fetchQuote = async () =>  {
      const randomNumber = Math.round(40 - 0.5 + Math.random() * (40 - 1 + 1));
      const res: AxiosResponse<IQuote>  = await api.quotes.getQuote(randomNumber);
      setQuote(res.data);
    };

    fetchQuote();
  }, []);

  return (
    <StyledSection isVisible={!!quote.body}>
      {quote.body ? 
        <BorderContainer>
          <StyledParagraph>{quote.body}</StyledParagraph>
          <StyledSpan>{quote.title}</StyledSpan>
        </BorderContainer>
        : <Spinner size={50} />}
    </StyledSection>
  );
};

export default Quote;
