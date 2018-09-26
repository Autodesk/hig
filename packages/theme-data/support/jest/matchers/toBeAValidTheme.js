import validateTheme from "../../../src/utils/validateTheme";

function getMessage(result) {
  return result.errors.map(error => `${error.message}\n`);
}

function toBeAValidTheme(theme, schema) {
  const result = validateTheme(theme, schema);
  const pass = result.valid;
  return { pass, message: () => getMessage(result) };
}

expect.extend({ toBeAValidTheme });
