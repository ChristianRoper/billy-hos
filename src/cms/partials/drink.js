export const drink = [
  { label: "Name", name: "name", required: true, widget: "string" },
  {
    label: "Price",
    name: "price",
    required: false,
    widget: "number",
    valueType: "int",
    hint: "Input as integer (Enter 995 to display 9.95 on site)",
  },
  { label: "Image", name: "image", required: false, widget: "image" },
  {
    label: "Description",
    name: "description",
    required: false,
    widget: "text",
  },
]
