import React from "react"
import { graphql } from "gatsby"
// import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const PostPage = ({ data, location }) => {
  const url = location.pathname ? location.pathname : ""
  const { markdownRemark: post } = data

  const pageInfo = {
    title: post.frontmatter.title,
    image: post.frontmatter.image,
  }

  return (
    <Layout pageInfo={pageInfo}>
      <SEO url={url} />
      <PostTemplate title={post.frontmatter.title} content={post.html} />
    </Layout>
  )
}

export default PostPage

export const PostTemplate = ({ title, content }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  )
}

export const pageQuery = graphql`
  query PostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        image
        templateKey
      }
      html
    }
  }
`
