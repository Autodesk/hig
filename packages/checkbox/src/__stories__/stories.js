import Checkbox from "../Checkbox";

export default [
  {
    description: "default",
    getProps: () => ({
      ...Checkbox.defaultProps,
      label: "Default checkbox"
    })
  }
];
