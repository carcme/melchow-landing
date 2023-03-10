import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const BedsList = ({ beds = [] }) => {
  return (
    <div className="cakes-list">
      {beds.map(bed => {
        const { id, title, image, prepTime, cookTime } = bed
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true })
        console.log(slug)
        return (
          <Link key={id} to={`/${slug}`} className="cake">
            <GatsbyImage image={pathToImage} className="cake-img" alt={title} />
            <h5>{title}</h5>
            <p>
              {prepTime && prepTime > 0 ? `Sleeps: ${prepTime}` : ``}
              {/* Sleeps: {prepTime} | Cook time: {cookTime}mins{" "} */}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default BedsList
