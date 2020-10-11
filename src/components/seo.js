import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <Helmet titleTemplate={`%s — ${site.siteMetadata.title}`}>
      <html lang="en" />
      {/* Fav Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {children}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:url" content={image || "/logo.svg"} />

      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />
    </Helmet>
  )
}

SEO.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
}
