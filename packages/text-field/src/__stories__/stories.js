export default [
  {
    description: "default",
    getProps: () => ({
      label: "Comments",
      placeholder: "Enter your comments here.",
      required: "This field is required."
    })
  },
  {
    description: "disabled",
    getProps: () => ({
      label: "Comments",
      placeholder: "Enter your comments here.",
      disabled: true
    })
  }
];
