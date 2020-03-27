import { BORDER_RADIUS, COLOR, LENGTH, SPACING } from "../../consts/types";

export default {
  "menu.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level100"
    }
  },
  "menu.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.none"
    }
  },
  "menu.topFlushBorderTopRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.none"
    }
  },
  "menu.item.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.opacity.transparent"
    }
  },
  "menu.item.backgroundColor": {
    type: COLOR,
    value: {
      ref: "menu.item.default.backgroundColor"
    },
    metadata: {
      deprecated: {
        equivalent: "menu.item.default.backgroundColor"
      }
    }
  },
  "menu.item.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.hover"
    }
  },
  "menu.item.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "menu.item.hover.backgroundColor"
    }
  },
  "menu.item.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.pressed"
    }
  },
  "menu.item.active.backgroundColor": {
    type: COLOR,
    value: {
      ref: "menu.item.pressed.backgroundColor"
    },
    metadata: {
      deprecated: {
        equivalent: "menu.item.pressed.backgroundColor"
      }
    }
  },
  "menu.item.paddingHorizontal": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "menu.item.horizontalPadding": {
    type: SPACING,
    value: {
      ref: "menu.item.paddingHorizontal"
    },
    metadata: {
      deprecated: {
        equivalent: "menu.item.paddingHorizontal"
      }
    }
  },
  "menu.item.paddingVertical": {
    type: SPACING,
    value: {
      ref: "basics.spacings.mediumSmall"
    }
  },
  "menu.item.verticalPadding": {
    type: SPACING,
    value: {
      ref: "menu.item.paddingVertical"
    },
    metadata: {
      deprecated: {
        equivalent: "menu.item.paddingVertical"
      }
    }
  },
  "menu.item.minHeight": {
    type: LENGTH,
    value: {
      ref: "density.spacings.large"
    }
  },
  "menu.item.gutterWidth": {
    type: SPACING,
    value: {
      ref: "basics.spacings.mediumSmall"
    }
  }
};
