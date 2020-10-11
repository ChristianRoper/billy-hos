export const pageInfo = {
  label: "Page Info",
  name: "pageInfo",
  widget: "object",
  fields: [
    {
      label: "Page Title",
      name: "title",
      widget: "string",
    },
    { label: "Tagline", name: "tagline", widget: "string", required: false },
    {
      label: "Background Image",
      name: "image",
      widget: "image",
      required: false,
    },
  ],
}
