import { createGlobalStyle } from 'styled-components'
import LGRegular from 'assets/fonts/LeagueGothic-Regular.woff2'
import LGItalic from 'assets/fonts/LeagueGothic-Italic.woff2'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'LG-Regular';
        font-style: normal;
        font-weight: normal;
        src: local('LeagueGothic-Regular'), url(${LGRegular}) format('woff2');
    }

    @font-face {
        font-family: 'LG-Italic';
        font-style: italic;
        font-weight: normal;
        src: local('LeagueGothic-Italic'), url(${LGItalic}) format('woff2');
    }

    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    * {
        font-smoothing: antialiased;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #100F10;
        font-family: "Roboto", sans-serif;
        color: white;
    }
`

export default GlobalStyle