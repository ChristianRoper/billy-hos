import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import { PreviewLayout } from "../components/Layout"
import Header from "../components/Header"
import Section from "../containers/Section"
import Menu, { MenuItem, MenuNotes } from "../components/Menu"
import MenuNav from "../components/MenuNav"

const MenuTemplate = ({ data, location }) => {
  const url = location.pathname ? location.pathname : ""
  const { frontmatter } = data.markdownRemark

  const pageInfo = {
    title: frontmatter.title,
    tagline: frontmatter.tagline,
    image: frontmatter.image,
  }

  return (
    <>
      <SEO url={url} title={pageInfo.title} />
      <Header pageInfo={pageInfo} />
      <MenuNav />
      <Section bgPattern>
        {frontmatter.itemList && (
          <Menu>
            {frontmatter.itemList.map(item => (
              <MenuItem
                key={item.name}
                name={item.name}
                price={item.price}
                description={item.description}
                addons={item.addons}
                image={item.image}
              />
            ))}

            <MenuNotes />
          </Menu>
        )}

        {frontmatter.sections && (
          <Menu>
            {frontmatter.sections.map(section => (
              <section className="drink-list">
                <header>
                  <h2 className="heading--tertiary">
                    {section.title}
                    <hr />
                  </h2>
                </header>
                {section.items.map(item => (
                  <li>{item}</li>
                ))}
              </section>
            ))}
          </Menu>
        )}

        {frontmatter.items && (
          <Menu>
            <section className="drink-list">
              {frontmatter.items.map(item => (
                <MenuItem name={item.name} description={item.description} />
              ))}
            </section>
          </Menu>
        )}
      </Section>
    </>
  )
}

export default MenuTemplate

export const FoodMenuTemplate = ({ pageInfo, itemList }) => {
  return (
    <PreviewLayout>
      <Header pageInfo={pageInfo} />
      <Menu>
        {itemList.map(item => (
          <MenuItem
            key={item.name}
            name={item.name}
            price={item.price}
            description={item.description}
            addons={item.addons}
            image={item.image}
          />
        ))}
      </Menu>
    </PreviewLayout>
  )
}

export const DrinkMenuTemplate = ({ pageInfo, sections }) => {
  return (
    <PreviewLayout>
      <Header pageInfo={pageInfo} />
      <Menu>
        {sections.map(section => (
          <section className="drink-list">
            <h3>{section.title}</h3>
            {section.items.map(item => (
              <li>{item}</li>
            ))}
          </section>
        ))}
      </Menu>
    </PreviewLayout>
  )
}

export const SpecialtyDrinksTemplate = ({ pageInfo, items }) => {
  return (
    <PreviewLayout>
      <Header pageInfo={pageInfo} />
      <Menu>
        <section className="drink-list">
          <h3 className="heading--tertiary">
            Specialty Drinks
            <hr />
          </h3>
          {items.map(item => (
            <MenuItem name={item.name} description={item.description} />
          ))}
        </section>
      </Menu>
    </PreviewLayout>
  )
}

export const pageQuery = graphql`
  query MenuSectionByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        image
        # food
        itemList {
          name
          price
          description
          image
          addons {
            name
            price
          }
        }

        # drinks
        items {
          name
          description
        }
        sections {
          items
          title
        }
      }
    }
  }
`
