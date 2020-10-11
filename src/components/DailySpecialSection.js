import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { MenuItem } from "./Menu"

const DailySpecialSection = ({ title }) => {
  const d = new Date().getDay()

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

  const special = markdownRemark.frontmatter.specials[d]

  return (
    <>
      <DailySpecial special={special} title={title} />
    </>
  )
}

export const DailySpecial = ({ special, heading }) => {
  return (
    <StyledSpecialSection>
      <header>
        <h3 className="heading--secondary">{heading || special.day}</h3>

        {special.image && (
          <img alt={special.image} className="card-image" src={special.image} />
        )}

        <h3 className="heading--tertiary">
          {special.title}
          <hr />
        </h3>

        {special.description && <p>{special.description}</p>}
      </header>

      <section>
        <div className="items">
          {special.itemList.map(item => (
            <MenuItem
              name={item.name}
              price={item.price}
              description={item.description}
              addons={item.addons}
            />
          ))}
        </div>

        <div className="items">
          {special.drinks.map(item => (
            <MenuItem name={item.name} price={item.price || null} />
          ))}
        </div>

        {special.list && (
          <div className="list">
            <h6 className="heading--tertiary">
              {special.list.title}
              <hr />
            </h6>

            {special.list.listItems && (
              <ul>
                {special.list.listItems.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
            )}

            {special.list.items &&
              special.list.items.map(item => <li>{item}</li>)}
          </div>
        )}

        {special.notes ? (
          <div className="card-notes">
            {special.notes.map(note => (
              <p>{note.text}</p>
            ))}
          </div>
        ) : null}
      </section>
    </StyledSpecialSection>
  )
}

const StyledSpecialSection = styled.article`
  margin: 0 auto;
  max-width: 700px;
  header {
    padding: 0;
    z-index: 9999;
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      box-shadow: ${props => props.theme.bs};
      margin-bottom: 3rem;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    .items {
      :first-of-type {
        margin-bottom: 2rem;
      }
    }

    .card-notes {
      margin-top: 3rem;
      font-size: 0.8em;
      color: ${props => props.theme.grey[900]};
    }
  }

  .list {
    margin: 0 auto;
    margin-bottom: 4rem;
    background: ${props => props.theme.yellow[50]};
    h6 {
      color: ${props => props.theme.primary};
      font-size: 1.5em;
      font-weight: bold;
      padding-bottom: 1rem;
    }

    ul {
      color: ${props => props.theme.grey[700]};
      font-size: 1em;
      font-weight: bold;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;

      li {
        margin-bottom: 1rem;
        margin-right: 1rem;
        padding: 0.5rem 1rem;
        color: ${props => props.theme.grey[50]};
        background-color: ${props => props.theme.primary};
        transform: skew(-10deg);
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0 2rem;
    header {
      padding: 0;
    }
    ul {
      justify-content: flex-start;
    }
  }

`

export default DailySpecialSection
