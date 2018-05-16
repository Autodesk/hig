export default [
  {
    description: "uncontrolled",
    getProps: () => ({
      label: "Uncontrolled Dropdown",
      instructions: "instructions for regular Uncontrolled dropdown",
      placeholder: "placeholder for regular Uncontrolled dropdown",
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
