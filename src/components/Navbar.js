import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
// import logo from "../images/logo.png"

const Navbar = ({ siteTitle }) => {
  const [show, setShow] = useState(false)

  return (
    <nav className="navbar-landing">
      <div className="nav-center-landing">
        <div className="nav-header-landing">
          <Link to="/">
            <div className="home-logo-landing">Melchow 3B </div>
            {/* <img className="logo" src={logo} alt="Melchow Landing page logo" /> */}
          </Link>
          <button className="nav-btn-landing" onClick={() => setShow(!show)}>
            <FiAlignJustify size={25} />
          </button>
        </div>
        <div
          className={
            show ? "nav-links-landing show-links-landing" : "nav-links-landing"
          }
        >
          <Link
            to="/"
            className="nav-link-landing"
            activeClassName="active-link-landing"
            onClick={() => setShow(false)}
          >
            Home
          </Link>
          <Link
            to="/bake/"
            className="nav-link-landing"
            activeClassName="active-link-landing"
            onClick={() => setShow(false)}
          >
            Bäckerei
          </Link>
          <Link
            to="/bed/bed"
            className="nav-link-landing"
            activeClassName="active-link-landing"
            onClick={() => setShow(false)}
          >
            Bed & Breakfast
          </Link>
          <Link
            to="/brew/"
            className="nav-link-landing"
            activeClassName="active-link-landing"
            onClick={() => setShow(false)}
          >
            Brauerei
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
