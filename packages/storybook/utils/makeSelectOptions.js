/**
 * @param {Object.<string, string>} constants
 * @returns {Object.<string, string>}
 */
export default function makeSelectOptions(constants) {
  return Object.keys(constants).reduce((options, constantKey) => {
    const key = constants[constantKey];
    const capitalize = str => str.charAt(0) + str.substr(1).toLowerCase();
    const value = constantKey
      .split("_")
      .map(capitalize)
      .join(" ");

    // eslint-disable-next-line no-param-reassign
    options[value] = key;

    return options;
  }, {});
}
