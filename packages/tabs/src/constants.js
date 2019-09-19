export const alignments = Object.freeze({
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right"
});

export const variants = Object.freeze({
  BOX: "box",
  CANVAS: "canvas",
  UNDERLINE: "underline"
});

export const orientations = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
});

export const AVAILABLE_ALIGNMENTS = Object.freeze(Object.values(alignments));
export const AVAILABLE_VARIANTS = Object.freeze(Object.values(variants));
export const AVAILABLE_ORIENTATIONS = Object.freeze(
  Object.values(orientations)
);
