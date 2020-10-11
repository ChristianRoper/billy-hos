import React from "react"
import { graphql } from "gatsby"

import SEO from "../../components/seo"
import ContactPageTemplate from "../../templates/contact-page"

const ContactPage = ({ data, location }) => {
  const { pageInfo } = data.markdownRemark.frontmatter

  const url = location.pathname ? location.pathname : ""

  return (
    <>
      <SEO url={url} title="Contact" />
      <ContactPageTemplate pageInfo={pageInfo} />
    </>
  )
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
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
