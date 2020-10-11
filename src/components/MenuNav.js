import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

import { createSlug } from "../lib/slugify"

import Icon from "./Icon"

const MenuNav = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "menu-items-page" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                image
                # drinks
                items {
                  name
                  description
                }
                sections {
                  items
                  title
                }
                # food
                itemList {
                  name
                  price
                  description
                  image
                  addons {
                    name
                    price
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const menus = allMarkdownRemark.edges

  const [toggle, setToggle] = React.useState(false)

  const btnSlide = useSpring({
    transform: toggle ? `translateX(1000px)` : `translateX(-65px)`,
  })

  const drawerSlide = useSpring({
    transform: toggle ? `translateX(0vw)` : `translateX(100vw)`,
  })

  return (
    <StyledMenuNav>
      <Drawer style={drawerSlide}>
        <MenuOpenBtn
          aria-label="Menu"
          style={btnSlide}
          onClick={() => setToggle(!toggle)}
          red
        >
          <Icon name="food" />
        </MenuOpenBtn>
        <MenuCloseBtn onClick={() => setToggle(!toggle)}>
          <Icon name="close"></Icon>
        </MenuCloseBtn>
        <MenuNavContainer>
          <SectionLinks>
            <p>Food</p>
            {menus
              .filter(type => type.node.frontmatter.itemList)
              .map(menu => (
                <Link
                  className="menu-nav--link"
                  to={"/menu/" + createSlug(menu.node.frontmatter.title)}
                >
                  {menu.node.frontmatter.title}
                </Link>
              ))}
          </SectionLinks>
          <SectionLinks>
            <p>Drinks</p>
            {menus
              .filter(
                type =>
                  type.node.frontmatter.items || type.node.frontmatter.sections
              )
              .map(menu => (
                <Link
                  className="menu-nav--link"
                  to={"/menu/" + createSlug(menu.node.frontmatter.title)}
                >
                  {menu.node.frontmatter.title}
                </Link>
              ))}
          </SectionLinks>
        </MenuNavContainer>
      </Drawer>
      <SideBar>
        <MenuNavContainer>
          <SectionLinks>
            <p>Food</p>
            {menus
              .filter(type => type.node.frontmatter.itemList)
              .map(menu => (
                <Link
                  className="menu-nav--link"
                  to={"/menu/" + createSlug(menu.node.frontmatter.title)}
                >
                  {menu.node.frontmatter.title}
                </Link>
              ))}
          </SectionLinks>
          <SectionLinks>
            <p>Drinks</p>
            {menus
              .filter(
                type =>
                  type.node.frontmatter.items || type.node.frontmatter.sections
              )
              .map(menu => (
                <Link
                  className="menu-nav--link"
                  to={"/menu/" + createSlug(menu.node.frontmatter.title)}
                >
                  {menu.node.frontmatter.title}
                </Link>
              ))}
          </SectionLinks>
        </MenuNavContainer>
      </SideBar>
    </StyledMenuNav>
  )
}

export default MenuNav

// MenuNav Container

const StyledMenuNav = styled.div`
  z-index: 999;
  box-shadow: ${props => props.theme.bs};

  @media (min-width: ${props => props.theme.maxWidth}) {
    box-shadow: none;
    z-index: 100;
  }
`

// Desktop MenuNav

const SideBar = styled.div`
  display: none;
  background: ${props => props.theme.red[600]};
  box-shadow: ${props => props.theme.bs};
  padding: 2rem;
  @media (min-width: ${props => props.theme.maxWidth}) {
    display: block;
    width: 100%;
  }
`

// MenuNav Link Container

const MenuNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: ${props => props.theme.red[600]};
  justify-content: space-between;
  width: 100%;
  @media (min-height: 960px) {
    max-width: 500px;
    margin: 0 auto;
    position: sticky;
    top: 11rem;
  }
`
const SectionLinks = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.grey[50]};

  p {
    font-size: 2rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid ${props => props.theme.grey[50]};
  }
`

// Mobile Nav Menu

const MenuOpenBtn = styled(animated.button)`
  z-index: 998;
  position: absolute;
  left: 0;
  bottom: 2rem;
  border: none;
  width: 65px;
  height: 65px;
  font-size: 1.5em;
  cursor: pointer;
  box-shadow: ${props => props.theme.bs};
  border-radius: 0.5rem 0 0 0.5rem;
  background: ${props => props.theme.red[600]};
  flex: 1;
  svg {
    fill: ${props => props.theme.grey[50]};
    width: 40px;
    height: 40px;
  }
`

const Drawer = styled(animated.div)`
  background: ${props => props.theme.red[600]};
  z-index: 999;
  position: fixed;
  bottom: 0;
  min-width: 100vw;
  padding: 2rem;
  display: flex;
  justify-content: center;

  @media (min-width: 960px) {
    display: none;
  }
`

const MenuCloseBtn = styled(MenuOpenBtn)`
  position: absolute;
  left: calc(100vw - 65px);
  top: -65px;
  right: 0;
  box-shadow: none;
  border-radius: 0.5rem 0 0 0;
`
