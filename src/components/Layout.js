import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { StyleSheetManager, ThemeProvider } from "styled-components"

import GlobalStyle from "../styles/GlobalStyles"
import Typography from "../styles/Typography"
import { theme } from "../../theme.js"
import "normalize.css"

import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children, path, type }) => {
  const contact = useStaticQuery(graphql`
    {
      markdownRemark(fields: { slug: { eq: "/contact/contact-info/" } }) {
        frontmatter {
          address {
            city
            state
            street
            zip
          }
          hours {
            bar {
              days
              hours
            }
            grill {
              days
              hours
            }
          }
          phone
          email
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Typography />
      <StyledLayout>
        <Navbar
          type={type}
          path={path}
          contact={contact.markdownRemark.frontmatter}
        />
        <Main>{children}</Main>
        <Footer contact={contact.markdownRemark.frontmatter} />
      </StyledLayout>
    </ThemeProvider>
  )
}

export const PreviewLayout = ({ children }) => {
  const iframe = document.querySelector("#nc-root iframe")
  const iframeHeadElem = iframe && iframe.contentDocument.head

  if (!iframeHeadElem) {
    return null
  }

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      <Typography />

        <StyledLayout>
          <Main>{children}</Main>
        </StyledLayout>
      </ThemeProvider>
    </StyleSheetManager>
  )
}

const StyledLayout = styled.div`
  margin: 0 auto;
  color: ${props => props.theme.grey[900]};
`

const Main = styled.main`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  background-color: #fffbea;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
