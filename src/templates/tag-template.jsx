import React from "react"
import { graphql } from "gatsby"
import BedsList from "../components/bed/BedsList"
import BakeList from "../components/bake/CakesList"
import BrewList from "../components/brew/RecipesList"
import LayoutPrime from "../components/Layout"
import LayoutBed from "../components/bed/Layout"
import LayoutBake from "../components/bake/Layout"
import LayoutBrew from "../components/brew/Layout"
import Seo from "../components/Seo"

const TagTemplate = ({ data, pageContext }) => {
  let type = "beds"
  let nodes = data.allContentfulBed.nodes

  if (Object.keys(nodes).length === 0) {
    type = "bake"
    nodes = data.allContentfulBakery.nodes
  }

  if (Object.keys(nodes).length === 0) {
    type = "brew"
    nodes = data.allContentfulRecipe.nodes
  }

  console.log(type)
  console.log("Object: " + Object.keys(nodes).length)

  return (
    <LayoutPrime>
      {type === "beds" && <LayoutBed />}
      {type === "bake" && <LayoutBake />}
      {type === "brew" && <LayoutBrew />}

      <Seo title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-cakes">
          {type === "beds" && <BedsList beds={nodes} />}
          {type === "bake" && <BakeList cakes={nodes} />}
          {type === "brew" && <BrewList recipes={nodes} />}
        </div>
      </main>
    </LayoutPrime>
  )
}

export const query = graphql`
  query GetBedsByTag($tag: String) {
    allContentfulBed(
      sort: { title: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
    allContentfulBakery(
      sort: { title: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`

export default TagTemplate
