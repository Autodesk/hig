export default [
  {
    description: "default",
    getProps: () => ({
      defaultValue: 45,
      value: undefined,
      disabled: false
    })
  },
  {
    description: "disabled",
    getProps: () => ({
      defaultValue: 23,
      value: undefined,
      disabled: true
    })
  }
];
