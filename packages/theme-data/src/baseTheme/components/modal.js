import { BORDER_RADIUS, COLOR, LENGTH, SPACING } from "../../consts/types";

export default {
  "modal.overlay.color": {
    type: COLOR,
    value: { ref: "basics.colors.black" },
    transform: { alpha: "0.5" }
  },
  "modal.textColor": {
    type: COLOR,
    value: { ref: "colorScheme.textColor" }
  },
  "modal.body.height": { type: LENGTH },
  "modal.horizontalPadding": {
    type: SPACING,
    value: { ref: "density.spacings.large" }
  },
  "modal.header.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surfaceLevel100Color" }
  },
  "modal.header.borderColor": {
    type: COLOR,
    value: { ref: "colorScheme.textColor" },
    transform: { alpha: "0.25" }
  },
  "modal.header.height": {
    type: LENGTH
  },
  "modal.window.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surfaceLevel100Color" }
  },
  "modal.window.borderRadius": {
    type: BORDER_RADIUS,
    value: { ref: "basics.borderRadii.large" }
  },
  "modal.window.height": { type: LENGTH },
  "modal.window.width": { type: LENGTH, value: "400px" },
  "modal.window.shadowColor": {
    type: COLOR,
    value: { ref: "colorScheme.highShadowColor" }
  }
};
