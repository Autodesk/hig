export default [
  {
    description: "default",
    getProps: () => ({
      children: "This should render nicely.",
      variant: "body",
      fontWeight: "normal",
      align: "left"
    })
  },
  {
    description: "with elementType prop",
    getProps: () => ({
      children: "111 McInnis Parkway, San Rafael, CA 94903, USA",
      variant: "body",
      fontWeight: "normal",
      align: "left",
      elementType: "address"
    })
  }
];
