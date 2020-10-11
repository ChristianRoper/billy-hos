import { drink } from "../partials/drink"

export const drinks = {
  label: "Drink Menu",
  name: "drinks",
  files: [
    {
      label: "Happy Hour",
      name: "happyhour",
      file: "src/pages/menu/drinks/happyhour.md",
      fields: [
        {
          label: "Template Key",
          default: "menu-item-page",
          name: "templateKey",
          widget: "hidden",
        },
        {
          label: "Title",
          name: "title",
          widget: "string",
        },
        {
          label: "Hours",
          name: "hours",
          widget: "object",
          fields: [
            {
              label: "Begin",
              name: "begin",
              widget: "string",
            },
            {
              label: "End",
              name: "end",
              widget: "string",
            },

            {
              label: "Days",
              name: "days",
              widget: "string",
              hint: "Example: Monday - Friday",
            },
            {
              label: "PullTabs",
              name: "pullTabs",
              widget: "string",
            },
          ],
        },

        {
          label: "Special List",
          name: "specialList",
          widget: "list",
          fields: [
            {
              label: "Name",
              name: "name",
              widget: "string",
            },
            {
              label: "Price",
              name: "price",
              widget: "number",
              valueType: "int",
            },
          ],
        },
      ],
    },

    {
      label: "Specialty Drinks",
      name: "specialtyDrinks",
      file: "src/pages/menu/drinks/specialty.md",
      fields: [
        {
          label: "Template Key",
          default: "menu-item-page",
          name: "templateKey",
          widget: "hidden",
        },
        {
          label: "Title",
          name: "title",
          widget: "string",
          default: "Specialty Drinks",
        },

        {
          label: "Image",
          name: "image",
          widget: "image",
          required: false,
        },
        {
          label: "Items",
          name: "items",
          widget: "list",
          fields: drink,
        },
      ],
    },

    {
      label: "Beer",
      name: "beer",
      file: "src/pages/menu/drinks/beer.md",
      fields: [
        {
          label: "Template Key",
          default: "menu-item-page",
          name: "templateKey",
          widget: "hidden",
        },
        {
          label: "Title",
          name: "title",
          widget: "string",
          default: "Beer",
        },
        {
          label: "Image",
          name: "image",
          widget: "image",
          required: false,
        },
        {
          label: "Sections",
          name: "sections",
          widget: "list",
          fields: [
            {
              label: "Title",
              name: "title",
              widget: "string",
              default: "Milwaukee Special",
            },
            {
              label: "Items",
              name: "items",
              widget: "list",
              field: { label: "Name", name: "name", widget: "string" },
            },
          ],
        },
      ],
    },
  ],
}
