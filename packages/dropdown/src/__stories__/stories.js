export default [
  {
    description: "default",
    getProps: () => ({
      placeholder: "Select a theme",
      options: ["HIG Light Theme", "HIG Dark Blue Theme", "Matrix Theme"],
      typable: true,
      onInputChange: event => { console.log(event.target.value) }
    })
  }
];
