import React from "react"
import styled from "styled-components"

const Hours = ({ hours }) => {
  return (
    <StyledHours>
      <header>
        <h2 className="heading--secondary left">Hours</h2>
      </header>

      <div>
        <section>
          <header>
            <h3 className="heading--tertiary ">
              Bar
              <hr />
            </h3>
          </header>

          {hours.bar.map(x => (
            <div>
              <p>
                {x.days}
                <span>{x.hours}</span>
              </p>
            </div>
          ))}
        </section>

        <section>
          <header>
            <h3 className="heading--tertiary">
              Grill
              <hr />
            </h3>
          </header>
          {hours.grill.map(x => (
            <div>
              <p>
                {x.days}
                <span>{x.hours}</span>
              </p>
            </div>
          ))}
        </section>
      </div>
    </StyledHours>
  )
}

const StyledHours = styled.article`
  > header {
    background: ${props => props.theme.yellow[50]};
    background: ${props => props.theme.red[600]};
    padding: 0 2rem;
    h2 {
      color: ${props => props.theme.yellow[50]};
      margin: 0;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    section {
      flex: 1;
      padding: 4rem 2rem;
      :first-of-type {
        background: ${props => props.theme.yellow[100]};
      }

      header {
        margin-bottom: 2rem;
        padding: 0;
      }

      p {
        font-size: 1em;
        color: ${props => props.theme.grey[700]};
      }

      span {
        display: block;
        color: ${props => props.theme.grey[700]};
        font-weight: 400;
      }
    }
  }
`

export default Hours
