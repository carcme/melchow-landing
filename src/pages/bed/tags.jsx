import React from "react"
import LayoutPrime from "../../components/layout"
import Layout from "../../components/bed/Layout"
import { Link, graphql } from "gatsby"
import setupTags from "../../utils/setupTags"
import slugify from "slugify"
import Seo from "../../components/Seo"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulBed.nodes)

  return (
    <LayoutPrime>
      <Layout>
        <Seo title="Tags" description="" />
        <main className="page">
          <section className="tags-page">
            {newTags.map((tag, index) => {
              const [text, value] = tag
              const slug = slugify(text).toLocaleLowerCase()
              return (
                <Link to={`/tags/${slug}`} key={index} className="tag">
                  <h5>{text}</h5>
                  <p>{value > 1 ? `${value} Tags` : `${value} Tag`}</p>
                </Link>
              )
            })}
          </section>
        </main>
      </Layout>
    </LayoutPrime>
  )
}

export const query = graphql`
  query {
    allContentfulBed {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
