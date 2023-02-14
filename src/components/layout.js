import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <Navbar title={data.title} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
