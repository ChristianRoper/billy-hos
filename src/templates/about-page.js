import React from "react"
import styled from "styled-components"

import Header from "../components/Header"
import Section from "../containers/Section"

const StyledAbout = styled.article`
  max-width: 700px;
  margin: 0 auto;
`

const AboutPageTemplate = ({ sections, pageInfo }) => (
  <>
    <Header pageInfo={pageInfo} />
    <Section>
      {sections.map(section => (
        <StyledAbout key={section.sectionTitle}>
          <h2 className="heading--secondary left">{section.sectionTitle}</h2>
          <p>{section.body}</p>
        </StyledAbout>
      ))}
    </Section>
  </>
)

export default AboutPageTemplate
