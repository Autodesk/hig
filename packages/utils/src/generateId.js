/**
 * Generates a unique ID
 * @param {string} key
 * @returns {string} A generated id
 */
export default function generateId(key) {
  return `${key}-${Math.floor(Math.random() * 100000, 5)}`;
}
