import React from "react"
import Navbar from "./Navbar"
import "../../assets/css/main.css"

const SubLayout = ({ children, location }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default SubLayout
