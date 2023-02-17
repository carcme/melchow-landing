import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import LayoutPrime from "../../components/layout"
import Layout from "../../components/brew/Layout"
import AllRecipes from "../../components/brew/AllRecipes"
import Seo from "../../components/Seo"

export default function Home() {
  return (
    <LayoutPrime>
      <Layout>
        <Seo title="Brauerei" description="" />
        <main className="page">
          <header className="hero">
            <StaticImage
              src="../../assets/images/brewery/melchow-brau-main.jpg"
              alt="hero image"
              className="hero-img"
              placeholder="tracedSVG"
              layout="fullWidth"
            />
            <div className="hero-container">
              <div className="hero-text">
                <h1>Great Beer</h1>
                <h4>Our Brewery, your belly</h4>
              </div>
            </div>
          </header>
          <AllRecipes />
        </main>
      </Layout>
    </LayoutPrime>
  )
}
