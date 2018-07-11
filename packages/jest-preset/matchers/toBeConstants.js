const CONSTANT_MATCHER = /^[A-Z0-9_]+$/;
const VALUE_MATCHER = /^[a-z0-9-_]+$/;

/**
 * @param {string} key
 * @returns {boolean}
 */
function isValidComponentConstantKey(key) {
  return CONSTANT_MATCHER.test(key);
}

/**
 * @param {string} value
 * @returns {boolean}
 */
function isValidComponentConstantValue(value) {
  return VALUE_MATCHER.test(value);
}

/**
 * @param {Object.<string, string>} constants
 * @returns {string[]} An array of invalid constant keys
 */
function getInvalidComponentConstantKeys(constants) {
  return Object.keys(constants).reduce((invalidKeys, key) => {
    if (!isValidComponentConstantKey(key)) invalidKeys.push(key);
    return invalidKeys;
  }, []);
}

/**
 * @param {string[]} values
 * @returns {string[]} An array of invalid constant values
 */
function getInvalidComponentConstantValues(values) {
  return values.reduce((invalidValues, value) => {
    if (!isValidComponentConstantValue(value)) invalidValues.push(value);
    return invalidValues;
  }, []);
}

/**
 * @param {Object} result
 * @returns {string}
 */
function getMessage(result) {
  const {
    hasValidKeys,
    hasValidValues,
    isFrozen,
    invalidKeys,
    invalidValues,
    label
  } = result;

  if (!isFrozen) {
    return `expected ${label} to be frozen.`;
  }

  if (!hasValidKeys) {
    return `expected ${label} to have valid keys. Invalid keys: ${invalidKeys}`;
  }

  if (!hasValidValues) {
    return `expected ${label} to have valid values. Invalid values: ${invalidValues}`;
  }

  return `expected ${label} to contain constants`;
}

function toBeConstants(constants, label) {
  const isArray = Array.isArray(constants);
  const isFrozen = Object.isFrozen(constants);
  const invalidKeys = isArray ? [] : getInvalidComponentConstantKeys(constants);
  const values = isArray ? constants : Object.values(constants);
  const invalidValues = getInvalidComponentConstantValues(values);
  const hasValidKeys = invalidKeys.length === 0;
  const hasValidValues = invalidValues.length === 0;
  const pass = hasValidKeys && hasValidValues;
  const message = getMessage({
    hasValidKeys,
    hasValidValues,
    isFrozen,
    invalidKeys,
    invalidValues,
    label
  });

  return { pass, message: () => message };
}

function toHavePropertyOfConstants(Component, propertyName) {
  const constants = Component[propertyName];

  return toBeConstants(constants, propertyName);
}

expect.extend({
  toBeConstants,
  toHavePropertyOfConstants
});
