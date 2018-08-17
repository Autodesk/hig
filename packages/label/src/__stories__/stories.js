export default [
  {
    description: "default",
    getProps: () => ({
      children: "Email"
    })
  },
  {
    description: "disabled",
    getProps: () => ({
      children: "Email",
      disabled: true
    })
  }
];
