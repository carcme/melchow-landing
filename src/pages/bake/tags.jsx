import React from "react"
import Layout from "../../components/bake/Layout"
import LayoutPrime from "../../components/layout"
import Seo from "../../components/Seo"
import { Link, graphql } from "gatsby"
import setupTags from "../../utils/setupTags"
import slugify from "slugify"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulBakery.nodes)

  return (
    <LayoutPrime>
      <Layout>
        <Seo title="Tags | Bäckerei" description="" />
        <main className="page">
          <section className="tags-page">
            {newTags.map((tag, index) => {
              const [text, value] = tag
              const slug = slugify(text).toLocaleLowerCase()
              console.log(slug)
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
    allContentfulBakery {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
