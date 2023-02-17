import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MdKitchen } from "react-icons/md"
import { FaWifi, FaBed, FaShower, FaThumbsUp } from "react-icons/fa"
import { TiTick } from "react-icons/ti"
import { IoMdCloseCircle } from "react-icons/io"

import Layout from "../components/bed/Layout"
import LayoutPrime from "../components/layout"
import slugify from "slugify"
import Seo from "../components/Seo"
import CapitaliseLetter from "../utils/CapitaliseLetter"

const BedTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    content,
    prepTime,
    servings,
    description: { description },
    image,
  } = data.contentfulBed

  const pathToImage = getImage(image)
  const { tags, instructions, ingredients, tools } = content
  console.log("cookTime " + cookTime)
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
                    <FaBed />
                    <h5>Sleeps</h5>
                    <p>{prepTime && prepTime > 0 ? prepTime : `---`} </p>
                  </article>
                  <article>
                    <FaShower />
                    <h5>On-Suite</h5>
                    {/* <p>{servings && servings > 0 ? servings : `---`} </p> */}
                    {servings && (
                      <TiTick size={20} style={{ color: "green" }} />
                    )}
                    {servings === null && (
                      <IoMdCloseCircle size={20} style={{ color: "#B22222" }} />
                    )}
                  </article>
                  <article>
                    <MdKitchen />
                    <h5>kitchen</h5>
                    {/* <p>{cookTime && cookTime > 0 ? cookTime : `---`} </p> */}
                    {cookTime && (
                      <TiTick size={20} style={{ color: "green" }} />
                    )}
                    {cookTime === null && (
                      <IoMdCloseCircle size={20} style={{ color: "#B22222" }} />
                    )}
                  </article>
                  <article>
                    <FaWifi />
                    <h5>WiFi</h5>
                    {/* <p>{prepTime && prepTime > 0 ? prepTime : `---`} </p> */}
                    <TiTick size={20} style={{ color: "green" }} />
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
    contentfulBed(title: { eq: $title }) {
      title
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      cookTime
      servings
      image {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
  }
`

export default BedTemplate
