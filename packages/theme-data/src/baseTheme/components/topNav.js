import { COLOR, SPACING } from "../../consts/types";

export default {
  "topNav.padding": {
    type: SPACING,
    value: {
      ref: "density.spacings.small"
    }
  },
  "topNav.hamburgetIcon.margin": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "topNav.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level100"
    }
  },
  "topNav.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.divider.lightweight"
    }
  },
  "topNav.productLockupColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.black"
    }
  }
};
