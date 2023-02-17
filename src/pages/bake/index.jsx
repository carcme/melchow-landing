import * as React from "react"
import Layout from "../../components/bake/Layout"
import LayoutPrime from "../../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import AllCakes from "../../components/bake/AllCakes"
import Seo from "../../components/Seo"

export default function Home() {
  return (
    <LayoutPrime>
      <Layout>
        <Seo title="Bäckerei" description="" />
        <main className="page">
          <header className="hero">
            <StaticImage
              src="../../assets/images/bakery/tart.jpg"
              alt="hero image"
              className="hero-img"
              placeholder="tracedSVG"
              layout="fullWidth"
            />
            <div className="hero-container">
              <div className="hero-text">
                <h1>3B Backery</h1>
                <h4>Our Bakery, your belly</h4>
              </div>
            </div>
          </header>
          <AllCakes />
        </main>
      </Layout>
    </LayoutPrime>
  )
}
