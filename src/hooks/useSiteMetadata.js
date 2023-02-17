/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
import { useStaticQuery, graphql } from "gatsby"

export const UseSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            language
            keywords
            image
            telephoneNumber
            author
            emailContact
            twitterUsername
            siteUrl
            siteName
            developerName
            developerUrl
            twitterUsername
            facebookUsername
            instagramUsername
            linkedinUsername
            twitterCardImageUrl
          }
        }
      }
    `
  )

  return site.siteMetadata
}
