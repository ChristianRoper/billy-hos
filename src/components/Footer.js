import React from "react"
import Logo from "./Logo"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = ({ contact }) => (
  <StyledFooter>
    <div className="footer-inner">
      <header>
        <div>
          <Logo />
          <address>
            {contact.address.street} <span>&bull;</span> {contact.address.city},{" "}
            {contact.address.state}
            <a href={`tel:+${contact.phone}`}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </address>
        </div>

        <div className="hours">
          <h6>
            <p>Opening Hours</p>
          </h6>
          <div>
            <p>Bar</p>
            {contact.hours.bar.map(x => (
              <div>
                {x.days}: {x.hours}
              </div>
            ))}
          </div>
          <div>
            <p>Grill</p>
            {contact.hours.grill.map(x => (
              <div>
                {x.days}: {x.hours}
              </div>
            ))}
          </div>
        </div>
      </header>

      <nav>
        <ul>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="credits">
        Billy Ho's Pub & Eatery © {new Date().getFullYear()}
        <div>
          Website created by Christian Roper
          {/* <a href="https://christianroper.dev">Christian Roper</a> */}
        </div>
      </div>
    </div>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  padding: 4rem 2rem 10rem 2rem;
  background: ${props => props.theme.grey[900]};
  color: ${props => props.theme.grey[200]};

  .footer-inner {
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;

    header {
      max-width: 1200px;
      margin: 0 auto;
      margin-bottom: 3rem;
      text-align: left;

      div {
        width: 100%;

        address {
          margin: 3rem 0;
          font-weight: 600;
          color: ${props => props.theme.grey[200]};

          a {
            color: ${props => props.theme.grey[200]};
            text-decoration: underline ${props => props.theme.primary};
          }
        }
      }

      @media (min-width: ${props => props.theme.breakpoints.sm}) {
        display: flex;
        justify-content: space-between;
        text-align: center;
      }
    }

    nav {
      ul {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
        li {
          font-weight: 600;
        }
      }

      @media (min-width: ${props => props.theme.breakpoints.sm}) {
        ul {
          margin: 0 auto;
          a {
            padding: 0.5rem 1rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .hours {
    width: 100%;

    h6 {
      font-weight: 700;
      font-size: 1.3em;
    }

    p {
      font-weight: 700;
    }

    display: flex;
    flex-direction: column;
    margin: 0 auto;

    div {
    }
  }

  .credits {
    text-align: center;
    margin-top: 3rem;
  }
`

export default Footer
