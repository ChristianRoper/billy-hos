import React from "react"
import styled from "styled-components"

import SpecialBoard from "../components/SpecialBoard"
import Section from "../containers/Section"
import Header from "../components/Header"
import MenuNav from "../components/MenuNav"

const MenuPageTemplate = ({ pageInfo }) => {
  return (
    <>
      <Header pageInfo={pageInfo} />

      <MenuPageStyles>
        <MenuNav />
        <Section bgPattern bg={props => props.theme.yellow[50]}>
          <SpecialBoard />
        </Section>
      </MenuPageStyles>
    </>
  )
}

const MenuPageStyles = styled.div`
  width: 100%;

`

export default MenuPageTemplate
