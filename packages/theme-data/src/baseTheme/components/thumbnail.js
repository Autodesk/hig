import { BORDER_RADIUS, COLOR, LENGTH } from "../../consts/types";

export default {
  "thumbnail.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.100",
    },
  },
  "thumbnail.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.600",
    },
    transform: {
      alpha: 0.5,
    },
  },
  "thumbnail.extraExtraSmall.height": {
    type: LENGTH,
    value: "24px",
  },
  "thumbnail.extraSmall.height": {
    type: LENGTH,
    value: "32px",
  },
  "thumbnail.small.height": {
    type: LENGTH,
    value: "48px",
  },
  "thumbnail.medium.height": {
    type: LENGTH,
    value: "64px",
  },
  "thumbnail.large.height": {
    type: LENGTH,
    value: "96px",
  },
  "thumbnail.extraLarge.height": {
    type: LENGTH,
    value: "128px",
  },
  "thumbnail.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.medium",
    },
  },
};
