import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }

    html {
      font-size: 62.5%;
      font-family: 'Roboto', sans-serif;
      background-color: #27241d;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23e66a6a' fill-opacity='0.17'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

      @media (min-width: ${props => props.theme.breakpoints.sm}) {
        font-size: 65%;
      }

      @media (min-width: ${props => props.theme.breakpoints.md}) {
          font-size: 68%;
      }

      @media (min-width: ${props => props.theme.breakpoints.lg}) {
          font-size: 72%;
      }
    }

    body {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
`

export default GlobalStyle
