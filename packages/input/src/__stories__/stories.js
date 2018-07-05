export default [
  {
    description: "default",
    getProps: () => ({
      value: "jon.snow@winterfell.gov"
    })
  },
  {
    description: "disabled",
    getProps: () => ({
      value: "bran.stark@winterfell.gov",
      disabled: true
    })
  }
];
