export default [
  {
    description: "default",
    getProps: () => ({
      label: "HIG Theme",
      instructions: "Choose one HIG theme to apply to your entire app.",
      placeholder: "Select a theme",
      options: [
        {
          label: "HIG Light Theme",
          value: "HIGLightTheme"
        },
        {
          label: "HIG Dark Blue Theme",
          value: "HIGDarkBlueTheme"
        },
        {
          label: "Matrix Theme",
          value: "MatrixTheme"
        }
      ]
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
