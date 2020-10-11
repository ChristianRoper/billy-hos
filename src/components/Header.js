import React from "react"
import styled from "styled-components"

import Logo from "./Logo"

const Header = ({ title, pageInfo }) => {
  return (
    <StyledHeader>
      <HeaderImage image={pageInfo.image}>
        <div image={pageInfo.image} className="header-text">
          <h2>
            <Logo header={true} />
          </h2>
          <hr />
          {title !== "home" && (
            <h1 className="heading--primary center">{pageInfo.title}</h1>
          )}
          {pageInfo.tagline && <p className="tagline">{pageInfo.tagline}</p>}
        </div>
        {pageInfo.image && <div className="image-filter"></div>}
      </HeaderImage>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: relative;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    padding: 0;
  }
`

const HeaderImage = styled.div`
  position: relative;
  background-image: ${props => (props.image ? `url(${props.image})` : null)};
  background: ${props => (props.image ? null : props.theme.grey[50])};
  width: 100%;
  height: 60vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 30;
  margin: 0;
  padding: 0;
  color: white;
  box-sizing: border-box;

  .image-filter {
    position: absolute;
    opacity: 0.5;
    height: 100%;
    width: 100%;
    background-color: black;
    top: 0;
  }

  .header-text {
    z-index: 10;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
    width: 100%;
    color: ${props =>
      props.image ? props.theme.yellow[50] : props.theme.primary};
    hr {
      width: 10rem;
      margin: 2rem auto;
      border: 2px solid ${props => props.theme.primary};
    }
  }

  @media (max-height: ${props => props.theme.breakpoints.sm}) {
    height: 65vh;
  }
`

export default Header
