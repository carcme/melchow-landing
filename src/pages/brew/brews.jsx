import React from "react"
import AllRecipes from "../../components/brew/AllRecipes"
import LayoutPrime from "../../components/layout"
import Layout from "../../components/brew/Layout"
import Seo from "../../components/Seo"

const Brews = () => {
  return (
    <LayoutPrime>
      <Layout>
        <Seo title="Brews" description="" />
        <main className="page">
          <AllRecipes />
        </main>
      </Layout>
    </LayoutPrime>
  )
}

export default Brews
