export const types = Object.freeze({
  LINE: "line",
  BOX: "box",
  PLAIN: "plain"
});

export const availableTypes = Object.freeze(Object.values(types));

export const availableInputModes = Object.freeze([
  "none",
  "text",
  "decimal",
  "numeric",
  "tel",
  "search",
  "email",
  "url"
]);
