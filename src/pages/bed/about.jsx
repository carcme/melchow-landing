import React from "react"
import LayoutPrime from "../../components/layout"
import Layout from "../../components/bed/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import BedsList from "../../components/bed/BedsList"
import Seo from "../../components/Seo"

const About = ({
  data: {
    allContentfulBed: { nodes: cakes },
  },
}) => {
  return (
    <LayoutPrime>
      <Layout>
        <Seo title="About | B&B" description="" />
        <main className="page">
          <section className="about-page">
            <article>
              <h2>Bedtime Ipsum</h2>
              <p>
                Wafer icing cotton candy oat cake. Toffee muffin jelly jelly
                beans toffee. Tart topping tiramisu tiramisu jelly. Danish
                chocolate chupa chups ice cream tootsie roll topping chocolate.
              </p>
              <p>
                Wafer icing cotton candy oat cake. Toffee muffin jelly jelly
                beans toffee. Tart topping tiramisu tiramisu jelly.
              </p>
              <Link to="/contact" state={{ from: "beds" }} className="btn">
                contact
              </Link>
            </article>
            <StaticImage
              src="../../assets/images/bed/la-suite-bruges.jpg"
              alt="Beers on a counter top"
              className="about-img"
              placeholder="blurred"
            />
          </section>
          <section className="featured-cakes">
            <h5>Our Featured Taste-tastic!</h5>
            <BedsList beds={cakes} />
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
