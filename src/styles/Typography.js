import { createGlobalStyle } from "styled-components"

const Typography = createGlobalStyle`
  html {
    font-family: "Roboto", sans-serif;
    color: ${props => props.theme.black};
  }
  body {
    font-weight: 400;
    line-height: 1.7;
    font-size: 1.5rem;
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.grey[50]};
    font-weight: 700;
    padding: 0.25rem 0;
    display: block;
    transition: .2s ease-in-out;
    :hover {
      color: ${props => props.theme.grey[200]};
    }
  }

  mark, .mark {
    background: ${props => props.theme.red[700]};
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .heading--primary {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 3em;
    line-height: 1em;
    hr {
      width: 10rem;
      margin: 2rem auto;
      border: 2px solid ${props => props.theme.primary};
    }
  }

  .heading--secondary {
    font-size: 2.5em;
    text-align: left;
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => props.theme.red[600]};
    margin-bottom: 3rem;
    line-height: 1em;
  }

  .heading--tertiary {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 2em;
    margin-bottom: 3rem;
    line-height: 1;
    color: ${props => props.theme.black};
    hr {
      margin-top: 1rem;
      width: 6rem;
      border-color: ${props => props.theme.primary};
    }
  }

  .tagline {
    text-align: center;
    margin: 0 auto;
    text-transform: uppercase;
    font-weight: 700;
    max-width: 500px;
    font-size: 2em;
    line-height: 1em;
  }

  .center {
    text-align: center;
  }

  .left {
    text-align: left;
  }
`

export default Typography
