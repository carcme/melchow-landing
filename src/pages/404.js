import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="divider"></div>
    <h1 className="title">Yeah, that's not right</h1>
    <div className="text">
      This is a little embrassing... you found the 404 page
    </div>
    <div className="divider"></div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
