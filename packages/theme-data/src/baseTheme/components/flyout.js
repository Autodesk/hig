import { BORDER_RADIUS, COLOR, LENGTH } from "../../consts/types";

export default {
  "flyout.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surface.level100" }
  },
  "flyout.borderColor": {
    type: COLOR,
    value: { ref: "colorScheme.opacity.transparent" }
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
    value: { ref: "colorScheme.shadow.high" }
  },
  "flyout.nub.hypotenuseLength": {
    type: LENGTH,
    value: "16px"
  }
};
