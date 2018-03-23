export default function(intlExamplesJson) {
  return Object.keys(intlExamplesJson).reduce(
    (acc, lang) => ({
      ...acc,
      [lang]: lang
    }),
    {}
  );
}
