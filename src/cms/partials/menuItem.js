import { addons } from "./addons"

export const menuItem = {
  label: "Items",
  name: "itemList",
  widget: "list",
  fields: [
    { label: "Name", name: "name", required: true, widget: "string" },
    {
      label: "Price",
      name: "price",
      required: false,
      hint: "Input as integer (Enter 995 to display 9.95 on site)",
      widget: "number",
      valueType: "int",
    },
    { label: "Image", name: "image", required: false, widget: "image" },
    {
      label: "Description",
      name: "description",
      required: false,
      widget: "text",
    },
    addons,
  ],
}
