import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { MenuItem } from "./Menu"

const HappyHour = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      {
        markdownRemark(frontmatter: { title: { eq: "Happy Hour" } }) {
          frontmatter {
            title
            hours {
              begin
              end
              days
              pullTabs
            }
            specialList {
              name
              price
            }
          }
        }
      }
    `
  )
  const { title, hours, specialList } = markdownRemark.frontmatter

  return (
    <StyledHappyHour>
      <header>
        <h3 className="heading--secondary">{title}</h3>
        <div className="heading--tertiary">
          <p>
            {hours.begin} - {hours.end}
          </p>
          <p>{hours.pullTabs}</p>
          <hr />
        </div>
      </header>
      <section>
        {specialList.map(special => (
          <MenuItem name={special.name} price={special.price} />
        ))}
      </section>
    </StyledHappyHour>
  )
}

const StyledHappyHour = styled.article`
  margin: 0 auto;
  max-width: 60rem;
  width: 100%;
  color: ${props => props.theme.black};

  p {
    color: ${props => props.theme.black};
  }

  header {
    color: ${props => props.theme.black};
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      color: ${props => props.theme.black};
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0 2rem;
  }
`

export default HappyHour
