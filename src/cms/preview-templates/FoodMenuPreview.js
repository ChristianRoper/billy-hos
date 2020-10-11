import React from "react"
import PropTypes from "prop-types"
import { FoodMenuTemplate } from "../../templates/menu-items-page"

const FoodMenuPreview = ({ entry }) => {
  const pageInfo = {
    title: entry.getIn(["data", "title"]),
    tagline: entry.getIn(["data", "tagline"]),
    image: entry.getIn(["data", "image"]),
  }

  const itemList = entry.getIn(["data", "itemList"])
  return (
    <FoodMenuTemplate
      pageInfo={pageInfo}
      itemList={itemList && itemList.toJS()}
    />
  )
}

FoodMenuPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default FoodMenuPreview
