import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AxiosResponse } from 'axios';

import * as api from '../../api';

import { IQuote, IQuoteResponse } from '../../interfaces/IQuoteResponse';

type StyledSectionType = {
  isVisible: boolean;
};

const StyledSection  = styled.section<StyledSectionType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: gray;
  margin: 0 auto;
  width: 100%;
  min-height: 250px;
  transition: opacity .5s;
  opacity: ${props => props.isVisible ? 1 : 0};
`;

const StyledParagraph  = styled.span`
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
    <StyledSection isVisible={!!quote.text}>
      <StyledParagraph>{quote.text}</StyledParagraph>
      <StyledSpan>{quote.author}</StyledSpan>
    </StyledSection>
  );
};

export default Quote;
