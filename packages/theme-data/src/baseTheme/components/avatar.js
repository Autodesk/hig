import { FONT_SIZE, LENGTH, FONT_WEIGHT, COLOR } from "../../consts/types";

export default {
  "avatar.fontWeight": {
    type: FONT_WEIGHT,
    value: { ref: "basics.fontWeights.regular" }
  },
  "avatar.fontColor": {
    type: COLOR,
    value: { ref: "basics.colors.primary.white" }
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
  "avatar.backgroundColor1": {
    type: COLOR,
    value: { ref: "dataVis.colors.red.b.80" }
  },
  "avatar.backgroundColor2": {
    type: COLOR,
    value: { ref: "dataVis.colors.red.b.100" }
  },
  "avatar.backgroundColor3": {
    type: COLOR,
    value: { ref: "dataVis.colors.orange.a.70" }
  },
  "avatar.backgroundColor4": {
    type: COLOR,
    value: { ref: "dataVis.colors.yellowGreen.c.90" }
  },
  "avatar.backgroundColor5": {
    type: COLOR,
    value: { ref: "dataVis.colors.blueGreen.a.100" }
  },
  "avatar.backgroundColor6": {
    type: COLOR,
    value: { ref: "dataVis.colors.cyan.c.80" }
  },
  "avatar.backgroundColor7": {
    type: COLOR,
    value: { ref: "dataVis.colors.blueCyan.b.90" }
  },
  "avatar.backgroundColor8": {
    type: COLOR,
    value: { ref: "dataVis.colors.blue.a.70" }
  },
  "avatar.backgroundColor9": {
    type: COLOR,
    value: { ref: "dataVis.colors.blue.a.100" }
  },
  "avatar.backgroundColor10": {
    type: COLOR,
    value: { ref: "dataVis.colors.blue.c.70" }
  },
  "avatar.backgroundColor11": {
    type: COLOR,
    value: { ref: "dataVis.colors.purple.c.100" }
  },
  "avatar.backgroundColor12": {
    type: COLOR,
    value: { ref: "dataVis.colors.magenta.b.100" }
  },
  "avatar.backgroundColor13": {
    type: COLOR,
    value: { ref: "dataVis.colors.magenta.c.80" }
  },
  "avatar.backgroundColor14": {
    type: COLOR,
    value: { ref: "dataVis.colors.rose.b.100" }
  },
  "avatar.backgroundColor15": {
    type: COLOR,
    value: { ref: "dataVis.colors.rose.d.70" }
  },
  /**
   *  ## Deprecated
   *
   *
   */
  "avatar.darkBackground.fontColor": {
    type: COLOR,
    value: { ref: "basics.colors.primary.white" },
    metadata: { deprecated: { equivalent: "basics.colors.primary.white" } }
  },
  "avatar.lightBackground.fontColor": {
    type: COLOR,
    value: { ref: "basics.colors.text.againstLight" },
    metadata: { deprecated: { equivalent: "basics.colors.text.againstLight" } }
  },
  "avatar.color1.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.primary.autodeskBlue.300" },
    metadata: {
      deprecated: { equivalent: "basics.colors.primary.autodeskBlue.300" }
    }
  },
  "avatar.color2.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.secondary.darkBlue.600" },
    metadata: {
      deprecated: { equivalent: "basics.colors.secondary.darkBlue.600" }
    }
  },
  "avatar.color3.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.secondary.green.700" },
    metadata: {
      deprecated: { equivalent: "basics.colors.secondary.green.700" }
    }
  },
  "avatar.color4.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.tertiary.salmon.400" },
    metadata: {
      deprecated: { equivalent: "basics.colors.tertiary.salmon.400" }
    }
  },
  "avatar.color5.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.tertiary.slate.700" },
    metadata: { deprecated: { equivalent: "basics.colors.tertiary.slate.700" } }
  },
  "avatar.color6.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.secondary.turquoise.400" },
    metadata: {
      deprecated: { equivalent: "basics.colors.secondary.turquoise.400" }
    }
  },
  "avatar.color7.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.secondary.yellowOrange.500" },
    metadata: {
      deprecated: { equivalent: "basics.colors.secondary.yellowOrange.500" }
    }
  },
  "avatar.color1.fontColor": {
    type: COLOR,
    value: { ref: "avatar.lightBackground.fontColor" },
    metadata: { deprecated: { equivalent: "basics.colors.text.againstLight" } }
  },
  "avatar.color2.fontColor": {
    type: COLOR,
    value: { ref: "avatar.darkBackground.fontColor" },
    metadata: { deprecated: { equivalent: "avatar.fontColor" } }
  },
  "avatar.color3.fontColor": {
    type: COLOR,
    value: { ref: "avatar.darkBackground.fontColor" },
    metadata: { deprecated: { equivalent: "avatar.fontColor" } }
  },
  "avatar.color4.fontColor": {
    type: COLOR,
    value: { ref: "avatar.lightBackground.fontColor" },
    metadata: { deprecated: { equivalent: "basics.colors.text.againstLight" } }
  },
  "avatar.color5.fontColor": {
    type: COLOR,
    value: { ref: "avatar.darkBackground.fontColor" },
    metadata: { deprecated: { equivalent: "avatar.fontColor" } }
  },
  "avatar.color6.fontColor": {
    type: COLOR,
    value: { ref: "avatar.lightBackground.fontColor" },
    metadata: { deprecated: { equivalent: "basics.colors.text.againstLight" } }
  },
  "avatar.color7.fontColor": {
    type: COLOR,
    value: { ref: "avatar.lightBackground.fontColor" },
    metadata: { deprecated: { equivalent: "basics.colors.text.againstLight" } }
  },
  "avatar.fontColorOnDark": {
    type: COLOR,
    value: { ref: "avatar.darkBackground.fontColor" },
    metadata: { deprecated: { equivalent: "avatar.fontColor" } }
  },
  "avatar.fontColorOnLight": {
    type: COLOR,
    value: { ref: "avatar.lightBackground.fontColor" },
    metadata: { deprecated: { equivalent: "basics.colors.text.againstLight" } }
  }
};
