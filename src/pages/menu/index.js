import React from "react"
import { graphql } from "gatsby"

import SEO from "../../components/seo"
import MenuPageTemplate from "../../templates/menu-page"

const MenuPage = ({ data, location }) => {
  const { pageInfo, notes } = data.markdownRemark.frontmatter
  const url = location.pathname ? location.pathname : ""

  return (
    <>
      <SEO url={url} title={pageInfo.title} />
      <MenuPageTemplate pageInfo={pageInfo} notes={notes} />
    </>
  )
}

export default MenuPage

export const menuPageQuery = graphql`
  query MenuPage {
    markdownRemark(frontmatter: { templateKey: { eq: "menu-page" } }) {
      frontmatter {
        notes {
          text
          warning
        }
        pageInfo {
          image
          tagline
          title
        }
      }
    }
  }
`
