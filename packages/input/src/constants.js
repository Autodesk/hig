export const variants = Object.freeze({
  LINE: "line",
  BOX: "box",
  PLAIN: "plain"
});

export const availableVariants = Object.freeze(Object.values(variants));

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
