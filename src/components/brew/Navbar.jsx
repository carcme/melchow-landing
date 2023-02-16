import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav className="navBar">
      <div className="nav-center">
        <div className="nav-header">
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>

        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/brew/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Home
          </Link>
          <Link
            to="/brew/brews"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Brews
          </Link>
          <Link
            to="/brew/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Tags
          </Link>
          <Link
            to="/brew/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <Link
            to="/brew/gallery"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
