import React from "react"

const Footer = () => {
  return (
    <footer className="footer-landing">
      <a href="https://hammer3.de" className="footer-text-landing">
        © {new Date().getFullYear()}
        {` `} Hammer3. All rights reserved.
      </a>
    </footer>
  )
}
export default Footer
