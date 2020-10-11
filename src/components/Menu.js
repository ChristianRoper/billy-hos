import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import formatPrice from "../lib/format-price"

const Menu = styled.article`
  background: ${props => props.theme.yellow[50]};
  box-shadow: ${props => props.theme.bs};
  max-width: 700px;
  margin: 0 auto;
  padding: 4rem 2rem;

  .drink-list {
    padding: 2rem;
    max-width: 400px;
    margin: 0 auto;
    header {
      margin-bottom: 4rem;
      h1 {
        color: ${props => props.theme.black};
        font-size: 1.5em;
      }
      @media (min-width: ${props => props.theme.breakpoints.xs}) {
      }
    }
  }
`

export const MenuItem = ({ name, price, description, addons }) => {
  return (
    <StyledMenuItem>
      <h5>
        {name}
        <span>{price && formatPrice(price)}</span>
      </h5>

      {description && <p>{description}</p>}

      {addons &&
        addons.map(addon => (
          <div>
            {addon.name} <span>+ {formatPrice(addon.price)}</span>
          </div>
        ))}
    </StyledMenuItem>
  )
}

const StyledMenuItem = styled.div`
  min-width: 100%;
  margin-bottom: 2rem;

  h5 {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 1.3em;
    color: ${props => props.theme.grey[800]};
    width: 100%;
    line-height: 1em;
    margin-bottom: 0.5rem;

    > span {
      width: 25%;
      text-align: right;
    }
  }

  div {
    font-size: 1em;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.grey[800]};
  }

  p {
    font-size: 1em;
    line-height: 1.5em;
    max-width: 500px;
    color: ${props => props.theme.grey[600]};
  }
`

export const MenuNotes = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { templateKey: { eq: "menu-page" } }) {
          frontmatter {
            notes {
              text
              warning
            }
          }
        }
      }
    `
  )

  const notes = markdownRemark.frontmatter.notes

  return (
    <StyledNotes>
    {notes.map(note =>
      !note.warning ? (
        <p key={note.index} className="note">
          * {note.text}
        </p>
      ) : (
        <p key={note.index} className="note__warning">
          <span>Warning: </span>
          {note.text}
        </p>
      )
    )}
  </StyledNotes>
  )
}

const StyledNotes = styled.footer`
  padding: 2rem;
  margin-top: 8rem;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.yellow[50]};
  background: ${props => props.theme.red[600]};
  width: 100%;

  .note {
    margin-bottom: 1rem;
    order: 1;
    line-height: 1em;
    width: 100%;
    &__warning {
      order: 2;
      border-radius: 0.5rem;
      line-height: 1em;
      margin-top: 2rem;
      span {
        color: ${props => props.theme.yellow[50]};
        font-weight: 600;
      }
    }
  }
`

export default Menu
