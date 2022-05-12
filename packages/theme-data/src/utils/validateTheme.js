import tinycolor from "tinycolor2";
import {
  COLOR,
  BORDER_RADIUS,
  BORDER_WIDTH,
  FONT_WEIGHT,
  LENGTH,
  FONT_SIZE,
  SPACING,
} from "../consts/types";

// eslint-disable-next-line prefer-regex-literals
const cssLengthRegexp = new RegExp(
  /^(auto|0)$|^[+-]?[0-9]+.?([0-9]+)?(px|em|ex|%|in|cm|mm|pt|pc)$/
);

function extraKeys(o1, o2) {
  const o1Keys = Object.keys(o1);
  const o2Keys = Object.keys(o2);
  return o2Keys.filter((key) => !o1Keys.includes(key));
}

function validateColor(value) {
  const color = tinycolor(value);
  return color.isValid();
}

function validateLength(value) {
  return cssLengthRegexp.test(value);
}

function validateFontWeight(value) {
  return !Number.isNaN(Number(value));
}

function invalidRoles(types, validator, theme, schema) {
  return Object.keys(schema).filter((role) => {
    const schemaValue = schema[role];
    if (!types.includes(schemaValue.type)) {
      return false;
    }
    const themeValue = theme[role];
    if (themeValue === undefined) {
      return true;
    }
    return !validator(themeValue);
  });
}

function unknownRoleErrors(roles) {
  return roles.map((role) => ({
    role,
    message: `Role ${role} is defined in the theme but not the schema`,
  }));
}

function missingRoleErrors(roles) {
  return roles.map((role) => ({
    role,
    message: `Role ${role} is in the schema but not the theme`,
  }));
}

function typeErrors(roles, theme, schema) {
  return roles.map((role) => ({
    role,
    message: `Role ${role}: ${theme[role]} is not a valid ${schema[role].type}`,
  }));
}

export default function validateTheme(theme, schema) {
  const errors = [].concat(
    unknownRoleErrors(extraKeys(schema, theme)),
    missingRoleErrors(extraKeys(theme, schema)),
    typeErrors(
      invalidRoles([COLOR], validateColor, theme, schema),
      theme,
      schema
    ),
    typeErrors(
      invalidRoles(
        [BORDER_RADIUS, BORDER_WIDTH, LENGTH, FONT_SIZE, SPACING],
        validateLength,
        theme,
        schema
      ),
      theme,
      schema
    ),
    typeErrors(
      invalidRoles([FONT_WEIGHT], validateFontWeight, theme, schema),
      theme,
      schema
    )
  );

  return {
    valid: errors.length <= 0,
    errors: errors.length ? errors : undefined,
  };
}
