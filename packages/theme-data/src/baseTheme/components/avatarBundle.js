import { BORDER_WIDTH, COLOR, LENGTH, SPACING } from "../../consts/types";

export default {
  "avatarBundle.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default"
    }
  },
  "avatarBundle.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.100"
    }
  },
  "avatarBundle.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.100"
    }
  },
  "avatarBundle.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.100"
    }
  },
  "avatarBundle.hover.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.hover"
    }
  },
  "avatarBundle.pressed.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.pressed"
    }
  },
  "avatarBundle.hover.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium"
    }
  },
  "avatarBundle.pressed.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.large"
    }
  },
  "avatarBundle.extraSmall.default.spacing": {
    type: SPACING,
    value: 16
  },
  "avatarBundle.small.default.spacing": {
    type: SPACING,
    value: 20
  },
  "avatarBundle.medium.default.spacing": {
    type: SPACING,
    value: 28
  },
  "avatarBundle.large.default.spacing": {
    type: SPACING,
    value: 44
  },
  "avatarBundle.extraLarge.default.spacing": {
    type: SPACING,
    value: 60
  },
  "avatarBundle.extraSmall.condensed.spacing": {
    type: SPACING,
    value: 12
  },
  "avatarBundle.small.condensed.spacing": {
    type: SPACING,
    value: 16
  },
  "avatarBundle.medium.condensed.spacing": {
    type: SPACING,
    value: 20
  },
  "avatarBundle.large.condensed.spacing": {
    type: SPACING,
    value: 28
  },
  "avatarBundle.extraLarge.condensed.spacing": {
    type: SPACING,
    value: 40
  },
  "avatarBundle.extraSmall.superCondensed.spacing": {
    type: SPACING,
    value: 4
  },
  "avatarBundle.small.superCondensed.spacing": {
    type: SPACING,
    value: 8
  },
  "avatarBundle.medium.superCondensed.spacing": {
    type: SPACING,
    value: 12
  },
  "avatarBundle.large.superCondensed.spacing": {
    type: SPACING,
    value: 16
  },
  "avatarBundle.extraLarge.superCondensed.spacing": {
    type: SPACING,
    value: 24
  },
  "avatarBundle.extraSmall.border": {
    type: LENGTH,
    value: "1px"
  },
  "avatarBundle.small.border": {
    type: LENGTH,
    value: "1px"
  },
  "avatarBundle.medium.border": {
    type: LENGTH,
    value: "2px"
  },
  "avatarBundle.large.border": {
    type: LENGTH,
    value: "2px"
  },
  "avatarBundle.extraLarge.border": {
    type: LENGTH,
    value: "4px"
  }
};
