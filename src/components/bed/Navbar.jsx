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
            to="/bed/bed"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Home
          </Link>
          <Link
            to="/bed/beds"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Beds
          </Link>
          <Link
            to="/bed/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Tags
          </Link>
          <Link
            to="/bed/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <Link
            to="/bed/gallery"
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
