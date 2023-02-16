import React from "react"
import AllBeds from "../../components/bed/AllBeds"
import LayoutPrime from "../../components/layout"
import Layout from "../../components/bed/Layout"
import Seo from "../../components/Seo"

const Beds = () => {
  return (
    <LayoutPrime>
      <Layout>
        <Seo title="Beds" description="" />
        <main className="page">
          <AllBeds />
        </main>
      </Layout>
    </LayoutPrime>
  )
}

export default Beds
