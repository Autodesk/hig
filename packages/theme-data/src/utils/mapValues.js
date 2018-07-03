export default function mapValues(object, iterator) {
  return Object.keys(object).reduce(
    (acc, key) => ({
      ...acc,
      [key]: iterator(object, key)
    }),
    {}
  );
}
