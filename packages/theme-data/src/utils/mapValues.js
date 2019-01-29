export default function mapValues(object, iterator) {
  // NOTE: We do *not* use Object spread in `reduce`, since it copies the entire
  // object in every iteration and becomes a performance bottleneck
  return Object.keys(object).reduce((acc, key) => {
    acc[key] = iterator(object, key);
    return acc;
  }, {});
}
