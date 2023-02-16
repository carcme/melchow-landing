import React from "react"
import Navbar from "./Navbar"
import "../../assets/css/main.css"

const Layout = ({ children, location }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
