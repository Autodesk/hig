export const targets = Object.freeze({
  SELF: "_self",
  BLANK: "_blank",
  PARENT: "_parent",
  TOP: "_top"
});

export const types = Object.freeze({
  FLAT: "flat",
  OUTLINE: "outline",
  SOLID: "solid",
  /** @deprecated */
  PRIMARY: "primary",
  /** @deprecated */
  SECONDARY: "secondary"
});

export const widths = Object.freeze({
  SHRINK: "shrink",
  GROW: "grow"
});

export const availableTargets = Object.freeze(Object.values(targets));
export const availableTypes = Object.freeze(Object.values(types));
export const availableWidths = Object.freeze(Object.values(widths));
