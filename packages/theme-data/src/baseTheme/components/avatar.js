import { FONT_SIZE, LENGTH, FONT_WEIGHT, COLOR } from "../../consts/types";

export default {
  "avatar.fontWeight": {
    type: FONT_WEIGHT,
    value: { ref: "basics.fontWeights.regular" }
  },
  "avatar.darkBackground.fontColor": {
    type: COLOR,
    value: { ref: "basics.colors.primary.white" }
  },
  "avatar.fontColorOnDark": {
    type: COLOR,
    value: { ref: "avatar.darkBackground.fontColor" },
    metadata: { deprecated: { equivalent: "avatar.darkBackground.fontColor" } }
  },
  "avatar.lightBackground.fontColor": {
    type: COLOR,
    value: { ref: "basics.colors.text.againstLight" }
  },
  "avatar.fontColorOnLight": {
    type: COLOR,
    value: { ref: "avatar.lightBackground.fontColor" },
    metadata: { deprecated: { equivalent: "avatar.lightBackground.fontColor" } }
  },
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
  "avatar.color1.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.primary.autodeskBlue.300" }
  },
  "avatar.color1.fontColor": {
    type: COLOR,
    value: { ref: "avatar.lightBackground.fontColor" }
  },
  "avatar.color2.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.secondary.darkBlue.600" }
  },
  "avatar.color2.fontColor": {
    type: COLOR,
    value: { ref: "avatar.darkBackground.fontColor" }
  },
  "avatar.color3.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.secondary.green.700" }
  },
  "avatar.color3.fontColor": {
    type: COLOR,
    value: { ref: "avatar.darkBackground.fontColor" }
  },
  "avatar.color4.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.tertiary.salmon.400" }
  },
  "avatar.color4.fontColor": {
    type: COLOR,
    value: { ref: "avatar.lightBackground.fontColor" }
  },
  "avatar.color5.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.tertiary.slate.500" }
  },
  "avatar.color5.fontColor": {
    type: COLOR,
    value: { ref: "avatar.darkBackground.fontColor" }
  },
  "avatar.color6.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.secondary.turquoise.400" }
  },
  "avatar.color6.fontColor": {
    type: COLOR,
    value: { ref: "avatar.lightBackground.fontColor" }
  },
  "avatar.color7.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.secondary.yellowOrange.500" }
  },
  "avatar.color7.fontColor": {
    type: COLOR,
    value: { ref: "avatar.lightBackground.fontColor" }
  }
};
