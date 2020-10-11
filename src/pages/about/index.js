import React from "react"
import { graphql } from "gatsby"

import SEO from "../../components/seo"
import AboutPageTemplate from "../../templates/about-page"

const AboutPage = ({ data, location }) => {
  const { sections, pageInfo } = data.markdownRemark.frontmatter
  const url = location.pathname ? location.pathname : ""

  return (
    <>
      <SEO url={url} title="About" />
      <AboutPageTemplate pageInfo={pageInfo} sections={sections} />
    </>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        pageInfo {
          title
          tagline
          image
        }
        sections {
          sectionTitle
          body
        }
      }
    }
  }
`
