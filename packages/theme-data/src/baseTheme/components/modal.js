import { BORDER_RADIUS, COLOR, LENGTH, SPACING } from "../../consts/types";

export default {
  "modal.fontColor": {
    type: COLOR,
    value: { ref: "colorScheme.text.default" }
  },
  "modal.paddingHorizontal": {
    type: SPACING,
    value: { ref: "density.spacings.large" }
  },
  "modal.overlayColor": {
    type: COLOR,
    value: { ref: "basics.colors.primary.black" },
    transform: { alpha: "0.5" }
  },
  "modal.header.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surface.level100" }
  },
  "modal.header.borderBottomColor": {
    type: COLOR,
    value: { ref: "colorScheme.divider.heavyweight" }
  },
  "modal.header.minHeight": {
    type: LENGTH,
    value: "60px"
  },
  "modal.body.minHeight": {
    type: LENGTH,
    value: "152px"
  },
  "modal.shell.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surface.level100" }
  },
  "modal.shell.borderRadius": {
    type: BORDER_RADIUS,
    value: { ref: "basics.borderRadii.large" }
  },
  "modal.shell.minHeight": {
    type: LENGTH,
    value: "300px"
  },
  "modal.shell.minWidth": {
    type: LENGTH,
    value: "400px"
  },
  "modal.shell.shadowColor": {
    type: COLOR,
    value: { ref: "colorScheme.shadow.high" }
  },
  /**
   * ## Deprecated
   *
   *
   */
  "modal.overlay.color": {
    type: COLOR,
    value: { ref: "modal.overlayColor" }
  },
  "modal.textColor": {
    type: COLOR,
    value: { ref: "modal.fontColor" }
  },
  "modal.body.height": {
    type: LENGTH,
    value: { ref: "modal.body.minHeight" }
  },
  "modal.horizontalPadding": {
    type: SPACING,
    value: { ref: "modal.paddingHorizontal" }
  },
  "modal.header.borderColor": {
    type: COLOR,
    value: { ref: "modal.header.borderBottomColor" }
  },
  "modal.header.height": {
    type: LENGTH,
    value: { ref: "modal.header.minHeight" }
  },
  "modal.window.backgroundColor": {
    type: COLOR,
    value: { ref: "modal.shell.backgroundColor" }
  },
  "modal.window.borderRadius": {
    type: BORDER_RADIUS,
    value: { ref: "modal.shell.borderRadius" }
  },
  "modal.window.height": {
    type: LENGTH,
    value: { ref: "modal.shell.minHeight" }
  },
  "modal.window.width": {
    type: LENGTH,
    value: { ref: "modal.shell.minWidth" }
  },
  "modal.window.shadowColor": {
    type: COLOR,
    value: { ref: "modal.shell.shadowColor" }
  }
};
