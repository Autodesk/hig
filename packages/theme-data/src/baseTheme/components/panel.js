import {
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LENGTH,
  SPACING
} from "../../consts/types";

export default {
  "panel.container.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level100"
    }
  },
  "panel.container.padding": {
    type: SPACING,
    value: {
      ref: "density.spacings.small"
    }
  },
  "panel.header.actions.padding": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "panel.header.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level300"
    }
  },
  "panel.header.labelIcon.marginRight": {
    type: SPACING,
    value: {
      ref: "density.spacings.small"
    }
  },
  "panel.header.minHeight": {
    type: LENGTH,
    value: "40px"
  },
  "panel.header.paddingHorizontal": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "panel.header.paddingVertical": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraExtraSmall"
    }
  },
  "panel.label.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default"
    }
  },
  "panel.label.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "panel.label.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "panel.label.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular"
    }
  },
  "panel.resize.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level300"
    }
  },
  "panel.resize.grip.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.icon.default"
    }
  }
};
