import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    -webkit-font-smothing: antialiased;
  }

  body {
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.dark};
    background: ${({ theme }) => theme.colors.grayLight};
  }

  button {
    cursor: pointer;
  }
`;
