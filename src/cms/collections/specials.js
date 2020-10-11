import { menuItem } from "../partials/menuItem"
import { drink } from "../partials/drink"
import { notes } from "../partials/notes"

export const specials = {
  label: "Daily Specials",
  name: "specials",
  files: [
    {
      label: "Special Menu",
      name: "specialMenu",
      file: "src/pages/menu/specials.md",

      fields: [


        {
          label: "Template Key",
          default: "_specials",
          name: "templateKey",
          widget: "hidden",
        },
        {
          label: "Specials",
          name: "specials",
          widget: "list",
          allow_add: false,
          fields: [
            {
              label: "Day",
              name: "day",
              widget: "string",
              required: true,
            },
            {
              label: "Title",
              name: "title",
              widget: "string",
              required: false,
            },
            {
              label: "Image",
              name: "image",
              widget: "image",
              required: false,
            },
            notes,
            menuItem,
            {
              label: "List",
              name: "list",
              widget: "object",
              hint: "Use this to list sauces, toppings, etc. if necessary.",
              fields: [
                {
                  label: "Title",
                  name: "title",
                  widget: "string",
                  required: false,
                },
                {
                  label: "Items",
                  name: "listItems",
                  widget: "list",
                  field: { label: "Name", name: "item", widget: "string" },
                },
              ],
            },
            {
              label: "Drinks",
              name: "drinks",
              widget: "list",
              fields: drink,
            },
          ],
        },
      ],
    },
  ],
}
