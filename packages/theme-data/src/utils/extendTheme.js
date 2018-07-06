/**
 * extendTheme
 * @param {*} theme
 * @param {*} extension
 *
 * Add additional roles to a theme
 */
export default function extendTheme(theme, extension) {
  return { ...theme, ...extension };
}
