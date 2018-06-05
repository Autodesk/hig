export default [
  {
    description: "default",
    getProps: () => ({
      label: "HIG Theme",
      instructions: "Choose one HIG theme to apply to your entire app.",
      placeholder: "Select a theme",
      options: [
        {
          label: "foo",
          value: "foo value"
        },
        {
          label: "bar",
          value: "bar value"
        }
      ],
      defaultValue: "bar value"
    })
  },
  {
    description: "disabled",
    getProps: () => ({
      label: "Disabled Dropdown",
      instructions: "instructions for disabled dropdown",
      placeholder: "placeholder for disabled dropdown",
      disabled: true
    })
  }
];
