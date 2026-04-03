import { createGlobalStyle } from 'styled-components';

// Design tokens (were SCSS variables)
const colors = {
  black: '#000000',
  grayDark1: '#121212',
  grayDark2: '#181818',
  grayMid1: '#535353',
  grayLight1: '#AAAAAA',
  grayLight2: '#DDDDDD',
  white: '#FFFFFF',
  green: '#1ab854',
  border1: '#282828',
};

export { colors };

export const FOOTER_HEIGHT = '90px';
export const SIDEBAR_WIDTH = '250px';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');

  :root {
    --image-height: 180px;
    --sidebar-width: ${SIDEBAR_WIDTH};
    --footer-height: ${FOOTER_HEIGHT};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    color: ${colors.white};
    background-color: ${colors.black};
  }

  ul, ol {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }
  }

  .hidden {
    display: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;

    & + p {
      margin-top: 0.25em;
      color: ${colors.grayLight1};
      font-size: 0.85em;
    }
  }
`;

export default GlobalStyles;
