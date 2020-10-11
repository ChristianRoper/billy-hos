import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Special from "./Special"

const SpecialBoard = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { templateKey: { eq: "_specials" } }) {
        frontmatter {
          specials {
            day
            drinks {
              name
            }
            image
            itemList {
              description
              name
              price
            }
            list {
              listItems
              title
            }
            notes {
              text
            }
            title
          }
        }
      }
    }
  `)

  return (
    <StyledSpecialBoard>
      <header>
        <h2 className="heading--primary center">
          Daily Specials
          <hr />
        </h2>
      </header>
      <SpecialBoardGrid>
        {markdownRemark.frontmatter.specials.map(special => (
          <Special special={special} />
        ))}
      </SpecialBoardGrid>
    </StyledSpecialBoard>
  )
}

 const StyledSpecialBoard = styled.article`
  box-shadow: ${props => props.theme.bs};
  background-color: ${props => props.theme.yellow[50]};
  padding-top: 2rem;
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    border: 1rem solid ${props => props.theme.primary};
    margin: 2rem;
  }
`
 const SpecialBoardGrid = styled.section`
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.25rem;
    padding: 2rem;
    section:nth-child(8) {
      grid-area: 1 / span 2;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);

    section:nth-child(8) {
      grid-area: 1 / span 3;
    }
  }
`

export default SpecialBoard
