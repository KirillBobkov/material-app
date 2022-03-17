import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

interface Props {
  quote: string;
  author: string;
}

const StyledSection  = styled.section`
  padding: 40px;
  background-color: gray;
  text-align: center;
  margin: 0 auto;
  width: 100%;
`;

const StyledParagraph  = styled.p`
  text-align: center;
  margin-bottom: 40px;
  font-size: 16px;
  font-style: italic;
  color: white;
`;

const StyledSpan  = styled.span`
  font-size: 12px;
  color: white;
  font-weight: 700;
`;

const Quote = ({ quote, author }: Props): JSX.Element => (
    <StyledSection>
        <StyledParagraph>{quote}</StyledParagraph>
        <StyledSpan>{author}</StyledSpan>
    </StyledSection>
);

export default observer(Quote);
