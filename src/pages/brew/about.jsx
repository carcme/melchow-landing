import React from "react"
import LayoutPrime from "../../components/layout"
import Layout from "../../components/brew/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../../components/brew/RecipesList"
import Seo from "../../components/Seo"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <LayoutPrime>
      <Layout>
        <Seo title="About | Brauerei" description="" />
        <main className="page">
          <section className="about-page">
            <article>
              <h2>A Brewers Ipsum</h2>
              <p>
                A miller near a Homebrew reads a magazine, but an Alaskan IPA
                carelessly ignores a PBR. A colt 45 laughs and drinks all night
                with a moldy bar stool.
              </p>
              <p>
                A Rolling Rock related to a Stella Artois avoids contact with
                the nuclear Budweiser dry living with a Corona.
              </p>
              <Link to="/contact" state={{ from: "brew" }} className="btn">
                contact
              </Link>
            </article>
            <StaticImage
              src="../../assets/images/brewery/about.jpg"
              alt="Beers on a counter top"
              className="about-img"
              placeholder="blurred"
            />
          </section>
          <section className="featured-recipes">
            <h5>Our Featured Awesomesauce!</h5>
            <RecipesList recipes={recipes} />
          </section>
        </main>
      </Layout>
    </LayoutPrime>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe(
      filter: { featured: { eq: true } }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
