/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `3b Melchow`,
    description: `Alles Bett, Bäckerei und Brauerei in Melchow`,
    language: "de",
    keywords: "back",
    image: "/logo.png",
    twitter: "melchow3b",
    author: `@hammer3`,
    siteUrl: `https://todo.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bed_images`,
        path: `${__dirname}/src/assets/images/bed/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bakery_images`,
        path: `${__dirname}/src/assets/images/bakery/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `brewery_images`,
        path: `${__dirname}/src/assets/images/brewery/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#e84109`,
        theme_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/image.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `d2miw24ee2ig`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
