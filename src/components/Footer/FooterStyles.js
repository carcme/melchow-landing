import styled from "styled-components"

export const FooterStyles = styled.footer`
  margin-left: auto;
  margin-right: auto;

  &.section {
    padding: 0 var(--borderSpacing) var(--gap) var(--borderSpacing);
    width: 90vw;
    max-width: var(--max-width);

    .container {
      display: flex;
      flex-direction: column;
      gap: var(--gap);

      &__tight {
        max-width: 1200px;
      }

      @media (min-width: 730px) {
        align-items: flex-start;
        flex-direction: row;
      }
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        a {
          transition: color 0.3s ease;
          text-decoration: none;
        }
      }
    }
  }
`

export const FooterMenuStyles = styled.div`
  @media (min-width: 730px) {
    flex-grow: 1;
    width: 33.333%;
  }

  h5 {
    color: var(--melchow_primary);
    margin-top: 0;
    display: inline-block;

    .contact_link {
      margin-bottom: 1.38rem;
      font-family: var(--fontHeading);
      font-weight: 400;
      line-height: 1.3;
      text-transform: capitalize;
      letter-spacing: var(--letterSpacing);
      color: var(--melchow_primary);
      text-decoration: none;
    }
  }
  ul {
    margin-bottom: var(--gap);

    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  li {
    margin-top: 5px;
    margin-bottom: 5px;

    a {
      color: var(--bodyColor);
      text-decoration: none;
    }

    &:hover,
    &:focus {
      a {
        color: var(--melchow_primary);
        border-bottom: 1px solid var(--melchow_primary);
        font-weight: 600;
      }
    }
  }

  &.social__menu {
    margin-bottom: var(--gap);

    ul {
      display: flex;

      @media (min-width: 730px) {
        flex-direction: row;
      }

      li {
        font-size: var(--h6);
        margin-right: 8px;

        @media (min-width: 730px) {
          margin-left: 5px;
          margin-right: 15px;
        }

        a {
          color: var(--grey-900);

          svg:hover {
            transform: scale(1.5);
            border-bottom: 1px solid var(--melchow_primary);
          }
        }

        &:hover,
        &:focus {
          a {
            color: var(--melchow_primary);
          }
        }
      }
    }
  }
`
export const DividerStyles = styled.div`
  margin: 50px auto 50px auto;
  height: 1px;
  background-color: #88888890;
  max-width: 700px;
`

export const MapStyles = styled.div`

  font-size: 13px;
  
  iframe {
    width: 100%;
    height: 400px;
    webkit-filter: invert(90%) grayscale(100%);
    filter:  invert(90%) grayscale(100%);
    border: 0;
    border-radius: 10px;
    allowfullscreen=true;
    loading="lazy";
    referrerpolicy="no-referrer-when-downgrade";
    }

  p {
    margin: 0;
    
    a {
      color: #fff;
      font-weight: 700;
      text-decoration: none;

      &:hover,
      &:focus {
        color: var(--melchow_hover);
      }
    }

    span {
      color: var(--melchow_primary);
    }
  }

`

export const CopyrightStyles = styled.div`
  font-size: 13px;
  padding: 10px;
  background-color: #2b2b2b;
  text-align: center;
  border-radius: 10px;

  p {
    text-align: center;
    max-width: 1200px;
    margin: 0;
    color: #888;
    a {
      text-decoration: none;

      &:hover {
        color: #ccc;
      }
    }
  }
`
