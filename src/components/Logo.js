import React from "react"
import styled from "styled-components"

const Logo = ({ header }) => (
  <StyledLogo header={header}>
    BILLY HO'S
    <span className="logo-sub">
      <span>&bull;</span> Pub & Eatery <span>&bull;</span>
    </span>
  </StyledLogo>
)

const StyledLogo = styled.div`
  text-align: center;
  font-weight: bold;
  display: block;
  color: ${props => props.theme.primary};
  line-height: 1;
  font-size: ${props => (props.header ? "2.5em" : "1.4em")};

  .logo-sub {
    display: block;
    font-family: "Merriweather", serif;
    font-weight: 300;
    color: ${props => props.theme.grey[50]};
    font-size: 0.68em;
  }
`

export default Logo
