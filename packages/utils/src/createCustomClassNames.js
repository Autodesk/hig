import { cx } from "emotion";

/**
 * Returns a css className that combines what the user passes down and a string.
 * Ideally the string would map to the element's js style object's name.
 * @param {string} className
 * @param {string} appendedString
 * @returns {string} A string that looks like className__appendedString
 */

export default function createCustomClassNames(className, appendedString) {
  return (
    className &&
    className
      .split(" ")
      .reduce((acc, cur) => cx(acc, `${cur.trim()}__${appendedString}`), "")
  );
}
