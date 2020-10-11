import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "../components/Header"
import Section from "../containers/Section"
import Hours from "../components/Hours"

const ContactPageTemplate = ({ pageInfo }) => {
  const contact = useStaticQuery(graphql`
    {
      markdownRemark(fields: { slug: { eq: "/contact/contact-info/" } }) {
        frontmatter {
          address {
            city
            state
            street
            zip
          }
          hours {
            bar {
              days
              hours
            }
            grill {
              days
              hours
            }
          }
          phone
          email
        }
      }
    }
  `)

  const { address, phone, email, hours } = contact.markdownRemark.frontmatter
  return (
    <>
      <Header pageInfo={pageInfo} />

      <StyledContactPage>
        <ContactSection>
          <article>
            <header>
              <h3 className="heading--secondary">Get in touch!</h3>
              <p>
                Please feel free to contact us with any questions, concerns or
                reservations.
              </p>
            </header>

            <section>
              <div>
                <p>Billy Ho's Pub & Eatery</p>
                <p>
                  {address.street}
                  <br />
                  {address.city}, {address.state} {address.zip}
                  <br />
                </p>
              </div>
              <a href={`tel:+${phone}`}>{phone}</a>
              <a href={`mailto:${email}`}>{email}</a>
            </section>
          </article>
        </ContactSection>

        <Section>
          <Hours hours={hours} />
        </Section>
      </StyledContactPage>
    </>
  )
}

const ContactSection = styled(Section)`
  article {
    display: flex;
    flex-direction: column;
    max-width: 700px;
    header {
      margin-bottom: 4rem;
      p {
        font-size: 1.5em;
        line-height: 1.2em;
      }
    }
    section {
      line-height: 1.2em;
      font-size: 2rem;
      div {
        margin-bottom: 1rem;
      }
      h3 {
        font-size: 3rem;
      }
      a {
        color: ${props => props.theme.grey[700]};
        text-decoration: underline ${props => props.theme.primary};

        :hover {
          color: ${props => props.theme.grey[800]};
        }
      }
    }
  }

`

const StyledContactPage = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: flex;
  padding: 0 2rem;

  }
`

export default ContactPageTemplate
