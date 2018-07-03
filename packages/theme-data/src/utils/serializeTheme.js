import tinycolor from "tinycolor2";
import mapValues from "./mapValues";

function errorMsg(msg, referencingRole) {
  if (referencingRole) {
    return `Role ${referencingRole}: ${msg}`;
  }
  return msg;
}

function structureValues(theme, role) {
  const value = theme[role];
  if (typeof value === "string" || typeof value === "number") {
    return { value: theme[role] };
  }
  return value;
}

function dereferenceValues(theme, role, referencingRole) {
  const valueData = theme[role];
  if (!valueData) {
    throw new Error(
      errorMsg(`Role "${role}" is not present in theme`, referencingRole)
    );
  }
  if (valueData.abstract) {
    throw new Error(
      errorMsg(`You must provide a value for role "${role}"`, referencingRole)
    );
  }
  const dereferencedValue = valueData.ref
    ? { ...valueData, ...dereferenceValues(theme, valueData.ref, role) }
    : valueData;
  return dereferencedValue;
}

function transformAlpha(role, valueData) {
  const color = tinycolor(valueData.value);
  if (!color.isValid()) {
    throw new Error(`Role ${role}: ${valueData.value} is not a valid color`);
  }
  return color.setAlpha(valueData.transform.alpha).toRgbString();
}

function transformColors(theme, role) {
  const valueData = theme[role];
  const hasAlphaTransform =
    valueData.transform && valueData.transform.alpha !== undefined;
  if (!hasAlphaTransform) {
    return valueData;
  }
  return {
    ...valueData,
    value: transformAlpha(role, valueData)
  };
}

function destructureValues(theme, role) {
  return theme[role].value;
}

export default function serializeTheme(theme) {
  return [
    structureValues,
    dereferenceValues,
    transformColors,
    destructureValues
  ].reduce((acc, fn) => mapValues(acc, fn), theme);
}
