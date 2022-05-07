import tinycolor from "tinycolor2";
import mapValues from "./mapValues";

function errorMsg(msg, referencingRole) {
  if (referencingRole) {
    return `Role ${referencingRole}: ${msg}`;
  }
  return msg;
}

function dereferenceValue(theme, role, referencingRole) {
  const valueData = theme[role];
  if (valueData === undefined) {
    throw new Error(
      errorMsg(`Role "${role}" is not present in theme`, referencingRole)
    );
  }
  if (valueData.value === null) {
    throw new Error(
      errorMsg(`You must provide a value for role "${role}"`, referencingRole)
    );
  }

  if (valueData.value && valueData.value.ref) {
    const dereferencedValue = dereferenceValue(
      theme,
      valueData.value.ref,
      role
    );

    return {
      ...dereferencedValue,
      ...valueData,
      value: dereferencedValue.value,
    };
  }
  return valueData;
}

function transformAlpha(role, valueData) {
  const color = tinycolor(valueData.value);
  if (!color.isValid()) {
    throw new Error(`Role ${role}: ${valueData.value} is not a valid color`);
  }
  return color.setAlpha(valueData.transform.alpha).toRgbString();
}

function transformColorValue(theme, role) {
  const valueData = theme[role];
  const hasAlphaTransform =
    valueData.transform && valueData.transform.alpha !== undefined;
  if (!hasAlphaTransform) {
    return valueData;
  }
  return {
    ...valueData,
    value: transformAlpha(role, valueData),
  };
}

function destructureValue(theme, role) {
  return theme[role].value;
}

export default function resolveTheme(theme) {
  return [dereferenceValue, transformColorValue, destructureValue].reduce(
    (acc, fn) => mapValues(acc, fn),
    theme
  );
}
