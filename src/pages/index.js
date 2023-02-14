import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(query)
  const { title, description, text, subtitle, home_items } =
    data.allIndexJson.nodes[0]
  let homeItems = []

  let i = 0
  home_items.forEach(item => {
    homeItems.push(
      <a href={item.link} target="_blank" rel="noreferrer">
        <div
          key={i}
          className="home-grid-item"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "100%",
          }}
        ></div>
      </a>
    )
    i++
  })

  return (
    <Layout>
      <h1 className="title">{title}</h1>
      <div className="home-main">
        <div className="description">{description}</div>
        <p className="text">{text}</p>
        <div className="divider"></div>
        <h2 className="subtitle">{subtitle}</h2>
        <div className="home-grid-container">{homeItems}</div>{" "}
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
