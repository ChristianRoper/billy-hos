import React from "react"
import styled from "styled-components"

const SpecialHeader = ({ image, children }) =>
  image != null ? (
    <ImageHeader image={image}>
      <ImageFilter />
      {children}
    </ImageHeader>
  ) : (
    <StyledHeader>{children}</StyledHeader>
  )


const StyledHeader = styled.header`
position: relative;
height: 100px;
z-index: 40;
background-color: ${props => props.theme.red[600]};
`

const ImageHeader = styled(StyledHeader)`
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-image: ${props => props.image && `url(${props.image})`};
`

const ImageFilter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.grey[900]};
  opacity: 0.5;
`

export default SpecialHeader
