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
  "flyout.shadowBlur": {
    type: LENGTH,
    value: { ref: "basics.shadows.highBlur" }
  },
  "flyout.shadowColor": {
    type: COLOR,
    value: { ref: "colorScheme.highShadowColor" }
  }
};
