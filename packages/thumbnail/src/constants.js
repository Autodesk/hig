export const sizes = Object.freeze({
  xxs: "extraExtraSmall",
  xs: "extraSmall",
  s: "small",
  m: "medium",
  l: "large",
  xl: "extraLarge",
});

export const AVAILABLE_SIZES = Object.freeze(Object.keys(sizes));

export const ratios = Object.freeze({
  fullscreen: "4 / 3",
  square: "1 / 1",
  widescreen: "16 / 9",
});

export const AVAILABLE_RATIOS = Object.freeze(Object.keys(ratios));

export const fits = Object.freeze({
  contain: "contain",
  cover: "cover",
  fill: "fill",
  none: "none",
  "scale-down": "scale-down",
});

export const AVAILABLE_FITS = Object.freeze(Object.keys(fits));
