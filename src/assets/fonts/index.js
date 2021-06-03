import { createGlobalStyle } from 'styled-components';
import MontserratWoff from './Montserrat/Montserrat-Regular.woff';
import MontserratWoff2 from './Montserrat/Montserrat-Regular.woff2';
import MontserratBoldWoff from './Montserrat/Montserrat-Bold.woff';
import MontserratBoldWoff2 from './Montserrat/Montserrat-Bold.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratWoff}) format('woff'), url(${MontserratWoff2}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display:swap;
  }
  
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBoldWoff}) format('woff'), url(${MontserratBoldWoff2}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display:swap;
  }
`;
