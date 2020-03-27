import { BORDER_RADIUS, COLOR, LENGTH, SPACING } from "../../consts/types";

export default {
  "modal.overlayColor": {
    type: COLOR,
    value: { ref: "basics.colors.primary.black" },
    transform: { alpha: "0.5" }
  },
  "modal.overlay.color": {
    type: COLOR,
    value: { ref: "modal.overlayColor" },
    metadata: { deprecated: { equivalent: "modal.overlayColor" } }
  },
  "modal.fontColor": {
    type: COLOR,
    value: { ref: "colorScheme.text.default" }
  },
  "modal.textColor": {
    type: COLOR,
    value: { ref: "modal.fontColor" },
    metadata: { deprecated: { equivalent: "modal.fontColor" } }
  },
  "modal.body.minHeight": {
    type: LENGTH,
    value: "152px"
  },
  "modal.body.height": {
    type: LENGTH,
    value: { ref: "modal.body.minHeight" },
    metadata: { deprecated: { equivalent: "modal.body.minHeight" } }
  },
  "modal.paddingHorizontal": {
    type: SPACING,
    value: { ref: "density.spacings.large" }
  },
  "modal.horizontalPadding": {
    type: SPACING,
    value: { ref: "modal.paddingHorizontal" },
    metadata: { deprecated: { equivalent: "modal.paddingHorizontal" } }
  },
  "modal.header.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surface.level100" }
  },
  "modal.header.borderBottomColor": {
    type: COLOR,
    value: { ref: "colorScheme.divider.heavyweight" }
  },
  "modal.header.borderColor": {
    type: COLOR,
    value: { ref: "modal.header.borderBottomColor" },
    metadata: { deprecated: { equivalent: "modal.header.borderBottomColor" } }
  },
  "modal.header.minHeight": {
    type: LENGTH,
    value: "60px"
  },
  "modal.header.height": {
    type: LENGTH,
    value: { ref: "modal.header.minHeight" },
    metadata: { deprecated: { equivalent: "modal.header.minHeight" } }
  },
  "modal.shell.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surface.level100" }
  },
  "modal.window.backgroundColor": {
    type: COLOR,
    value: { ref: "modal.shell.backgroundColor" },
    metadata: { deprecated: { equivalent: "modal.shell.backgroundColor" } }
  },
  "modal.shell.borderRadius": {
    type: BORDER_RADIUS,
    value: { ref: "basics.borderRadii.large" }
  },
  "modal.window.borderRadius": {
    type: BORDER_RADIUS,
    value: { ref: "modal.shell.borderRadius" },
    metadata: { deprecated: { equivalent: "modal.shell.borderRadius" } }
  },
  "modal.shell.minHeight": {
    type: LENGTH,
    value: "300px"
  },
  "modal.window.height": {
    type: LENGTH,
    value: { ref: "modal.shell.minHeight" },
    metadata: { deprecated: { equivalent: "modal.shell.minHeight" } }
  },
  "modal.window.minWidth": {
    type: LENGTH,
    value: "400px"
  },
  "modal.window.width": {
    type: LENGTH,
    value: { ref: "modal.window.minWidth" },
    metadata: { deprecated: { equivalent: "modal.window.minWidth" } }
  },
  "modal.shell.shadowColor": {
    type: COLOR,
    value: { ref: "colorScheme.shadow.high" }
  },
  "modal.window.shadowColor": {
    type: COLOR,
    value: { ref: "modal.shell.shadowColor" },
    metadata: { deprecated: { equivalent: "modal.shell.shadowColor" } }
  }
};
