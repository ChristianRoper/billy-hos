import { menuItem } from "../partials/menuItem"

export const menu = {
  label: "Food Menu",
  name: "menu",
  folder: "src/pages/menu/food",
  create: true,
  fields: [
    {
      label: "Template Key",
      name: "templateKey",
      widget: "hidden",
      default: "menu-item-page",
    },
    {
      label: "Weight",
      name: "weight",
      widget: "number",
      valueType: "int",
      required: true,
      hint:
        "This will determine where the page appears in the navigation list (0 = Top)",
    },
    {
      label: "Menu Title",
      name: "title",
      widget: "string",
    },
    {
      label: "Tagline",
      name: "tagline",
      widget: "string",
      required: false,
    },
    {
      label: "Image",
      name: "image",
      widget: "image",
      required: false,
    },
    menuItem,
  ],
}
