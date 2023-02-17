import React from "react"
import AllCakes from "../../components/bake/AllCakes"
import LayoutPrime from "../../components/layout"
import Layout from "../../components/bake/Layout"
import Seo from "../../components/Seo"

const Cakes = () => {
  return (
    <LayoutPrime>
      <Layout>
        <Seo title="Bakes | Bäckerei" description="" />
        <main className="page">
          <AllCakes />
        </main>
      </Layout>
    </LayoutPrime>
  )
}

export default Cakes
