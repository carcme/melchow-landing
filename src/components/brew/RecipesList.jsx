import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="cakes-list">
      {recipes.map(recipe => {
        const { id, title, image, prepTime, cookTime } = recipe
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true })
        console.log(slug)
        return (
          <Link key={id} to={`/${slug}`} className="cake">
            <GatsbyImage image={pathToImage} className="cake-img" alt={title} />
            <h5>{title}</h5>
            <p>
              ABV: {prepTime} % | Cook time: {cookTime}mins{" "}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
