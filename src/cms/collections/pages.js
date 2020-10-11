import { pageInfo } from "../partials/pageInfo"
import { notes } from "../partials/notes"

export const pages = {
  label: "Pages",
  name: "pages",
  files: [
    {
      label: "Home Page",
      name: "index",
      file: "src/pages/index.md",
      fields: [
        {
          label: "Template Key",
          name: "templateKey",
          widget: "hidden",
          default: "index-page",
        },
        pageInfo,
      ],
    },

    {
      label: "About Page",
      name: "about",
      file: "src/pages/about/index.md",
      fields: [
        {
          label: "Template Key",
          name: "templateKey",
          widget: "hidden",
          default: "about-page",
        },
        pageInfo,
        {
          label: "Page Sections",
          name: "sections",
          widget: "list",
          fields: [
            {
              label: "Section Title",
              name: "sectionTitle",
              widget: "string",
              required: false,
            },
            { label: "Body", name: "body", widget: "markdown" },
          ],
        },
      ],
    },

    {
      label: "Menu Page",
      name: "menu-page",
      file: "src/pages/menu/index.md",
      fields: [
        {
          label: "Template Key",
          name: "templateKey",
          widget: "hidden",
          default: "menu-page",
        },
        pageInfo,
        notes,
        {
          label: "Featured Items",
          name: "featured",
          widget: "list",
          required: false,
          fields: [
            { label: "Name", name: "name", widget: "string" },
            {
              label: "Price",
              name: "price",
              required: false,
              hint: "Input as integer (ex: $9.95 = 995)",
              widget: "number",
              valueType: "int",
            },
            {
              label: "Description",
              name: "description",
              widget: "string",
              required: false,
            },
            { label: "Image", name: "image", widget: "image" },
          ],
        },
      ],
    },

    {
      label: "Contact Page",
      name: "contact",
      file: "src/pages/contact/index.md",
      fields: [
        pageInfo,
        {
          label: "Template Key",
          name: "templateKey",
          widget: "hidden",
          default: "contact-page",
        },
      ],
    },
  ],
}
