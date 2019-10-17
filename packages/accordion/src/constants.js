export const indicators = Object.freeze({
  CARET: "caret",
  OPERATOR: "operator"
});

export const indicatorPositions = Object.freeze({
  LEFT: "left",
  RIGHT: "right"
});

export const AVAILABLE_INDICATORS = Object.freeze(Object.values(indicators));
export const AVAILABLE_INDICATOR_POSITIONS = Object.freeze(
  Object.values(indicatorPositions)
);
