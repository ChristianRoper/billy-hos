import React from "react"
import Header from "../components/Header"
import Section from "../containers/Section"
import DailySpecialSection from "../components/DailySpecialSection"
import HappyHour from "../components/HappyHour"

const IndexPageTemplate = ({ pageInfo }) => {
  return (
    <>
      <Header pageInfo={pageInfo} title="home" image={pageInfo.image} />
      <Section>
        <DailySpecialSection title="Today's Special" />
      </Section>
      <Section bg={props => props.theme.yellow[200]}>
        <HappyHour />
      </Section>
    </>
  )
}

export default IndexPageTemplate
