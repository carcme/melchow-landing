import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
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
function Seo({ title, description, children }) {
  const { site } = useStaticQuery(getSiteData)
  const {
    title: siteTitle,
    description: siteDesc,
    siteName,
    siteKeywords,
    siteUrl,
    image,
    author,
    twitterCardImageUrl,
  } = site.siteMetadata

  return (
    <>
      <title>{title ? `${title} | ${siteTitle}` : title}</title>
      <meta name="description" content={siteDesc} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:keywords" content={siteKeywords || ``} />
      <meta property="og:image" content={image || ``} />
      <meta property="og:url" content={siteUrl || ``} />
      <meta property="og:site_name" content={siteName} />
      <meta name="keywords" content={siteKeywords || ``} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author || ``} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={twitterCardImageUrl} />
      {children}
    </>
  )
}

export default Seo
