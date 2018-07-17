export default function mapKeys(o, fn) {
  return Object.keys(o).reduce(
    (acc, key) => Object.assign(acc, { [fn(key)]: o[key] }),
    {}
  );
}
