import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import IndexPageTemplate from "../templates/index-page"

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <>
      <SEO title={frontmatter.pageInfo.title} />
      <IndexPageTemplate pageInfo={frontmatter.pageInfo} />
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        pageInfo {
          title
          tagline
          image
        }
      }
    }
  }
`
