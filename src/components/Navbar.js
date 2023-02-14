import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../images/image.png"

const Navbar = ({ siteTitle }) => {
  const [show, setShow] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img className="logo" src={logo} alt="Melchow Landing page logo" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify size={30} />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Home
          </Link>
          <Link
            to="/wilde"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Bäckerei
          </Link>
          <Link
            to="/bett"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Bed & Breakfast
          </Link>
          <a
            href="https://melchow-brau.netlify.app"
            className="nav-link"
            target="_blank"
            rel="noreferrer"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Brauerei
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
