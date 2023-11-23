import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  &:root {
    --dark-blue: hsl(240, 38%, 20%);
    --grayish-blue: hsl(240, 18%, 77%);
  }

  *, *::after, ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 3.2rem;
  }
`;

export default GlobalStyle;
