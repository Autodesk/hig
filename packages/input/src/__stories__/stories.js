export default [
  {
    description: "default",
    getProps: () => ({
      value: "jon.snow@winterfell.gov",
      disabled: false,
      error: false,
    }),
  },
  {
    description: "disabled",
    getProps: () => ({
      value: "bran.stark@winterfell.gov",
      disabled: true,
      error: false,
    }),
  },
];
