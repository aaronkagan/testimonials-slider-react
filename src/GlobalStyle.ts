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
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-image: url(/assets/images/pattern-curve.svg);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: 85vh;
  }
`;

export default GlobalStyle;
