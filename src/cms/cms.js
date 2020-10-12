import CMS from "netlify-cms-app"

import { pages } from "./collections/pages"
import { posts } from "./collections/posts"
import { menu } from "./collections/menu"
import { drinks } from "./collections/drinks"
import { contact } from "./collections/contact"
import { specials } from "./collections/specials"

// PREVIEW TEMPLATES
import FoodMenuPreview from "./preview-templates/FoodMenuPreview"
import DrinkMenuPreview from "./preview-templates/DrinkMenuPreview"
import SpecialtyDrinksPreview from "./preview-templates/SpecialtyDrinksPreview"
import PagePreview from "./preview-templates/PagePreview"


CMS.registerPreviewTemplate("menu", FoodMenuPreview)
CMS.registerPreviewTemplate("beer", DrinkMenuPreview)
CMS.registerPreviewTemplate("specialtyDrinks", SpecialtyDrinksPreview)
CMS.registerPreviewTemplate("index", PagePreview)
CMS.registerPreviewTemplate("about", PagePreview)
CMS.registerPreviewTemplate("contact", PagePreview)
CMS.registerPreviewTemplate("menu-page", PagePreview)

CMS.init({
  load_config_file: false,
  config: {
    backend: {
      name: "git-gateway",
      branch: "master",
    },
    site_url: "https://billyhos.christianroper.dev",
    media_folder: "static/img",
    public_folder: "/img",
    collections: [pages, specials, menu, drinks, posts, contact],
  },
})
