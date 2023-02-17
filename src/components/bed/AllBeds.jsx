import React from "react"
import TagsList from "./TagsList"
import BedsList from "./BedsList"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    allContentfulBed(sort: { title: ASC }) {
      nodes {
        id
        title
        featured
        cookTime
        servings
        prepTime
        description {
          description
        }
        content {
          tags
        }
        image {
          gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
        }
      }
    }
  }
`

const AllBeds = () => {
  const data = useStaticQuery(query)
  const beds = data.allContentfulBed.nodes

  return (
    <section className="cakes-container">
      <TagsList beds={beds} />
      <BedsList beds={beds} />
    </section>
  )
}

export default AllBeds
