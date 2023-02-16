import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/Seo"

const IndexPage = () => {
  const data = useStaticQuery(query)
  const { title, description, text, subtitle, home_items } =
    data.allIndexJson.nodes[0]
  let homeItems = []

  let i = 0
  home_items.forEach(item => {
    homeItems.push(
      <Link to={item.link}>
        <div
          key={i}
          className="home-grid-item-landing"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "100%",
          }}
        ></div>
      </Link>
    )
    i++
  })

  return (
    <Layout>
      <h1 className="title-landing">{title}</h1>
      <div className="home-main-landing">
        <div className="description-landing">{description}</div>
        <p className="text-landing">{text}</p>
        <div className="divider-landing"></div>
        <h2 className="subtitle-landing">{subtitle}</h2>
        <div className="home-grid-container-landing">{homeItems}</div>{" "}
      </div>
    </Layout>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    allIndexJson {
      nodes {
        title
        description
        text
        subtitle
        home_items {
          name
          description
          link
          image
        }
      }
    }
  }
`
