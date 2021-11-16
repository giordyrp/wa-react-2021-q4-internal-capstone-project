import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, #root {
    display: block;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    background-color: rgb(247, 248, 249);
    font-family: 'Nunito Sans', sans-serif;
    overflow-y: auto;
  }

  #root * {
    box-sizing: border-box;
    outline: none;
  }
`;
