import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

import SpecialHeader from "./HeaderImage"
import Icon from "./Icon"
import { MenuItem } from "./Menu"
import { DailySpecial } from "./DailySpecialSection"

const SpecialDesktop = ({ special }) => {
  return (
    <StyledSpecialDesktop>
      <DailySpecial special={special} />
    </StyledSpecialDesktop>
  )
}

const StyledSpecialDesktop = styled.section`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: block;
    padding: 2rem 0;
    border: 3px dashed ${props => props.theme.red[900]};
  }
`

export const SpecialMobile = ({ special }) => {
  const [isToggled, setToggle] = React.useState(false)

  const slideDown = useSpring({
    config: { mass: 1, friction: 34 },
    maxHeight: isToggled ? "1000px" : "0px",
    opacity: isToggled ? 1 : 0,
    transform: isToggled ? "translateY(0%)" : "translateY(-25%)",
  })

  return (
    <StyledSpecialMobile>
      <SpecialHeader image={special.image ? special.image : null}>
        <div className="image-filter" />

        <SpecialHeadingBtn
          aria-label="Expand special details"
          onClick={() => setToggle(!isToggled)}
        >
          <h3 className="title">
            <div>{special.day}</div>
            {special.title}
          </h3>
          <Icon className="icon" name="chevdown" />
        </SpecialHeadingBtn>
      </SpecialHeader>
      <animated.div className="slide" style={slideDown}>
        <SpecialBody>
          <div className="items">
            <div>
              {special.itemList.map(item => (
                <MenuItem
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  addons={item.addons}
                />
              ))}
            </div>

            <div>
              {special.drinks.map(item => (
                <MenuItem name={item.name} />
              ))}
            </div>
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
        </SpecialBody>
      </animated.div>
    </StyledSpecialMobile>
  )
}

const StyledSpecialMobile = styled.section`
  .slide {
    box-sizing: content-box;
  }
  .list {
    max-width: 700px;
    margin: 0 auto;
    background: ${props => props.theme.yellow[50]};
    padding: 0 2rem;
    margin-bottom: 4rem;

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
    display: none;
  }
`

const Special = ({ special }) => {
  return (
    <>
      <SpecialMobile special={special} />
      <SpecialDesktop special={special} />
    </>
  )
}

const SpecialBody = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.yellow[50]};
  z-index: 10;
  color: ${props => props.theme.grey};
  height: auto;
  .items {
    padding: 2rem;

    .item--desc {
      color: ${props => props.theme.grey[700]};
    }
  }
`

const SpecialHeadingBtn = styled.button`
  color: ${props => props.theme.yellow[50]};
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  text-align: left;
  cursor: pointer;
  background: none;

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.5em;
    z-index: 40;
    height: 100%;
    width: 100%;
    padding: 0 0 0 2rem;

    div {
      color: ${props => props.theme.yellow[500]};
      font-size: 0.6em;
      font-weight: 600;
    }
  }
  svg {
    fill: ${props => props.theme.grey[50]};
    opacity: 0.7;
    width: 50px;
  }
`
export default Special
