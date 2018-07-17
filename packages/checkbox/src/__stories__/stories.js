import { default as Checkbox } from "../Checkbox";

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
      label: "Checked",
      checked: true
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
    description: "indeterminate",
    getProps: () => ({
      indeterminate: true,
      label: "Indeterminate"
    })
  }
];
