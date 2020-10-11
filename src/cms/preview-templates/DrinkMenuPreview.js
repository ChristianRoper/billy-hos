import React from "react"
import PropTypes from "prop-types"
import { DrinkMenuTemplate } from "../../templates/menu-items-page"

const DrinkMenuPreview = ({ entry }) => {
  const sections = entry.getIn(["data", "sections"])
  const pageInfo = {
    title: entry.getIn(["data", "title"]),
    image: entry.getIn(["data", "image"]),
  }

  return (
    <DrinkMenuTemplate
      pageInfo={pageInfo}
      sections={sections && sections.toJS()}
    />
  )
}

DrinkMenuPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default DrinkMenuPreview
