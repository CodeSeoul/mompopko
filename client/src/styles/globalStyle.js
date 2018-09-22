import { injectGlobal } from "styled-components";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Roboto:300,400,700');
  html, body {
    font-family : 'Roboto', 'Open Sans';
    margin: 0;
    padding : 0;
    height : 100%;
  }
`;

export default injectGlobal;
