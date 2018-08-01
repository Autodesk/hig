/**
 * extendTheme
 * @param {*} theme
 * @param {*} extension
 *
 * Add additional roles to a theme
 */
export default function extendTheme(theme, extension) {
  return Object.keys(extension).reduce(
    (acc, key) => ({ ...acc, [key]: { ...theme[key], ...extension[key] } }),
    theme
  );
}
