import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404" description="" />
    <main className="error-page">
      <div className="divider"></div>
      <h1 className="title">404 Not Found</h1>
      <div className="text">Well, this is a little embrassing...</div>
      <div className="divider"></div>
    </main>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
