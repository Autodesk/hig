import { BORDER_WIDTH, COLOR, LENGTH, SPACING } from "../../consts/types";

const spacingValues = {
  extraSmall: {
    default: 16,
    condensed: 12,
    superCondensed: 4,
  },
  small: {
    default: 20,
    condensed: 16,
    superCondensed: 8,
  },
  medium: {
    default: 28,
    condensed: 20,
    superCondensed: 12,
  },
  large: {
    default: 44,
    condensed: 28,
    superCondensed: 16,
  },
  extraLarge: {
    default: 60,
    condensed: 40,
    superCondensed: 24,
  },
};

export default {
  "avatarBundle.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default",
    },
  },
  "avatarBundle.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.100",
    },
  },
  "avatarBundle.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.100",
    },
  },
  "avatarBundle.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.100",
    },
  },
  "avatarBundle.hover.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.hover",
    },
  },
  "avatarBundle.pressed.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.pressed",
    },
  },
  "avatarBundle.hover.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium",
    },
  },
  "avatarBundle.pressed.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.large",
    },
  },
  "avatarBundle.extraSmall.default.spacing.secondItem": {
    type: SPACING,
    value: `${spacingValues.extraSmall.default}px`,
  },
  "avatarBundle.extraSmall.default.spacing.thirdItem": {
    type: SPACING,
    value: `${spacingValues.extraSmall.default * 2}px`,
  },
  "avatarBundle.small.default.spacing.secondItem": {
    type: SPACING,
    value: `${spacingValues.small.default}px`,
  },
  "avatarBundle.small.default.spacing.thirdItem": {
    type: SPACING,
    value: `${spacingValues.small.default * 2}px`,
  },
  "avatarBundle.medium.default.spacing.secondItem": {
    type: SPACING,
    value: `${spacingValues.medium.default}px`,
  },
  "avatarBundle.medium.default.spacing.thirdItem": {
    type: SPACING,
    value: `${spacingValues.medium.default * 2}px`,
  },
  "avatarBundle.large.default.spacing.secondItem": {
    type: SPACING,
    value: `${spacingValues.large.default}px`,
  },
  "avatarBundle.large.default.spacing.thirdItem": {
    type: SPACING,
    value: `${spacingValues.large.default * 2}px`,
  },
  "avatarBundle.extraLarge.default.spacing.secondItem": {
    type: SPACING,
    value: `${spacingValues.extraLarge.default}px`,
  },
  "avatarBundle.extraLarge.default.spacing.thirdItem": {
    type: SPACING,
    value: `${spacingValues.extraLarge.default * 2}px`,
  },
  "avatarBundle.extraSmall.condensed.spacing.secondItem": {
    type: SPACING,
    value: `${spacingValues.extraSmall.condensed}px`,
  },
  "avatarBundle.extraSmall.condensed.spacing.thirdItem": {
    type: SPACING,
    value: `${spacingValues.extraSmall.condensed * 2}px`,
  },
  "avatarBundle.small.condensed.spacing.secondItem": {
    type: SPACING,
    value: `${spacingValues.small.condensed}px`,
  },
  "avatarBundle.small.condensed.spacing.thirdItem": {
    type: SPACING,
    value: `${spacingValues.small.condensed * 2}px`,
  },
  "avatarBundle.medium.condensed.spacing.secondItem": {
    type: SPACING,
    value: `${spacingValues.medium.condensed}px`,
  },
  "avatarBundle.medium.condensed.spacing.thirdItem": {
    type: SPACING,
    value: `${spacingValues.medium.condensed * 2}px`,
  },
  "avatarBundle.large.condensed.spacing.secondItem": {
    type: SPACING,
    value: `${spacingValues.large.condensed}px`,
  },
  "avatarBundle.large.condensed.spacing.thirdItem": {
    type: SPACING,
    value: `${spacingValues.large.condensed * 2}px`,
  },
  "avatarBundle.extraLarge.condensed.spacing.secondItem": {
    type: SPACING,
    value: `${spacingValues.extraLarge.condensed}px`,
  },
  "avatarBundle.extraLarge.condensed.spacing.thirdItem": {
    type: SPACING,
    value: `${spacingValues.extraLarge.condensed * 2}px`,
  },
  "avatarBundle.extraSmall.superCondensed.spacing.secondItem": {
    type: SPACING,
    value: `${spacingValues.extraSmall.superCondensed}px`,
  },
  "avatarBundle.extraSmall.superCondensed.spacing.thirdItem": {
    type: SPACING,
    value: `${spacingValues.extraSmall.superCondensed * 2}px`,
  },
  "avatarBundle.small.superCondensed.spacing.secondItem": {
    type: SPACING,
    value: `${spacingValues.small.superCondensed}px`,
  },
  "avatarBundle.small.superCondensed.spacing.thirdItem": {
    type: SPACING,
    value: `${spacingValues.small.superCondensed * 2}px`,
  },
  "avatarBundle.medium.superCondensed.spacing.secondItem": {
    type: SPACING,
    value: `${spacingValues.medium.superCondensed}px`,
  },
  "avatarBundle.medium.superCondensed.spacing.thirdItem": {
    type: SPACING,
    value: `${spacingValues.medium.superCondensed * 2}px`,
  },
  "avatarBundle.large.superCondensed.spacing.secondItem": {
    type: SPACING,
    value: `${spacingValues.large.superCondensed}px`,
  },
  "avatarBundle.large.superCondensed.spacing.thirdItem": {
    type: SPACING,
    value: `${spacingValues.large.superCondensed * 2}px`,
  },
  "avatarBundle.extraLarge.superCondensed.spacing.secondItem": {
    type: SPACING,
    value: `${spacingValues.extraLarge.superCondensed}px`,
  },
  "avatarBundle.extraLarge.superCondensed.spacing.thirdItem": {
    type: SPACING,
    value: `${spacingValues.extraLarge.superCondensed * 2}px`,
  },
  "avatarBundle.extraSmall.border": {
    type: LENGTH,
    value: "1px",
  },
  "avatarBundle.small.border": {
    type: LENGTH,
    value: "1px",
  },
  "avatarBundle.medium.border": {
    type: LENGTH,
    value: "2px",
  },
  "avatarBundle.large.border": {
    type: LENGTH,
    value: "2px",
  },
  "avatarBundle.extraLarge.border": {
    type: LENGTH,
    value: "4px",
  },
};
