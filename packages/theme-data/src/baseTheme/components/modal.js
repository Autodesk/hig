import { BORDER_RADIUS, COLOR, LENGTH, SPACING } from "../../consts/types";

export default {
  "modal.fontColor": {
    type: COLOR,
    value: { ref: "colorScheme.text.default" },
  },
  "modal.paddingHorizontal": {
    type: SPACING,
    value: { ref: "density.spacings.large" },
  },
  "modal.overlayColor": {
    type: COLOR,
    value: { ref: "basics.colors.primary.black" },
    transform: { alpha: "0.5" },
  },
  "modal.header.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surface.level100" },
  },
  "modal.header.borderBottomColor": {
    type: COLOR,
    value: { ref: "colorScheme.divider.heavyweight" },
  },
  "modal.header.minHeight": {
    type: LENGTH,
    value: "58px",
  },
  "modal.body.minHeight": {
    type: LENGTH,
    value: "152px",
  },
  "modal.shell.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surface.level100" },
  },
  "modal.shell.borderRadius": {
    type: BORDER_RADIUS,
    value: { ref: "basics.borderRadii.large" },
  },
  "modal.shell.minHeight": {
    type: LENGTH,
    value: "300px",
  },
  "modal.shell.minWidth": {
    type: LENGTH,
    value: "400px",
  },
  "modal.shell.shadowColor": {
    type: COLOR,
    value: { ref: "colorScheme.shadow.high" },
  },
};
