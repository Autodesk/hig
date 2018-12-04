import { FONT_SIZE, LENGTH, FONT_WEIGHT, COLOR } from "../../consts/types";

export default {
  /** Defaults */
  "avatar.fontWeight": {
    type: FONT_WEIGHT,
    value: { ref: "basics.fontWeights.regular" }
  },
  "avatar.fontColorOnDark": {
    type: COLOR,
    value: { ref: "basics.colors.white" }
  },
  "avatar.fontColorOnLight": {
    type: COLOR,
    value: { ref: "basics.colors.textAgainstLight" }
  },

  /** Size variants */
  "avatar.extraSmall.fontSize": {
    type: FONT_SIZE,
    value: "11px"
  },
  "avatar.extraSmall.diameter": {
    type: LENGTH,
    value: "16px"
  },

  "avatar.small.fontSize": {
    type: FONT_SIZE,
    value: "12px"
  },
  "avatar.small.diameter": {
    type: LENGTH,
    value: "24px"
  },

  "avatar.medium.fontSize": {
    type: FONT_SIZE,
    value: "14px"
  },
  "avatar.medium.diameter": {
    type: LENGTH,
    value: "32px"
  },

  "avatar.large.fontSize": {
    type: FONT_SIZE,
    value: "24px"
  },
  "avatar.large.diameter": {
    type: LENGTH,
    value: "48px"
  },

  "avatar.extraLarge.fontSize": {
    type: FONT_SIZE,
    value: "30px"
  },
  "avatar.extraLarge.diameter": {
    type: LENGTH,
    value: "64px"
  },

  /** Color variants */
  "avatar.color1.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.autodeskBlue300" }
  },
  "avatar.color1.fontColor": {
    type: COLOR,
    value: { ref: "avatar.fontColorOnLight" }
  },

  "avatar.color2.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.darkBlue600" }
  },
  "avatar.color2.fontColor": {
    type: COLOR,
    value: { ref: "avatar.fontColorOnDark" }
  },

  "avatar.color3.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.green700" }
  },
  "avatar.color3.fontColor": {
    type: COLOR,
    value: { ref: "avatar.fontColorOnDark" }
  },

  "avatar.color4.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.salmon400" }
  },
  "avatar.color4.fontColor": {
    type: COLOR,
    value: { ref: "avatar.fontColorOnLight" }
  },

  "avatar.color5.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.slate500" }
  },
  "avatar.color5.fontColor": {
    type: COLOR,
    value: { ref: "avatar.fontColorOnDark" }
  },

  "avatar.color6.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.turquoise400" }
  },
  "avatar.color6.fontColor": {
    type: COLOR,
    value: { ref: "avatar.fontColorOnLight" }
  },

  "avatar.color7.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.yellowOrange500" }
  },
  "avatar.color7.fontColor": {
    type: COLOR,
    value: { ref: "avatar.fontColorOnLight" }
  }
};
