import { createGlobalStyle } from 'styled-components';

import { colors } from './colors';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');

  :root {
    --color-background-default: ${colors.black};
    --color-background-secondary: ${colors.grayDark1};

    --color-content-default: ${colors.white};
    --color-content-secondary: ${colors.grayLight1};

    --color-active: ${colors.green};

    --image-height: 180px;
    --sidebar-width: 250px;
    --footer-height: 90px;
    --titlebar-height: 40px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
    border: none;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
    font-family: 'Open Sans', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.grayMid1};
    border-radius: 3px;
    &:hover {
      background: ${colors.grayLight1};
    }
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

export default GlobalStyles;
