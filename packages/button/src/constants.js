export const sizes = Object.freeze({
  SMALL: "small",
  STANDARD: "standard",
  LARGE: "large"
});

export const targets = Object.freeze({
  SELF: "_self",
  BLANK: "_blank",
  PARENT: "_parent",
  TOP: "_top"
});

export const types = Object.freeze({
  PRIMARY: "primary",
  SECONDARY: "secondary",
  FLAT: "flat"
});

export const widths = Object.freeze({
  SHRINK: "shrink",
  GROW: "grow"
});

export const availableSizes = Object.freeze(Object.values(sizes));
export const availableTargets = Object.freeze(Object.values(targets));
export const availableTypes = Object.freeze(Object.values(types));
export const availableWidths = Object.freeze(Object.values(widths));
