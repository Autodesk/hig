export default [
  {
    description: "default",
    getProps: () => ({
      label: "What is your age?",
      instructions: "You must be 21 or older.",
      required: "Age is required.",
      minValue: 21,
      maxValue: 99,
      step: 1
    })
  }
];
