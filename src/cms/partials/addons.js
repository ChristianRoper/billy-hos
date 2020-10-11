export const addons = {
  label: "Add Ons",
  name: "addons",
  required: false,
  widget: "list",
  fields: [
    {
      label: "Name",
      name: "name",
      required: false,
      widget: "string",
    },
    {
      label: "Price",
      name: "price",
      required: false,
      widget: "number",
      valueType: "int",
      hint: "Input as integer (Enter 995 to display 9.95 on site)",
    },
  ],
}
