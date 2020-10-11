/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require("gatsby-source-filesystem")

const createSlug = string => string.replace(/\s+/g, "-").toLowerCase()

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "post-template" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              templateKey
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    const PostTemplate = path.resolve("src/templates/post-page.js")

    posts.forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.fields.slug

      createPage({
        path: slug,
        component: PostTemplate,
        context: {
          id,
        },
      })
    })
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const pages = result.data.allMarkdownRemark.edges
    const MenuTemplate = path.resolve("src/templates/menu-items-page.js")
    const PostTemplate = path.resolve("src/templates/post-page.js")

    pages.forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.fields.slug
      const templateKey = edge.node.frontmatter.templateKey

      const title = createSlug(edge.node.frontmatter.title)

      if (templateKey === "menu-items-page") {
        createPage({
          path: `menu/${title}`,
          component: MenuTemplate,
          context: {
            id,
          },
        })
      }

      if (templateKey === "post-page") {
        createPage({
          path: slug,
          component: PostTemplate,
          context: {
            id,
          },
        })
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
