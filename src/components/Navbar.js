import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"

import Logo from "./Logo"

const Navbar = ({ path, contact }) => {
  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 300,
    config: config.wobbly,
  })

  return (
    <>
      <MainNav aria-label="Main">
        <MainNavList style={linkAnimation}>
          <li className="main-nav__logo">
            <Link to="/">
              <Logo />
            </Link>
          </li>

          <div className="main-nav__pages">
            <li className="main-nav__item">
              <MainNavLink to="/menu">Menu</MainNavLink>
            </li>
            <li className="main-nav__item">
              <MainNavLink to="/about">About</MainNavLink>
            </li>
            <li className="main-nav__item">
              <MainNavLink to="/contact">Contact</MainNavLink>
            </li>
          </div>
        </MainNavList>
        <Banner>
          <div>
            <p>Call for Carry Out!</p>
            <p>
              <a href="tel:+12626919237">{contact.phone}</a>
            </p>
          </div>
        </Banner>
      </MainNav>
    </>
  )
}

export default Navbar

const MainNav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background: ${props => props.theme.grey[900]};
  box-shadow: ${props => props.theme.bs};
  font-size: 1.5rem;
  z-index: 998;
`

const MainNavList = styled(animated.ul)`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 2rem;
  list-style-type: none;
  max-width: ${props => props.theme.maxWidth};

  .main-nav__pages {
    display: flex;
    justify-content: flex-end;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: row;
  }
`

const MainNavLink = styled(Link)`
  color: ${props => props.theme.grey[50]};
  text-transform: uppercase;
  font-weight: 400;
  border-bottom: 2px solid transparent;
  margin-left: 1rem;
  cursor: pointer;
  text-align: center;

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    margin-left: 3rem;
  }
`

const Banner = styled.div`
  background: ${props => props.theme.red[600]};
  color: ${props => props.theme.grey[50]};
  padding: 1rem 2rem;
  font-weight: bold;
  position: relative;
  a {
    color: ${props => props.theme.grey[50]};
    text-decoration: underline;
  }
  div {
    padding: 0 2rem;

    max-width: ${props => props.theme.maxWidth};
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
`
