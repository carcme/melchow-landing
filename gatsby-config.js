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
    title: `Melchow 3b`,
    description: `Alles Bett, Bäckerei und Brauerei in Melchow sadsa`,
    language: "de",
    keywords:
      "bakery, brewery, bed and breakfast, nature retreat, self catering",
    image:
      "https://images.ctfassets.net/d2miw24ee2ig/Anqu1WjyoNBrL4fsQIOOh/47a84639be4343a6775b5dfdd161cc96/chocolate-whisky-balls.jpg",
    telephoneNumber: "+49 123 456 789",
    emailContact: "fwillemsen@magix.net",
    twitterUsername: "melchow3b",
    facebookUsername: "jules.cunningham.3",
    instagramUsername: "cookie_cunningham",
    linkedinUsername: "",
    twitterCardImageUrl:
      "https://images.ctfassets.net/d2miw24ee2ig/Anqu1WjyoNBrL4fsQIOOh/47a84639be4343a6775b5dfdd161cc96/chocolate-whisky-balls.jpg",
    author: `@hammer3`,
    siteUrl: `https://melchow-3b.netlify.app/`,
    siteName: ``,
    developerName: `hammer3`,
    developerUrl: `https://hammer3.de`,
  },
  plugins: [
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
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
