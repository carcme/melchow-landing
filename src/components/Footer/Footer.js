import * as React from "react"
import { Link } from "gatsby"
import { menuItems } from "../../data/links"
import {
  FooterStyles,
  DividerStyles,
  FooterMenuStyles,
  MapStyles,
  CopyrightStyles,
} from "./FooterStyles"
// import useFeaturedProduct from "../../hooks/use-featured-product"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
  FaPhone as Phone,
  FaEnvelope as Email,
} from "react-icons/fa"

const Footer = () => {
  const siteMeta = UseSiteMetadata()
  return (
    <FooterStyles style={{ marginBottom: 0 }} className="section">
      <DividerStyles />
      <div className="container container__tight">
        <FooterMenuStyles className="">
          <h5>Links</h5>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} activeClassName="menu__item--active">
                    {item.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </FooterMenuStyles>

        <FooterMenuStyles className="">
          <h5>About Us</h5>
          <ul>
            <li>
              <Link to="/bake/about">Bäckerei</Link>
            </li>
            <li>
              <Link to="/bed/about">Bed & Breakfast</Link>
            </li>
            <li>
              <Link to="/brew/about">Brauerei</Link>
            </li>
          </ul>
        </FooterMenuStyles>

        {siteMeta.telephoneNumber ||
        siteMeta.emailContact ||
        siteMeta.twitterUsername ||
        siteMeta.facebookUsername ||
        siteMeta.instagramUsername ||
        siteMeta.linkedinUsername ? (
          <FooterMenuStyles className="footer__menu social__menu">
            <h5>
              <Link to="/contact" className="contact_link">
                Contact
              </Link>
            </h5>

            <ul>
              {siteMeta.telephoneNumber && (
                <li>
                  <a
                    href={`tel:${siteMeta.telephoneNumber}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Phone />
                  </a>
                </li>
              )}
              {siteMeta.emailContact && (
                <li>
                  <Link to="/contact">
                    <Email />
                  </Link>
                  {/* <a
                    href={`mailto:${siteMeta.emailContact}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Email />
                  </a> */}
                </li>
              )}
              {siteMeta.twitterUsername && (
                <li>
                  <a
                    href={`https://www.twitter.com/${siteMeta.twitterUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Twitter />
                  </a>
                </li>
              )}
              {siteMeta.facebookUsername && (
                <li>
                  <a
                    href={`https://www.facebook.com/${siteMeta.facebookUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Facebook />
                  </a>
                </li>
              )}
              {siteMeta.instagramUsername && (
                <li>
                  <a
                    href={`https://www.instagram.com/${siteMeta.instagramUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Instagram />
                  </a>
                </li>
              )}
              {siteMeta.linkedinUsername && (
                <li>
                  <a
                    href={`https://www.linkedin.com/in/${siteMeta.linkedinUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Linkedin />
                  </a>
                </li>
              )}
            </ul>
          </FooterMenuStyles>
        ) : (
          ""
        )}
      </div>
      <DividerStyles />
      <MapStyles>
        <iframe
          title="locationMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2413.6230115401427!2d13.70231495436732!3d52.7750730775902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a9b9d9f59a6faf%3A0xa7807b9ff7220481!2sAlte%20Dorfstra%C3%9Fe%203%2C%2016230%20Melchow!5e0!3m2!1sen!2sde!4v1676634574649!5m2!1sen!2sde"
        ></iframe>
      </MapStyles>
      <br />
      <CopyrightStyles>
        <p>
          © {new Date().getFullYear()}
          <a href={siteMeta.developerUrl}>
            {` `} {siteMeta.developerName}
          </a>
          . All rights reserved.
        </p>
      </CopyrightStyles>
    </FooterStyles>
  )
}

export default Footer
