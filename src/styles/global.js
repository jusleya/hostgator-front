import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    height: 100%;
    ${({ theme }) => css`
      background-color: ${theme.colors.blue.lightest};
      font-family: ${theme.typography.family.primary};
    `}
  }
`;
