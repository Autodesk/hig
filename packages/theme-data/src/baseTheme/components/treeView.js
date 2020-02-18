import {
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING
} from "../../consts/types";

export default {
  "treeView.row.paddingHorizontal": {
    type: SPACING,
    value: {
      ref: "density.spacings.small"
    }
  },
  "treeView.row.paddingVertical": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "treeView.icon.marginRight": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "treeView.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "treeView.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default"
    }
  },
  "treeView.title.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "treeView.title.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.medium"
    }
  },
  "treeView.title.lineHeight": {
    type: LINE_HEIGHT
  },
  "treeView.item.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "treeView.item.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.medium"
    }
  },
  "treeView.item.lineHeight": {
    type: LINE_HEIGHT
  },
  "treeView.indicatorColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.icon.hover"
    }
  },
  "treeView.guideLine.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.5
    }
  }
};
