export default [
  {
    description: "default",
    getProps: () => ({
      label: "Default"
    })
  },
  {
    description: "required",
    getProps: () => ({
      label: "Required",
      required: "You must check this box"
    })
  },
  {
    description: "disabled",
    getProps: () => ({
      disabled: true,
      label: "Disabled"
    })
  },
  {
    description: "disabled and checked",
    getProps: () => ({
      checked: true,
      disabled: true,
      label: "Disabled and Checked"
    })
  }
];
