import React from "react"
import PropTypes from "prop-types"
import { SpecialtyDrinksTemplate } from "../../templates/menu-items-page"

const SpecialtyDrinksPreview = ({ entry }) => {
  const pageInfo = {
    title: entry.getIn(["data", "title"]),
    tagline: entry.getIn(["data", "tagline"]),
    image: entry.getIn(["data", "image"]),
  }

  const items = entry.getIn(["data", "items"])

  return (
    <SpecialtyDrinksTemplate
      pageInfo={pageInfo}
      items={items && items.toJS()}
    />
  )
}

SpecialtyDrinksPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default SpecialtyDrinksPreview
