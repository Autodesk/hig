/**
 * extendTheme
 * @param {*} theme
 * @param {*} extension
 *
 * Add additional roles to a theme
 */
export default function extendTheme(theme, extension) {
  // NOTE: We do *not* use Object spread in `reduce`, since it copies the entire
  // object in every iteration and becomes a performance bottleneck. Instead, we
  // copy `theme` once at the beginning and then apply changes to that same
  // object instance `acc` using property assignment and `Object.assign`.
  return Object.keys(extension).reduce(
    (acc, key) => {
      if (!acc[key]) {
        acc[key] = extension[key];
      } else {
        acc[key] = Object.assign({}, acc[key], extension[key]);
      }
      return acc;
    },
    { ...theme }
  );
}
