// Import Global Style
import { createGlobalStyle } from "styled-components";

/**
 * Membuat Global Style.
 * Global Style: CSS Reset, Font.
 * Pindahkan isi index.css ke GlobalStyle
 */
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
