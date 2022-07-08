import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLOR,
  LENGTH,
  SPACING,
} from "../../consts/types";

export default {
  "toggle.borderRadii": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.pill",
    },
  },
  "toggle.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small",
    },
  },
  "toggle.minHeight": {
    type: LENGTH,
    value: "20px",
  },
  "toggle.minWidth": {
    type: LENGTH,
    value: "37px",
  },
  "toggle.padding": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraExtraSmall",
    },
  },
  "toggle.hover.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.hover",
    },
  },
  "toggle.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus",
    },
  },
  "toggle.pressed.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.pressed",
    },
  },
  "toggle.hover.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium",
    },
  },
  "toggle.focus.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium",
    },
  },
  "toggle.pressed.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.large",
    },
  },
  "toggle.off.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level100",
    },
  },
  "toggle.off.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.base",
    },
  },
  "toggle.off.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level100",
    },
  },
  "toggle.off.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level100",
    },
  },
  "toggle.off.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level100",
    },
  },
  "toggle.off.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.base",
    },
  },
  "toggle.off.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent",
    },
  },
  "toggle.off.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.base",
    },
  },
  "toggle.on.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.500",
    },
  },
  "toggle.on.default.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.500",
    },
  },
  "toggle.thumb.borderRadii": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.ellipse",
    },
  },
  "toggle.thumb.minDiameter": {
    type: LENGTH,
    value: "12px",
  },
  "toggle.thumb.on.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white",
    },
  },
  "toggle.thumb.off.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base",
    },
  },
};
