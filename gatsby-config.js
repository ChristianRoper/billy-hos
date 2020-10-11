require("dotenv").config({ path: "./.env" })

module.exports = {
  siteMetadata: {
    title: `Billy Ho's Pub & Eatery`,
    description: `Great drinks and delicious food fresh off the grill! Drop by on Wednesday for the best wings in Lake Country!`,
    author: `@christian_roper`,
    siteURL: `https://www.billyhos.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
        pure: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `billy-hos`,
        start_url: `/`,
        display: `minimal-ui`,
        // icon: `static/billyhos-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        manualInit: true,
      },
    },
  ],
}
