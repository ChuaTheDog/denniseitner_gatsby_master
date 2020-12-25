import { createGlobalStyle } from 'styled-components';

import bodyFont from '../assets/fonts/Montserrat/Montserrat-Regular.ttf';
import headingFont from '../assets/fonts/Pacifico/Pacifico-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Montserrat;
    src: url(${bodyFont});
  }

  @font-face {
    font-family: Pacifico;
    src: url(${headingFont});
  }
  html {
    font-family: Montserrat;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: Pacifico;
    font-weight: normal;
   // margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }
  .center {
    text-align: center;
  }
  .tilt {
    transform: rotate(-2deg);
  }


  h1, h2, h3, h4, h5, h6{
    color: gold; 
  }
`;

export default Typography;
