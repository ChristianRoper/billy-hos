import React from "react"
import PropTypes from "prop-types"
import { PreviewLayout } from "../../components/Layout"
import Header from "../../components/Header"

const PagePreview = ({ entry }) => {
  const pageInfo = {
    title: entry.getIn(["data", "pageInfo", "title"]),
    tagline: entry.getIn(["data", "pageInfo", "tagline"]),
    image: entry.getIn(["data", "pageInfo", "image"])
  }
  const title = entry.getIn(["data", "templateKey"]);

  return (
    <PreviewLayout>
      <Header title={title === "index-page" && "home"} pageInfo={pageInfo} />
    </PreviewLayout>
  )
}

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default PagePreview
