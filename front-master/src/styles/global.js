import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  padding:0;
  margin:0;
  outline:0;
  box-sizing: border-box;
}

html, body, #root{
  min-height:100%;
}

body{
  font-family: Arial, Helvetica, sans-serif;
  background: #CFC1B4;
  -webkit-font-smoothing: antialiased;
}
`;
