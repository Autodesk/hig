export default [
  {
    description: "default",
    getProps: () => ({
      defaultValue: 45,
      value: undefined,
      disabled: false,
      step: 1
    })
  },
  {
    description: "disabled",
    getProps: () => ({
      defaultValue: 23,
      value: undefined,
      disabled: true,
      step: 1
    })
  }
];
