export { default as H1 } from "./H1";
export { default as H2 } from "./H2";
export { default as H3 } from "./H3";
export { default as Text } from "./Text";

export { default as Body } from "./Body";
export { default as Bold } from "./Bold";
export { default as Caption } from "./Caption";
export { default as Disabled } from "./Disabled";
export { default as Sub1 } from "./Sub1";
export { default as Sub2 } from "./Sub2";

export const _VALID_COLORS = Object.freeze([
  "hig-white",
  "hig-cool-gray-70",
  "hig-blue-50",
  "hig-green-good",
  "hig-yellow-warning",
  "hig-red-alert"
]);

export const _VALID_SIZES = Object.freeze(["small", "medium", "large"]);

export const _VALID_TYPES = Object.freeze([
  "h1",
  "h2",
  "h3",
  "text",
  // Types below intended to be deprecated
  "sub1",
  "sub2",
  "body",
  "bold",
  "disabled",
  "caption"
]);
