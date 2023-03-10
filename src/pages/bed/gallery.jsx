import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LayoutPrime from "../../components/layout"
import Layout from "../../components/bed/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../../components/Seo"
import CapitaliseLetter from "../../utils/CapitaliseLetter"

const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "bed_images" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            placeholder: DOMINANT_COLOR
            layout: CONSTRAINED
            width: 400
            height: 200
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <LayoutPrime>
      <Layout>
        <Seo title="Gallery | B&B" description="" />
        <div className="page cakes-list">
          {nodes.map((image, index) => {
            const { name } = image
            const pathToImage = getImage(image)
            return (
              <article key={index} className="item">
                <GatsbyImage
                  image={pathToImage}
                  alt="gallery image"
                  className="gallery-img"
                />
                <p>{CapitaliseLetter(name)}</p>
              </article>
            )
          })}
        </div>
      </Layout>
    </LayoutPrime>
  )
}

export default Gallery
