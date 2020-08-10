import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  body, input, button {
    -webkit-font-smothing: antialiased;
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
  }

  body {
    background: ${({ theme }) => theme.colors.grayLight};
    color: ${({ theme }) => theme.colors.dark};
    min-height: 100vh;
  }

  button {
    cursor: pointer;
  }
`;
