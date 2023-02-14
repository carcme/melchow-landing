import React, { Component } from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://hammer3.de" className="footer-text">
        © {new Date().getFullYear()}
        {` `} Hammer3. All rights reserved.
      </a>
    </footer>
  )
}
export default Footer
