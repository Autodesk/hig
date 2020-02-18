import {
  BORDER_RADIUS,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING
} from "../../consts/types";

export default {
  "token.borderRadii": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.none"
    }
  },
  "token.icon.marginRight": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "token.label.marginRight": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraExtraSmall"
    }
  },
  "token.paddingLeft": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "token.paddingRight": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraExtraSmall"
    }
  },
  "token.paddingVertical": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraExtraSmall"
    }
  },
  "token.label.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default"
    }
  },
  "token.label.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "token.label.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "token.label.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.medium"
    }
  },
  "token.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.15
    }
  },
  "token.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.25
    }
  },
  "token.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.35
    }
  },
  "token.selected.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.accent"
    },
    transform: {
      alpha: 0.25
    }
  },
  "token.warning.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.status.warning"
    },
    transform: {
      alpha: 0.15
    }
  },
  "token.warning.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.status.warning"
    },
    transform: {
      alpha: 0.3
    }
  }
};
