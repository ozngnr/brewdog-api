import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box
  }
  
  html,body {
    margin:0;
    font-size: 16px;
  }

  h1,h2,h3,p {
    margin: 0
  }
`;