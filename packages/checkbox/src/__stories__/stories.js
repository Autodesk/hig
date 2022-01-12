import Checkbox from "../Checkbox";

export default [
  {
    description: "default",
    getProps: () => ({
      ...Checkbox.defaultProps,
      label: "Default checkbox"
    })
  },
  {
    description: "checked",
    getProps: () => ({
      ...Checkbox.defaultProps,
      checked: true,
      label: "Default checkbox"
    })
  },
  {
    description: "disabled",
    getProps: () => ({
      ...Checkbox.defaultProps,
      disabled: true,
      label: "Default checkbox"
    })
  },
  {
    description: "indeterminate",
    getProps: () => ({
      ...Checkbox.defaultProps,
      indeterminate: true,
      label: "Default checkbox"
    })
  }
];
