import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as api from '../../api';
import { IQuote, IQuoteResponse } from '../../interfaces/IQuoteResponse';
import { AxiosResponse } from 'axios';

type StyledSpanType = {
  isVisible: boolean;
};

type StyledParagraphType = {
  isVisible: boolean;
};

const StyledSection  = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: gray;
  margin: 0 auto;
  width: 100%;
  min-height: 250px;
`;

const StyledParagraph  = styled.span<StyledParagraphType>`
  text-align: center;
  margin-bottom: 40px;
  font-size: 16px;
  color: white;
  transition: opacity .5s;
  margin: 0;
  margin-bottom: 20px;
  opacity: ${props => props.isVisible ? 1 : 0};
`;

const StyledSpan  = styled.span<StyledSpanType>`
  font-size: 12px;
  color: white;
  font-weight: 700;
  transition: opacity .5s;
  opacity: ${props => props.isVisible ? 1 : 0};
`;

const getInitialState = (): IQuote =>  ({
  author: '',
  tag:   '',
  text: '',
});

const Quote = (): JSX.Element => {
  const [quote, setQuote] = useState<IQuote>(getInitialState());

  useEffect(() => {
    const fetchQuote = async () =>  {
      const res: AxiosResponse<IQuoteResponse>  = await api.quotes.getRandomQuote();
      setQuote(res.data.quotes[0]);
    };

    fetchQuote();
  }, []);

  return (
    <StyledSection>
      <StyledParagraph isVisible={!!quote.text}>{quote.text}</StyledParagraph>
      <StyledSpan isVisible={!!quote.author}>{quote.author}</StyledSpan>
    </StyledSection>
  );
};

export default Quote;
