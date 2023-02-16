import React from "react"
import LayoutPrime from "../components/Layout"
import Layout from "../components/bed/Layout"
import { graphql } from "gatsby"
import BedsList from "../components/bed/BedsList"
import BakeList from "../components/bake/CakesList"
import BrewList from "../components/brew/RecipesList"
import Seo from "../components/Seo"

const Contact = ({ location, data }) => {
  const from = location.state?.from

  const beds = data.allContentfulBed.nodes
  const bake = data.allContentfulBakery.nodes
  const brews = data.allContentfulRecipe.nodes
  // console.log(bake)
  // console.log(brews)
  // console.log(beds)
  return (
    <LayoutPrime>
      <Layout>
        <Seo title="Contact" description="" />
        <main className="page">
          <section className="contact-page">
            <article>
              <h3>Want to get in Touch?</h3>

              <p>
                A pissed mating ritual is wasted. Sometimes a Hoptoberfest
                hibernates, but the greasy porter always dances with the colt 45
                near the bud light!
              </p>
              <p>
                A fashionable Strohs earns enough for a beer, and the booze
                self-flagellates; however, a Home brew operates a small bar with
                the blood clot.
              </p>
              <p>
                A Home brew over a Christmas Ale throws a bottle of beer at a
                Lone Star defined by a power drill drink, and the fried Miller
                writes a love letter to the Bacardi Silver.
              </p>
              <p>
                The bill of a monkey bite, a bottle of beer for a Heineken, and
                the sake bomb are what made America great! When you see a burly
                Stella Artois, it means that a keg related to the shot hides
              </p>
            </article>
            <article>
              <form
                className="form contact-form"
                action="https://formspree.io/f/xeqwowza"
                method="POST"
              >
                <div className="form-row">
                  <label htmlFor="name">your name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="form-row">
                  <label htmlFor="email">your email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="form-row">
                  <label htmlFor="message">message</label>
                  <textarea name="message" id="message"></textarea>
                </div>
                <button type="submit" className="btn block">
                  submit
                </button>
              </form>
            </article>
          </section>
          <section className="featured-cakes">
            <h5>Our Featured Yummylicious!</h5>
            {/* <BedsList cakes={beds} /> */}
            {from === "beds" && <BedsList beds={beds} />}
            {from === "bake" && <BakeList cakes={bake} />}
            {from === "brew" && <BrewList recipes={brews} />}
          </section>
        </main>
      </Layout>
    </LayoutPrime>
  )
}

export const query = graphql`
  query {
    allContentfulBed(filter: { featured: { eq: true } }, sort: { title: ASC }) {
      nodes {
        id
        title
        featured
        cookTime
        servings
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
    allContentfulBakery(
      filter: { featured: { eq: true } }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        featured
        cookTime
        servings
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
    allContentfulRecipe(
      filter: { featured: { eq: true } }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        featured
        cookTime
        servings
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

export default Contact
