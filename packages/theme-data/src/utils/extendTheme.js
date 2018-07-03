function validateNoUnknownKeys(theme, extension) {
  const themeKeys = Object.keys(theme);
  const extensionKeys = Object.keys(extension);
  const unknownKeys = extensionKeys.filter(key => !themeKeys.includes(key));
  if (unknownKeys.length > 0) {
    throw new Error(`Keys ${unknownKeys.join(", ")} are not in the theme`);
  }
}

/**
 * extendTheme
 * @param {*} theme
 * @param {*} extension
 *
 * Add additional roles to a theme
 */
export default function extendTheme(theme, extension, { strict = false } = {}) {
  if (strict) {
    validateNoUnknownKeys(theme, extendTheme);
  }
  return { ...theme, ...extension };
}
