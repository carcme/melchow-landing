import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPercent } from "react-icons/bs"
import { FaEuroSign } from "react-icons/fa"
import { AiOutlinePieChart } from "react-icons/ai"

import Layout from "../components/bake/Layout"
import LayoutPrime from "../components/layout"
import slugify from "slugify"
import Seo from "../components/Seo"
import CapitaliseLetter from "../utils/CapitaliseLetter"

const BakeryTemplate = ({ data }) => {
  console.log(data)
  const {
    title,
    cookTime,
    content,
    prepTime,
    servings,
    description: { description },
    image,
  } = data.contentfulBakery

  console.log("servings:" + servings)
  const pathToImage = getImage(image)
  const { tags, instructions, ingredients, tools } = content

  return (
    <LayoutPrime>
      <Layout>
        <Seo title={CapitaliseLetter(title)} description={description} />
        <main className="page">
          <div className="cake-page">
            {/* hero */}
            <section className="cake-hero">
              <GatsbyImage
                image={pathToImage}
                alt={title}
                className="about-img"
              />
              <article className="cake-info">
                <h2>{title}</h2>
                <p>{description}</p>
                {/* icons */}
                <div className="cake-icons">
                  <article>
                    <FaEuroSign />
                    <h5>ABV</h5>
                    <p>{prepTime && prepTime > 0 ? prepTime + `` : `---`} </p>
                  </article>
                  <article>
                    <AiOutlinePieChart />
                    <h5>serving</h5>
                    <p>{servings && servings > 0 ? servings : `---`} </p>
                  </article>
                  <article>
                    <BsClockHistory />
                    <h5>cook time</h5>
                    <p>
                      {cookTime && cookTime > 0 ? cookTime + `mins.` : `---`}{" "}
                    </p>
                  </article>
                  <article>
                    <BsClock />
                    <h5>prep time</h5>
                    <p>
                      {prepTime && prepTime > 0 ? prepTime + ` mins.` : `---`}{" "}
                    </p>
                  </article>
                </div>
                {/* tags */}
                <p className="cake-tags">
                  Tags :
                  {tags.map((tag, index) => {
                    const slug = slugify(tag, { lower: true })

                    return (
                      <Link to={`/tags/${slug}`} key={index}>
                        {tag}
                      </Link>
                    )
                  })}
                </p>
              </article>
            </section>
            {/* rest of the content */}
            <section className="cake-content">
              <article>
                <h4>instructions</h4>
                {instructions.map((item, index) => {
                  return (
                    <div key={index} className="single-instruction">
                      <header>
                        <p>step {index + 1}</p>
                        <div></div>
                      </header>
                      <p>{item}</p>
                    </div>
                  )
                })}
              </article>
              <article className="second-column">
                <div>
                  <h4>ingredients</h4>
                  {ingredients.map((item, index) => {
                    return (
                      <p key={index} className="single-ingredient">
                        {item}
                      </p>
                    )
                  })}
                </div>
                <div>
                  <h4>tools</h4>
                  {tools.map((item, index) => {
                    return (
                      <p key={index} className="single-tool">
                        {item}
                      </p>
                    )
                  })}
                </div>
              </article>
            </section>
          </div>
        </main>
      </Layout>
    </LayoutPrime>
  )
}

export const query = graphql`
  query ($title: String) {
    contentfulBakery(title: { eq: $title }) {
      title
      cookTime
      prepTime
      servings
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      image {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
  }
`

export default BakeryTemplate
