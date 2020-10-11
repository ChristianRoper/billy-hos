export const notes = {
  label: "Notes",
  name: "notes",
  widget: "list",
  fields: [
    { label: "Text", name: "text", widget: "text", required: false },
    {
      label: "Warning",
      name: "warning",
      widget: "boolean",
      required: false,
      hint: "Use this to mark a note as a Food Safety Warning.",
    },
  ],
}
