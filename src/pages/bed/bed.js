import React from "react"
import LayoutPrime from "../../components/layout"
import Layout from "../../components/bed/Layout"
import Seo from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import AllBeds from "../../components/bed/AllBeds"

const Bed = () => {
  return (
    <LayoutPrime>
      <Layout>
        <Seo title="B&B" description="Homepage for Melchow Bed and Breakfast" />
        <main className="page">
          <header className="hero">
            <StaticImage
              src="../../assets/images/bed/la-suite-bruges.jpg"
              alt="hero image"
              className="hero-img"
              placeholder="tracedSVG"
              layout="fullWidth"
            />
            <div className="hero-container">
              <div className="hero-text">
                <h1>3B Bed & Breakfast</h1>
                <h4>Our Beds, your Adventure</h4>
              </div>
            </div>
          </header>
          <AllBeds />
        </main>
      </Layout>
    </LayoutPrime>
  )
}
export default Bed
