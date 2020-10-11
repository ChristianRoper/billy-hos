import { seo } from "../partials/seo"

export const posts = {
  label: "Posts",
  name: "posts",
  folder: "src/pages/blog",
  create: true,
  slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
  fields: [
    ...seo,
    {
      label: "Template Key",
      default: "post-page",
      name: "templateKey",
      widget: "hidden",
    },
    {
      label: "Post Type",
      name: "type",
      widget: "select",
      options: ["Event", "Announcement", "Other"],
    },
    {
      label: "Title",
      name: "title",
      widget: "string",
    },
    {
      label: "Date",
      name: "date",
      widget: "datetime",
      format: "MM-DD-YYYY",
    },
    { label: "Image", name: "image", required: false, widget: "image" },
    {
      label: "Body",
      name: "body",
      widget: "markdown",
    },
  ],
}
