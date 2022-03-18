export interface IQuoteResponse {
  count:     number;
  message:  string;
  quotes: IQuote[];
  status:  number;
}
  
export interface IQuote {
  author: string;
  tag: string;
  text: string;
}


