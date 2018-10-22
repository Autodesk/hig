import { BORDER_RADIUS, COLOR, LENGTH } from "../../consts/types";

export default {
  "flyout.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surfaceLevel100Color" }
  },
  "flyout.borderRadius": {
    type: BORDER_RADIUS,
    value: { ref: "basics.borderRadii.large" }
  },
  "flyout.nub.margin": {
    type: LENGTH,
    value: "16px"
  },
  "flyout.nub.hypotenuseLength": {
    type: LENGTH,
    value: "16px"
  },
  "flyout.shadowBlur": {
    type: LENGTH,
    value: { ref: "basics.shadows.highBlur" }
  },
  "flyout.shadowColor": {
    type: COLOR,
    value: { ref: "colorScheme.highShadowColor" }
  }
};
