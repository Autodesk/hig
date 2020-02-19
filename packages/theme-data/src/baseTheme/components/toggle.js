import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLOR,
  LENGTH,
  SPACING
} from "../../consts/types";

export default {
  "toggle.borderRadii": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.pill"
    }
  },
  "toggle.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small"
    }
  },
  "toggle.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus"
    }
  },
  "toggle.focus.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium"
    }
  },
  "toggle.hover.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.hover"
    }
  },
  "toggle.hover.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium"
    }
  },
  "toggle.minHeight": {
    type: LENGTH,
    value: "15px"
  },
  "toggle.minWidth": {
    type: LENGTH,
    value: "26px"
  },
  "toggle.padding": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraExtraSmall"
    }
  },
  "toggle.pressed.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.pressed"
    }
  },
  "toggle.pressed.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.large"
    }
  },
  "toggle.thumb.borderRadii": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.ellipse"
    }
  },
  "toggle.thumb.minDiameter": {
    type: LENGTH,
    value: "9px"
  },
  "toggle.thumb.selected.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    }
  },
  "toggle.thumb.unselected.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    }
  },
  "toggle.unselected.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.transparent"
    }
  },
  "toggle.unselected.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.default"
    }
  },
  "toggle.unselected.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.transparent"
    }
  },
  "toggle.unselected.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.focus"
    }
  },
  "toggle.unselected.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.transparent"
    }
  },
  "toggle.unselected.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.default"
    }
  },
  "toggle.unselected.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.transparent"
    }
  },
  "toggle.unselected.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.default"
    }
  },
  "toggle.selected.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.active"
    }
  }
};
