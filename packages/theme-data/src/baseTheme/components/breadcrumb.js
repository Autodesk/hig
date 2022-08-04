import { COLOR, FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from "../../consts/types";

export default {
  "breadcrumb.label.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default",
    },
  },
  "breadcrumb.label.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main",
    },
  },
  "breadcrumb.label.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium",
    },
  },
  "breadcrumb.label.default.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular",
    },
  },
  "breadcrumb.label.selected.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.bold",
    },
  },
  "breadcrumb.default.indicatorColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.indicator.default",
    },
  },
  "breadcrumb.selected.indicatorColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.indicator.on",
    },
  },
  "breadcrumb.divider.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default",
    },
    transform: {
      alpha: 0.4,
    },
  },
  "breadcrumb.divider.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.medium",
    },
  },
};
