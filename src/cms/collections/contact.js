export const contact = {
  label: "Contact & Hours",
  name: "contact-info",
  files: [
    {
      label: "Contact Info",
      name: "contactInfo",
      file: "src/pages/contact/contact-info.md",
      fields: [
        {
          label: "Address",
          name: "address",
          widget: "object",
          fields: [
            {
              label: "Street",
              name: "street",
              widget: "string",
              required: true,
            },
            { label: "City", name: "city", widget: "string", required: true },
            { label: "State", name: "state", widget: "string", required: true },
            { label: "Zip", name: "zip", widget: "string", required: true },
          ],
        },
        {
          label: "Phone Number",
          name: "phone",
          widget: "string",
          required: true,
        },
        { label: "Email", name: "email", widget: "string", required: true },
        {
          label: "Opening Hours",
          name: "hours",
          widget: "object",
          fields: [
            {
              label: "Bar Hours",
              name: "bar",
              widget: "list",
              fields: [
                {
                  label: "Days",
                  name: "days",
                  widget: "string",
                },
                {
                  label: "Hours",
                  name: "hours",
                  widget: "string",
                  hint: "Example: 8am - 11:30pm",
                },
              ],
            },
            {
              label: "Grill Hours",
              name: "grill",
              widget: "list",
              fields: [
                {
                  label: "Days",
                  name: "days",
                  widget: "string",
                },
                {
                  label: "Hours",
                  name: "hours",
                  widget: "string",
                  hint: "Example: 8am - 11:30pm",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
